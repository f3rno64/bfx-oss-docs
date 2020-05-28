---
id: ws-auth-input-offer-cancel
title: "Cancel Offer"
subtitle: "Cancel a funding offer."
dataSamples:
  json_payload_template0.json: Payload template
  json_response_template0.json: Response template
---

To cancel an offer, construct a payload using the "foc" (funding offer cancel) abbreviation. Include the Offer ID in the payload. Please look to the sidebar for a model and example.

When you cancel an offer, you will receive a message of the appropriated type on the "account info" channel. Example responses are included in the sidebar. Please look to the [Funding Offers](ref:ws-auth-funding-offers) page for further information.

Funding offer inputs require you to run the authentication code along with additional code for the input. The authentication code can be found  on our [Authenticated Channels](doc:ws-auth) and the additional code for inputs can be found on the [Websocket Inputs](ref:ws-input) page.


**Request Fields**

Name | Type | Description
-- | -- | --
id  |  int  |  Offer ID

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

