---
id: rest-auth-funding-trades-hist
title: "Funding Trades"
subtitle: "Get funding trades. Can be used to request funding trades for a specific currency or to retrieve trades for all currencies at once."
---

**Fields**

Term | Type | Description
-- | -- | --
ID  |  integer  |  Offer ID
SYMBOL  |  string  |  The currency of the offer (fUSD, etc)
MTS_CREATE  |  int  |  Millisecond Time Stamp when the offer was created
OFFER_ID  |  int  |  The ID of the offer
AMOUNT  |  float  |  Amount the offer is for
RATE  |  float  |  Rate of the offer
PERIOD  |  int  |  Period of the offer
MAKER  |  int  |  1 if true, -1 if false Whether the offer took liquidity off the funding book

**Ratelimit**: 45 req/min
