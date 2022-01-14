---
id: servicedesk-info
title: Mod community - Service desk information
sidebar_label: Mod community - Service desk information
hide_title: true
hide_table_of_contents: true
description: Mod community - Service desk information
keywords:
 - "ZERO Exchange"
 - "$ZERO"
 - "@OfficialZeroDEX"
image:  /static/avax-logo.svg
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info
We are currently in phase 1 of the go live (see dedicated section about the phases)
:::

:::warning
Don't communicate this URL to people outside of the community mods or core team!
:::

## Introduction

This page groups all the information about the service desk:
* Guide to the ticketing system
* Service desk process 
* Phasing from initial soft launch up to complete use of the system

### Scope of the ticketing system

* Users register themselves their stuck issue in the ticketing system
* Community mods checks the data of new tickets and validate that they can be communicated to the dev team (= ticket escalation)
* Automatic notifications
  * Mods: New tickets created are notified in a specific TG channel 
  * Dev team: Receives an automatic notification by mail that a ticket has been escalated to them
  * Users: Confirmation by mail of the ticket creation and ticket closure  

If users need additional information, they continue to go on the Telegram/Discord channels.

_Overview of the definitive and general process:_  
<img alt="Picture" src={useBaseUrl('/img/SD-process-Slide1.png')} />  
<img alt="Picture" src={useBaseUrl('/img/SD-process-Slide2.png')} />  
<img alt="Picture" src={useBaseUrl('/img/SD-process-Slide3.png')} />  
<img alt="Picture" src={useBaseUrl('/img/SD-process-Slide4.png')} />  

[Technical info about the mail](ticket-format.md) sent to the dev team (formatting of the content).

### Summary of links

* Link for the user to register a stuck TX: https://0.masternode.io/docs/sd/sd001 
* For reference (still the same URL), link to the old Google sheet: https://docs.google.com/spreadsheets/d/16a9HouWH3TKj_9BL16fM8FBylSiv1mVTQt5M_DRF2gA/edit#gid=1310571463
* Link to the TG channel for notifications of new created tickets: https://t.me/joinchat/Ts7NBUAKK_JiZDQ0 
* Link to the ticketing queues with all the tickets: https://0exchange.atlassian.net/jira/servicedesk/projects/ZEH/section/incidents/custom/51
* Link to the new Google sheet: https://docs.google.com/spreadsheets/d/1CBBT1K1sLu6oy3MDCfxbOGH53X812_xpJqfBj8NAyH0/edit#gid=968062942
    * You will have to send a share request before being able to see the content  

### Credentials to open/edit a ticket

:::warning
Don't communicate these credentials to people outside of the community mods or core team!
:::

Email: exchange_help@protonmail.com  
Password: exchange_help1A


### Guide for the ticketing system

How to manage:
* A ticket
* Queues of the ticketing system

[Check this page](servicedesk-guide.md) for the complete guide.

### Phasing of the go live

Since the new system must be learned by the mods, it will go live in several phases.

Regardless of the phases:
* Users register themselves their ticket at https://0.masternode.io/docs/sd/sd001 
  * Contains explanation about the resolution/time process
  * Troubleshooting to make sure they are dealing with a stuck TX
  * Explanation on how to find their cross-chain transaction ID
* System closes automatically all tickets after 7 days of their creation date (regardless in the state they are)
* Users: Automatic confirmation by mail of the ticket creation and ticket closure  

#### Phases

_Phase 1:_ 
* Option of Flow A - New tickets created by the users will be automatically notified in the notification TG channel: https://t.me/joinchat/Ts7NBUAKK_JiZDQ0 
  * Entry will be automatically created in a new Google sheet : https://docs.google.com/spreadsheets/d/1CBBT1K1sLu6oy3MDCfxbOGH53X812_xpJqfBj8NAyH0/edit#gid=968062942  
  * Mod checks in the notification TG channel or new Google sheet the details of the newly registered stuck TX
  * If data validated, then mod copies the data to the old Google sheet
* Option of Flow B - Mod can still continue to choose to not ask users to register the issue in the ticketing system 
  * Mod adds the new stuck TX in the old Google sheet based on the DM with the user on Telegram
* Flows A & B - Mod notifies as usual the dev team via the Discord #stuck-txs channel of a new entry in the old Google sheet 

_Phase 2:_
* A notification of a new ticket will be sent to the TG channel: https://t.me/joinchat/Ts7NBUAKK_JiZDQ0 
* From the URL ticket in the TG channel, mod opens it with the credentials to open/edit a ticket (see above)
* Mod checks the stuck TX details and changes the state of the ticket to "Escalated to Discord" when data validated
* System sends an email to the dev team with the details of the escalated ticket
* Mod notifies as usual the dev team via the Discord #stuck-txs channel 

_Phase 3:_
* A notification of a new ticket will be sent to the TG channel: https://t.me/joinchat/Ts7NBUAKK_JiZDQ0 
* From the URL ticket in the TG channel, mod opens it with the credentials communicated on a previous section
* Mod checks the stuck TX details and changes the state of the ticket to "Escalated to Discord" when data validated
* System sends an email to the dev team with the details of the escalated ticket
* If mod gets the confirmation by users that the issue is solved, (s)he can close manually some tickets quicker than when the system does it automatically after 7 days 
* Active monitoring by some mods of the ticketing queues at https://0exchange.atlassian.net/jira/servicedesk/projects/ZEH/section/incidents/custom/51
