---
id: ws-auth-funding-offers
title: Funding Offers
subtitle: Receive a snapshot and updates for any position events on your account.
dataSamples:
  json_snapshot_fos.json: Snapshot ('fos')
  json_snapshot_fos.json: Snapshot ('fos')
  json_update_fon_fou_foc.json: Update ('fon', 'fou', 'foc')
  json_update_fon_fou_foc.json: Update ('fon', 'fou', 'foc')
---

Subscribe to the account information channel to keep track of your funding offers. The account information channel provides a snapshot and updates on the funding offers in your account. The snapshot is delivered upon subscribing and any changes to your positions will be provided as updates for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Funding offer events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Funding offer events will use one of the following abbreviations: 'fos' (funding offers snapshot), 'fon' (funding offer new), 'fou' (funding offers update), and 'foc' (funding offer cancel).


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Funding events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'fos' (funding offers snapshot), 'fon' (funding offer new), 'fou' (funding offers update), 'foc' (funding offer cancel)
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
MTS_CREATED  |  int  |  Millisecond Time Stamp when the offer was created
MSG_UPDATED  |  int  |  Millisecond Time Stamp when the offer was updated
AMOUNT  |  float  |  Amount the offer is for
AMOUNT_ORIG  |  float  |  Amount the offer was entered with originally
OFFER_TYPE  |  string  | "LIMIT" or "FRRDELTAVAR"
FLAGS  |  object  |  See https://docs.bitfinex.com/v2/docs/flag-values.
STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true
RATE_REAL  |  float  |  the calculated rate for FRR and FRRDELTAFIX
