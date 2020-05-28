---
id: ws-public-raw-books
title: "Raw Books"
subtitle: "The Raw Books channel provides the most granular books."
dataSamples:
  json_request_response_template0.json: Request / Response template
  json_request_response_template1.json: Request / Response template
  json_request_response_template2.json: Request / Response template
  json_snapshot_template0.json: Snapshot template
  json_snapshot_template1.json: Snapshot template
  json_snapshot_template2.json: Snapshot template
  js_updates0.js: Updates
---
```javascript [1590649447409002-javascript]
const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'book',
  prec: 'R0',
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))
```

```shell [1590649447409002-shell]
wscat -c wss://api-pub.bitfinex.com/ws/2
{ "event": "subscribe", "channel": "book", "prec": "R0", "symbol": "tBTCUSD" }
```

```python [1590649447409002-python]
ws = websocket.WebSocketApp('wss://api-pub.bitfinex.com/ws/2')

ws.on_open = lambda self: self.send('{ "event": "subscribe", "channel": "book", "prec": "R0", "symbol": "tBTCUSD" }')

ws.on_message = lambda self, evt:  print (evt)
```

::: callout info Note
PRICE = 0 means that you have to remove the order from your book.
:::


**Request Fields**

Fields | Type | Description
--- | --- | ---
SYMBOL | String | Trading pair or funding currency
PREC | string | Level of price aggregation (R0 for Raw Books).<br>
LEN | string | Number of price points ("1", "25", "100") [default="25"]

**Stream Fields**

Fields | Type | Description
-- | -- | --
CHANNEL_ID | int | Identification number assigned to the channel for the duration of this connection.
ORDER_ID | int | Identification number of the order.
OFFER_ID | int | Identification number of the funding offer.
PRICE | float | Order price; if 0 you have to remove the order from your book
PERIOD | int | Funding period in days
RATE | float | Funding rate for the offer; if 0 you have to remove the offer from your book
±AMOUNT | float |  Amount of order
Trading: if AMOUNT > 0 then bid else ask; Funding: if AMOUNT < 0 then bid else ask;


** Algorithm to create and keep a book instance updated **

1. subscribe to channel with R0 precision
2. receive the raw book snapshot and create your in-memory book structure
3. when *PRICE* > 0 then you have to add or update the order
4. when *PRICE* = 0 then you have to delete the order

**Note:** The algorithm for raw books using `R0` is based on the *ORDER ID* instead of *COUNT*, *PRICE* and *AMOUNT*.
If *LENGTH* is set to 25, you will get 25 orders (not price levels). If all orders belong to the same price level, your orderbook will just have that one price level.

**Checksum**
An Order Book Checksum can be requested through the Websocket configuration. You can find out more [here](https://docs.bitfinex.com/docs/ws-general#section-configuration).
