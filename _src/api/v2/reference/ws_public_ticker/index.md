---
id: ws-public-ticker
title: "Ticker"
subtitle: "The ticker endpoint provides a high level overview of the state of the market for a specified pair. It shows the current best bid and ask, the last traded price, as well as information on the daily volume and price movement over the last day."
dataSamples:
  js_request_response0.js: Request / Response
  js_snapshot0.js: Snapshot
  js_update0.js: Update
---
```javascript [1590649447408000-javascript]
const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'ticker', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))
```

```shell [1590649447408000-shell]
wscat -c wss://api-pub.bitfinex.com/ws/2
{ "event": "subscribe",  "channel": "ticker",  "symbol": "tBTCUSD" }
```

```python [1590649447408000-python]
ws = websocket.WebSocketApp('wss://api-pub.bitfinex.com/ws/2')

ws.on_open = lambda self: self.send('{ "event": "subscribe", "channel": "ticker", "symbol": "tBTCUSD"}')

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
FRR  |  float  |  Flash Return Rate - average of all fixed rate funding over the last hour (funding tickers only)
BID  |  float  |  Price of last highest bid
BID_PERIOD  |  int  |  Bid period covered in days (funding tickers only)
BID_SIZE  |  float  |  Sum of the 25 highest bid sizes
ASK  |  float  |  Price of last lowest ask
ASK_PERIOD  |  int  |  Ask period covered in days (funding tickers only)
ASK_SIZE  |  float  |  Sum of the 25 lowest ask sizes
DAILY_CHANGE  |  float  |  Amount that the last price has changed since yesterday
DAILY_CHANGE_RELATIVE  |  float  |  Relative price change since yesterday (*100 for percentage change)
LAST_PRICE  |  float  |  Price of the last trade.
VOLUME  |  float  |  Daily volume
HIGH  |  float  |  Daily high
LOW  |  float  |  Daily low
FRR_AMOUNT_AVAILABLE | float | The amount of funding that is available at the Flash Return Rate (funding tickers only)
