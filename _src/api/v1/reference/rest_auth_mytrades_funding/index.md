---
id: rest-auth-mytrades-funding
title: "Past Funding Trades"
subtitle: "View your past trades."
---

**Response Details**

An array of trades.

Key | Type | Description
-- | -- | --
rate  |  [rate]  |
period  |  [period]  |
amount  |  [decimal]  |
type  |  [string]  |  Sell or Buy
tid  |  [integer]  |  unique identification number of the trade
offer_id  |  [integer]  |  unique identification number of the parent offer of the trade


**Ratelimit**: 15 req/min
