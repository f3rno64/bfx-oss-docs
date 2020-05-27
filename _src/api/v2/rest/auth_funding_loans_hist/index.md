---
id: rest-auth-funding-loans-hist
title: Funding Loans History
subtitle: Inactive funds not used in positions. Limited to last 3 days.
---

**Fields**

Term | Type | Description
-- | -- | --
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
SIDE  |  int |  1 if you are the lender, 0 if you are both the lender and borrower, -1 if you're the borrower
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
RENEW  |  int  |  0 if false, 1 if true
NO_CLOSE  |  int  | If funding will be returned when position is closed. 0 if false, 1 if true

**Ratelimit**: 45 req/min
