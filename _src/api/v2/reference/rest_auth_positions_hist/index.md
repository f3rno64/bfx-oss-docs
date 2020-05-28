---
id: rest-auth-positions-hist
title: "Positions History"
subtitle: "Returns data on past positions. Timestamps can be used to retrieve results for a specific time period."
---

**Fields**

Term | Type | Description
--|--|--
SYMBOL | string | Pair (tBTCUSD, …).
STATUS | string | Status (ACTIVE, CLOSED).
±AMOUNT | float | Size of the position. A positive value indicates a long position; a negative value indicates a short position.
BASE_PRICE | float | Base price of the position. (Average traded price of the previous orders of the position)
MARGIN_FUNDING | float | The amount of funding being used for this position.
MARGIN_FUNDING_TYPE | int | 0 for daily, 1 for term.
POSITION_ID | int | position identifier
MTS_CREATE | time | Timestamp of creation (millis)
MTS_UPDATE | time | Timestamp of last update (millis)

**Ratelimit**: 45 req/min
