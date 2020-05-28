---
id: rest-public-candles
title: "Candles"
subtitle: "The Candles endpoint provides OCHL (Open, Close, High, Low) and volume data for the specified funding currency or trading pair. The endpoint provides the last 100 candles by default, but a limit and a start and/or end timestamp can be specified."
---

**Response Details**

Fields | Type | Description
--- | --- | ---
MTS | int | millisecond time stamp
OPEN  |  float  |  First execution during the time frame
CLOSE  |  float  | Last execution during the time frame
HIGH  |  float  |  Highest execution during the time frame
LOW  |  float  |  Lowest execution during the timeframe
VOLUME  |  float  |  Quantity of symbol traded within the timeframe


**Available Keys**

Key | Description | Arguments | Example
--- | --- | --- | ---
trade | Trading Candles | :TF :SYM_TRADING | trade :1m :tBTCUSD
trade | Funding Candles | :TF :SYM_FUNDING:pPERIOD | trade :1m :fUSD :p30
trade | Aggregate Funding Candles (AGGR=[10,30]) | :TF :SYM_FUNDING :aAGGR :pPER_START :p :PER_END | trade :1m :fUSD :a10 :p2 :p10 , trade :1m :fUSD :a10 :p11 :p20 , trade :1m :fUSD :a10 :p21 :p30 , trade :1m :fUSD :a30 :p2 :p30


::: callout warning undefined
Specifying either 'hist' or 'last' is mandatory for all keys.
:::


**Ratelimit**: 60 req/min
