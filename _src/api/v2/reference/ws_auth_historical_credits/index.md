---
id: ws-auth-historical-credits
title: "Historical Credits (deprecated)"
subtitle: "Deprecated channel that provides historical information on your provided funding used in active positions."
dataSamples:
  json_snapshot0.json: Snapshot
---

**Stream Fields**

Term | Type | Description
-- | -- | --
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
SIDE  |  string  |  "Lend" or "Loan"
MTS_CREATE  |  int  |  Millisecond Time Stamp when the offer was created
MSG_UPDATE  |  int  |  Millisecond Time Stamp when the offer was created
AMOUNT  |  float  |  Amount the offer is for
FLAGS  |  object  |  future params object (stay tuned)
STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
MTS_OPENING  |  int  |  Millisecond Time Stamp when funding opened
MTS_LAST_PAYOUT  |  int  |  Millisecond Time Stamp when last payout received
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
INSURED  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true
RATE_REAL  |  float  |  the calculated rate for FRR and FRRDELTAFIX
NO_CLOSE  |  int  |  0 if false, 1 if true Whether the funding will be closed when the position is closed
POSITION_PAIR  |  string  |  Pair of the position that the funding was used for
