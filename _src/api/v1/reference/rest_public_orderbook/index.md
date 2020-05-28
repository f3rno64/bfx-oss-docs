---
id: rest-public-orderbook
title: "Orderbook"
subtitle: "Get the full order book."
---

** Request Details **

Key  |  Required  |  Type  |  Default  |  Description
--|--|--|--|--
limit_bids  |  false  |  [int]  |  50  |  Limit the number of bids returned. May be 0 in which case the array of bids is empty
limit_asks  |  false  |  [int]  |  50  |  Limit the number of asks returned. May be 0 in which case the array of asks is empty
group  |  false  |  [0/1]  |  1  |  If 1, orders are grouped by price in the orderbook. If 0, orders are not grouped and sorted individually

** Response Detail **

key | Type
-- | --
bids  |  [array]
price  |  [price]
amount  |  [decimal]
timestamp  |  [time]
asks  |  [array]
price  |  [price]
amount  |  [decimal]
timestamp  |  [time] The time of the last change to the order book


**Ratelimit**: 30 req/min
