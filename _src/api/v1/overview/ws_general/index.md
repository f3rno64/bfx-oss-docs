---
id: ws-general
title: "General"
---

### Current Version

Bitfinex Websocket API version is 1.1

### SSL Websocket Connection

URL:

Channels that require authentication should use the domain:
wss://api.bitfinex.com/

Public channels should use the domain:
wss://api.bitfinex.com/

```text
// For public channels:
wss://api.bitfinex.com/ws/1

// For authenticated channels:
wss://api.bitfinex.com/ws/1
```

### Message encoding

Each message sent and received via the Bitfinex's websocket channel is encoded in JSON format

### Supported Pairs
BTCUSD LTCUSD LTCBTC ETHUSD ETHBTC ETCBTC ETCUSD RRTUSD RRTBTC ZECUSD ZECBTC XMRUSD XMRBTC DSHUSD DSHBTC BTCEUR XRPUSD XRPBTC IOTUSD IOTBTC IOTETH EOSUSD EOSBTC EOSETH SANUSD SANBTC SANETH OMGUSD OMGBTC OMGETH BCHUSD BCHBTC BCHETH NEOUSD NEOBTC NEOETH ETPUSD ETPBTC ETPETH QTMUSD QTMBTC QTMETH AVTUSD AVTBTC AVTETH EDOUSD EDOBTC EDOETH BTGUSD BTGBTC DATUSD DATBTC DATETH QSHUSD QSHBTC QSHETH YYWUSD YYWBTC YYWETH GNTUSD GNTBTC GNTETH SNTUSD SNTBTC SNTETH IOTEUR BATUSD BATBTC BATETH MNAUSD MNABTC MNAETH FUNUSD FUNBTC FUNETH ZRXUSD ZRXBTC ZRXETH TNBUSD TNBBTC TNBETH SPKUSD SPKBTC SPKETH TRXUSD TRXBTC TRXETH RCNUSD RCNBTC RCNETH RLCUSD RLCBTC RLCETH AIDUSD AIDBTC AIDETH SNGUSD SNGBTC SNGETH REPUSD REPBTC REPETH ELFUSD ELFBTC ELFETH

the list is continuously growing to get the an up to date list you can query the symbols this endpoint: https://api.bitfinex.com/v1/symbols

### Public Channels

* **Book:** order book feed
* **Ticker:** ticker feed
* **Trades:** trades feed

### Authenticated Channels

* **Account Information:** account specific private data (positions, orders, executed trades, balances)

### How to Connect
Open up a websocket connection to the websocket URI.

```javascript [1590649447466002-javascript]
const WebSocket = require('ws')

const wss = new WebSocket('wss://api.bitfinex.com/ws/')
wss.onmessage = (msg) => console.log(msg.data)
wss.onopen = () => {
  // API keys setup here (See "Authenticated Channels")
}
```

```go [1590649447466002-go]
import ( "code.google.com/p/go.net/websocket")

ws, err := websocket.Dial("wss://api.bitfinex.com/ws", "", "http://localhost/")
if err != nil {
    return err
}

```

### Error Codes

In case of error, you receive a message containing the proper error code (`code` JSON field).


::: callout danger Generic Error Codes
- 10000 : Unknown event
- 10001 : Unknown pair
:::


### Info Messages

```json
{
"event":"info",
"version": 1
}
```

Info messages are sent from the websocket server to notify the state of your connection.
Right after connecting you receive an info message that contains the actual version of the websocket stream.


::: callout info NOTE
If you are developing/using a trading bot, please make sure to handle version number changes.
:::


```json
{
"event":"info",
"code": "<CODE>",
"msg": "<MSG>"
}
```

Websocket server sends other `info` messages to inform regarding relevant events.


::: callout info Info Codes
- 20051 : Stop/Restart Websocket Server (please try to reconnect)
- 20060 : Refreshing data from the Trading Engine. Please pause any activity and resume after receiving the `info` message `20061` (it should take 10 seconds at most).
- 20061 : Done Refreshing data from the Trading Engine. You can resume normal activity. It is advised to unsubscribe/subscribe again all channels.
:::


::: callout info NOTE
Rely on `CODE` only to handle `info` events.
:::


### Ping/Pong

```json
// request
{
"event":"ping"
}

// response
{
"event":"pong"
}
```


Use `ping` message to test your connection to the websocket server.


### Subscribe to Channels

```json
// request
{
"event":"subscribe",
"channel":"CHANNEL_NAME"
}

// response
{
"event":"subscribed",
"channel":"CHANNEL_NAME",
"chanId":"<CHANNEL_ID>"
}

// response-failure
{
"event":"error",
"msg":"<ERROR_MSG>",
"code":"<ERROR_CODE>"
}
```

To receive data from a channel you have to send a "subscribe" message first.


### Heartbeating

```json
["<Chan Id>", "hb"]
```

If there is no new message in the channel for 1 second, Websocket server will send you an heartbeat message in this format.


### Snapshot

```json
["<Chan Id>",
["<Group of Update Messages>",
["<Update Message>"]
]
]
```

Upon subscribing to a channel an initial snapshot is sent. Typically, the snapshot will have as its first item, the chanId, its second item will be an array of update messages (each of which is itself an array).
So The array would have 3 levels.

### Update
After receiving the snapshot, you will receive updates upon any change.

Channel ID's allow you to keep track of the messages, they are static per session, you will receive both the CHANNEL_NAME and the CHANNEL_ID in the response to a subscription message.


::: callout info undefined
- CHANNEL_NAME: (string) channel name (book, trades, ticker)
- CHANNEL_ID: (int) channel identifier. CHANNEL_ID is a numeric channel identifier that the developer can use to distinguish between updates for each subscribed channel.
:::


::: callout danger Error Codes
- 10300 : Subscription failed (generic)
- 10301 : Already subscribed
:::


### Unsubscribe to Channels

```json
// request
{
"event":"unsubscribe",
"chanId":"<CHANNEL_ID>"
}

// response
{
"event":"unsubscribed",
"status":"OK",
"chanId":"<CHANNEL_ID>"
}

// response-failure
{
"event":"error",
"msg":"<ERROR_MSG>",
"code":"<ERROR_CODE>"
}
```
To stop receiving data from a channel you have to send a "unsubscribe" message.


::: callout danger Error Codes
10400 : Unsubscription failed (generic)
10401 : Not subscribed
:::
