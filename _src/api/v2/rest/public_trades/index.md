---
id: rest-public-trades
title: Trades
subtitle: The trades endpoint allows the retrieval of past public trades and includes details such as price, size, and time. Optional parameters can be used to limit the number of results; you can specify a start and end timestamp, a limit, and a sorting method.
---

**Response Details**

Fields | Type | Description
--- | --- | ---
ID | int | ID of the trade
MTS  |  int  |  millisecond time stamp
±AMOUNT  |  float  |  How much was bought (positive) or sold (negative).
PRICE  |  float  |  Price at which the trade was executed (trading tickers only)
RATE | float | Rate at which funding transaction occurred (funding tickers only)
PERIOD | int | Amount of time the funding transaction was for (funding tickers only)

The order that causes the trade (taker) determines whether a trade is logged as a buy or sell.

**Ratelimit**: 30 req/min
