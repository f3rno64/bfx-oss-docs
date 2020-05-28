---
id: rest-auth-funding-offers
title: "Funding Offers"
subtitle: "Get active funding offers. A path param can be used to retrieve offers in a particular currency. All offers are returned if no currency is specified."
---

**Fields**

Term | Type | Description
-- | -- | --
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
MTS_CREATED  |  int  |  Millisecond Time Stamp when the offer was created
MTS_UPDATED  |  int  |  Millisecond Time Stamp when the offer was updated
AMOUNT  |  float  |  Amount of the offer
AMOUNT_ORIG  |  float  |  Amount of the offer when it was first created
TYPE  |  string  | "LIMIT, ..."
FLAGS  |  object  |  future params object (stay tuned)
STATUS  |  string  | Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
NOTIFY  |  int  |  0 if false, 1 if true
HIDDEN  |  int  |  0 if false, 1 if true
RENEW  |  int  |  0 if false, 1 if true

**Ratelimit**: 45 req/min
