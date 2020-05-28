---
id: ws-auth-trade-snapshots
title: "Trade Snapshots"
dataSamples:
  json_response0.json: Response
---

**Fields**

Term | Type | Description
-- | -- | --
TRD_ID  |  int  |  Trade database id
TRD_PAIR  |  string  |  Pair (BTCUSD, …)
TRD_TIMESTAMP  |  int  |  Execution timestamp
TRD_ORD_ID  |  int  |  Order id
±TRD_AMOUNT_EXECUTED  |  float  |  Positive means buy, negative means sell
TRD_PRICE_EXECUTED  |  float  |  Execution price
ORD_TYPE  |  string  |  Order type
ORD_PRICE  |  float  |  Order price
FEE  |  float  |  Fee
FE_CURRENCY  |  string  |  Fee currency
