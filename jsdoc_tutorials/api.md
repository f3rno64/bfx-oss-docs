#### Available Node.JS Clients

Bitfinex offers the following Node.JS API clients:

* {@link module:bitfinex-api-node.WSv2|bitfinex-api-node.WSv2} - WebSockets API
  v2 client
* {@link module:bitfinex-api-node.WSv1|bitfinex-api-node.WSv1} - WebSockets API
  v1 client
* {@link module:bfx-api-node-rest.RESTv2|bfx-api-node-rest.RESTv2} - REST API
  v2 client
* {@link module:bfx-api-node-rest.RESTv1|bfx-api-node-rest.RESTv1} - REST API
  v1 client

__NOTE__ Version 1 of both the REST and WebSocket APIs is deprecated and  
should not be used. Methods that are missing from version 2 of the APIs are  
internally proxied to the version 1 endpoints by the official clients.

#### Interface Selection

The recommended method for interacting with our system is **version 2 of the
WebSocket API** and its associated {@link module:bitfinex-api-node.WSv2|WSv2}
client, due to the reduced latency associated with a long-lived connection and
the realtime streaming nature of the protocol.

{@link module:bfx-api-node-rest.RESTv2|RESTv2} is recommended for
atomic/one-shot requests, or querying large quantities of paged data from our
servers, but beware of increased latency and any potential effects it may have
on your operations.

### WebSocket API

The {@link module:bitfinex-api-node.WSv2|WSv2} client serves as a complete
wrapper around our streaming protocol, providing automatic conversion of raw
data payloads to {@link module:bfx-api-node-models.Model|Model} class instances
with high-level embedded functionality. Many models, such as
{@link module:bfx-api-node-models.OrderBook|Order Book} provide logic which
would otherwise need to be implemented manually, and should be preferred over
individual solutions.

Official examples covering common scenarios may be found on
[Github.](https://github.com/bitfinexcom/bitfinex-api-node/tree/master/examples)

See below for sample logic illustrating the architecture of the client and
expected usage patterns.

###### Submitting Orders

We recommend utilizing the {@link module:bfx-api-node-models.Order|Order} model
class for defining atomic orders and submitting them via either API client,
although you may provide raw order data to either client as an alternative.
Relying on the {@link module:bfx-api-node-models.Order|Order} model provides
many conveniences such as automatic conversion of numeric values to decimal
strings and limits __enum__ fields, such as the order type, to a set of valid
values exposed on the model.

```js
const { WSv2 } = require('bitfinex-api-node')
const { Order } = require('bfx-api-node-models')
const ws = new WSv2({ transform: true })

ws.on('error', (err) => console.log(err))
ws.on('open', ws.auth.bind(ws))

ws.once('auth', () => {
  const o = new Order({
    cid: Date.now(),
    symbol: 'tETHUSD',
    amount: 0.1,
    type: Order.type.MARKET
  }, ws)

  // Enable automatic updates
  o.registerListeners()

  o.on('update', () => {
    console.log(`order updated: ${o.serialize()}`)
  })

  o.on('close', () => {
    console.log(`order closed: ${o.status}`)
    ws.close()
  })

  o.submit().then(() => {
    console.log(`submitted order ${o.id}`)
  }).catch((err) => {
    console.error(err)
    ws.close()
  })
})

ws.open()
```

###### Subscribing To Data Channels

Operations on all data channels via the
{@link module:bitfinex-api-node.WSv2|WSv2} client are isomorphic; regardless of
channel type, you have the following options for obtaining a realtime data
stream:

* High-level `subscribe` & `unsubscribe` methods such as
{@link module:bitfinex-api-node.WSv2#subscribeCandles|subscribeCandles}
* The abstract 
{@link module:bitfinex-api-node.WSv2#managedSubscribe|managedSubscribe}
{@link module:bitfinex-api-node.WSv2#managedUnsubscribe|managedUnsubscribe}
methods
* Sending your own subscription packet via the low-level
{@link module:bitfinex-api-node.WSv2#send|send} method.

Regardless of method, all received events are emitted on the
{@link module:bitfinex-api-node.WSv2|WSv2} client instance with names
corresponding to the data type (i.e. `trades`).

We recommend utilizing the high-level listener methods, such as
{@link module:bitfinex-api-node.WSv2#onCandle|onCandle} as they provide
automatic filtering of incoming data prior to triggering the provided callback
(i.e. by symbol).

```js
const { WSv2 } = require('bitfinex-api-node')
const ws = new WSv2({ transform: true })

ws.on('error', (err) => console.log(err))
ws.on('open', () => {
  ws.subscribeTrades('BTCUSD')
})

ws.onTrades({ symbol: 'tBTCUSD' }, (trades) => {
  console.log(`trades: ${JSON.stringify(trades)}`)
})

ws.onTradeEntry({ symbol: 'tBTCUSD' }, (trades) => {
  console.log(`te: ${JSON.stringify(trades)}`)
})

ws.open()
```
