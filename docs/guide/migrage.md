---
id: migrate
title: how to Mint?
sidebar_label: how to Mint
hide_title: false
hide_table_of_contents: false
description: Acent Swap - Community DEV Guide
keywords: 
 - "acent"
 - "docs"
 - "acent swap"
 - "Community"
 - "Resources"
 
image:  
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


## Acent Swap - 9 Step Migration
<br/><br/><br/><br/>

### 1. go to Remix https://remix.ethereum.org/ <br/>
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge1.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 2.Create 4_Ade.sol solidity file in contracts folder<br/>
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge2.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 3. Put the following code in the Ade solidity file.<br/>

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0; 

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.2.0/contracts/token/ERC20/ERC20.sol"; 
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.2.0/contracts/access/Ownable.sol"; 

contract Ade is ERC20, Ownable {
    constructor() ERC20('ADEtoken','ADE') Ownable() {}
    function mint(address account_, uint256 amount_) public onlyOwner {
        _mint(account_, amount_);
    }
}
```
<br/><br/><br/>
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge3.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 4-1. click the solidity compiler menu.<br/><br/>
### 4-2. click a compile button.<br/>
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge4.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 4-3. If compilation is complete, you can see a check icon in the Compiler menu.<br/><br/>
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge5.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 5-1. Go to the deploy menu<br/>
### 5-2. Select injected Web3 from environment column<br/>
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge6.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 5-3. If web3 runs well, you can check the network id and account information.<br/>
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge7.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 6. Click deploy button<br/>
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge8.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 7. you can see the contract happens
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge9.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 8-1. Check the completed contract information in Block Explorer.
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge10.jpg')} />
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge11.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 8-2. Copy the contract address from the block information.
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge12.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>

### 8-3. click import tokens in metamask
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge13.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>


### 8-4. paste the contract address then you can see the token symbol and token decimal.
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge14.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>


### 8-5. click add custom token, import tokens
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge15.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>


### 8-6. you can see token ADE in your metamask
<img alt="Acent Swap" src={useBaseUrl('/img/dev/bridge16.jpg')} />
<br/><br/><br/><br/><br/><br/><br/><br/>





