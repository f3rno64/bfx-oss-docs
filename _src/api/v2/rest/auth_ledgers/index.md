---
id: rest-auth-ledgers
title: Ledgers
subtitle: View your past ledger entries. Most recent entries are returned by default, but a timestamp can be used to retrieve time-specific data.
---

::: callout warning Retrieve all ledgers
The currency param can be omitted to return a ledger including all currencies. The path for this call is 'v2/auth/r/ledgers/hist'.
:::


**Possible values for 'category' filter**

This table shows the possible values for the 'category' body param. The table shows the filter followed by the int value that should be entered in the 'category' param to activate the filter.



**Fields**

Term | Type | Description
-- | -- | --
ID  |   int |   Ledger identifier
CURRENCY    |   String  |   The symbol of the currency (ex. "BTC")
MTS   |   Date  |   Timestamp in milliseconds
AMOUNT  |   float |   Amount of funds moved
BALANCE    |   float |   New balance
DESCRIPTION  |   String  |   Description of ledger transaction

**Ratelimit**: 45 req/min
