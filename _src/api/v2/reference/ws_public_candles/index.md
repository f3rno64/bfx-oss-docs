---
id: ws-public-candles
title: "Candles"
subtitle: "The Candles endpoint provides OCHL (Open, Close, High, Low) and volume data for the specified trading pair."
dataSamples:
  js_request_response0.js: Request / Response
  js_snapshot0.js: Snapshot
  js_update0.js: Update
---
```javascript [1590649447409003-javascript]
const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'candles', 
  key: 'trade:1m:tBTCUSD' //'trade:TIMEFRAME:SYMBOL'
})

w.on('open', () => w.send(msg))
```

```shell [1590649447409003-shell]
wscat -c wss://api-pub.bitfinex.com/ws/2
{ "event": "subscribe",  "channel": "candles",  "key": "trade:1m:tBTCUSD" }
```

```python [1590649447409003-python]
ws = websocket.WebSocketApp('wss://api-pub.bitfinex.com/ws/2')

ws.on_open = lambda self: self.send('{ "event": "subscribe",  "channel": "candles",  "key": "trade:1m:tBTCUSD" }')

ws.on_message = lambda self, evt:  print (evt)
```

**Request Fields**

Fields | Type | Description
--- | --- | ---
KEY | string | Specify the time frame and symbol ('trade:TIMEFRAME:SYMBOL')

**Stream Fields**

Fields | Type | Description
--- | --- | ---
CHANNEL_ID | int | Identification number assigned to the channel for the duration of this connection.
MTS | int | millisecond time stamp
OPEN  |  float  |  First execution during the time frame
CLOSE  |  float  | Last execution during the time frame
HIGH  |  float  |  Highest execution during the time frame
LOW  |  float  |  Lowest execution during the timeframe
VOLUME  |  float  |  Quantity of symbol traded within the timeframe

** Time frames **
- 1m:  one minute
- 5m : five minutes
- 15m : 15 minutes
- 30m : 30 minutes
- 1h : one hour
- 3h : 3 hours
- 6h : 6 hours
- 12h : 12 hours
- 1D : one day
- 7D : one week
- 14D : two weeks
- 1M : one month
