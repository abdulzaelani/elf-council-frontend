/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ElfNFT, ElfNFTInterface } from "../ElfNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
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
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ace38038062001ace833981016040819052620000349162000259565b8251839083906200004d90600090602085019062000100565b5080516200006390600190602084019062000100565b5050600680546001600160a01b031916331790555062000083816200008c565b50505062000335565b6006546001600160a01b03163314620000de5760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600680546001600160a01b0319166001600160a01b0392909216919091179055565b8280546200010e90620002e2565b90600052602060002090601f0160209004810192826200013257600085556200017d565b82601f106200014d57805160ff19168380011785556200017d565b828001600101855582156200017d579182015b828111156200017d57825182559160200191906001019062000160565b506200018b9291506200018f565b5090565b5b808211156200018b576000815560010162000190565b600082601f830112620001b7578081fd5b81516001600160401b0380821115620001d457620001d46200031f565b604051601f8301601f19908116603f01168101908282118183101715620001ff57620001ff6200031f565b816040528381526020925086838588010111156200021b578485fd5b8491505b838210156200023e57858201830151818301840152908201906200021f565b838211156200024f57848385830101525b9695505050505050565b6000806000606084860312156200026e578283fd5b83516001600160401b038082111562000285578485fd5b6200029387838801620001a6565b94506020860151915080821115620002a9578384fd5b50620002b886828701620001a6565b604086015190935090506001600160a01b0381168114620002d7578182fd5b809150509250925092565b600181811c90821680620002f757607f821691505b602082108114156200031957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61178980620003456000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806370a08231116100cd578063b88d4fde11610081578063c87b56dd11610066578063c87b56dd14610365578063e985e9c514610378578063fe9fbb80146103a65761016c565b8063b88d4fde1461032f578063b9181611146103425761016c565b806395d89b41116100b257806395d89b4114610301578063a22cb46514610309578063b6a5d7de1461031c5761016c565b806370a08231146102b35780638da5cb5b146102e15761016c565b806323b872dd1161012457806340c10f191161010957806340c10f191461025757806342842e0e1461026a5780636352211e1461027d5761016c565b806323b872dd1461023157806327c97fa5146102445761016c565b8063081812fc11610155578063081812fc146101ae578063095ea7b31461020957806313af40351461021e5761016c565b806301ffc9a71461017157806306fdde0314610199575b600080fd5b61018461017f366004611463565b6103df565b60405190151581526020015b60405180910390f35b6101a16104c6565b6040516101909190611575565b6101e46101bc36600461149b565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610190565b61021c61021736600461143a565b610554565b005b61021c61022c366004611286565b610689565b61021c61023f3660046112d2565b610737565b61021c610252366004611286565b6109b0565b61021c61026536600461143a565b610a63565b61021c6102783660046112d2565b610ad8565b6101e461028b36600461149b565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6102d36102c1366004611286565b60026020526000908152604090205481565b604051908152602001610190565b6006546101e49073ffffffffffffffffffffffffffffffffffffffff1681565b6101a1610c37565b61021c610317366004611400565b610c44565b61021c61032a366004611286565b610cdb565b61021c61033d36600461130d565b610d98565b610184610350366004611286565b60076020526000908152604090205460ff1681565b6101a161037336600461149b565b610ee4565b6101846103863660046112a0565b600560209081526000928352604080842090915290825290205460ff1681565b6101846103b4366004611286565b73ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205460ff1690565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061047257507f80ac58cd000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b806104be57507f5b5e139f000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b90505b919050565b600080546104d3906115f7565b80601f01602080910402602001604051908101604052809291908181526020018280546104ff906115f7565b801561054c5780601f106105215761010080835404028352916020019161054c565b820191906000526020600020905b81548152906001019060200180831161052f57829003601f168201915b505050505081565b60008181526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16338114806105b7575073ffffffffffffffffffffffffffffffffffffffff8116600090815260056020908152604080832033845290915290205460ff165b6106085760405162461bcd60e51b815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b60008281526004602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60065473ffffffffffffffffffffffffffffffffffffffff1633146106f05760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105ff565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60008181526003602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116146107ad5760405162461bcd60e51b815260206004820152600a60248201527f57524f4e475f46524f4d0000000000000000000000000000000000000000000060448201526064016105ff565b73ffffffffffffffffffffffffffffffffffffffff82166108105760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f524543495049454e5400000000000000000000000000000060448201526064016105ff565b3373ffffffffffffffffffffffffffffffffffffffff84161480610857575060008181526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1633145b80610892575073ffffffffffffffffffffffffffffffffffffffff8316600090815260056020908152604080832033845290915290205460ff165b6108de5760405162461bcd60e51b815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016105ff565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260026020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019055938616808352848320805460010190558583526003825284832080547fffffffffffffffffffffffff00000000000000000000000000000000000000009081168317909155600490925284832080549092169091559251849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60065473ffffffffffffffffffffffffffffffffffffffff163314610a175760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105ff565b73ffffffffffffffffffffffffffffffffffffffff16600090815260076020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60065473ffffffffffffffffffffffffffffffffffffffff163314610aca5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105ff565b610ad48282610f74565b5050565b610ae3838383610737565b73ffffffffffffffffffffffffffffffffffffffff82163b1580610be657506040517f150b7a020000000000000000000000000000000000000000000000000000000080825233600483015273ffffffffffffffffffffffffffffffffffffffff858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a401602060405180830381600087803b158015610b8a57600080fd5b505af1158015610b9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc2919061147f565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b610c325760405162461bcd60e51b815260206004820152601060248201527f554e534146455f524543495049454e540000000000000000000000000000000060448201526064016105ff565b505050565b600180546104d3906115f7565b33600081815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60065473ffffffffffffffffffffffffffffffffffffffff163314610d425760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105ff565b610d958173ffffffffffffffffffffffffffffffffffffffff16600090815260076020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b50565b610da3848484610737565b73ffffffffffffffffffffffffffffffffffffffff83163b1580610e9257506040517f150b7a02000000000000000000000000000000000000000000000000000000008082529073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290610e1c90339089908890889060040161152c565b602060405180830381600087803b158015610e3657600080fd5b505af1158015610e4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6e919061147f565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b610ede5760405162461bcd60e51b815260206004820152601060248201527f554e534146455f524543495049454e540000000000000000000000000000000060448201526064016105ff565b50505050565b60606000610f2260408051808201909152601b81527f68747470733a2f2f6e66742e656c656d656e742e66692f6e66742f0000000000602082015290565b90506000815111610f425760405180602001604052806000815250610f6d565b80610f4c846110d9565b604051602001610f5d9291906114fd565b6040516020818303038152906040525b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fd75760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f524543495049454e5400000000000000000000000000000060448201526064016105ff565b60008181526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16156110495760405162461bcd60e51b815260206004820152600e60248201527f414c52454144595f4d494e54454400000000000000000000000000000000000060448201526064016105ff565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260026020908152604080832080546001019055848352600390915280822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60608161111a575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526104c1565b8160005b8115611144578061112e8161164b565b915061113d9050600a836115a0565b915061111e565b60008167ffffffffffffffff811115611186577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156111b0576020820181803683370190505b5090505b841561125a576111c56001836115b4565b91506111d2600a86611684565b6111dd906030611588565b60f81b818381518110611219577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611253600a866115a0565b94506111b4565b949350505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104c157600080fd5b600060208284031215611297578081fd5b610f6d82611262565b600080604083850312156112b2578081fd5b6112bb83611262565b91506112c960208401611262565b90509250929050565b6000806000606084860312156112e6578081fd5b6112ef84611262565b92506112fd60208501611262565b9150604084013590509250925092565b60008060008060808587031215611322578081fd5b61132b85611262565b935061133960208601611262565b925060408501359150606085013567ffffffffffffffff8082111561135c578283fd5b818701915087601f83011261136f578283fd5b813581811115611381576113816116f6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156113c7576113c76116f6565b816040528281528a60208487010111156113df578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611412578182fd5b61141b83611262565b91506020830135801515811461142f578182fd5b809150509250929050565b6000806040838503121561144c578182fd5b61145583611262565b946020939093013593505050565b600060208284031215611474578081fd5b8135610f6d81611725565b600060208284031215611490578081fd5b8151610f6d81611725565b6000602082840312156114ac578081fd5b5035919050565b600081518084526114cb8160208601602086016115cb565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000835161150f8184602088016115cb565b8351908301906115238183602088016115cb565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261156b60808301846114b3565b9695505050505050565b600060208252610f6d60208301846114b3565b6000821982111561159b5761159b611698565b500190565b6000826115af576115af6116c7565b500490565b6000828210156115c6576115c6611698565b500390565b60005b838110156115e65781810151838201526020016115ce565b83811115610ede5750506000910152565b600181811c9082168061160b57607f821691505b60208210811415611645577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561167d5761167d611698565b5060010190565b600082611693576116936116c7565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610d9557600080fdfea26469706673582212206731add3365630ef99edaba468131463a4bbf69d18339b019e4e3e1a41265d8664736f6c63430008030033";

type ElfNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ElfNFTConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ElfNFT__factory extends ContractFactory {
  constructor(...args: ElfNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ElfNFT";
  }

  deploy(
    _name: string,
    _symbol: string,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ElfNFT> {
    return super.deploy(
      _name,
      _symbol,
      _owner,
      overrides || {},
    ) as Promise<ElfNFT>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, _owner, overrides || {});
  }
  attach(address: string): ElfNFT {
    return super.attach(address) as ElfNFT;
  }
  connect(signer: Signer): ElfNFT__factory {
    return super.connect(signer) as ElfNFT__factory;
  }
  static readonly contractName: "ElfNFT";
  public readonly contractName: "ElfNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ElfNFTInterface {
    return new utils.Interface(_abi) as ElfNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ElfNFT {
    return new Contract(address, _abi, signerOrProvider) as ElfNFT;
  }
}