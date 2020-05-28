---
id: ws-public-ticker
title: "Ticker"
subtitle: "The ticker is a high level overview of the state of the market. It shows you the current best bid and ask, as well as the last trade price. It also includes information such as daily volume and how much the price has moved over the last day."
dataSamples:
  json_request_response_template0.json: Request / Response template
  json_snapshot_update_template0.json: Snapshot / Update template
---

Here is an example of a real ticker

`[ 2, 236.62, 9.0029, 236.88, 7.1138, -1.02, 0, 236.52, 5191.36754297, 250.01, 220.05 ]`


**Fields**

Fields | Type | Description
--- | --- | ---
CHANNEL_ID | integer | Channel ID
BID  |  float  |  Price of last highest bid
BID_SIZE  |  float  |  Size of the last highest bid
ASK  |  float  |  Price of last lowest ask
ASK_SIZE  |  float  |  Size of the last lowest ask
DAILY_CHANGE  |  float  |  Amount that the last price has changed since yesterday
DAILY_CHANGE_PERC  |  float  |  Amount that the price has changed expressed in percentage terms
LAST_PRICE  |  float  |  Price of the last trade.
VOLUME  |  float  |  Daily volume
HIGH  |  float  |  Daily high
LOW  |  float  |  Daily low
