---
id: rest-public-trades
title: "Trades"
subtitle: "Get a list of the most recent trades for the given symbol."
---

** Request Details **

Key  |  Required  |  Type  |  Default  |  Description
--|--|--|--|--
timestamp  |  false  |  [time]  |    |  Only show trades at or after this timestamp
limit_trades  |  false  |  [int]  |  50  |  Limit the number of trades returned. Must be >= 1

** Response Details **

Key  |  Type  |  Description
--|--|--
tid  |  [integer]  |
timestamp  |  [time]  |
price  |  [price]  |
amount  |  [decimal]  |
exchange  |  [string]  |  "bitfinex"
type  |  [string]  |  “sell” or “buy” (can be “” if undetermined)


**Ratelimit**: 20 req/min
