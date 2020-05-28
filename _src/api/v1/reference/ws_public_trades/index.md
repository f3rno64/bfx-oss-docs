---
id: ws-public-trades
title: "Trades"
subtitle: "This channel sends a trade message whenever a trade occurs at Bitfinex. It includes all the pertinent details of the trade, such as price, size and time."
dataSamples:
  json_request_response_template0.json: Request / Response template
  json_snapshot_update_template0.json: Snapshot / Update template
  json_snapshot_update_template1.json: Snapshot / Update template
---

here is an example of a real trade

`[ 5, 'te', '1234-BTCUSD', 1443659698, 236.42, 0.49064538 ]`
`[ 5, 'tu', '1234-BTCUSD', 15254529, 1443659698, 236.42, 0.49064538 ]`


**Fields**

Fields | Type | Description
--- | --- | ---
SEQ  |  string  |  Trade sequence id
ID  |  int  |  Trade database id
TIMESTAMP  |  int  |  Unix timestamp of the trade.
PRICE  |  float  |  Price at which the trade was executed
±AMOUNT  |  float  |  How much was bought (positive) or sold (negative).
The order that causes the trade determines if it is a buy or a sell.


::: callout info NOTE
SEQ is different from canonical ID. Websocket server uses SEQ strings to push trades with low latency. After a “te” message you receive shortly a “tu” message that contains the real trade “ID”.
:::
