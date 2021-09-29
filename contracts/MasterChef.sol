// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ZoomToken.sol";

// MasterChef is the master of Zoom. He can make Zoom and he is a fair guy.
//
// Note that it's ownable and the owner wields tremendous power. The ownership
// will be transferred to a governance smart contract once ZOOM is sufficiently
// distributed and the community can show to govern itself.
//
// Have fun reading it. Hopefully it's bug-free. God bless.
contract MasterChef is Ownable, ReentrancyGuard {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    // Info of each user.
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
        //
        // We do some fancy math here. Basically, any point in time, the amount of Zooms
        // entitled to a user but is pending to be distributed is:
        //
        //   pending reward = (user.amount * pool.accZoomPerShare) - user.rewardDebt
        //
        // Whenever a user deposits or withdraws LP tokens to a pool. Here's what happens:
        //   1. The pool's `accZoomPerShare` (and `lastRewardBlock`) gets updated.
        //   2. User receives the pending reward sent to his/her address.
        //   3. User's `amount` gets updated.
        //   4. User's `rewardDebt` gets updated.
    }
    // Info of each pool.
    struct PoolInfo {
        IERC20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. Zooms to distribute per block.
        uint256 lastRewardBlock; // Last block number that Zooms distribution occurs.
        uint256 accZoomPerShare; // Accumulated Zooms per share, times 1e12. See below.
        uint16 depositFeeBP; // Deposit fee in basis points.
    }
    // The ZOOM TOKEN!
    ZoomToken public zoom;
    // Dev address.
    address public devaddr;
    // initial zoom reward per block
    uint256 public initZoomPerBlock;
    // Info of each pool.
    PoolInfo[] public poolInfo;
    // Info of each user that stakes LP tokens.
    mapping(uint256 => mapping(address => UserInfo)) public userInfo;
    // Total allocation poitns. Must be the sum of all allocation points in all pools.
    uint256 public totalAllocPoint = 0;
    // The block number when ZOOM mining starts.
    uint256 public startBlock;
    // Deposit Fee address
    address public feeAddress;
    // The base unit for halving (30 * 24 * 60 * 12)
    uint256 public halvingBaseDuration;
    // The total reward epochs (128)
    uint256 public rewardEpoch;

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event EmergencyWithdraw(
        address indexed user,
        uint256 indexed pid,
        uint256 amount
    );
    event SetFeeAddress(address indexed user, address indexed newAddress);

    constructor(
        ZoomToken _zoom,
        address _devaddr,
        address _feeAddress,
        uint256 _initZoomPerBlock,
        uint256 _startBlock,
        uint256 _halvingBaseDuration,
        uint256 _rewardEpoch
    ) public {
        zoom = _zoom;
        devaddr = _devaddr;
        feeAddress = _feeAddress;
        initZoomPerBlock = _initZoomPerBlock;
        startBlock = _startBlock;
        halvingBaseDuration = _halvingBaseDuration;
        rewardEpoch = _rewardEpoch;
    }

    // ZOOM tokens created per block.
    function zoomPerBlock() public view returns (uint256) {
        uint256 start = startBlock;
        if (block.number < start) {
            return 0;
        }
        uint256 duration = halvingBaseDuration;
        uint256 endBlock = start.add(duration.mul(rewardEpoch));
        if (block.number >= endBlock) {
            return 0;
        }
        uint256 zpb = initZoomPerBlock;
        start = start.add(duration);
        while (block.number >= start) {
            duration = duration.mul(2);
            zpb = zpb.div(2);
            start = start.add(duration);
        }
        return zpb;
    }

    function poolLength() external view returns (uint256) {
        return poolInfo.length;
    }

    // Add a new lp to the pool. Can only be called by the owner.
    // XXX DO NOT add the same LP token more than once. Rewards will be messed up if you do.
    function add(
        uint256 _allocPoint,
        IERC20 _lpToken,
        uint16 _depositFeeBP,
        bool _withUpdate
    ) public onlyOwner {
        require(
            _depositFeeBP <= 10000,
            "add: invalid deposit fee basis points"
        );

        if (_withUpdate) {
            massUpdatePools();
        }
        uint256 lastRewardBlock = block.number > startBlock
            ? block.number
            : startBlock;
        totalAllocPoint = totalAllocPoint.add(_allocPoint);
        poolInfo.push(
            PoolInfo({
                lpToken: _lpToken,
                allocPoint: _allocPoint,
                lastRewardBlock: lastRewardBlock,
                accZoomPerShare: 0,
                depositFeeBP: _depositFeeBP
            })
        );
    }

    // Update the given pool's ZOOM allocation point. Can only be called by the owner.
    function set(
        uint256 _pid,
        uint256 _allocPoint,
        uint16 _depositFeeBP,
        bool _withUpdate
    ) public onlyOwner {
        require(_depositFeeBP <= 200, "set: invalid deposit fee basis points");

        if (_withUpdate) {
            massUpdatePools();
        }
        totalAllocPoint = totalAllocPoint.sub(poolInfo[_pid].allocPoint).add(
            _allocPoint
        );
        poolInfo[_pid].allocPoint = _allocPoint;
        poolInfo[_pid].depositFeeBP = _depositFeeBP;
    }

    // Return reward multiplier over the given _from to _to block.
    function getMultiplier(uint256 _from, uint256 _to)
        public
        pure
        returns (uint256)
    {
        return _to.sub(_from);
    }

    // View function to see pending Zooms on frontend.
    function pendingZoom(uint256 _pid, address _user)
        external
        view
        returns (uint256)
    {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        uint256 accZoomPerShare = pool.accZoomPerShare;
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (block.number > pool.lastRewardBlock && lpSupply != 0) {
            uint256 reward = zoomReward(pool.lastRewardBlock, pool.allocPoint);
            accZoomPerShare = accZoomPerShare.add(
                reward.mul(1e12).div(lpSupply)
            );
        }
        return user.amount.mul(accZoomPerShare).div(1e12).sub(user.rewardDebt);
    }

    // Update reward vairables for all pools. Be careful of gas spending!
    function massUpdatePools() public {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }

    function zoomReward(uint256 lastRewardBlock, uint256 allocPoint)
        internal
        view
        returns (uint256)
    {
        uint256 reward = 0;
        if (block.number < startBlock) {
            return reward;
        }
        uint256 zpb = initZoomPerBlock;
        uint256 duration = halvingBaseDuration;
        uint256 epochStartBlock = startBlock;
        uint256 start = startBlock;
        uint256 end = start.add(duration.mul(rewardEpoch));
        if (lastRewardBlock > start) {
            start = lastRewardBlock;
        }
        if (end > block.number) {
            end = block.number;
        }
        while (epochStartBlock < end) {
            uint256 nextEpochStartBlock = epochStartBlock.add(duration);
            if (start < epochStartBlock) {
                start = epochStartBlock;
            }
            if (nextEpochStartBlock >= end) {
                reward = reward.add(zpb.mul(end.sub(start)));
                break;
            } else {
                reward = reward.add(zpb.mul(nextEpochStartBlock.sub(start)));
            }
            epochStartBlock = nextEpochStartBlock;
            duration = duration.mul(2);
            zpb = zpb.div(2);
        }
        return reward.mul(allocPoint).div(totalAllocPoint);
    }

    // Update reward variables of the given pool to be up-to-date.
    function updatePool(uint256 _pid) public {
        PoolInfo storage pool = poolInfo[_pid];
        if (block.number <= pool.lastRewardBlock) {
            return;
        }
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (lpSupply == 0) {
            pool.lastRewardBlock = block.number;
            return;
        }
        uint256 reward = zoomReward(pool.lastRewardBlock, pool.allocPoint);
        zoom.mint(devaddr, reward.div(20));
        zoom.mint(address(this), reward);
        pool.accZoomPerShare = pool.accZoomPerShare.add(
            reward.mul(1e12).div(lpSupply)
        );
        pool.lastRewardBlock = block.number;
    }

    // Deposit LP tokens to MasterChef for ZOOM allocation.
    function deposit(uint256 _pid, uint256 _amount) public nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        updatePool(_pid);
        if (user.amount > 0) {
            uint256 pending = user
                .amount
                .mul(pool.accZoomPerShare)
                .div(1e12)
                .sub(user.rewardDebt);
            safeZoomTransfer(msg.sender, pending);
        }

        if (_amount > 0) {
            pool.lpToken.safeTransferFrom(
                address(msg.sender),
                address(this),
                _amount
            );
            if (pool.depositFeeBP > 0) {
                uint256 depositFee = _amount.mul(pool.depositFeeBP).div(10000);
                pool.lpToken.safeTransfer(feeAddress, depositFee);
                user.amount = user.amount.add(_amount).sub(depositFee);
            } else {
                user.amount = user.amount.add(_amount);
            }
        }

        user.rewardDebt = user.amount.mul(pool.accZoomPerShare).div(1e12);
        emit Deposit(msg.sender, _pid, _amount);
    }

    // Withdraw LP tokens from MasterChef.
    function withdraw(uint256 _pid, uint256 _amount) public nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        require(user.amount >= _amount, "withdraw: not good");
        updatePool(_pid);
        uint256 pending = user.amount.mul(pool.accZoomPerShare).div(1e12).sub(
            user.rewardDebt
        );
        safeZoomTransfer(msg.sender, pending);
        user.amount = user.amount.sub(_amount);
        user.rewardDebt = user.amount.mul(pool.accZoomPerShare).div(1e12);
        pool.lpToken.safeTransfer(address(msg.sender), _amount);
        emit Withdraw(msg.sender, _pid, _amount);
    }

    // Withdraw without caring about rewards. EMERGENCY ONLY.
    function emergencyWithdraw(uint256 _pid) public nonReentrant {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][msg.sender];
        pool.lpToken.safeTransfer(address(msg.sender), user.amount);
        emit EmergencyWithdraw(msg.sender, _pid, user.amount);
        user.amount = 0;
        user.rewardDebt = 0;
    }

    // Safe zoom transfer function, just in case if rounding error causes pool to not have enough Zooms.
    function safeZoomTransfer(address _to, uint256 _amount) internal {
        uint256 zoomBal = zoom.balanceOf(address(this));
        if (_amount > zoomBal) {
            zoom.transfer(_to, zoomBal);
        } else {
            zoom.transfer(_to, _amount);
        }
    }

    // Update dev address by the previous dev.
    function dev(address _devaddr) public {
        require(msg.sender == devaddr, "dev: wut?");
        devaddr = _devaddr;
    }

    function setFeeAddress(address _feeAddress) public {
        require(msg.sender == feeAddress, "setFeeAddress: FORBIDDEN");
        feeAddress = _feeAddress;
        emit SetFeeAddress(msg.sender, _feeAddress);
    }

    function updateStartBlock(uint256 _startBlock) external onlyOwner {
        require(startBlock > block.number, "Farm already started");
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            PoolInfo storage pool = poolInfo[pid];
            pool.lastRewardBlock = _startBlock;
        }
        startBlock = _startBlock;
    }
}
