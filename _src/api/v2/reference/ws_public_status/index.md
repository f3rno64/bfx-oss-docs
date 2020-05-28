---
id: ws-public-status
title: "Status"
subtitle: "Subscribe to and receive different types of platform information - currently supports derivatives pair status and liquidation feed."
dataSamples:
  js_request_response0.js: Request / Response
  js_update0.js: Update
---
```javascript [1590649447409004-javascript]
const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'status', 
  key: 'deriv:tBTCF0:USTF0' 
})

w.on('open', () => w.send(msg))
```

```shell [1590649447409004-shell]
wscat -c wss://api-pub.bitfinex.com/ws/2
{ "event": "subscribe",  "channel": "status",  "key": "deriv:tBTCF0:USTF0" }
```

```python [1590649447409004-python]
ws = websocket.WebSocketApp('wss://api-pub.bitfinex.com/ws/2')

ws.on_open = lambda self: self.send('{ "event": "subscribe", "channel": "status", "key": "deriv:tBTCF0:USTF0"}')

ws.on_message = lambda self, evt:  print (evt)
```

The value of the key, contained in the subscription payload, determines what status data will be returned.

Derivatives status updates:
key: "deriv:SYMBOL" // e.g. "deriv:tBTCF0:USTF0"

Liquidation feed updates:
key: "liq:global"


**Stream Fields**

Fields | Type | Description
--- | --- | ---
CHANNEL_ID | int | Identification number assigned to the channel for the duration of this connection.
SYMBOL | String | Trading pair or funding currency
TIME_MS                        | int | Millisecond timestamp
DERIV_PRICE                         | float | Derivative book mid price.
SPOT_PRICE                         | float | Book mid price of the underlying Bitfinex spot trading pair
MARK_PRICE                         | float | Price based on the BFX Composite Index
INSURANCE_FUND_BALANCE             | float | The balance available to the liquidation engine to absorb losses.
NEXT_FUNDING_EVT_TIMESTAMP_MS                         | null | Millisecond timestamp of next funding event
NEXT_FUNDING_ACCRUED                     | float | Current accrued funding for next 8h period
NEXT_FUNDING_STEP                         | int | Incremental accrual counter
CURRENT_FUNDING                         | float | Funding applied in the current 8h period
OPEN_INTEREST | float | Current open interest
POS_ID |int| Position id
AMOUNT | float | Amount of the liquidated position
BASE_PRICE | float | Base price of the liquidated position
IS_MATCH | int | 0 -> initial liquidation trigger, 1 market execution
IS_MARKET_SOLD |int| 0 -> direct sell into the market, 1 position acquired by the system
LIQUIDATION_PRICE | float | Price at which the liquidation was triggered
