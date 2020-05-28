---
id: rest-auth-past-trades
title: "Past Trades"
subtitle: "View your past trades."
---

**Response Details**

An array of trades.

Key | Type | Description
-- | -- | --
price  |  [price]  |
amount  |  [decimal]  |
exchange  |  [string]  |
type  |  [string]  |  Sell or Buy
fee_currency  |  [string]  |  Currency you paid this trade’s fee in
fee_amount  |  [decimal]  |  Amount of fees you paid for this trade
tid  |  [integer]  |  unique identification number of the trade
order_id  |  [integer]  |  unique identification number of the parent order of the trade


**Ratelimit**: 15 req/min
