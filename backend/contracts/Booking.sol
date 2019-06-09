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
        bool onSale;
    }

    struct seatInfo {
        address restaurant;
        uint16 seatNum;
        uint16 capacity;
        uint reservationFee;   
    }

    reserveInfo[] public reservesInfo;
    mapping(bytes32 => reserveInfo) oneMonthSeatInfo;
    mapping(address => mapping (uint16 => seatInfo)) public seatInformation;

    uint tokenId = 1;
    bytes32 hashForRegister = '';

    function transferTo(address payable _dest) public payable {
        _dest.transfer(msg.value);
    }

    function registerSeat(address payable _resutaurantAddress, uint16 _seatNum, uint32 _yaerAndMonth, uint32 _time, uint _cost) public payable {
        super._mint(msg.sender, tokenId);
        //reservesInfo.push(reserveInfo(tokenId, _resutaurantAddress, _seatNum, _yaerAndMonth, _time, _cost));
        hashForRegister = keccak256(abi.encode(_seatNum, _yaerAndMonth, _time));
        oneMonthSeatInfo[hashForRegister] = reserveInfo(tokenId, _resutaurantAddress, _seatNum, _yaerAndMonth, _time, _cost, false);
        _resutaurantAddress.transfer(msg.value);
        tokenId++;
    }

    function onSale(uint _tokenId, address _resutaurantAddress, uint16 _seatNum, uint32 _yaerAndMonth, uint32 _time, uint _cost) public {
        oneMonthSeatInfo[hashForRegister] = reserveInfo(_tokenId, _resutaurantAddress, _seatNum, _yaerAndMonth, _time, _cost, true);
        super.transferFrom(msg.sender, address(this), _tokenId);
    }

    function buySeat(address payable _to, uint _tokenId ) public payable {
        this.transferFrom(address(this), msg.sender, _tokenId);
        _to.transfer(msg.value);
    }

    function getBackSeat(address payable _to, uint _tokenId ) public payable{
        super.transferFrom(msg.sender, _to, _tokenId);
        _to.transfer(msg.value);
    }

    function getoneMonthSeatInfo(uint16 _seatNum, uint32 _yaerAndMonth, uint32 _time) public view returns (reserveInfo memory) {
        return oneMonthSeatInfo[keccak256(abi.encode(_seatNum, _yaerAndMonth, _time))];
    }

    function createSeat(address _restaurant, uint16 _seatNum, uint16 _capacity, uint _reservationFee) public {
        seatInformation[_restaurant][_seatNum] = seatInfo( _restaurant, _seatNum, _capacity, _reservationFee);
    }

    function getSeatInfo(address _restaurant, uint16 _seatNum) public view returns (seatInfo memory) {
        return seatInformation[_restaurant][_seatNum];
    }
}