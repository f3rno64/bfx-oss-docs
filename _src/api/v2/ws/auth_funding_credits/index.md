---
id: ws-auth-funding-credits
title: Funding Credits
subtitle: Receive a snapshot and updates for any funding credits (funds used in active positions) on your account.
dataSamples:
  json_snapshot_fcs.json: Snapshot ('fcs')
  json_snapshot_fcs.json: Snapshot ('fcs')
  json_update_fcn_fcu_fcc.json: Update ('fcn', 'fcu', 'fcc')
  json_update_fcn_fcu_fcc.json: Update ('fcn', 'fcu', 'fcc')
---

Subscribe to the account information channel to keep track of your funding credits. The account information channel provides a snapshot and updates on the funding credits in your account. The snapshot is delivered upon subscribing and any changes to your funding credits will be provided as updates for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Funding credits events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Funding credits events will use one of the following abbreviations: 'fcs' (funding credits snapshot), 'fcn' (funding credits new), 'fcu' (funding credits update), 'fcc' (funding credits close).


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Funding credits events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'fcs' (funding credits snapshot), 'fcn' (funding credits new), 'fcu' (funding credits update), 'fcc' (funding credits close).
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
SIDE  |  int |   1 if you are the lender, 0 if you are both the lender and borrower, -1 if you're the borrower
MTS_CREATE  |  int  |  Millisecond Time Stamp when the offer was created
MSG_UPDATE  |  int  |  Millisecond Time Stamp when the offer was created
AMOUNT  |  float  |  Amount the offer is for
FLAGS  |  object  |  future params object (stay tuned)
STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
MTS_OPENING  |  int  |  Millisecond Time Stamp when the funding was opened
MTS_LAST_PAYOUT  |  int  |  Millisecond Time Stamp when the last payout was received
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true
RATE_REAL  |  float  |  the calculated rate for FRR and FRRDELTAFIX
NO_CLOSE  |  int  |  0 if false, 1 if true (whether the funding should be closed when the position is closed)
POSITION_PAIR  |  string  |  The pair that the currency was used for
