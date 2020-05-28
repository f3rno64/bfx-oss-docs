---
id: rest-auth-funding-offers-hist
title: "Funding Offers History"
subtitle: "Get past inactive funding offers. Limited to last 3 days."
---

**Fields**

Term | Type | Description
-- | -- | --
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
MTS_CREATED  |  int  |  Millisecond Time Stamp when the offer was created
MSG_UPDATED  |  int  |  Millisecond Time Stamp when the offer was created
AMOUNT  |  float  |  Amount the offer is for
AMOUNT_ORIG  |  float  |  Amount the offer was entered with originally
TYPE  |  string  | "lend" or "loan"
FLAGS  |  object  |  future params object (stay tuned)
STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true

**Ratelimit**: 45 req/min
