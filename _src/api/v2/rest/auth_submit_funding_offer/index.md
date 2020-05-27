---
id: rest-auth-submit-funding-offer
title: Submit Funding Offer
subtitle: Submit a new funding offer.
---

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
AMOUNT  |  float  |  Current amount of the offer
AMOUNT_ORIG  |  float  |  Amount of the initial offer
OFFER_TYPE  |  string  | Offer Type
FLAGS  |  int |  Flags active on the offer; see https://docs.bitfinex.com/v2/docs/flag-values
OFFER_STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
NOTIFY  |  boolean |  True / false
HIDDEN  |  int  |  0 if false, 1 if true
RENEW  |  boolean |  True / false
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification
