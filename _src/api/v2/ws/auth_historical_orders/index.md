---
id: ws-auth-historical-orders
title: Historical Orders (deprecated)
subtitle: Deprecated channel that retrieves past orders.
dataSamples:
  json_snapshot.json: Snapshot
---

**Stream Fields**

Term | Type | Description
-- | -- | --
ID  |  int  |  Order ID
GID | int |  Group ID
CID | int |  Client Order ID
SYMBOL  |  string  |  Pair (tBTCUSD, …)
MTS_CREATE | int | Millisecond timestamp of creation
MTS_UPDATE | int | Millisecond timestamp of update
AMOUNT  |  float  |  Positive means buy, negative means sell.
AMOUNT_ORIG  |  float  |  Original amount
TYPE  |  string  |  The type of the order: LIMIT, MARKET, STOP, TRAILING STOP, EXCHANGE MARKET, EXCHANGE LIMIT, EXCHANGE STOP, EXCHANGE TRAILING STOP, FOK, EXCHANGE FOK.
TYPE_PREV | string | Previous order type
FLAGS | int | See https://docs.bitfinex.com/v2/docs/flag-values.
ORDER_STATUS  |  string  |  Order Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED, RSN_DUST (amount is less than 0.00000001), RSN_PAUSE (trading is paused / paused due to AMPL rebase event)
PRICE  |  float  |  Price
PRICE_AVG  |  float  |  Average price
PRICE_TRAILING  |  float  |  The trailing price
PRICE_AUX_LIMIT  |  float  |  Auxiliary Limit price (for STOP LIMIT)
NOTIFY  |  int  |  1 if Notify flag is active, 0 if not
HIDDEN  |  int  |  1 if Hidden, 0 if not hidden
PLACED_ID  |  int  |  If another order caused this order to be placed (OCO) this will be that other order's ID
