---
id: ws-public-books
title: "Books"
subtitle: "The Order Books channel allows you to keep track of the state of the Bitfinex order book. It is provided on a price aggregated basis with customizable precision. Upon connecting, you will receive a snapshot of the book followed by updates for any changes to the state of the book."
dataSamples:
  js_request_response0.js: Request / Response
  js_snapshot0.js: Snapshot
  js_update0.js: Update
---
```javascript [1590649447409001-javascript]
const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'book', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))
```

```shell [1590649447409001-shell]
wscat -c wss://api-pub.bitfinex.com/ws/2
{ "event": "subscribe", "channel": "book", "symbol": "tBTCUSD" }

```

```python [1590649447409001-python]
ws = websocket.WebSocketApp('wss://api-pub.bitfinex.com/ws/2')

ws.on_open = lambda self: self.send('{ "event": "subscribe", "channel": "book", "symbol": "tBTCUSD"}')

ws.on_message = lambda self, evt:  print (evt)
```

**Request Fields**

Fields | Type | Description
--- | --- | ---
SYMBOL | String | Trading pair or funding currency
PRECISION | string | Level of price aggregation (P0, P1, P2, P3, P4).<br>The default is P0
FREQUENCY | string | Frequency of updates (F0, F1).<br>F0=realtime / F1=2sec.<br>The default is F0.
LENGTH | string | Number of price points ("25", "100") [default="25"]

** Stream Fields **

Fields | Type | Description
--- | --- | ---
CHANNEL_ID | int | Identification number assigned to the channel for the duration of this connection.
PRICE | float | Price level
RATE | float | Rate level
PERIOD | float | Period level
COUNT | int | Number of orders at that price level (delete price level if count = 0)
±AMOUNT | float | Total amount available at that price level. Trading: if AMOUNT > 0 then bid else ask; Funding: if AMOUNT < 0 then bid else ask;

** Algorithm to create and keep a book instance updated **

1. subscribe to channel
2. receive the book snapshot and create your in-memory book structure
3. when *count* > 0 then you have to add or update the price level
3.1 if *amount* > 0 then add/update bids
3.2 if *amount* < 0 then add/update asks
4. when *count* = 0 then you have to delete the price level.
4.1 if *amount* = 1 then remove from bids
4.2 if *amount* = -1 then remove from asks

Node.JS example gists:
* Aggregated Book: https://gist.github.com/prdn/b8c067c758aab7fa3bf715101086b47c
* Raw Book: https://gist.github.com/prdn/b9c9c24fb1bb38604dcd1e94ee89dd9e

**Precision Levels**
* Significant Digits Calculations: https://support.bitfinex.com/hc/en-us/articles/115000371105-How-is-precision-calculated-using-Significant-Digits

Precision Level | Number of significant figures
--- | ---
P0 | 5
P1 | 4
P2 | 3
P3 | 2
P4 | 1

**Checksum**
An Order Book Checksum can be requested through the Websocket configuration. You can find out more [here](https://docs.bitfinex.com/docs/ws-general#section-configuration).



::: callout warning Error Codes
10011 : Unknown Book precision
10012 : Unknown Book length
:::
