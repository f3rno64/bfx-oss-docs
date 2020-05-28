---
id: ws-auth-funding-trades
title: "Funding Trades"
subtitle: "Receive updates for any trade events on your account."
dataSamples:
  json_update_fte_ftu_template0.json: Update ('fte', 'ftu') template
  json_update_fte_ftu_template1.json: Update ('fte', 'ftu') template
---

Subscribe to the account information channel to keep track of your funding trades. The account information channel will provide a feed of your funding trades for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Trade events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Funding trade events will use one of the following abbreviations: 'fte' (funding trade executed) and 'ftu' (funding trade update).


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Funding trades events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'fte' (funding trade executed), 'ftu' (funding trade update)
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
MTS_CREATE  |  int  |  Millisecond Time Stamp when the offer was created
OFFER_ID  |  int  |  The ID of the offer
AMOUNT  |  float  |  Amount the offer is for
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
MAKER  |  int  |  1 if true, 'null' if false; Indicates if the order was executed as maker (true) or taker (false)
