---
id: ws-auth-account-info
title: "Account Info"
subtitle: "The account info channel is a channel that you are automatically subscribed to when you authenticate your session. It provides all the pertinent info for your orders, positions, trades, funding offers and loans, balances, and more."
dataSamples:
  json_request0.json: Request
  json_response0.json: Response
  json_response_failure0.json: Response failure
---
```javascript [1590649447409005-javascript]
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
  //dms: 4, // Optional Deam-Man-Switch flag to cancel all orders when socket is closed
  //filter: [] // Optional filter for the account info received (default = everything)
}

const wss = new WebSocket('wss://api.bitfinex.com/ws/2') // Create new Websocket

wss.on('open', () => wss.send(JSON.stringify(payload)))

wss.on('message', (msg) => {     // The 'message' event is called whenever the ws recieves ANY message
  let response = JSON.parse(msg)
  console.log(msg)
})
```

```go [1590649447409005-go]
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

**Subscribing to Account Info**

Use the code above to open an authenticated connection. Subscribing to the Account Info channel is automatically done when you authenticate your session. You will continue to receive updates until the connection is disconnected/terminated/restarted.



**Filters**

Filters can be applied to limit the information received through the channel. You can find more information about setting up filters for the account info channel [here](https://docs.bitfinex.com/docs/ws-auth#section-channel-filters),

**Structure**
By default, authentication will subscribe you to all account info updates. The account info channel will be assigned a CHANNEL_ID of 0. All snapshots and updates provided through the channel will be structured as follows:

```json
[
 CHANNEL_ID // = 0
 <TYPE> //'on', 'ou', 'oc', etc. 
  [
   ... //Content goes here
  ]
]

```

**Separate Streams**
Please see the documentation page for each stream to find a further specification of the contents returned by each stream. The following table shows all of the included streams, their purpose, and the abbreviations by which messages in the channel can be identified:

