pragma solidity >=0.4.21 <0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Booking is ERC721Full, Ownable{
    struct seatInfo {
        uint id;
        address restaurant;
        uint16 seatNum;
        uint32 time;
        uint cost;
    }

    seatInfo[] public seatsInfo;

    uint tokenId = 1;

    function registerSeat(uint16 _seatNum, uint32 _time, uint _cost) public{
        super._mint(msg.sender, tokenId);
        seatsInfo.push(seatInfo(tokenId, msg.sender, _seatNum, _time, _cost));
        tokenId++;
    }


}
