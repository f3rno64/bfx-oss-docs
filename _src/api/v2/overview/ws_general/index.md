---
id: ws-general
title: "General"
---

### Current Version

Bitfinex Websocket API version is 2.0

### URL

Channels that require authentication should use the domain:
wss://api.bitfinex.com/

Public channels should use the domain:
wss://api-pub.bitfinex.com/

```text
// For public channels:
wss://api-pub.bitfinex.com/ws/2

// For authenticated channels:
wss://api.bitfinex.com/ws/2
```

### Message encoding

Each message sent and received via the Bitfinex's websocket channel is encoded in JSON format

All times are UTC timestamps expressed as milliseconds (eg 1477409622229)


::: callout danger Array Length
Message (JSON array) lengths should never be hardcoded. New fields may be appended at the end of a message without changing version.
:::


### Supported Pairs

All pairs available in the platform are supported. A symbol can be a trading pair or a margin currency. All symbols are in uppercase (i.e. btcusd is invalid, BTCUSD is valid).

Trading pairs are prepended by a “t” before the pair (e.g. tBTCUSD, tETHUSD, ...).
Margin currencies are prepended by an “f” before the currency (e.g. fUSD, fBTC, …).

Lists of available currencies and pairs can be retrieved through the [Configs endpoint](https://docs.bitfinex.com/reference#rest-public-conf).

For a list of all currencies on the platform, look to:
[https://api-pub.bitfinex.com/v2/conf/pub:list:currency](https://api-pub.bitfinex.com/v2/conf/pub:list:currency)
For a list of all trading pairs on the platform, look to:
[https://api-pub.bitfinex.com/v2/conf/pub:list:pair:exchange](https://api-pub.bitfinex.com/v2/conf/pub:list:pair:exchange)
For a list of all margin trading pairs on the platform, look to:
[https://api-pub.bitfinex.com/v2/conf/pub:list:pair:margin](https://api-pub.bitfinex.com/v2/conf/pub:list:pair:margin)

### How to Connect

Open up a websocket connection to the websocket URI.

```javascript [1590649447416001-javascript]
const WebSocket = require('ws')

const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
wss.onmessage = (msg) => console.log(msg.data)
wss.onopen = () => {
  // API keys setup here (See "Authenticated Channels")
}
```

```go [1590649447416001-go]
import (
	"code.google.com/p/go.net/websocket"
)

ws, err := websocket.Dial("wss://api.bitfinex.com/ws/2", "", "http://localhost/")
if err != nil {
    return err
}
```

A connection to one or more [Public Channels](doc:ws-public)  can be opened by running the example code found on their respective documentation pages.

Instructions on how to establish a connection to an authenticated channel can be found on the [Authenticated Channels](doc:ws-auth) page.

Instructions on Websocket Inputs can be found on the [Websocket Inputs](ref:ws-auth-input) page.

###Subscribe to Channels

You can subscribe to channels using a subscribe event. Below is a request response template:

```json
// request
{
   "event": "subscribe",
   "channel": CHANNEL_NAME
}

// response
{
   "event": "subscribed",
   "channel": CHANNEL_NAME,
   "chanId": CHANNEL_ID
}

// response-failure
{
   "event": "error",
   "msg": ERROR_MSG,
   "code": ERROR_CODE
}
```

::: callout info Channel Name and Channel ID
When subscribing to channels, each will be given a CHANNEL_ID and CHANNEL_NAME.

- CHANNEL_NAME: (string) channel name (book, trades, ticker)
- CHANNEL_ID: (int) channel identifier. CHANNEL_ID is a numeric channel identifier that the developer can use to distinguish between updates for each subscribed channel.
:::


::: callout info Subscription Limit
All websocket connections have a limit of 30 subscriptions to public market data feed channels (tickers, book, candles, trades, …). We kindly ask all users to adapt their application setup accordingly to split subscriptions to channels using multiple WebSocket connections.

Please note that in an authenticated connection a channel is reserved for account info message.
:::


::: callout danger Subscription Error Codes
- 10300 : Subscription failed (generic)
- 10301 : Already subscribed
- 10302 : Unknown channel
:::


###Unsubscribing from Channels

To stop receiving data from a channel you have to send a "unsubscribe" message. Please find a model for this below:

```json
// request
{
   "event": "unsubscribe",
   "chanId": CHANNEL_ID
}

// response
{
   "event": "unsubscribed",
   "status": "OK",
   "chanId": CHANNEL_ID
}

// response-failure
{
   "event": "error",
   "msg": ERROR_MSG,
   "code": ERROR_CODE
}
```

::: callout danger Error Codes
10400 : Subscription failed (generic)
10401 : Not subscribed
:::


### Other Error Codes

In case of error, you receive a message containing the proper error code (`code` JSON field).

A full list of error codes can be found in the [Abbreviation Glossary](doc:abbreviations-glossary) .


::: callout danger Generic Error Codes
- 10000 : Unknown event
- 10001 : Unknown pair
- 10305 : Reached limit of open channels
:::


### Info Messages

Info messages are sent from the websocket server to notify you about the state of your connection.

Right after connecting you will receive an info message that contains the actual version of the websocket stream, along with a platform status flag (1 for operative, 0 for maintenance).

```json
{
   "event": "info",
   "version":  VERSION,
   "platform": {
      "status": 1
   }
}

```

::: callout info NOTE
If you are developing/using a trading bot, please make sure to handle version number changes.
:::


The websocket server sends other `info` messages to inform regarding relevant events.

```json
{
   "event":"info",
   "code": CODE,
   "msg": MSG
}
```

::: callout info Info Codes
- 20051 : Stop/Restart Websocket Server (please reconnect)
- 20060 : Entering in Maintenance mode. Please pause any activity and resume after receiving the `info` message `20061` (it should take 120 seconds at most).
- 20061 : Maintenance ended. You can resume normal activity. It is advised to unsubscribe/subscribe again all channels.
:::


::: callout warning Only rely on 'CODE' for 'info' events
We wish to emphasise to only rely on the event message codes rather than the text descriptions of the event messages. The descriptions may change over  time and are not part of the protocol.
:::


### Ping/Pong

You can send a `ping` message to test your connection to the websocket server.

```json
// request
{
   "event":"ping",
   "cid": 1234
}

// response
{
   "event":"pong",
   "ts": 1511545528111,
   "cid": 1234
}
```

### Snapshot

Upon subscribing to a channel, sometimes an initial snapshot is sent.

Models and examples of snapshots and updates can be found on the documentation page for each channel/event.

### Update

After receiving the snapshot, you will receive updates upon any change. Updates will have the same CHANNEL_ID as the initial snapshot and the event confirming the subscription to the channel.

Models and examples of snapshots and updates can be found on the documentation page for each channel/event.

### Heartbeating

If there is no activity in the channel for 15 seconds, the Websocket server will send you a heartbeat message in this format.

```json
[ CHANNEL_ID, "hb" ]
```

### Configuration

Conf events can be used to change settings.

```json
{ 
  event: "conf", 
  flags: FLAGS
}
```

::: callout info Flags
In order to change the configuration, there is a new event able to be requested `conf`, and this will have a parameter `flags` which is the bitwise XOR of the different options listed below

Example:
To enable all decimals as strings, set the value of flags to 8. 

If you wish to enable more than one flag, sum up their values.
:::


### Available Options for Conf events

