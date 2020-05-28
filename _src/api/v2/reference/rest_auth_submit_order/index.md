---
id: rest-auth-submit-order
title: "Submit Order"
subtitle: "Submit an Order."
---

::: callout info meta: {aff_code: ...}
API orders can now pass an affiliate code through which you can earn rebates. To learn more about these rebates and our affiliate program, please look at the relevant [announcement](https://blog.bitfinex.com/announcements/the-revolution-continues/) and [knowledge base article](https://support.bitfinex.com/hc/en-us/articles/360036965234-The-Bitfinex-Affiliate-Program).
:::


::: callout info Multiple Flags
The summation of flags may result in multiple flags. For example 4160 (64 + 4096) means hidden post only.
:::


**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('on-req', 'oc-req', 'uca', 'fon-req', 'foc-req')
MESSAGE_ID  |  int  |  unique ID of the message
ID  |  int  |  Order ID
GID | int |  Group ID
CID | int |  Client Order ID
SYMBOL  |  string  |  Pair (tBTCUSD, …)
MTS_CREATE | int | Millisecond timestamp of creation
MTS_UPDATE | int | Millisecond timestamp of update
AMOUNT  |  float  |  Positive means buy, negative means sell.
AMOUNT_ORIG  |  float  |  Original amount
TYPE  |  string  |  The type of the order: LIMIT, MARKET, STOP, STOP LIMIT, TRAILING STOP, EXCHANGE MARKET, EXCHANGE LIMIT, EXCHANGE STOP, EXCHANGE STOP LIMIT, EXCHANGE TRAILING STOP, FOK, EXCHANGE FOK, IOC, EXCHANGE IOC.
TYPE_PREV  |  string  |  Previous order type
MTS_TIF  |  int  |  Millisecond timestamp of Time-In-Force: automatic order cancellation
ORDER_STATUS  |  string  |  Order Status: ACTIVE, EXECUTED @ PRICE(AMOUNT) e.g. "EXECUTED @ 107.6(-0.2)", PARTIALLY FILLED @ PRICE(AMOUNT), INSUFFICIENT MARGIN was: PARTIALLY FILLED @ PRICE(AMOUNT), CANCELED, CANCELED was: PARTIALLY FILLED @ PRICE(AMOUNT), RSN_DUST (amount is less than 0.00000001), RSN_PAUSE (trading is paused / paused due to AMPL rebase event)
PRICE  |  float  |  Price
PRICE_AVG  |  float  |  Average price
PRICE_TRAILING  |  float  |  The trailing price
PRICE_AUX_LIMIT  |  float  |  Auxiliary Limit price (for STOP LIMIT)
HIDDEN  |  int  |  0 if false, 1 if true
PLACED_ID  |  int  |  If another order caused this order to be placed (OCO) this will be that other order's ID
ROUTING | string | indicates origin of action: BFX, ETHFX, API>BFX, API>ETHFX
FLAGS | int | See https://docs.bitfinex.com/v2/docs/flag-values.
META | json string | Additional meta information about the order ( $F7 = IS_POST_ONLY (0 if false, 1 if true), $F33 = Leverage (int))
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification
