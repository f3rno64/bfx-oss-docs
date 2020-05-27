---
id: ws-public-trades
title: Trades
subtitle: This channel sends a trade message whenever a trade occurs at Bitfinex. It includes all the pertinent details of the trade, such as price, size and the time of execution. The channel can send funding trade data as well.
dataSamples:
  js_request_response.js: Request / Response
  js_snapshot.js: Snapshot
  js_update.js: Update
---
```javascript [1590590455332000-javascript]
const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'trades', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))
```

```shell [1590590455332000-shell]
wscat -c wss://api-pub.bitfinex.com/ws/2
{ "event": "subscribe",  "channel": "trades",  "symbol": "tBTCUSD" }
```

```python [1590590455332000-python]
ws = websocket.WebSocketApp('wss://api-pub.bitfinex.com/ws/2')

ws.on_open = lambda self: self.send('{ "event": "subscribe", "channel": "trades", "symbol": "tBTCUSD"}')

ws.on_message = lambda self, evt:  print (evt)
```

**Request Fields**

Fields | Type | Description
--- | --- | ---
SYMBOL | String | Trading pair or funding currency

**Stream Fields**

Fields | Type | Description
--- | --- | ---
CHANNEL_ID | int | Identification number assigned to the channel for the duration of this connection.
ID | int | Trade ID
MTS  |  int  |  millisecond time stamp
±AMOUNT  |  float  |  Amount bought (positive) or sold (negative).
PRICE  |  float  |  Price at which the trade was executed
RATE | float | Funding rate of the trade
PERIOD | int | Funding offer period in days

The order that causes the trade (the taker) determines if it is a buy or a sell.
