---
id: ws-auth-funding-loans
title: Funding Loans
subtitle: Receive a snapshot and updates for any funding loans (funds not used in active positions) on your account.
dataSamples:
  json_snapshot_fls.json: Snapshot ('fls')
  json_snapshot_fls.json: Snapshot ('fls')
  json_update_fln_flu_flc.json: Update ('fln', 'flu', 'flc')
  json_update_fln_flu_flc.json: Update ('fln', 'flu', 'flc')
---

Subscribe to the account information channel to keep track of your funding loans. The account information channel provides a snapshot and updates on the funding loans in your account. The snapshot is delivered upon subscribing and any changes to your funding loans will be provided as updates for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Funding loan events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Funding loan events will use one of the following abbreviations: 'fls' (funding loans snapshot), 'fln' (funding loan new), 'flu' (funding loans update), 'flc' (funding loan close).


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Funding loan events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'fls' (funding loans snapshot), 'fln' (funding loan new), 'flu' (funding loan update), 'flc' (funding loan close).
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
SIDE  |  int |   1 if you are the lender, 0 if you are both the lender and borrower, -1 if you're the borrower
MTS_CREATE  |  int  |  Millisecond Time Stamp when the offer was created
MTS_UPDATE  |  int  |  Millisecond Time Stamp when the offer was updated
AMOUNT  |  float  |  Amount the offer is for
FLAGS  |  object  |  future params object (stay tuned)
STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
MTS_OPENING  |  int  |  Millisecond Time Stamp of when funding was opened
MTS_LAST_PAYOUT  |  int  |  Millisecond Time Stamp of when last payout was received
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true
RATE_REAL  |  float  |  the calculated rate for FRR and FRRDELTAFIX
NO_CLOSE  |  int  |  If funding will be returned when position is closed. 0 if false, 1 if true
