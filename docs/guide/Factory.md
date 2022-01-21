---
id: Factory 
title: Smart Contract
sidebar_label: Factory
hide_title: false
hide_table_of_contents: false
description: Acent Swap - Community DEV Guide
keywords: 
 - "acent"
 - "docs"
 - "acent swap"
 - "Community"
 - "Resources"
 
image:  /static/img/relay-icon.e8d6824b.svg
---

## Factory
`AcentFactory.sol`


### Events
### allPairsLength
```cpp
function allPairsLength() external view returns (uint)
```
### createPair
```cpp
    function createPair(address tokenA, address tokenB) external returns (address pair) 
```
### setFeeTo
```cpp
    function setFeeTo(address _feeTo) external
```
### setFeeToSetter
```cpp
  function setFeeToSetter(address _feeToSetter) external {
        require(msg.sender == feeToSetter, 'AcentSwap: FORBIDDEN');
        feeToSetter = _feeToSetter;
    }
```

### Interface
```cpp
import './interfaces/IAcentFactory.sol';
```

```cpp
interface IAcentFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
}
```
