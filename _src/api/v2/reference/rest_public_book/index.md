---
id: rest-public-book
title: "Book"
subtitle: "The Public Books endpoint allows you to keep track of the state of Bitfinex order books on a price aggregated basis with customizable precision. Raw books can be retrieved by using precision R0."
---

**Response Details**

Fields | Type | Description
--- | --- | ---
PRICE | float | Price level (Trading only)
RATE | float | Rate level (Funding only)
PERIOD | float | Period level (Funding only)
COUNT | int | Number of orders at that price level
±AMOUNT | float | Total amount available at that price level.
ORDER_ID | int | Order ID

For Trading: if AMOUNT > 0 then bid else ask.
For Funding: if AMOUNT > 0 then ask else bid.

**Ratelimit**: 30 req/min
