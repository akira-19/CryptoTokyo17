pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Booking is ERC721Full, Ownable{

    constructor(string memory name, string memory symbol) ERC721Full(name, symbol) public {
   
    }

    struct reserveInfo {
        uint id;
        address restaurant;
        uint16 seatNum;
        uint32 yaerAndMonth;
        uint32 time;
        uint cost;
    }

    struct seatInfo {
        address restaurant;
        uint16 seatNum;
        uint16 capacity;
    }

    reserveInfo[] public reservesInfo;
    mapping(bytes32 => reserveInfo) oneMonthSeatInfo;
    mapping(address => mapping (uint16 => uint16)) public seatCapacity;

    uint tokenId = 1;
    bytes32 hashForRegister = '';

    function registerSeat(address _resutaurantAddress,uint16 _seatNum, uint32 _yaerAndMonth, uint32 _time, uint _cost) public{
        super._mint(msg.sender, tokenId);
        reservesInfo.push(reserveInfo(tokenId, _resutaurantAddress, _seatNum, _yaerAndMonth, _time, _cost));
        hashForRegister = keccak256(abi.encode(_seatNum, _yaerAndMonth, _time));
        oneMonthSeatInfo[hashForRegister] = reserveInfo(tokenId, _resutaurantAddress, _seatNum, _yaerAndMonth, _time, _cost);
        tokenId++;
    }

    function sell(address _to, uint tokenId, uint ethAmount) public {
        super.transferFrom(msg.sender, _to, tokenId);

    }

    function getoneMonthSeatInfo(uint16 _seatNum, uint32 _yaerAndMonth, uint32 _time) public view returns (reserveInfo memory) {
        return oneMonthSeatInfo[keccak256(abi.encode(_seatNum, _yaerAndMonth, _time))];
    }

    function createSeat(address _restaurant, uint16 _seatNum, uint16 _capacity) public {
        seatCapacity[_restaurant][_seatNum] = _capacity;
    }

    function getSeatCapacity(address _restaurant, uint16 _seatNum) public view returns (uint16) {
        return seatCapacity[_restaurant][_seatNum];
    }
}
