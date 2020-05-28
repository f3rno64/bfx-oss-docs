---
id: ws-auth-input-offer-new
title: "New Offer"
subtitle: "Create a new funding offer."
dataSamples:
  json_payload_template0.json: Payload template
  json_payload_template1.json: Payload template
  json_response_template0.json: Response template
  json_response_template1.json: Response template
---

Create a new funding offer by constructing a payload using the "fon" (funding offer new) abbreviation and include an offer details object. Please look to the sidebar for examples.

Upon sending an offer, you will receive a confirmation as an 'n' (notification) event and, if the offer is placed successfully, a confirmation through a "fon" (funding offer new) event. Example responses are included in the sidebar. Please look to the [Funding Offers](ref:ws-auth-funding-offers) and [Notifications](ref:ws-auth-notifications) pages for further information.

Funding offer inputs require you to run the authentication code along with additional code for the input. The authentication code can be found  on our [Authenticated Channels](doc:ws-auth) and the additional code for inputs can be found on the [Websocket Inputs](ref:ws-input) page.


**Request Fields**

Name | Type | Description
-- | -- | --
type  |  string  |  LIMIT, FRRDELTAVAR
symbol  |  string  |  symbol (fUSD, fBTC, ...)
amount  |  decimal string  |  Positive for buy, negative for sell
rate  |  decimal string  |  Rate
period  |  decimal  |  Time period of offer. Minimum 2 days. Maximum 30 days.
flags | int16 | See https://docs.bitfinex.com/v2/docs/flag-values.

**Response Fields**

Term | Type | Description
-- | -- | --
CHANNEL_ID | int | ID of the channel. (0 for account info messages)
EVENT | string | Type of event ('n' for notification)
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
