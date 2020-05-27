---
id: rest-auth-alerts
title: Alert List
subtitle: Retrieve a list of active price alerts.
---

**Ratelimit**: 45 req/min

**Fields**

Term | Type | Description
-- | -- | --
INFO|  string  |  'type:pair:price'
TYPE | string | Alert type ('price')
PAIR | string | Pair on which the price alert is active (tBTCUSD, tBTCUST, ...)
PRICE | float | Alert price
