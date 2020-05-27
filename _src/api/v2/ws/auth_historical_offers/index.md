---
id: ws-auth-historical-offers
title: Historical Offers (deprecated)
subtitle: Deprecated channel that provides your historical funding offers.
dataSamples:
  json_snapshot.json: Snapshot
---

**Stream Fields**

Term | Type | Description
-- | -- | --
ID  |  integer  |  Offer ID
CURRENCY  |  string  |  The currency of the offer (fUSD, etc)
MTS_CREATED  |  int  |  Millisecond Time Stamp when the offer was created
MSG_UPDATED  |  int  |  Millisecond Time Stamp when the offer was created
AMOUNT  |  float  |  Amount the offer is for
AMOUNT_ORIG  |  float  |  Amount the offer was entered with originally
TYPE  |  string  | "lend" or "loan"
FLAGS  |  object  |  See https://docs.bitfinex.com/v2/docs/flag-values.
STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
INSURE  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true
RATE_REAL  |  float  |  the calculated rate for FRR and FRRDELTAFIX
