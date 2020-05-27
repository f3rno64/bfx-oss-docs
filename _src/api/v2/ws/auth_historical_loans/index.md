---
id: ws-auth-historical-loans
title: Historical Loans (deprecated)
subtitle: Deprecated channel that provides historical information on your provided funding which was not used in active positions.
dataSamples:
  json_snapshot.json: Snapshot
---

**Stream Fields**

Term | Type | Description
-- | -- | --
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
SIDE  |  string  |  "Lend" or "Loan"
MTS_CREATE  |  int  |  Millisecond Time Stamp when the offer was created
MTS_UPDATE  |  int  |  Millisecond Time Stamp when the offer was created
AMOUNT  |  float  |  Amount the offer is for
FLAGS  |  object  |  future params object (stay tuned)
STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
MTS_OPENING  |  int  |  Millisecond Time Stamp for when the loan was opened
MTS_LAST_PAYOUT  |  int  |  Millisecond Time Stamp for when the last payout was made
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
INSURED  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true
RATE_REAL  |  float  |  the calculated rate for FRR and FRRDELTAFIX
NO_CLOSE  |  int  | If funding will be returned when position is closed. 0 if false, 1 if true
