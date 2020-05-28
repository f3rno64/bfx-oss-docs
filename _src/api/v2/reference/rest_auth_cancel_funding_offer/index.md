---
id: rest-auth-cancel-funding-offer
title: "Cancel Funding Offer"
subtitle: "Cancels an existing Funding Offer based on the offer ID entered."
---

::: callout info Offer ID
The offer ID can be retrieved by calling the [Funding Offers](https://docs.bitfinex.com/reference#rest-auth-funding-offers) endpoint.
:::


**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('on-req', 'oc-req', 'uca', 'fon-req', 'foc-req')
MESSAGE_ID  |  int  |  unique ID of the message
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
MTS_CREATED  |  int  |  Millisecond Time Stamp when the offer was created
MTS_UPDATED  |  int  |  Millisecond Time Stamp when the offer was created
AMOUNT  |  float  |  Amount the offer is for
AMOUNT_ORIG  |  float  |  Amount the offer was entered with originally
TYPE  |  string  | Offer Type
FLAGS  |  object  |  future params object (stay tuned)
OFFER_STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
NOTIFY  |  boolean |  True / false
HIDDEN  |  int  |  0 if false, 1 if true
RENEW  |  boolean |  True / false
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification
