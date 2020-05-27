---
id: rest-auth-funding-close
title: Funding Close
subtitle: Return Taken "Used" or "Unused" funding.
---

**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('on-req', 'oc-req', 'uca', 'fon-req', 'foc-req')
MESSAGE_ID  |  int  |  unique ID of the message
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
CREDIT_SIDE | string | "Lend" or "Loan"
MTS_CREATED  |  int  |  Millisecond Time Stamp when the offer was created
MTS_UPDATED  |  int  |  Millisecond Time Stamp when the offer was created
AMOUNT  |  float  |  Amount the offer is for
FLAGS | int | See https://docs.bitfinex.com/v2/docs/flag-values.
OFFER_STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED, CLOSED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
CREDIT_OPENING_DATE | str | Date opened
CREDIT_LAST_PAYOUT | str | Date last funding payment
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true
NO_CLOSE | str | Whether or not the funding offer had "keep" selected
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification


::: callout warning Offer ID
Please note that the Offer ID needed is not the one received from the initial offer submission response. The Offer ID should be retrieved via the [Funding Loans](https://docs.bitfinex.com/v2/reference#rest-auth-funding-loans) and [Funding Credits](https://docs.bitfinex.com/reference#rest-auth-funding-credits) endpoints.
:::
