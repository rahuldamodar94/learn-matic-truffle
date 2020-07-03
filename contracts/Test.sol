// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Test {
    uint256 public counter;

    function setCount(uint256 _value) public {
        counter = _value;
    }
}
