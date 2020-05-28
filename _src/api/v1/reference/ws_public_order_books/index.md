---
id: ws-public-order-books
title: "Order Books"
subtitle: "The Order Books channel allow you to keep track of the state of the Bitfinex order book. It is provided on a price aggregated basis, with customizable precision. After receiving the response, you will receive a snapshot of the book, followed by updates upon any changes to the book."
dataSamples:
  json_request_response_template0.json: Request / Response template
  json_snapshot_update_template0.json: Snapshot / Update template
---

**Fields**

Fields | Type | Description
--- | --- | ---
PRECISION | string | Level of price aggregation (P0, P1, P2, P3).<br>The default is P0.
FREQUENCY | string | Frequency of updates (F0, F1).<br>F0=realtime / F1=2sec.<br>The default is F0.
PRICE | float | Price level.
COUNT | int | Number of orders at that price level.
±AMOUNT | float | Total amount available at that price level.<br>Positive values mean bid, negative values mean ask.
LENGTH | string | Number of price points ("25", "100") [default="25"]

**Precision Levels per Pair**

Pair | Precision Level | Number of significant figures | Example
--- | --- | --- | ---
BTCUSD | P0 | 2 | $0.01
...    | P1 | 1 | $0.10
...    | P2 | 0 | $1
...    | P3 | -1| $10
LTCUSD | P0 | 4 | $0.0001
...    | P1 | 3 | $0.001
...    | P2 | 2 | $0.01
...    | P3 | 1 | $0.1
LTCBTC | P0 | 6 | ฿0.000001
...    | P1 | 5 | ฿0.00001
...    | P2 | 4 | ฿0.0001
...    | P3 | 3 | ฿0.001
ETHUSD | P0 | 4 | $0.0001
...    | P1 | 3 | $0.001
...    | P2 | 2 | $0.01
...    | P3 | 1 | $0.1
ETHBTC | P0 | 6 | ฿0.000001
...    | P1 | 5 | ฿0.00001
...    | P2 | 4 | ฿0.0001
...    | P3 | 3 | ฿0.001




::: callout warning Error Codes
10011 : Unknown Book precision
10012 : Unknown Book length
:::


::: callout info NOTE
COUNT=0 means that you have to remove the price level from your book.
:::
