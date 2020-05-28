---
id: ws-auth-input-order-update
title: "Update Order"
subtitle: "Update an existing order, can be used to update margin, exchange, and derivative orders."
dataSamples:
  json_payload_template0.json: Payload template
  json_payload_template1.json: Payload template
  json_payload_template2.json: Payload template
  json_payload_template3.json: Payload template
  json_payload_template4.json: Payload template
  json_response_template0.json: Response template
  json_response_template1.json: Response template
---

To update an order, construct a payload using the "ou" (order update) abbreviation and include the desired order details. Please look to the sidebar for examples.

When you update the order, you will receive a message of the appropriated type on the "account info" channel. Example responses are included in the sidebar. Please look to the [Orders](ref:ws-auth-orders) and [Notifications](ref:ws-auth-notifications) pages for further information, such as the response fields.

Order inputs require you to run the authentication code along with additional code for the input. The authentication code can be found  on our [Authenticated Channels](doc:ws-auth) and the additional code for inputs can be found on the [Websocket Inputs](ref:ws-input) page.


** Request Fields **

Name | Type | Description
-- | -- | --
id  |  int64  |  Order ID
cid  |  int45  |  Client Order ID
cid_date  |  string  |  Client Order ID Date
gid | int32 | Group Order ID
price | decimal string | Price
amount | decimal string | Amount
lev | int | Set the leverage for a derivative order, supported by derivative symbol orders only. The value should be between 1 and 100 inclusive. The field is optional, if omitted the default leverage value of 10 will be used.
delta | decimal string | Change of amount
price_aux_limit | decimal string | Auxiliary limit price
price_trailing | decimal string | Trailing price delta
flags | int16 | See https://docs.bitfinex.com/v2/docs/flag-values.
tif | datetime string | Time-In-Force: datetime for automatic order cancellation (ie. 2020-01-01 10:45:23) )


::: callout info Multiple Flags
The summation of flags may result in multiple flags. For example 4160 (64 + 4096) means hidden post only.
:::


**Response Fields**

Term | Type | Description
-- | -- | --
CHANNEL_ID | int | ID of the channel. (0 for account info messages)
EVENT | string | Type of event ('n' for notification)
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
