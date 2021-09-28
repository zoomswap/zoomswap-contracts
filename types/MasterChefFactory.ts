/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MasterChef } from "./MasterChef";

export class MasterChefFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _zoom: string,
    _devaddr: string,
    _feeAddress: string,
    _initZoomPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _halvingBaseDuration: BigNumberish,
    _rewardEpoch: BigNumberish,
    overrides?: Overrides
  ): Promise<MasterChef> {
    return super.deploy(
      _zoom,
      _devaddr,
      _feeAddress,
      _initZoomPerBlock,
      _startBlock,
      _halvingBaseDuration,
      _rewardEpoch,
      overrides || {}
    ) as Promise<MasterChef>;
  }
  getDeployTransaction(
    _zoom: string,
    _devaddr: string,
    _feeAddress: string,
    _initZoomPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _halvingBaseDuration: BigNumberish,
    _rewardEpoch: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _zoom,
      _devaddr,
      _feeAddress,
      _initZoomPerBlock,
      _startBlock,
      _halvingBaseDuration,
      _rewardEpoch,
      overrides || {}
    );
  }
  attach(address: string): MasterChef {
    return super.attach(address) as MasterChef;
  }
  connect(signer: Signer): MasterChefFactory {
    return super.connect(signer) as MasterChefFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterChef {
    return new Contract(address, _abi, signerOrProvider) as MasterChef;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ZoomToken",
        name: "_zoom",
        type: "address",
      },
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initZoomPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_halvingBaseDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "SetFeeAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_depositFeeBP",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
    ],
    name: "dev",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devaddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "halvingBaseDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initZoomPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingZoom",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accZoomPerShare",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "depositFeeBP",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_depositFeeBP",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeAddress",
        type: "address",
      },
    ],
    name: "setFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "zoom",
    outputs: [
      {
        internalType: "contract ZoomToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zoomPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060075534801561001557600080fd5b50604051611df0380380611df0833981810160405260e081101561003857600080fd5b508051602082015160408301516060840151608085015160a086015160c0909601519495939492939192909190600061006f610112565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060018055600280546001600160a01b03199081166001600160a01b03998a161790915560038054821697891697909717909655600980549096169490961693909317909355600455600891909155600a55600b55610116565b3390565b611ccb806101256000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80638705fcd4116100de578063a3f7f16611610097578063d49e77cd11610071578063d49e77cd146103f4578063d9638422146103fc578063e2bbb15814610431578063f2fde38b146104545761018e565b8063a3f7f166146103b8578063b222804a146103e4578063cca0b3ad146103ec5761018e565b80638705fcd4146102f45780638d88a90e1461031a5780638da5cb5b146103405780638dbb1e3a1461034857806393f1a40b1461036b578063a27067f8146103b05761018e565b806348cd4cb11161014b578063630b5ba111610125578063630b5ba11461029e5780636bfdea2b146102a6578063715018a6146102ae57806384e82a33146102b65761018e565b806348cd4cb11461025c57806351eb05a6146102645780635312ea8e146102815761018e565b8063081e3eda146101935780631526fe27146101ad57806317caf6f11461020357806340a02de01461020b5780634127535814610213578063441a3e7014610237575b600080fd5b61019b61047a565b60408051918252519081900360200190f35b6101ca600480360360208110156101c357600080fd5b5035610481565b604080516001600160a01b039096168652602086019490945284840192909252606084015261ffff166080830152519081900360a00190f35b61019b6104cd565b61019b6104d3565b61021b6104d9565b604080516001600160a01b039092168252519081900360200190f35b61025a6004803603604081101561024d57600080fd5b50803590602001356104e8565b005b61019b61069f565b61025a6004803603602081101561027a57600080fd5b50356106a5565b61025a6004803603602081101561029757600080fd5b503561089f565b61025a61099c565b61019b6109bf565b61025a6109c5565b61025a600480360360808110156102cc57600080fd5b508035906001600160a01b036020820135169061ffff60408201351690606001351515610a67565b61025a6004803603602081101561030a57600080fd5b50356001600160a01b0316610c6f565b61025a6004803603602081101561033057600080fd5b50356001600160a01b0316610d1a565b61021b610d87565b61019b6004803603604081101561035e57600080fd5b5080359060200135610d96565b6103976004803603604081101561038157600080fd5b50803590602001356001600160a01b0316610dab565b6040805192835260208301919091528051918290030190f35b61021b610dcf565b61019b600480360360408110156103ce57600080fd5b50803590602001356001600160a01b0316610dde565b61019b610f18565b61019b610fa7565b61021b610fad565b61025a6004803603608081101561041257600080fd5b5080359060208101359061ffff60408201351690606001351515610fbc565b61025a6004803603604081101561044757600080fd5b508035906020013561110c565b61025a6004803603602081101561046a57600080fd5b50356001600160a01b03166112e2565b6005545b90565b6005818154811061048e57fe5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909161ffff1685565b60075481565b600a5481565b6009546001600160a01b031681565b60026001541415610540576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260018190555060006005838154811061055757fe5b6000918252602080832086845260068252604080852033865290925292208054600590920290920192508311156105ca576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b6105d3846106a5565b600061060d826001015461060764e8d4a51000610601876003015487600001546113da90919063ffffffff16565b90611433565b90611475565b905061061933826114b7565b81546106259085611475565b80835560038401546106429164e8d4a510009161060191906113da565b6001830155825461065d906001600160a01b03163386611648565b604080518581529051869133917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a3505060018055505050565b60085481565b6000600582815481106106b457fe5b90600052602060002090600502019050806002015443116106d5575061089c565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561071f57600080fd5b505afa158015610733573d6000803e3d6000fd5b505050506040513d602081101561074957600080fd5b505190508061075f57504360029091015561089c565b60006107738360020154846001015461169a565b6002546003549192506001600160a01b03908116916340c10f19911661079a84600a611433565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156107e057600080fd5b505af11580156107f4573d6000803e3d6000fd5b5050600254604080516340c10f1960e01b81523060048201526024810186905290516001600160a01b0390921693506340c10f19925060448082019260009290919082900301818387803b15801561084b57600080fd5b505af115801561085f573d6000803e3d6000fd5b5050505061088d6108828361060164e8d4a51000856113da90919063ffffffff16565b600385015490611792565b60038401555050436002909101555b50565b600260015414156108f7576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260018190555060006005828154811061090e57fe5b60009182526020808320858452600682526040808520338087529352909320805460059093029093018054909450610953926001600160a01b03919091169190611648565b80546040805191825251849133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a3600080825560019182015580555050565b60055460005b818110156109bb576109b3816106a5565b6001016109a2565b5050565b600b5481565b6109cd6117ec565b6000546001600160a01b03908116911614610a1d576040805162461bcd60e51b81526020600482018190526024820152600080516020611c4c833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b610a6f6117ec565b6000546001600160a01b03908116911614610abf576040805162461bcd60e51b81526020600482018190526024820152600080516020611c4c833981519152604482015290519081900360640190fd5b6127108261ffff161115610b045760405162461bcd60e51b8152600401808060200182810382526025815260200180611bbb6025913960400191505060405180910390fd5b8015610b1257610b1261099c565b60006008544311610b2557600854610b27565b435b600754909150610b379086611792565b6007556040805160a0810182526001600160a01b0395861681526020810196875290810191825260006060820181815261ffff95861660808401908152600580546001810182559381905293517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db09390940292830180546001600160a01b031916949098169390931790965595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db187015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db286015592517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db38501555090517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db4909201805461ffff191692909116919091179055565b6009546001600160a01b03163314610cce576040805162461bcd60e51b815260206004820152601860248201527f736574466565416464726573733a20464f5242494444454e0000000000000000604482015290519081900360640190fd5b600980546001600160a01b0319166001600160a01b03831690811790915560405133907fd44190acf9d04bdb5d3a1aafff7e6dee8b40b93dfb8c5d3f0eea4b9f4539c3f790600090a350565b6003546001600160a01b03163314610d65576040805162461bcd60e51b81526020600482015260096024820152686465763a207775743f60b81b604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b6000610da28284611475565b90505b92915050565b60066020908152600092835260408084209091529082529020805460019091015482565b6002546001600160a01b031681565b60008060058481548110610dee57fe5b600091825260208083208784526006825260408085206001600160a01b0389811687529084528186206005959095029092016003810154815483516370a0823160e01b815230600482015293519298509596909590949316926370a082319260248082019391829003018186803b158015610e6857600080fd5b505afa158015610e7c573d6000803e3d6000fd5b505050506040513d6020811015610e9257600080fd5b5051600285015490915043118015610ea957508015155b15610ee5576000610ec28560020154866001015461169a565b9050610ee1610eda836106018464e8d4a510006113da565b8490611792565b9250505b610f0d836001015461060764e8d4a510006106018688600001546113da90919063ffffffff16565b979650505050505050565b60085460009043811115610f3057600091505061047e565b600a54600b54600090610f4890610eda9084906113da565b9050804310610f5d576000935050505061047e565b600454610f6a8484611792565b93505b834310610f9f57610f7f8360026113da565b9250610f8c816002611433565b9050610f988484611792565b9350610f6d565b935050505090565b60045481565b6003546001600160a01b031681565b610fc46117ec565b6000546001600160a01b03908116911614611014576040805162461bcd60e51b81526020600482018190526024820152600080516020611c4c833981519152604482015290519081900360640190fd5b6101908261ffff1611156110595760405162461bcd60e51b8152600401808060200182810382526025815260200180611c276025913960400191505060405180910390fd5b80156110675761106761099c565b6110a48361109e6005878154811061107b57fe5b90600052602060002090600502016001015460075461147590919063ffffffff16565b90611792565b60078190555082600585815481106110b857fe5b90600052602060002090600502016001018190555081600585815481106110db57fe5b906000526020600020906005020160040160006101000a81548161ffff021916908361ffff16021790555050505050565b60026001541415611164576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260018190555060006005838154811061117b57fe5b600091825260208083208684526006825260408085203386529092529220600590910290910191506111ac846106a5565b8054156111ef5760006111e1826001015461060764e8d4a51000610601876003015487600001546113da90919063ffffffff16565b90506111ed33826114b7565b505b821561128157815461120c906001600160a01b03163330866117f0565b600482015461ffff1615611272576004820154600090611239906127109061060190879061ffff166113da565b6009548454919250611258916001600160a01b03908116911683611648565b815461126a9082906106079087611792565b825550611281565b805461127e9084611792565b81555b6003820154815461129c9164e8d4a5100091610601916113da565b6001820155604080518481529051859133917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a35050600180555050565b6112ea6117ec565b6000546001600160a01b0390811691161461133a576040805162461bcd60e51b81526020600482018190526024820152600080516020611c4c833981519152604482015290519081900360640190fd5b6001600160a01b03811661137f5760405162461bcd60e51b8152600401808060200182810382526026815260200180611be06026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000826113e957506000610da5565b828202828482816113f657fe5b0414610da25760405162461bcd60e51b8152600401808060200182810382526021815260200180611c066021913960400191505060405180910390fd5b6000610da283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611850565b6000610da283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506118f2565b600254604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561150257600080fd5b505afa158015611516573d6000803e3d6000fd5b505050506040513d602081101561152c57600080fd5b50519050808211156115c0576002546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018590529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561158e57600080fd5b505af11580156115a2573d6000803e3d6000fd5b505050506040513d60208110156115b857600080fd5b506116439050565b6002546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561161657600080fd5b505af115801561162a573d6000803e3d6000fd5b505050506040513d602081101561164057600080fd5b50505b505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261164390849061194c565b60085460009081904310156116b0579050610da5565b600454600a54600854600b5481906000906116d7906116d09086906113da565b8390611792565b9050818911156116e5578891505b438111156116f05750435b808310156117745760006117048486611792565b905083831015611712578392505b81811061173f576117376117306117298486611475565b88906113da565b8890611792565b965050611774565b61174f6117306117298386611475565b965092508261175f8560026113da565b945061176c866002611433565b9550506116f0565b60075461178590610601888b6113da565b9998505050505050505050565b600082820183811015610da2576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261184a90859061194c565b50505050565b600081836118dc5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118a1578181015183820152602001611889565b50505050905090810190601f1680156118ce5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816118e857fe5b0495945050505050565b600081848411156119445760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156118a1578181015183820152602001611889565b505050900390565b60606119a1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119fd9092919063ffffffff16565b805190915015611643578080602001905160208110156119c057600080fd5b50516116435760405162461bcd60e51b815260040180806020018281038252602a815260200180611c6c602a913960400191505060405180910390fd5b6060611a0c8484600085611a14565b949350505050565b6060611a1f85611b81565b611a70576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611aaf5780518252601f199092019160209182019101611a90565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611b11576040519150601f19603f3d011682016040523d82523d6000602084013e611b16565b606091505b50915091508115611b2a579150611a0c9050565b805115611b3a5780518082602001fd5b60405162461bcd60e51b81526020600482018181528651602484015286518793919283926044019190850190808383600083156118a1578181015183820152602001611889565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611a0c57505015159291505056fe6164643a20696e76616c6964206465706f7369742066656520626173697320706f696e74734f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f777365743a20696e76616c6964206465706f7369742066656520626173697320706f696e74734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220e7aae6a8c053e14008334d855ae3e0c453c90da9fafd55ceeb224b231786e60b64736f6c634300060c0033";
