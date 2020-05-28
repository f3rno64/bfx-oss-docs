---
id: rest-auth-trades
title: "Trades"
subtitle: "Retrieve your trades. Your most recent trades will be retrieved by default, but a timestamp can be used to retrieve time-specific data."
---

**Fields**

Term | Type | Description
-- | -- | --
ID  |  integer  |  Trade database id
PAIR  |  string  |  Pair (BTCUSD, …)
MTS_CREATE  |  integer  |  Execution timestamp
ORDER_ID  |  integer  |  Order id
EXEC_AMOUNT  |  float  |  Positive means buy, negative means sell
EXEC_PRICE  |  float  |  Execution price
ORDER_TYPE  |  string  |  Order type
ORDER_PRICE  |  float  |  Order price
MAKER  |  int  |  1 if true, -1 if false
FEE  |  float  |  Fee
FEE_CURRENCY  |  string  |  Fee currency

**Ratelimit**: 45 req/min
