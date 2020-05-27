---
id: rest-public-tickers
title: Tickers
subtitle: The tickers endpoint provides a high level overview of the state of the market. It shows the current best bid and ask, the last traded price, as well as information on the daily volume and price movement over the last day. The endpoint can retrieve multiple tickers with a single query.
---

::: callout info Symbols
A list of possible trading pairs can be retrieved from [Configs](ref:rest-public-conf) by calling [pub:list:pair:exchange](https://api-pub.bitfinex.com/v2/conf/pub:list:pair:exchange). The API uses the format "t[Symbol]" (i.e. tBTCUSD, tETHUSD, tBTCUST, ...).

For funding use format "f[Symbol]" (e.g. fUSD, fBTC, fETH, ...). A list of all possible symbols can be retrieved from [Configs](ref:rest-public-conf) by calling [pub:list:currency](https://api-pub.bitfinex.com/v2/conf/pub:list:currency). Please note that not all listed currencies can be provided as funding.
:::


**Response Details**

Fields | Type | Description
--- | --- | ---
SYMBOL | string | The symbol of the requested ticker data
FRR  |  float  |  Flash Return Rate - average of all fixed rate funding over the last hour (funding tickers only)
BID  |  float  |  Price of last highest bid
BID_PERIOD  |  int  |  Bid period covered in days (funding tickers only)
BID_SIZE  |  float  |  Sum of the 25 highest bid sizes
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
