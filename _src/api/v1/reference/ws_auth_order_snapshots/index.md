---
id: ws-auth-order-snapshots
title: "Order Snapshots"
subtitle: "os and hos indentify respectively active and inactive orders snapshots"
dataSamples:
  json_response0.json: Response
---

**Fields**

Term | Type | Description
-- | -- | --
ORD_ID  |  int  |  order id
ORD_PAIR  |  string  |  Pair (BTCUSD, …)
±ORD_AMOUNT  |  float  |  Positive means buy, negative means sell.
±ORD_AMOUNT_ORIG  |  float  |  Original amount
ORD_TYPE  |  string  |  The type of the order [“LIMIT”, “MARKET”, “STOP”, “TRAILING STOP”, “EXCHANGE MARKET”, “EXCHANGE LIMIT”, “EXCHANGE STOP”, “EXCHANGE TRAILING STOP”, “FOK”, “EXCHANGE FOK”, "IOC", "EXCHANGE IOC"].
ORD_STATUS  |  string  |  Order Status: ACTIVE, EXECUTED @ PRICE(AMOUNT) e.g. "EXECUTED @ 107.6(-0.2)", PARTIALLY FILLED @ PRICE(AMOUNT), INSUFFICIENT MARGIN was: PARTIALLY FILLED @ PRICE(AMOUNT), CANCELED, CANCELED was: PARTIALLY FILLED @ PRICE(AMOUNT)
ORD_PRICE  |  float  |  Price
ORD_PRICE_AVG  |  float  |  Average price
ORD_CREATED_AT  |  string  |  Creation date/time
ORD_NOTIFY  |  int  |  1 if Notify flag is active, 0 if not
ORD_HIDDEN  |  int  |  1 if Hidden, 0 if not hidden
ORD_OCO  |  int  |  ID of the linked order, 0 otherwise
