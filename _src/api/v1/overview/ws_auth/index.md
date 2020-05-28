---
id: ws-auth
title: "Authenticated Channels"
---

** Account Information **

This channel allows you to keep up to date with the status of your account. You can receive updates on your positions, your balances, your orders and your trades. Once your session is authenticated it remains so until the connection is disconnected/terminated/restarted.

Account info always uses chanId 0.


::: callout info AUTH request message: authenticate for the private data stream
API_KEY: (string) Bitfinex’s api key
AUTH_SIGNATURE: (string) HMAC-sha384 signature
:::

```javascript [1590649447466003-javascript]
const crypto = require('crypto-js')

const apiKey = '<Your API key here>'
const apiSecret = '<Your API secret here>'

const authNonce = Date.now() * 1000
const authPayload = 'AUTH' + authNonce
const authSig = crypto
	.HmacSHA384(authPayload, apiSecret)
	.toString(crypto.enc.Hex)

const payload = {
  apiKey,
  authSig,
  authNonce,
  authPayload,
  event: 'auth'
}

w.send(JSON.stringify(payload))

```

```go [1590649447466003-go]
package main
import (
	"fmt"
	"os"
	"github.com/bitfinexcom/bitfinex-api-go/v1"
)

// Set BFX_APIKEY and BFX_SECRET as :
//
// export BFX_API_KEY=YOUR_API_KEY
// export BFX_API_SECRET=YOUR_API_SECRET
//
// you can obtain it from https://www.bitfinex.com/api

func main() {
	key := os.Getenv("BFX_API_KEY")
	secret := os.Getenv("BFX_API_SECRET")
	client := bitfinex.NewClient().Auth(key, secret)

  // EXAMPLE: Sell 0.01BTC at $12.000
	// data, err := client.Orders.Create(bitfinex.BTCUSD, -0.01, 12000, bitfinex.ORDER_TYPE_EXCHANGE_LIMIT)

	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Response:", data)
	}
}
```

```text [1590649447466003-Request / Response]
// request
{  
   "event":"auth",
   "status":"OK",
   "chanId":0,
   "userId":"<USER_ID>"
}

// response
{  
   "event":"auth",
   "status":"OK",
   "chanId":0,
   "userId":"<USER_ID>"
}

// response-failure
{  
   "event":"auth",
   "status":"FAIL",
   "chanId":0,
   "code":"<ERROR_CODE>"
}
```

```python [1590649447466003-python]
import hmac
import hashlib
import time

nonce = int(time.time() * 1000000)
auth_payload = 'AUTH{}'.format(nonce)
signature = hmac.new(
  API_SECRET.encode(),
  msg = auth_payload.encode(),
  digestmod = hashlib.sha384
).hexdigest()

payload = {
  'apiKey': API_KEY,
  'event': 'auth',
  'authPayload': auth_payload,
  'authNonce': nonce,
  'authSig': signature
}

ws.send(json.dumps(payload))
```

- [Position Snapshot](/v1/reference#ws-auth-position-snapshot)
- [Wallet Snapshot](/v1/reference#ws-auth-wallet-snapshot)
- [Order Snapshots](/v1/reference#ws-auth-order-snapshot)
- [Trade Snapshot](/v1/reference#ws-auth-trade-snapshot)
- [Order Updates](/v1/reference#ws-auth-order-updates)
- [Position Updates](/v1/reference#ws-auth-position-updates)
- [Wallet Updates](/v1/reference#ws-auth-wallet-updates)
- [Executed Trades](/v1/reference#ws-auth-executed-trades)

- [Unauthentication](/v1/reference#ws-auth-unauthentication)
