import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const abi = [
    {
        "constant": true,
        "inputs": [
        {
            "name": "interfaceId",
            "type": "bytes4"
        }
        ],
        "name": "supportsInterface",
        "outputs": [
        {
            "name": "",
            "type": "bool"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
        {
            "name": "",
            "type": "string"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "getApproved",
        "outputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "address"
        },
        {
            "name": "",
            "type": "uint16"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "seatCapacity",
        "outputs": [
        {
            "name": "",
            "type": "uint16"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "from",
            "type": "address"
        },
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "transferFrom",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "uint256"
        },
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "reservesInfo",
        "outputs": [
        {
            "name": "id",
            "type": "uint256"
        },
        {
            "name": "restaurant",
            "type": "address"
        },
        {
            "name": "seatNum",
            "type": "uint16"
        },
        {
            "name": "yaerAndMonth",
            "type": "uint32"
        },
        {
            "name": "time",
            "type": "uint32"
        },
        {
            "name": "cost",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "owner",
            "type": "address"
        },
        {
            "name": "index",
            "type": "uint256"
        }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "from",
            "type": "address"
        },
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "safeTransferFrom",
        "outputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "index",
            "type": "uint256"
        }
        ],
        "name": "tokenByIndex",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "ownerOf",
        "outputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "owner",
            "type": "address"
        }
        ],
        "name": "balanceOf",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [
        {
            "name": "",
            "type": "bool"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "approved",
            "type": "bool"
        }
        ],
        "name": "isOwner",
        "outputs": [
        {
            "name": "",
            "type": "bool"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "from",
            "type": "address"
        },
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "name": "_data",
            "type": "bytes"
        }
        ],
        "name": "symbol",
        "outputs": [
        {
            "name": "",
            "type": "string"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "approved",
            "type": "bool"
        }
        ],
        "name": "setApprovalForAll",
        "outputs": [
        {
            "name": "",
            "type": "string"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "from",
            "type": "address"
        },
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "name": "_data",
            "type": "bytes"
        }
        ],
        "name": "safeTransferFrom",
        "outputs": [
        {
            "name": "id",
            "type": "uint256"
        },
        {
            "name": "restaurant",
            "type": "address"
        },
        {
            "name": "seatNum",
            "type": "uint16"
        },
        {
            "name": "time",
            "type": "uint32"
        },
        {
            "name": "cost",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "name": "operator",
            "type": "address"
        }
        ],
        "name": "tokenURI",
        "outputs": [
        {
            "name": "",
            "type": "string"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "owner",
            "type": "address"
        },
        {
            "name": "operator",
            "type": "address"
        }
        ],
        "name": "isApprovedForAll",
        "outputs": [
        {
            "name": "",
            "type": "bool"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
        }
        ],
        "name": "transferOwnership",
        "type": "function",
        "constant": false,
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "name",
            "type": "string"
        },
        {
            "indexed": true,
            "name": "symbol",
            "type": "string"
        },
        {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "Transfer",
        "type": "constructor",
        "payable": false,
        "stateMutability": "nonpayable"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "to",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "owner",
            "type": "address",
            "indexed": true
        },
        {
            "name": "approved",
            "type": "address",
            "indexed": true
        },
        {
            "name": "tokenId",
            "type": "uint256",
            "indexed": true
        }
        ],
        "name": "Approval",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "event",
        "anonymous": false
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "operator",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "approved",
            "type": "bool"
        }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_resutaurantAddress",
            "type": "address"
        },
        {
            "name": "_seatNum",
            "type": "uint16"
        },
        {
            "name": "_yaerAndMonth",
            "type": "uint32"
        },
        {
            "name": "_time",
            "type": "uint32"
        },
        {
            "name": "_cost",
            "type": "uint256"
        }
        ],
        "name": "registerSeat",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_to",
            "type": "address"
        },
        {
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "name": "ethAmount",
            "type": "uint256"
        }
        ],
        "name": "sell",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "_seatNum",
            "type": "uint16"
        },
        {
            "name": "_yaerAndMonth",
            "type": "uint32"
        },
        {
            "name": "_time",
            "type": "uint32"
        }
        ],
        "name": "getoneMonthSeatInfo",
        "outputs": [
        {
            "components": [
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "restaurant",
                "type": "address"
            },
            {
                "name": "seatNum",
                "type": "uint16"
            },
            {
                "name": "yaerAndMonth",
                "type": "uint32"
            },
            {
                "name": "time",
                "type": "uint32"
            },
            {
                "name": "cost",
                "type": "uint256"
            }
            ],
            "name": "",
            "type": "tuple"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_restaurant",
            "type": "address"
        },
        {
            "name": "_seatNum",
            "type": "uint16"
        },
        {
            "name": "_capacity",
            "type": "uint16"
        }
        ],
        "name": "createSeat",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "_restaurant",
            "type": "address"
        },
        {
            "name": "_seatNum",
            "type": "uint16"
        }
        ],
        "name": "getSeatCapacity",
        "outputs": [
        {
            "name": "",
            "type": "uint16"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

const address = "0x09AE12Fe75c2Ea5aFd61Beac2645BB22C334454B" // ganache
const contract = web3.eth.Contract(abi, address);
export default contract;