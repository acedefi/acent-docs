---
id: AcentERC20
title: Smart Contract
sidebar_label: AcentERC20
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

## AcentERC20
`AcentERC20.sol`
### Event
```cpp
event Approval(address indexed owner, address indexed spender, uint value);
event Transfer(address indexed from, address indexed to, uint value);
```
### approve
```cpp
function approve(address spender, uint value) external returns (bool)
```
### transfer
```cpp
function transfer(address to, uint value) external returns (bool)
```
### transferFrom
```cpp
function transferFrom(address from, address to, uint value) external returns (bool) {
    if (allowance[from][msg.sender] != uint(-1)) {
        allowance[from][msg.sender] = allowance[from][msg.sender].sub(value);
    }
    _transfer(from, to, value);
    return true;
    }
```

### permit

```cpp
function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external
```

### Interface
```cpp
import './interfaces/IAcentERC20.sol';
import './libraries/SafeMath.sol';
```

```cpp
interface IAcentERC20 {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external pure returns (string memory);
    function symbol() external pure returns (string memory);
    function decimals() external pure returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function PERMIT_TYPEHASH() external pure returns (bytes32);
    function nonces(address owner) external view returns (uint);

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
}
```
