/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SmartChefFactory } from "./SmartChefFactory";

export class SmartChefFactoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SmartChefFactory> {
    return super.deploy(overrides || {}) as Promise<SmartChefFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SmartChefFactory {
    return super.attach(address) as SmartChefFactory;
  }
  connect(signer: Signer): SmartChefFactoryFactory {
    return super.connect(signer) as SmartChefFactoryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SmartChefFactory {
    return new Contract(address, _abi, signerOrProvider) as SmartChefFactory;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "smartChef",
        type: "address",
      },
    ],
    name: "NewSmartChefContract",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakedToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bonusEndBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_poolLimitPerUser",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "deployPool",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6122618061007d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063cc8402f51461007f578063f2fde38b146100cf575b600080fd5b6100596100f5565b005b6100636101a9565b604080516001600160a01b039092168252519081900360200190f35b610059600480360360e081101561009557600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359160c090910135166101b8565b610059600480360360208110156100e557600080fd5b50356001600160a01b03166104c6565b6100fd6105d0565b6000546001600160a01b0390811691161461015f576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6101c06105d0565b6000546001600160a01b03908116911614610222576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000876001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025d57600080fd5b505afa158015610271573d6000803e3d6000fd5b505050506040513d602081101561028757600080fd5b5051101561029457600080fd5b6000866001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102cf57600080fd5b505afa1580156102e3573d6000803e3d6000fd5b505050506040513d60208110156102f957600080fd5b5051101561030657600080fd5b856001600160a01b0316876001600160a01b0316141561036d576040805162461bcd60e51b815260206004820152601b60248201527f546f6b656e73206d75737420626520626520646966666572656e740000000000604482015290519081900360640190fd5b60606040518060200161037f906105d4565b6020820181038252601f19601f820116604052509050600088888760405160200180846001600160a01b031660601b8152601401836001600160a01b031660601b815260140182815260200193505050506040516020818303038152906040528051906020012090506000818351602085016000f5604080516320e9410760e21b81526001600160a01b038d811660048301528c81166024830152604482018c9052606482018b9052608482018a905260a4820189905287811660c48301529151929350908316916383a5041c9160e48082019260009290919082900301818387803b15801561046e57600080fd5b505af1158015610482573d6000803e3d6000fd5b50506040516001600160a01b03841692507fe0d103a92c6ff6c4aceb49d436f4028e0deb4884fdbcb9f32b03045eabb44a6c9150600090a250505050505050505050565b6104ce6105d0565b6000546001600160a01b03908116911614610530576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166105755760405162461bcd60e51b81526004018080602001828103825260268152602001806122066026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b611c24806105e28339019056fe608060405234801561001057600080fd5b50600061001b610080565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060018055600280546001600160a01b03191633179055610084565b3390565b611b91806100936000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80638da5cb5b116100f9578063bd61719111610097578063db2e21bc11610071578063db2e21bc146103d9578063f2fde38b146103e1578063f40f0f5214610407578063f7c618c11461042d576101a9565b8063bd617191146103c1578063cc7a262e146103c9578063ccd34cd5146103d1576101a9565b80639513997f116100d35780639513997f14610354578063a0b4090514610377578063a9f8d1811461039c578063b6b55f25146103a4576101a9565b80638da5cb5b146103205780638f6629151461034457806392e8990e1461034c576101a9565b80633f138d4b11610166578063715018a611610140578063715018a6146102b857806380dc0672146102c057806383a5041c146102c85780638ae39cac14610318576101a9565b80633f138d4b1461027c57806348cd4cb1146102a857806366fe9f8a146102b0576101a9565b806301f8a976146101ae5780631959a002146101cd5780631aed65531461020c5780632e1a7d4d146102265780633279beab14610243578063392e53cd14610260575b600080fd5b6101cb600480360360208110156101c457600080fd5b5035610435565b005b6101f3600480360360208110156101e357600080fd5b50356001600160a01b0316610511565b6040805192835260208301919091528051918290030190f35b61021461052a565b60408051918252519081900360200190f35b6101cb6004803603602081101561023c57600080fd5b5035610530565b6101cb6004803603602081101561025957600080fd5b50356106d4565b610268610746565b604080519115158252519081900360200190f35b6101cb6004803603604081101561029257600080fd5b506001600160a01b038135169060200135610756565b6102146108c2565b6102146108c8565b6101cb6108ce565b6101cb610970565b6101cb600480360360e08110156102de57600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359160c090910135166109ce565b610214610bcf565b610328610bd5565b604080516001600160a01b039092168252519081900360200190f35b610214610be4565b610268610bea565b6101cb6004803603604081101561036a57600080fd5b5080359060200135610bfa565b6101cb6004803603604081101561038d57600080fd5b50803515159060200135610d65565b610214610ec5565b6101cb600480360360208110156103ba57600080fd5b5035610ecb565b61032861108c565b61032861109b565b6102146110aa565b6101cb6110b0565b6101cb600480360360208110156103f757600080fd5b50356001600160a01b0316611187565b6102146004803603602081101561041d57600080fd5b50356001600160a01b031661127f565b6103286113d6565b61043d6113e5565b6000546001600160a01b0390811691161461048d576040805162461bcd60e51b81526020600482018190526024820152600080516020611b12833981519152604482015290519081900360640190fd5b60055443106104d6576040805162461bcd60e51b815260206004820152601060248201526f141bdbdb081a185cc81cdd185c9d195960821b604482015290519081900360640190fd5b60088190556040805182815290517f0c4d677eef92893ac7ec52faf8140fc6c851ab4736302b4f3a89dfb20696a0df9181900360200190a150565b600c602052600090815260409020805460019091015482565b60045481565b60026001541415610588576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155336000908152600c6020526040902080548211156105f2576040805162461bcd60e51b815260206004820152601b60248201527f416d6f756e7420746f20776974686472617720746f6f20686967680000000000604482015290519081900360640190fd5b6105fa6113e9565b600061062f826001015461062960095461062360035487600001546114d190919063ffffffff16565b90611533565b90611575565b9050821561065c5781546106439084611575565b8255600b5461065c906001600160a01b031633856115b7565b801561067957600a54610679906001600160a01b031633836115b7565b6009546003548354610690929161062391906114d1565b600183015560408051848152905133917f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364919081900360200190a250506001805550565b6106dc6113e5565b6000546001600160a01b0390811691161461072c576040805162461bcd60e51b81526020600482018190526024820152600080516020611b12833981519152604482015290519081900360640190fd5b600a54610743906001600160a01b031633836115b7565b50565b600254600160a81b900460ff1681565b61075e6113e5565b6000546001600160a01b039081169116146107ae576040805162461bcd60e51b81526020600482018190526024820152600080516020611b12833981519152604482015290519081900360640190fd5b600b546001600160a01b038381169116141561080a576040805162461bcd60e51b815260206004820152601660248201527521b0b73737ba1031329039ba30b5b2b2103a37b5b2b760511b604482015290519081900360640190fd5b600a546001600160a01b0383811691161415610866576040805162461bcd60e51b815260206004820152601660248201527521b0b73737ba103132903932bbb0b932103a37b5b2b760511b604482015290519081900360640190fd5b61087a6001600160a01b03831633836115b7565b604080516001600160a01b03841681526020810183905281517f74545154aac348a3eac92596bd1971957ca94795f4e954ec5f613b55fab78129929181900390910190a15050565b60055481565b60075481565b6108d66113e5565b6000546001600160a01b03908116911614610926576040805162461bcd60e51b81526020600482018190526024820152600080516020611b12833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6109786113e5565b6000546001600160a01b039081169116146109c8576040805162461bcd60e51b81526020600482018190526024820152600080516020611b12833981519152604482015290519081900360640190fd5b43600455565b600254600160a81b900460ff1615610a23576040805162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015290519081900360640190fd5b6002546001600160a01b03163314610a70576040805162461bcd60e51b815260206004820152600b60248201526a4e6f7420666163746f727960a81b604482015290519081900360640190fd5b6002805460ff60a81b1916600160a81b179055600b80546001600160a01b03808a166001600160a01b031992831617909255600a8054928916929091169190911790556008859055600584905560048390558115610ae1576002805460ff60a01b1916600160a01b17905560078290555b600a546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b158015610b2657600080fd5b505afa158015610b3a573d6000803e3d6000fd5b505050506040513d6020811015610b5057600080fd5b505160ff169050601e8110610ba5576040805162461bcd60e51b815260206004820152601660248201527504d75737420626520696e666572696f7220746f2033360541b604482015290519081900360640190fd5b610bb0601e82611575565b600a0a600955600554600655610bc582611187565b5050505050505050565b60085481565b6000546001600160a01b031690565b60035481565b600254600160a01b900460ff1681565b610c026113e5565b6000546001600160a01b03908116911614610c52576040805162461bcd60e51b81526020600482018190526024820152600080516020611b12833981519152604482015290519081900360640190fd5b6005544310610c9b576040805162461bcd60e51b815260206004820152601060248201526f141bdbdb081a185cc81cdd185c9d195960821b604482015290519081900360640190fd5b808210610cd95760405162461bcd60e51b815260040180806020018281038252602e815260200180611a93602e913960400191505060405180910390fd5b814310610d175760405162461bcd60e51b8152600401808060200182810382526030815260200180611ac16030913960400191505060405180910390fd5b600582905560048190556006829055604080518381526020810183905281517f7cd0ab87d19036f3dfadadb232c78aa4879dda3f0c994a9d637532410ee2ce06929181900390910190a15050565b610d6d6113e5565b6000546001600160a01b03908116911614610dbd576040805162461bcd60e51b81526020600482018190526024820152600080516020611b12833981519152604482015290519081900360640190fd5b600254600160a01b900460ff16610e09576040805162461bcd60e51b815260206004820152600b60248201526a135d5cdd081899481cd95d60aa1b604482015290519081900360640190fd5b8115610e6f576007548111610e65576040805162461bcd60e51b815260206004820152601860248201527f4e6577206c696d6974206d757374206265206869676865720000000000000000604482015290519081900360640190fd5b6007819055610e8c565b6002805460ff60a01b1916600160a01b8415150217905560006007555b60075460408051918252517f241f67ee5f41b7a5cabf911367329be7215900f602ebfc47f89dce2a6bcd847c9181900360200190a15050565b60065481565b60026001541415610f23576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001819055336000908152600c602052604090209054600160a01b900460ff1615610fad576007548154610f5a90849061160e565b1115610fad576040805162461bcd60e51b815260206004820152601760248201527f5573657220616d6f756e742061626f7665206c696d6974000000000000000000604482015290519081900360640190fd5b610fb56113e9565b805415611006576000610fe5826001015461062960095461062360035487600001546114d190919063ffffffff16565b9050801561100457600a54611004906001600160a01b031633836115b7565b505b8115611032578054611018908361160e565b8155600b54611032906001600160a01b0316333085611668565b6009546003548254611049929161062391906114d1565b600182015560408051838152905133917fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c919081900360200190a2505060018055565b6002546001600160a01b031681565b600b546001600160a01b031681565b60095481565b60026001541415611108576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001908155336000908152600c6020526040812080548282559281019190915590801561114857600b54611148906001600160a01b031633836115b7565b8154604080519182525133917f5fafa99d0643513820be26656b45130b01e1c03062e1266bf36f88cbd3bd9695919081900360200190a2505060018055565b61118f6113e5565b6000546001600160a01b039081169116146111df576040805162461bcd60e51b81526020600482018190526024820152600080516020611b12833981519152604482015290519081900360640190fd5b6001600160a01b0381166112245760405162461bcd60e51b8152600401808060200182810382526026815260200180611a6d6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038082166000908152600c60209081526040808320600b5482516370a0823160e01b8152306004820152925194959194869491909216926370a082319260248083019392829003018186803b1580156112de57600080fd5b505afa1580156112f2573d6000803e3d6000fd5b505050506040513d602081101561130857600080fd5b50516006549091504311801561131d57508015155b156113a5576000611330600654436116c8565b90506000611349600854836114d190919063ffffffff16565b9050600061137261136985610623600954866114d190919063ffffffff16565b6003549061160e565b90506113998560010154610629600954610623858a600001546114d190919063ffffffff16565b955050505050506113d1565b6113cc826001015461062960095461062360035487600001546114d190919063ffffffff16565b925050505b919050565b600a546001600160a01b031681565b3390565b60065443116113f7576114cf565b600b54604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561144257600080fd5b505afa158015611456573d6000803e3d6000fd5b505050506040513d602081101561146c57600080fd5b505190508061147f5750436006556114cf565b600061148d600654436116c8565b905060006114a6600854836114d190919063ffffffff16565b90506114c461136984610623600954856114d190919063ffffffff16565b600355505043600655505b565b6000826114e05750600061152d565b828202828482816114ed57fe5b041461152a5760405162461bcd60e51b8152600401808060200182810382526021815260200180611af16021913960400191505060405180910390fd5b90505b92915050565b600061152a83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611702565b600061152a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506117a4565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526116099084906117fe565b505050565b60008282018381101561152a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526116c29085906117fe565b50505050565b600060045482116116e4576116dd8284611575565b905061152d565b60045483106116f55750600061152d565b6004546116dd9084611575565b6000818361178e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561175357818101518382015260200161173b565b50505050905090810190601f1680156117805780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161179a57fe5b0495945050505050565b600081848411156117f65760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561175357818101518382015260200161173b565b505050900390565b6060611853826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118af9092919063ffffffff16565b8051909150156116095780806020019051602081101561187257600080fd5b50516116095760405162461bcd60e51b815260040180806020018281038252602a815260200180611b32602a913960400191505060405180910390fd5b60606118be84846000856118c6565b949350505050565b60606118d185611a33565b611922576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106119615780518252601f199092019160209182019101611942565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146119c3576040519150601f19603f3d011682016040523d82523d6000602084013e6119c8565b606091505b509150915081156119dc5791506118be9050565b8051156119ec5780518082602001fd5b60405162461bcd60e51b815260206004820181815286516024840152865187939192839260440191908501908083836000831561175357818101518382015260200161173b565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906113cc57505015159291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734e6577207374617274426c6f636b206d757374206265206c6f776572207468616e206e657720656e64426c6f636b4e6577207374617274426c6f636b206d75737420626520686967686572207468616e2063757272656e7420626c6f636b536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212206307db255e59ec76ca7af1e50f8f2895dda29e81bcbc9485f04b246c16d5985b64736f6c634300060c00334f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a26469706673582212205c2d4ee22a5e0a3ba8fa91d9ffd63367dbab3a945e48646fa8cfc0f56044d3ae64736f6c634300060c0033";
