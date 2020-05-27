---
id: rest-auth-positions-audit
title: Positions Audit
subtitle: Return an audit of your positions. You latest positions will be retrieved by default, but ID's can be specified to retrieve an audit for specific positions.
---

**Fields**

Term | Type | Description
--|--|--
SYMBOL | string | Pair (tBTCUSD, …).
STATUS | string | Status (ACTIVE, CLOSED).
±AMOUNT | float | Size of the position. Positive values means a long position, negative values means a short position.
BASE_PRICE | float | Base price of the position. (Average traded price of the previous orders of the position)
MARGIN_FUNDING | float | The amount of funding being used for this position.
MARGIN_FUNDING_TYPE | int | 0 for daily, 1 for term.
POSITION_ID | int64 | Position ID
MTS_CREATE| int | Millisecond timestamp of creation
MTS_UPDATE| int | Millisecond timestamp of update
TYPE| int | Identifies the type of position: 'null' = Margin position, 1 = Derivatives position
COLLATERAL | float | The amount of collateral applied to the open position
COLLATERAL_MIN | float | The minimum amount of collateral required for the position
META | json string | Additional meta information about the position

**Ratelimit**: 45 req/min
