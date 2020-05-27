---
id: rest-public-stats1
title: Stats
subtitle: The Stats endpoint provides various statistics on a specified trading pair or funding currency. Use the available keys to specify which statistic you wish to retrieve. Please note that the "Side" path param is only required for the pos.size key.
---

**Response Details**

Fields | Type | Description
--- | --- | ---
MTS  |  int  | millisecond timestamp
VALUE  |  float  |  Total amount


**Available Keys**

Key | Description | Arguments | Example
--- | --- | --- | ---
pos.size | Total Open Position (long / short) | :1m :SYM_TRADING :SIDE | pos.size:1m:tBTCUSD:long , pos.size:1m:tBTCUSD:short
funding.size | Total Active Funding | :1m :SYM_FUNDING | funding.size:1m:fUSD
credits.size | Active Funding used in positions | :1m :SYM_FUNDING | credits.size:1m:fUSD
credits.size.sym | Active Funding used in positions (per trading symbol) | :1m :SYM_FUNDING :SYM_TRADING | credits.size.sym:1m:fUSD:tBTCUSD
vol.1d / vol.7d / vol.30d |  1d/7d/30d volume updates (updates every 30 minutes) | :30m:BFX | vol.1d:30m:BFX
vwap | Volume weighted average price {updates current day value every 3 min) | :30m:SYM_TRADING | vwap:1d:tBTCUSD/hist


::: callout warning 
Specifying either 'hist' or 'last' is mandatory for all keys.
:::


**Ratelimit**: 90 req/min
