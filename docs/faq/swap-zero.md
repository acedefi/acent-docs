---
id: swap-zero 
title: Acent Swap - How-to Guide
sidebar_label: Acent Swap
hide_title: false
hide_table_of_contents: false
description: Acent Swap - How-to Guide
keywords: 
 - acent
 - docs
 - acentbridge
 - introduction
 - intro
image:  /static/img/relay-icon.e8d6824b.svg
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::caution
These docs are provided for your reference but are intended to be used by you at your own risk
:::

# Swapping ZERO for RELAY

## Swap schedule

All the Acent tokens are not delivered right from the launch.  

Here is the schedule [extracted from the official white paper](https://www.relaychain.com/whitepaper)  

<img alt="Picture" src={useBaseUrl('/img/faqs/swapZero-01.png')} />


## Swap ZERO to RELAY - daily limits (until August 10th)

Normally, ZERO can be swapped to RELAY on any of these chains: Polygon, Ethereum, Avalanche, BSC.  

Team may announce that on a particular days, only a part of the chains are supported, follow their announcement on Telegram https://t.me/relaychainannouncements  

Between August 3rd and August 10th, there is a daily limit on how much RELAY is available to swap: The supply is distributed across all chains supporting the swap.  
When the swap can start on a particular day (typically from 2pm EST) and the supply of one chain has been depleted: You can cross chain your ZERO to another chain, to try swapping to RELAY on another chain (https://app.relaychain.com/#/transfer).

After August 10th, all the remaining RELAY will be available to swap until September 12th, without any daily limit.


## How to swap ZERO to RELAY

Go to the page https://app.relaychain.com/#/relay-sale  
It's a 2 step process: Approve the swap request, then do the swap.  

A video tutorial can be downloaded at https://docs.relaychain.com/vid/Zero-to-Relay-swap.mp4. 


1. Make sure that your wallet is connected and you are on the chain you want to swap your ZERO to RELAY.  
<img alt="Picture" src={useBaseUrl('/img/faqs/swapZero-02.png')} />

1. if there is a disabled "Swap" button (between August 3rd and August 10th), it means that there is no RELAY available on that chain to swap at that moment.  Either bridge your ZERO and try on another chain, either wait for the day after (see swap schedule above).  
<img alt="Picture" src={useBaseUrl('/img/faqs/swapZero-06.png')} />

1. If "Swap" button is active, click on max or enter manually the number of ZERO to swap (=> for example, between August 3rd and August 10th, if there are not enough RELAY left to swap to on the selected chain, check how much is available on the displayed message).  Click on "Approve" to start the process.  
<img alt="Picture" src={useBaseUrl('/img/faqs/swapZero-03.png')} />

1. Confirm in MetaMask the transaction. Depending on the state of the network, you may have to adjust gas settings.  
<img alt="Picture" src={useBaseUrl('/img/faqs/swapZero-04.png')} />


1. Click on "Swap" to start the 2nd step of the process.  
<img alt="Picture" src={useBaseUrl('/img/faqs/swapZero-05.png')} />

1. Confirm in MetaMask the transaction. Depending on the state of the network, you may have to adjust gas settings.  

1. When it's successful, you will see the total amount of Relay you hold on the network you just swapped on.  
<img alt="Picture" src={useBaseUrl('/img/faqs/swapZero-07.png')} />



Note for the period between August 3rd and August 10th:
* If the RELAY tokens were depleted at the time of the swap attempt, swap transaction was pending until timing out by itself.  
Team decided once to supply more tokens on some chains, so pending transactions still went through for some users..

RELAY contract addresses:
* MATIC: 0x904371845Bc56dCbBcf0225ef84a669b2fD6bd0d   
* BSC: 0xE338D4250A4d959F88Ff8789EaaE8c32700BD175  
* ETH: 0x5d843fa9495d23de997c394296ac7b4d721e841c


:::tip
**If you feel like leaving the members of the team that work on this documentation a tip**

**후원 주소**
:::
