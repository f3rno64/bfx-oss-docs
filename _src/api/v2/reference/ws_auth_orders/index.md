---
id: ws-auth-orders
title: "Orders"
subtitle: "Receive a snapshot and updates for any order events on your account."
dataSamples:
  json_snapshot_os_template0.json: Snapshot ('os') template
  json_update_on_ou_oc_template0.json: Update ('on', 'ou', 'oc') template
---

Subscribe to the account information channel to keep track of your orders. The account information channel provides a snapshot and updates on the orders in your account. The snapshot is delivered upon subscribing and any changes to your orders will be provided as updates for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Order events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Order events will use one of the following abbreviations: 'os' (order snapshot), 'on' (order new), 'ou' (order update), and 'oc' (order cancel).


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Order events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'os' (order snapshot), 'on' (order new), 'ou' (order update), 'oc' (order cancel).
ID  |  int  |  Order ID
GID | int |  Group ID
CID | int |  Client Order ID
SYMBOL  |  string  |  Pair (tBTCUSD, …)
MTS_CREATE | int | Millisecond timestamp of creation
MTS_UPDATE | int | Millisecond timestamp of update
AMOUNT  |  float  |  Positive means buy, negative means sell.
AMOUNT_ORIG  |  float  |  Original amount
ORDER_TYPE  |  string  |  The type of the order: LIMIT, MARKET, STOP, STOP LIMIT, TRAILING STOP, EXCHANGE MARKET, EXCHANGE LIMIT, EXCHANGE STOP, EXCHANGE STOP LIMIT, EXCHANGE TRAILING STOP, FOK, EXCHANGE FOK, IOC, EXCHANGE IOC.
TYPE_PREV  |  string  |  Previous order type
MTS_TIF  |  int  |  Millisecond timestamp of Time-In-Force: automatic order cancellation
FLAGS | int | See https://docs.bitfinex.com/v2/docs/flag-values.
ORDER_STATUS  |  string  |  Order Status: ACTIVE, EXECUTED @ PRICE(AMOUNT) e.g. "EXECUTED @ 107.6(-0.2)", PARTIALLY FILLED @ PRICE(AMOUNT), INSUFFICIENT MARGIN was: PARTIALLY FILLED @ PRICE(AMOUNT), CANCELED, CANCELED was: PARTIALLY FILLED @ PRICE(AMOUNT), RSN_DUST (amount is less than 0.00000001), RSN_PAUSE (trading is paused / paused due to AMPL rebase event)
PRICE  |  float  |  Price
PRICE_AVG  |  float  |  Average price
PRICE_TRAILING  |  float  |  The trailing price
PRICE_AUX_LIMIT  |  float  |  Auxiliary Limit price (for STOP LIMIT)
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN | int | 1 if Hidden, 0 if not hidden
PLACED_ID  |  int  |  If another order caused this order to be placed (OCO) this will be that other order's ID
ROUTING | string | indicates origin of action: BFX, ETHFX, API>BFX, API>ETHFX



::: callout info Multiple Flags
The summation of flags may result in multiple flags. For example 4160 (64 + 4096) means hidden post only.
:::
