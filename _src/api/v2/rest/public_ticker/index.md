---
id: rest-public-ticker
title: Ticker
subtitle: The ticker endpoint provides a high level overview of the state of the market for a specified pair. It shows the current best bid and ask, the last traded price, as well as information on the daily volume and price movement over the last day.
---

**Response Details**

Fields | Type | Description
--- | --- | ---
FRR  |  float  |  Flash Return Rate - average of all fixed rate funding over the last hour (funding tickers only)
BID  |  float  |  Price of last highest bid
BID_PERIOD  |  int  |  Bid period covered in days (funding tickers only)
BID_SIZE  |  float  | Sum of the 25 highest bid sizes
ASK  |  float  |  Price of last lowest ask
ASK_PERIOD  |  int  |  Ask period covered in days (funding tickers only)
ASK_SIZE  |  float  |  Sum of the 25 lowest ask sizes
DAILY_CHANGE  |  float  |  Amount that the last price has changed since yesterday
DAILY_CHANGE_RELATIVE  |  float  |  Relative price change since yesterday (*100 for percentage change)
LAST_PRICE  |  float  |  Price of the last trade
VOLUME  |  float  |  Daily volume
HIGH  |  float  |  Daily high
LOW  |  float  |  Daily low
FRR_AMOUNT_AVAILABLE | float | The amount of funding that is available at the Flash Return Rate (funding tickers only)

**Ratelimit**: 30 req/min
