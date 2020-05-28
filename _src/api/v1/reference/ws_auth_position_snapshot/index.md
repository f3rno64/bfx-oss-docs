---
id: ws-auth-position-snapshot
title: "Position Snapshot"
dataSamples:
  json_response0.json: Response
---

**Fields**

Term | Type | Description
--|--|--
POS_PAIR | string | Pair (BTCUSD, …).
POS_STATUS | string | Status (ACTIVE, CLOSED).
±POS_AMOUNT | float | Size of the position. Positive values means a long position, negative values means a short position.
POS_BASE_PRICE | float | The price at which you entered your position.
POS_MARGIN_FUNDING | float | The amount of funding being used for this position.
POS_MARGIN_FUNDING_TYPE | int | 0 for daily, 1 for term.
