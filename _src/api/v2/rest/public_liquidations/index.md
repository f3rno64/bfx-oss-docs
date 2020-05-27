---
id: rest-public-liquidations
title: Liquidation Feed
subtitle: Endpoint to retrieve liquidations. By default it will retrieve the most recent liquidations, but time-specific data can be retrieved using timestamps.
---

**Stream Fields**

Fields | Type | Description
--- | --- | ---
POS_ID |int| Position id
MTS                        | int | Millisecond timestamp
SYMBOL | string | Pair (e.g. tBTCUSD, …)
±AMOUNT | float | Size of the position. Positive values means a long position, negative values means a short position.
BASE_PRICE | float | The price at which user entered the position
IS_MATCH | int | 0 -> initial liquidation trigger, 1 market execution
IS_MARKET_SOLD |int| 0 -> position acquired by the system, 1 -> direct sell into the market
PRICE_ACQUIRED| float | The price at which the position has been acquired
