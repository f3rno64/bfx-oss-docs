---
id: ws-auth
title: "Authenticated Channels"
---

### URL
Channels that require authentication should use the domain:
wss://api.bitfinex.com/

The domain:
wss://api-pub.bitfinex.com/
Should only be used for public channels.

### Account Information

This channel allows you to keep up to date with the status of your account. You can receive updates on your positions, your balances, your orders and your trades. Once your session is authenticated it remains so until the connection is disconnected/terminated/restarted.

Account info always uses chanId 0.

To learn more, look to the [Account Info](ref:ws-auth-account-info) channel page.

### Authenticating your Connection

** Request parameters **

Below are the parameters that are used to authenticate a connection. The dms and filter parameters are optional.



Note:
* `dms: 4` -> when socket is closed, cancel all account orders

Below is the example code to authenticate your connection. The optional parameters 'dms' and 'filter'are not used, but can be appended to the payload if desired.

```javascript [1590649447416002-javascript]
const crypto = require('crypto-js') // Standard JavaScript cryptography library
const WebSocket = require('ws') // Websocket library for Node

const apiKey = '' // Users API credentials are defined here
const apiSecret = ''

const authNonce = Date.now() * 1000 // Generate an ever increasing, single use value. (a timestamp satisfies this criteria)
const authPayload = 'AUTH' + authNonce // Compile the authentication payload, this is simply the string 'AUTH' prepended to the nonce value
const authSig = crypto.HmacSHA384(authPayload, apiSecret).toString(crypto.enc.Hex) // The authentication payload is hashed using the private key, the resulting hash is output as a hexadecimal string

const payload = {
  apiKey, //API key
  authSig, //Authentication Sig
  authNonce, 
  authPayload,
  event: 'auth', // The connection event, will always equal 'auth'
}

const wss = new WebSocket('wss://api.bitfinex.com/ws/2') // Create new Websocket

wss.on('open', () => wss.send(JSON.stringify(payload)))

wss.on('message', (msg) => {     // The 'message' event is called whenever the ws recieves ANY message
  let response = JSON.parse(msg)
  console.log(msg)
})
```

```go [1590649447416002-go]
package main
import (
    "crypto/hmac"
    "crypto/sha512"
    "encoding/hex"
    "encoding/json"
    "fmt"
    "log"
    "time"
    "golang.org/x/net/websocket"
)
func main() {
    ws, err := websocket.Dial("wss://api.bitfinex.com/ws/2", "", "http://localhost/")
    if err != nil {
        return
    }
    nonce := fmt.Sprintf("%v", time.Now().Unix())
    payload := "AUTH" + nonce
    sig := hmac.New(sha512.New384, []byte("API_SECRET"))
    sig.Write([]byte(payload))
    payload_sign := hex.EncodeToString(sig.Sum(nil))
    connectMsg, _ := json.Marshal(map[string]interface{}{
        "event":       "auth",
        "apiKey":      "API_KEY",
        "authSig":     payload_sign,
        "authPayload": payload,
        "authNonce":   nonce,
    })
    // Send auth message
    _, err = ws.Write(connectMsg)
    if err != nil {
        log.Fatal(err)
        return
    }
    // Read all incoming messages
    var msg string
    for {
        if err = websocket.Message.Receive(ws, &msg); err != nil {
            fmt.Println(err)
        } else {
            fmt.Println(msg)
        }
    }
}
```

```text [1590649447416002-Request / Response]
// request
{
    event: "auth",
    apiKey: api_key,
    authSig: signature,
    authPayload: payload,
    authNonce: +authNonce,
    calc: 1
}

// response
{ event: 'auth',
  status: 'OK',
  chanId: 0,
  userId: 269312,
  caps: '{"orders": {"read": "1", "write": "0"}, "account": {"read": "1", "write": "0"}, "funding": {"read": "1", "write": "1"}, "history": {"read": "1", "write": "0"}, "wallets": {"read": "1", "write": "1"}, "withdraw": {"read": "0", "write": "1"}, "positions": {"read": "1", "write": "1"}}' }

// response-failure
{  
   "event":"auth",
   "status":"FAIL",
   "chanId":0,
   "code":"<ERROR_CODE>"
}
```

::: callout info WS Inputs
Please note that the above example payload only authenticates your WS connection to the server. If you wish you interact with the API further you'll have to include some sort of listener to perform some action on a particular Websocket "event".

An example can be found here https://docs.bitfinex.com/reference#ws-input.
:::


### Channel filters
During authentication you can provide an array to indicate which informations/messages you are interested to receive (default = everything).

```javascript
const payload = {
  event: 'auth', 
  // ... 
  filter: [
    'trading', // orders, positions, trades 
    'trading-tBTCUSD', // tBTCUSD orders, positions, trades
    'funding', // offers, credits, loans, funding trades
    'funding-fBTC', // fBTC offers, credits, loans, funding trades
    'wallet',  // wallet
    'wallet-exchange-BTC', // Exchange BTC wallet changes
    'algo',    // algorithmic orders
    'balance', // balance (tradable balance, ...)
    'notify'   // notifications
  ]
}
```

### List of Account Info Events
- [Orders](/v2/reference#ws-auth-orders)
- [Positions](ref:ws-auth-positions)
- [Trades](/v2/reference#ws-auth-trades)
- [Funding Offers](ref:ws-auth-funding-offers)
- [Funding Credits](ref:ws-auth-funding-credits)
- [Funding Loans](ref:ws-auth-funding-loans)
- [Wallets](ref:ws-auth-wallets)
- [Balance Info](ref:ws-auth-balance-info)
- [Margin Info](ref:ws-auth-margin-info)
- [Funding Info](ref:ws-auth-funding)
- [Funding Trades](ref:ws-auth-funding-trades)
- [Notifications](ref:ws-auth-notifications)

### List of WS Inputs
- [New Order](ref:ws-auth-input-order-new)
- [Update Order](ref:ws-auth-input-order-update)
- [Order Multi-OP](ref:ws-auth-input-order-multi-op)
- [Cancel Order](ref:ws-auth-input-order-cancel)
- [Cancel Order Multi](ref:ws-auth-input-order-cancel-multi)
- [New Offer](ref:ws-auth-input-offer-new)
- [Cancel Offer](ref:ws-auth-input-offer-cancel)
- [Calc](ref:ws-auth-input-calc)
