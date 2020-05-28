---
id: ws-public-raw-order-books
title: "Raw Order Books"
subtitle: "These are the most granular books."
dataSamples:
  json_request_response_template0.json: Request / Response template
  json_snapshot_update_template0.json: Snapshot / Update template
---

::: callout info Note
PRICE = 0 means that you have to remove the order from your book.
:::


**Fields**

Fields | Type | Description
-- | -- | --
PRECISION | string | Aggregation level (R0).
ORD_ID | int | Order id.
ORD_PRICE | float | Order price.
±AMOUNT | float | Total amount available at that price level. Positive values mean bid, negative values mean ask.
LENGTH | string | Number of price points (“25”)
