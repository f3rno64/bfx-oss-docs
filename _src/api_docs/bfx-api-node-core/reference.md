---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
* [bfx-api-node-core](#module_bfx-api-node-core)
    * _static_
        * [.WS_DATA_CHANNEL_TYPES](#module_bfx-api-node-core.WS_DATA_CHANNEL_TYPES)
        * [.definePlugin(id, defaultArgs, cb)](#module_bfx-api-node-core.definePlugin) ⇒ [<code>PluginGenerator</code>](#module_bfx-api-node-core.PluginGenerator)
        * [.getPluginState(id, wsState)](#module_bfx-api-node-core.getPluginState) ⇒ [<code>Plugin</code>](#module_bfx-api-node-core.Plugin)
        * [.auth(state, opts)](#module_bfx-api-node-core.auth) ⇒ <code>Promise</code>
        * [.getWSDataChannelCount(state)](#module_bfx-api-node-core.getWSDataChannelCount) ⇒ <code>number</code>
        * [.getPendingSubscriptionCount(state)](#module_bfx-api-node-core.getPendingSubscriptionCount) ⇒ <code>number</code>
        * [.getPendingUnsubscriptionCount(state)](#module_bfx-api-node-core.getPendingUnsubscriptionCount) ⇒ <code>number</code>
        * [.disableFlag(state, flag, silent)](#module_bfx-api-node-core.disableFlag) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
        * [.enableFlag(state, flag, silent)](#module_bfx-api-node-core.enableFlag) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
        * [.isFlagEnabled(state, flag)](#module_bfx-api-node-core.isFlagEnabled) ⇒ <code>boolean</code>
        * [.setFlags(state, flags, silent)](#module_bfx-api-node-core.setFlags) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
        * [.open([url], [agent])](#module_bfx-api-node-core.open) ⇒ <code>object</code>
        * [.cancelOrderWithDelay(state, delay, o)](#module_bfx-api-node-core.cancelOrderWithDelay) ⇒ <code>Promise</code>
        * [.cancelOrder(state, order)](#module_bfx-api-node-core.cancelOrder) ⇒ <code>Promise</code>
        * [.submitOrderWithDelay(state, delay, o)](#module_bfx-api-node-core.submitOrderWithDelay) ⇒ <code>Promise</code>
        * [.submitOrder(state, order)](#module_bfx-api-node-core.submitOrder) ⇒ <code>Promise</code>
        * [.updateOrder(state, changes)](#module_bfx-api-node-core.updateOrder) ⇒ <code>Promise</code>
        * [.reopen(state)](#module_bfx-api-node-core.reopen) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
        * [.send(state, msg)](#module_bfx-api-node-core.send)
        * [.subscribe(state, channel, payload)](#module_bfx-api-node-core.subscribe) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
        * [.unsubscribe(state, chanId)](#module_bfx-api-node-core.unsubscribe) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
        * [.AuthArgs](#module_bfx-api-node-core.AuthArgs) : <code>object</code>
        * [.FullAuthArgs](#module_bfx-api-node-core.FullAuthArgs) : [<code>AuthArgs</code>](#module_bfx-api-node-core.AuthArgs)
        * [.PluginEventHandler](#module_bfx-api-node-core.PluginEventHandler) ⇒ <code>Array</code> \| <code>null</code>
        * [.PluginGenerator](#module_bfx-api-node-core.PluginGenerator) ⇒ [<code>Plugin</code>](#module_bfx-api-node-core.Plugin)
        * [.PluginHelpers](#module_bfx-api-node-core.PluginHelpers) : <code>object</code>
        * [.Plugin](#module_bfx-api-node-core.Plugin) : <code>object</code>
        * [.SocketState](#module_bfx-api-node-core.SocketState) : <code>object</code>
    * _inner_
        * [~Manager](#module_bfx-api-node-core.Manager) ⇐ <code>EventEmitter</code>
            * [new Manager([args])](#new_module_bfx-api-node-core.Manager_new)
            * [.updateAuthArgs(args)](#module_bfx-api-node-core.Manager+updateAuthArgs)
            * [.hasPlugin(plugin)](#module_bfx-api-node-core.Manager+hasPlugin) ⇒ <code>boolean</code>
            * [.addPlugin(plugin)](#module_bfx-api-node-core.Manager+addPlugin)
            * [.auth([args])](#module_bfx-api-node-core.Manager+auth)
            * [.getWS(id)](#module_bfx-api-node-core.Manager+getWS) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
            * [.getWSIndex(id)](#module_bfx-api-node-core.Manager+getWSIndex) ⇒ <code>number</code>
            * [.getWSByIndex(index)](#module_bfx-api-node-core.Manager+getWSByIndex) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
            * [.updateWS(id, state)](#module_bfx-api-node-core.Manager+updateWS)
            * [.closeAllSockets()](#module_bfx-api-node-core.Manager+closeAllSockets)
            * [.reconnectAllSockets()](#module_bfx-api-node-core.Manager+reconnectAllSockets)
            * [.closeWS(id)](#module_bfx-api-node-core.Manager+closeWS)
            * [.openWS()](#module_bfx-api-node-core.Manager+openWS) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
            * [.onWS(eventName, filterValue, cb)](#module_bfx-api-node-core.Manager+onWS)
            * [.onceWS(eventName, filterValue, cb)](#module_bfx-api-node-core.Manager+onceWS)
            * [.notifyPlugins(type, section, name, args)](#module_bfx-api-node-core.Manager+notifyPlugins)
            * [.notifyPlugin(plugin, section, name, args)](#module_bfx-api-node-core.Manager+notifyPlugin)
            * [.withFreeDataSocket(cb)](#module_bfx-api-node-core.Manager+withFreeDataSocket)
            * [.withDataSocket(filterCB, cb)](#module_bfx-api-node-core.Manager+withDataSocket)
            * [.withAuthSocket(cb)](#module_bfx-api-node-core.Manager+withAuthSocket)
            * [.withSocket(cb)](#module_bfx-api-node-core.Manager+withSocket)
            * [.sampleWS()](#module_bfx-api-node-core.Manager+sampleWS) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
            * [.sampleWSI()](#module_bfx-api-node-core.Manager+sampleWSI) ⇒ <code>number</code>
            * [.applyWS(i, cb)](#module_bfx-api-node-core.Manager+applyWS)
:::
<a id="module_bfx-api-node-core"></a>

## bfx-api-node-core
Modular Bitfinex Node.JS API library as an alternative to
[bitfinex-api-node](module:bitfinex-api-node), supporting a plugin
system. Connection instances are POJOs as opposed to the WSv2 class
instances returned by [bitfinex-api-node](module:bitfinex-api-node) and
are manipulated in a functional style. A connection pool manager is also
provided for multiplexing.

### Features

* POJO connection instances
* Multiplexing connection pool manager
* Plugin system for extending the default events

### Available Plugins

* [bfx-api-node-plugin-example](module:bfx-api-node-plugin-example) -
  skeleton plugin that serves as a reference for the required structure.
* [bfx-api-node-plugin-managed-candles](module:bfx-api-node-plugin-managed-candles) -
  maintains an updated candle dataset and provides events to access it on
  each update.
* [bfx-api-node-plugin-managed-ob](module:bfx-api-node-plugin-managed-ob) -
  maintains an updated full order book copy for each subscribed book
  channel, and provides events to access it on each update.
* [bfx-api-node-plugin-ob-checksum](module:bfx-api-node-plugin-ob-checksum) -
  maintains local order books for each subscribed book channel and performs
  automatic checksum verification, emitting a custom event on checksum
  mismatch.
* [bfx-api-node-plugin-seq-audit](module:bfx-api-node-plugin-seq-audit) -
  enables sequence numbers and performs automatic verification, emitting a
  custom event on sequence number mismatch.
* [bfx-api-node-plugin-wd](module:bfx-api-node-plugin-wd) - implements
  a connection watchdog, automatically reconnecting if no new packets are
  received within the configured grace period.

### Installation

```bash
npm i --save bfx-api-node-core
```

### Quickstart

```js
const { Manager, initState } = require('bfx-api-node-core')

// Create a Manager instance with an internal connection pool, and add a
// connection to the pool
const m = new Manager({ transform: true })
const managedConnection = m.openWS()

// Alternatively, create & open a single connection yourself
const connection = initState({ transform: true })

// do something with connections, see below for examples
```

**License**: MIT  
<a id="module_bfx-api-node-core.WS_DATA_CHANNEL_TYPES"></a>

### bfx-api-node-core.WS\_DATA\_CHANNEL\_TYPES
Valid websocket data channel types

**Kind**: static constant of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Read only**: true  
<a id="module_bfx-api-node-core.definePlugin"></a>

### bfx-api-node-core.definePlugin(id, defaultArgs, cb) ⇒ [<code>PluginGenerator</code>](#module_bfx-api-node-core.PluginGenerator)
Provides helpers for the plugin definition, and attaches the ID

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>PluginGenerator</code>](#module_bfx-api-node-core.PluginGenerator) - def - enriched plugin
  def function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | plugin ID |
| defaultArgs | <code>object</code> | default plugin arguments |
| cb | <code>function</code> | plugin def function |

<a id="module_bfx-api-node-core.getPluginState"></a>

### bfx-api-node-core.getPluginState(id, wsState) ⇒ [<code>Plugin</code>](#module_bfx-api-node-core.Plugin)
Get plugin state by ID from a socket

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>Plugin</code>](#module_bfx-api-node-core.Plugin) - plugin - may be undefined  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique plugin ID |
| wsState | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |

<a id="module_bfx-api-node-core.auth"></a>

### bfx-api-node-core.auth(state, opts) ⇒ <code>Promise</code>
Attempts to authenticate with the connection's configured API credentials,
and the provided flags. Returns a promise that resolves/rejects on
success/failure.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>Promise</code> - p - resolves on successful auth  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| opts | [<code>AuthArgs</code>](#module_bfx-api-node-core.AuthArgs) | auth args |

<a id="module_bfx-api-node-core.getWSDataChannelCount"></a>

### bfx-api-node-core.getWSDataChannelCount(state) ⇒ <code>number</code>
Returns the number of data channel subscriptions. Pending subscriptions are
counted as the subscribe packet has been emitted.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>number</code> - dataChannelCount  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |

<a id="module_bfx-api-node-core.getPendingSubscriptionCount"></a>

### bfx-api-node-core.getPendingSubscriptionCount(state) ⇒ <code>number</code>
Query the number of pending channel subscriptions (subscribed but
confirmation packet not yet received)

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>number</code> - pendingSubCount  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |

<a id="module_bfx-api-node-core.getPendingUnsubscriptionCount"></a>

### bfx-api-node-core.getPendingUnsubscriptionCount(state) ⇒ <code>number</code>
Query the number of pending channel unsubscriptions (unsubscribed but
confirmation packet not yet received)

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>number</code> - pendingUnsubCount  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |

<a id="module_bfx-api-node-core.disableFlag"></a>

### bfx-api-node-core.disableFlag(state, flag, silent) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Disables a flag; updates the connection flag set

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - nextState  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| flag | <code>number</code> | individual flag to disable |
| silent | <code>boolean</code> | if true, no event is emitted |

<a id="module_bfx-api-node-core.enableFlag"></a>

### bfx-api-node-core.enableFlag(state, flag, silent) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Enables a flag; updates the connection flag set

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - nextState  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| flag | <code>number</code> | individual flag to enable |
| silent | <code>boolean</code> | if true, no event is emitted |

<a id="module_bfx-api-node-core.isFlagEnabled"></a>

### bfx-api-node-core.isFlagEnabled(state, flag) ⇒ <code>boolean</code>
Query if a flag is enabled on the provided socket.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>boolean</code> - enabled  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| flag | <code>number</code> | flag |

<a id="module_bfx-api-node-core.setFlags"></a>

### bfx-api-node-core.setFlags(state, flags, silent) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Updates the connections flags

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - nextState  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| flags | <code>number</code> | full flag set |
| silent | <code>boolean</code> | if true, no event is emitted |

<a id="module_bfx-api-node-core.open"></a>

### bfx-api-node-core.open([url], [agent]) ⇒ <code>object</code>
Opens a websocket connection to the provided Bitfinex API URL and prepares
an event emitter to capture and report API stream events.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>object</code> - connectionState - see
  [module:bfx-api-node-core.initState](module:bfx-api-node-core.initState)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [url] | <code>string</code> | <code>&quot;&#x27;wss://api.bitfinex.com/ws/2&#x27;&quot;</code> | endpoint |
| [agent] | <code>object</code> |  | connection agent |

<a id="module_bfx-api-node-core.cancelOrderWithDelay"></a>

### bfx-api-node-core.cancelOrderWithDelay(state, delay, o) ⇒ <code>Promise</code>
Cancels an order from either an order object, array, or raw ID, after the
specified delay.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>Promise</code> - p - resolves/rejects upon confirmation  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| delay | <code>number</code> | in ms |
| o | <code>module:bfx-api-node-models.Order</code> \| <code>module:bfx-api-node-models.Order~Data</code> | order |

<a id="module_bfx-api-node-core.cancelOrder"></a>

### bfx-api-node-core.cancelOrder(state, order) ⇒ <code>Promise</code>
Cancels an order from either an order object, array, or raw ID.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>Promise</code> - p - resolves/rejects upon confirmation  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| order | <code>module:bfx-api-node-models.Order</code> \| <code>module:bfx-api-node-models.Order~Data</code> | order |

<a id="module_bfx-api-node-core.submitOrderWithDelay"></a>

### bfx-api-node-core.submitOrderWithDelay(state, delay, o) ⇒ <code>Promise</code>
Submits an order with either an order model or raw order object, after the
specified delay.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>Promise</code> - p - resolves/rejects upon confirmation  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| delay | <code>number</code> | in ms |
| o | <code>module:bfx-api-node-models.Order</code> \| <code>module:bfx-api-node-models.Order~Data</code> | order |

<a id="module_bfx-api-node-core.submitOrder"></a>

### bfx-api-node-core.submitOrder(state, order) ⇒ <code>Promise</code>
Submits an order with either an order model or raw order object.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>Promise</code> - p - resolves/rejects upon confirmation  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| order | <code>module:bfx-api-node-models.Order</code> \| <code>module:bfx-api-node-models.Order~Data</code> | order |

<a id="module_bfx-api-node-core.updateOrder"></a>

### bfx-api-node-core.updateOrder(state, changes) ⇒ <code>Promise</code>
Updates an order in-place.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>Promise</code> - p - resolves/rejects upon confirmation  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| changes | <code>object</code> | order update packet |
| changes.id | <code>object</code> | id of order to apply update to |

<a id="module_bfx-api-node-core.reopen"></a>

### bfx-api-node-core.reopen(state) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Reopen a socket connection.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - nextState  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |

<a id="module_bfx-api-node-core.send"></a>

### bfx-api-node-core.send(state, msg)
Sends the provided data to the active WebSocket connection, or buffers it if
the connection is not yet open.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| msg | <code>Array</code> \| <code>object</code> | converted to a JSON string before being sent |

<a id="module_bfx-api-node-core.subscribe"></a>

### bfx-api-node-core.subscribe(state, channel, payload) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Subscribes to the specified channel, buffers if the connection is not open.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - state - original ref  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| channel | <code>string</code> | channel type, i.e. 'trades' |
| payload | <code>object</code> | channel filter, i.e. { symbol: '...' } |

<a id="module_bfx-api-node-core.unsubscribe"></a>

### bfx-api-node-core.unsubscribe(state, chanId) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Unsubscribes from the specified channel, buffers if the connection is not
open.

**Kind**: static method of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - state - original ref  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | socket |
| chanId | <code>string</code> \| <code>number</code> | ID of channel to unsubscribe from |

<a id="module_bfx-api-node-core.AuthArgs"></a>

### bfx-api-node-core.AuthArgs : <code>object</code>
Socket authentication arguments, provided to
[WSv2](module:bitfinex-api-node.WSv2) clients by the
[Manager](#module_bfx-api-node-core.Manager)

**Kind**: static typedef of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [dms] | <code>number</code> | <code>0</code> | dead man switch, active 4 |
| [calc] | <code>number</code> | <code>0</code> | calc |

<a id="module_bfx-api-node-core.FullAuthArgs"></a>

### bfx-api-node-core.FullAuthArgs : [<code>AuthArgs</code>](#module_bfx-api-node-core.AuthArgs)
Like [AuthArgs](#module_bfx-api-node-core.AuthArgs) but with API
credentials.

**Kind**: static typedef of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | api key |
| apiSecret | <code>string</code> | api secret |

<a id="module_bfx-api-node-core.PluginEventHandler"></a>

### bfx-api-node-core.PluginEventHandler ⇒ <code>Array</code> \| <code>null</code>
A plugin event handler function.

**Kind**: static typedef of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: <code>Array</code> \| <code>null</code> - stateUpdate - of the form `[socketState, pluginState]`  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | arguments |
| args.state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | target socket |

<a id="module_bfx-api-node-core.PluginGenerator"></a>

### bfx-api-node-core.PluginGenerator ⇒ [<code>Plugin</code>](#module_bfx-api-node-core.Plugin)
Function that returns a [Plugin](#module_bfx-api-node-core.Plugin)
object given a set of arguments.

**Kind**: static typedef of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Returns**: [<code>Plugin</code>](#module_bfx-api-node-core.Plugin) - plugin  

| Param | Type | Description |
| --- | --- | --- |
| pluginArgs | <code>object</code> | plugin arguments |

<a id="module_bfx-api-node-core.PluginHelpers"></a>

### bfx-api-node-core.PluginHelpers : <code>object</code>
An object passed to all plugin method handlers

**Kind**: static typedef of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| emit | <code>function</code> | emit a plugin event automatically including the   plugin ID |
| getState | <code>function</code> | returns the current plugin state |

<a id="module_bfx-api-node-core.Plugin"></a>

### bfx-api-node-core.Plugin : <code>object</code>
Plugin for a [Manager](#module_bfx-api-node-core.Manager) instance.

**Kind**: static typedef of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | unique plugin ID |
| type | <code>string</code> |  | must be 'ws2' |
| [initialState] | <code>object</code> | <code>{}</code> | initial plugin state |
| [manager] | <code>object</code> |  | high-level manager event handler object |
| [manager."ws:created"] | <code>function</code> |  | called when a new socket is   opened |
| [manager."ws:destroyed"] | <code>function</code> |  | called when an existing   socket is destroyed. |
| [ws] | <code>object</code> |  | socket-level event handler object |
| [ws.open] | <code>function</code> |  | called on socket open |
| [ws.message] | <code>function</code> |  | called when any message is received |
| [ws.error] | <code>function</code> |  | called on socket error |
| [ws.close] | <code>function</code> |  | called on socket close |
| [events] | <code>object</code> |  | high-level socket event handler object |
| [events.auth] | <code>function</code> |  | called on socket auth (success or   failure) |
| [events."auth:success"] | <code>function</code> |  | called on auth success |
| [events."auth:error"] | <code>function</code> |  | called on auth failure |
| [events.subscribed] | <code>function</code> |  | called on channel subscription   (confirmed) |
| [events.unsubscribed] | <code>function</code> |  | called on channel unsubscribe   (confirmed) |
| [events.info] | <code>function</code> |  | called when an info message is received |
| [events.config] | <code>function</code> |  | called on any config event |
| [events.error] | <code>function</code> |  | called on any error |
| [data] | <code>object</code> |  | data-related event handler object |
| [data.ticker] | <code>function</code> |  | called when ticker data is received |
| [data.trades] | <code>function</code> |  | called when trade data is received |
| [data.candles] | <code>function</code> |  | called when candle data is received |
| [data.book] | <code>function</code> |  | called when order book data is received |
| [auth] | <code>object</code> |  | auth-channel data event handler object |
| [auth.te] | <code>function</code> |  | called when a 'te' packet is received |
| [auth.tu] | <code>function</code> |  | called when a 'tu' packet is received |
| [auth.os] | <code>function</code> |  | called when an 'os' packet is received |
| [auth.ou] | <code>function</code> |  | called when an 'ou' packet is received |
| [auth.on] | <code>function</code> |  | called when an 'on' packet is received |
| [auth.oc] | <code>function</code> |  | called when an 'oc' packet is received |
| [auth.ps] | <code>function</code> |  | called when an 'ps' packet is received |
| [auth.pu] | <code>function</code> |  | called when an 'pu' packet is received |
| [auth.pn] | <code>function</code> |  | called when an 'pn' packet is received |
| [auth.pc] | <code>function</code> |  | called when an 'pc' packet is received |
| [auth.fos] | <code>function</code> |  | called when an 'fos' packet is received |
| [auth.fon] | <code>function</code> |  | called when an 'fon' packet is received |
| [auth.fou] | <code>function</code> |  | called when an 'fou' packet is received |
| [auth.foc] | <code>function</code> |  | called when an 'foc' packet is received |
| [auth.fcs] | <code>function</code> |  | called when an 'fcs' packet is received |
| [auth.fcn] | <code>function</code> |  | called when an 'fcn' packet is received |
| [auth.fcu] | <code>function</code> |  | called when an 'fcu' packet is received |
| [auth.fcc] | <code>function</code> |  | called when an 'fcc' packet is received |
| [auth.fls] | <code>function</code> |  | called when an 'fls' packet is received |
| [auth.fln] | <code>function</code> |  | called when an 'fln' packet is received |
| [auth.flu] | <code>function</code> |  | called when an 'flu' packet is received |
| [auth.flc] | <code>function</code> |  | called when an 'flc' packet is received |
| [auth.ws] | <code>function</code> |  | called when an 'ws' packet is received |
| [auth.wu] | <code>function</code> |  | called when an 'wu' packet is received |
| [auth.bu] | <code>function</code> |  | called when an 'bu' packet is received |
| [auth.miu] | <code>function</code> |  | called when an 'miu' packet is received |
| [auth.fiu] | <code>function</code> |  | called when an 'fiu' packet is received |
| [auth.fte] | <code>function</code> |  | called when an 'fte' packet is received |
| [auth.ftu] | <code>function</code> |  | called when an 'ftu' packet is received |

<a id="module_bfx-api-node-core.SocketState"></a>

### bfx-api-node-core.SocketState : <code>object</code>
A single Bitfinex WebSocket v2 API connection, and all associated state/data

**Kind**: static typedef of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| channels | <code>object</code> |  | key'ed by ID, values are subscription   confirmations (includes channel filter data) |
| pendingSubscriptions | <code>Array.&lt;Array&gt;</code> |  | array with elements of the form   `[channelType, payload]` i.e. `['trades', { symbol: 'tBTCUSD" ]]`,   referring to channels that have been subscribed too but no confirmation   packet has yet been received. |
| pendingUnsubscriptions | <code>Array.&lt;Array&gt;</code> |  | array of the same format as   `pendingSubscriptions`, but refers to channels which have been   unsubscribed from but no confirmation packet has yet been received. |
| plugins | <code>object</code> |  | [Plugin](#module_bfx-api-node-core.Plugin)   objects key'ed by ID |
| id | <code>number</code> |  | unique socket identifier |
| isOpen | <code>boolean</code> |  | indicates if the connection is open |
| sendBuffer | <code>Array.&lt;Array&gt;</code> |  | array of packets to be sent once the   connection is established; used to buffer packets sent prior to connect. |
| [apiKey] | <code>string</code> |  | api key |
| [apiSecret] | <code>string</code> |  | api secret |
| [transform] | <code>boolean</code> | <code>false</code> | enables automatic transformation of   incoming data to models from   [bfx-api-node-models](module:bfx-api-node-models) |
| [agent] | <code>function</code> |  | connection agent |
| ev | <code>EventEmitter</code> |  | socket event emitter |
| emit | <code>function</code> |  | wrapper around `ev.emit` inside a   `setTimeout(..., 0)` call |
| ws | <code>WebSocket</code> |  | actual websocket client object |

<a id="module_bfx-api-node-core.Manager"></a>

### bfx-api-node-core~Manager ⇐ <code>EventEmitter</code>
WSv2 connection pool manager. Limits active channel subscriptions per socket,
opening new sockets/closing existing one as needed.

**Kind**: inner class of [<code>bfx-api-node-core</code>](#module_bfx-api-node-core)  
**Extends**: <code>EventEmitter</code>  

* [~Manager](#module_bfx-api-node-core.Manager) ⇐ <code>EventEmitter</code>
    * [new Manager([args])](#new_module_bfx-api-node-core.Manager_new)
    * [.updateAuthArgs(args)](#module_bfx-api-node-core.Manager+updateAuthArgs)
    * [.hasPlugin(plugin)](#module_bfx-api-node-core.Manager+hasPlugin) ⇒ <code>boolean</code>
    * [.addPlugin(plugin)](#module_bfx-api-node-core.Manager+addPlugin)
    * [.auth([args])](#module_bfx-api-node-core.Manager+auth)
    * [.getWS(id)](#module_bfx-api-node-core.Manager+getWS) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
    * [.getWSIndex(id)](#module_bfx-api-node-core.Manager+getWSIndex) ⇒ <code>number</code>
    * [.getWSByIndex(index)](#module_bfx-api-node-core.Manager+getWSByIndex) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
    * [.updateWS(id, state)](#module_bfx-api-node-core.Manager+updateWS)
    * [.closeAllSockets()](#module_bfx-api-node-core.Manager+closeAllSockets)
    * [.reconnectAllSockets()](#module_bfx-api-node-core.Manager+reconnectAllSockets)
    * [.closeWS(id)](#module_bfx-api-node-core.Manager+closeWS)
    * [.openWS()](#module_bfx-api-node-core.Manager+openWS) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
    * [.onWS(eventName, filterValue, cb)](#module_bfx-api-node-core.Manager+onWS)
    * [.onceWS(eventName, filterValue, cb)](#module_bfx-api-node-core.Manager+onceWS)
    * [.notifyPlugins(type, section, name, args)](#module_bfx-api-node-core.Manager+notifyPlugins)
    * [.notifyPlugin(plugin, section, name, args)](#module_bfx-api-node-core.Manager+notifyPlugin)
    * [.withFreeDataSocket(cb)](#module_bfx-api-node-core.Manager+withFreeDataSocket)
    * [.withDataSocket(filterCB, cb)](#module_bfx-api-node-core.Manager+withDataSocket)
    * [.withAuthSocket(cb)](#module_bfx-api-node-core.Manager+withAuthSocket)
    * [.withSocket(cb)](#module_bfx-api-node-core.Manager+withSocket)
    * [.sampleWS()](#module_bfx-api-node-core.Manager+sampleWS) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
    * [.sampleWSI()](#module_bfx-api-node-core.Manager+sampleWSI) ⇒ <code>number</code>
    * [.applyWS(i, cb)](#module_bfx-api-node-core.Manager+applyWS)

<a id="new_module_bfx-api-node-core.Manager_new"></a>

#### new Manager([args])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [args] | <code>object</code> | <code>{}</code> | arguments |
| [args.wsURL] | <code>string</code> | <code>&quot;&#x27;wss://api.bitfinex.com/ws/2&#x27;&quot;</code> | defaults to   production Bitfinex WSv2 API url |
| [args.restURL] | <code>string</code> | <code>&quot;&#x27;https://api.bitfinex.com&#x27;&quot;</code> | defaults to   production Bitfinex RESTv2 API url |
| [args.agent] | <code>object</code> |  | connection agent |
| [args.apiKey] | <code>string</code> |  | used to authenticate sockets |
| [args.apiSecret] | <code>string</code> |  | used to authenticate sockets |
| [args.autoResubscribe] | <code>boolean</code> | <code>true</code> | enables automatic   subscribing to previously subscribed channels on reconnect |
| [args.channelsPerSocket] | <code>number</code> | <code>30</code> | max data channel   subscriptions per WSv2 client |
| [args.dms] | <code>number</code> | <code>0</code> | dead-man-switch flag sent on auth, active 4 |
| [args.calc] | <code>number</code> | <code>0</code> | calc |
| [args.transform] | <code>boolean</code> |  | if true, raw API data arrays will be   automatically converted to bfx-api-node-models instances |
| [args.plugins] | <code>object</code> |  | optional set of plugins to use |

**Example**  
```js
const debug = require('debug')('example')
const { subscribe, Manager } = require('bfx-api-node-core')
const SYMBOL = 'tBTCUSD'

debug('opening connection...')

const m = new Manager({ transform: true })
const wsState = m.openWS()

m.on('ws2:open', () => debug('connection opened'))
m.on('ws2:close', () => debug('connection closed'))
m.on('ws2:trades', (trades, meta) => {
  const { chanFilter } = meta
  const { symbol, pair } = chanFilter
  const [trade] = trades
  const nTrades = trades.length

  debug('recv %d trades on for symbol %s [pair %s]', nTrades, symbol, pair)
  debug(
    'latest trade: id %s, price %d, amount %d, mts: %s',
    trade.id, trade.price, trade.amount, new Date(trade.mts).toLocaleString()
  )
})

debug('subscribing to trades channel %s', SYMBOL)

subscribe(wsState, 'trades', { symbol: SYMBOL })
```
<a id="module_bfx-api-node-core.Manager+updateAuthArgs"></a>

#### manager.updateAuthArgs(args)
Update authentication arguments used for all connections on auth. Provided
args are merged with existing ones.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| args | [<code>AuthArgs</code>](#module_bfx-api-node-core.AuthArgs) | args |

<a id="module_bfx-api-node-core.Manager+hasPlugin"></a>

#### manager.hasPlugin(plugin) ⇒ <code>boolean</code>
Check for plugin existence by ID

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**Returns**: <code>boolean</code> - hasPlugin  

| Param | Type | Description |
| --- | --- | --- |
| plugin | [<code>Plugin</code>](#module_bfx-api-node-core.Plugin) | plugin |

<a id="module_bfx-api-node-core.Manager+addPlugin"></a>

#### manager.addPlugin(plugin)
No-op if the plugin is already registered

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| plugin | [<code>Plugin</code>](#module_bfx-api-node-core.Plugin) | plugin |

<a id="module_bfx-api-node-core.Manager+auth"></a>

#### manager.auth([args])
Authenticates all open API connections, and updates auth arguments used
for future connections with those provided.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| [args] | [<code>FullAuthArgs</code>](#module_bfx-api-node-core.FullAuthArgs) | defaults to values   provided to constructor |

<a id="module_bfx-api-node-core.Manager+getWS"></a>

#### manager.getWS(id) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Returns a connection state object by ID

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - state - connection state  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | connection ID |

<a id="module_bfx-api-node-core.Manager+getWSIndex"></a>

#### manager.getWSIndex(id) ⇒ <code>number</code>
Returns the index of a connection within the internal pool by ID

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**Returns**: <code>number</code> - index - within internal pool  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | connection ID |

<a id="module_bfx-api-node-core.Manager+getWSByIndex"></a>

#### manager.getWSByIndex(index) ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Returns a connection state object by pool index

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - state - connection state  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | within internal pool |

<a id="module_bfx-api-node-core.Manager+updateWS"></a>

#### manager.updateWS(id, state)
Updates an internal connection by ID, emitting the socket:updated event
if the connection exists.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | id |
| state | [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) | new connection state |

<a id="module_bfx-api-node-core.Manager+closeAllSockets"></a>

#### manager.closeAllSockets()
Closes all connections in the pool

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
<a id="module_bfx-api-node-core.Manager+reconnectAllSockets"></a>

#### manager.reconnectAllSockets()
Closes and re-opens all connections in the pool

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
<a id="module_bfx-api-node-core.Manager+closeWS"></a>

#### manager.closeWS(id)
Closes a connection by ID, no-op if the connection is not found.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | id |

<a id="module_bfx-api-node-core.Manager+openWS"></a>

#### manager.openWS() ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Creates & opens a new WSv2 connection, adds it to the pool, and returns it

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - connection  
<a id="module_bfx-api-node-core.Manager+onWS"></a>

#### manager.onWS(eventName, filterValue, cb)
Creates an event handler that updates the relevant internal socket state
object.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | event name |
| filterValue | <code>object</code> | value(s) to check for |
| cb | <code>function</code> | callback |

<a id="module_bfx-api-node-core.Manager+onceWS"></a>

#### manager.onceWS(eventName, filterValue, cb)
Creates an event handler that updates the relevant internal socket state
object, and only fires once

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | event name |
| filterValue | <code>object</code> | value(s) to check for |
| cb | <code>function</code> | callback |

<a id="module_bfx-api-node-core.Manager+notifyPlugins"></a>

#### manager.notifyPlugins(type, section, name, args)
Calls every matching plugin with the provided arguments, and updates the
relevant ws/rest state objects internally.

State objects are only updated if plugin handlers return valid objects

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**See**: module:bfx-api-node-core.Manager#notifyPlugin  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | ws2 or rest2 |
| section | <code>string</code> | event section |
| name | <code>string</code> | event name |
| args | <code>object</code> | plugin handler arguments |

<a id="module_bfx-api-node-core.Manager+notifyPlugin"></a>

#### manager.notifyPlugin(plugin, section, name, args)
Calls the identified plugin with the provided arguments, and updates the
relevant ws/rest state objects internally.

State objects are only updated if plugin handlers return valid objects

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**See**: module:bfx-api-node-core.Manager#notifyPlugins  

| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>object</code> | plugin identifier |
| plugin.id | <code>string</code> | plugin ID |
| plugin.type | <code>string</code> | plugin type |
| section | <code>string</code> | event section |
| name | <code>string</code> | event name |
| args | <code>object</code> | plugin handler arguments |

<a id="module_bfx-api-node-core.Manager+withFreeDataSocket"></a>

#### manager.withFreeDataSocket(cb)
Calls the provided function with a connection instance that can subscribe
to at least 1 more data channel. If no such connection is found, a new one
is opened.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | callback |

<a id="module_bfx-api-node-core.Manager+withDataSocket"></a>

#### manager.withDataSocket(filterCB, cb)
Calls the provided function with a connection instance that is subscribed
to a channel matching the provided filter callback, which is called with
each subscribed channel descriptor.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| filterCB | <code>function</code> | filter callback, called with each channel on   each socket to find the desired data channel. |
| cb | <code>function</code> | callback, called with identified socket. Not called   if `filterCB` fails to identify a valid socket. |

<a id="module_bfx-api-node-core.Manager+withAuthSocket"></a>

#### manager.withAuthSocket(cb)
Calls the provided function with an authenticated socket instance; updates
the socket state with the returned result.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | callback |

<a id="module_bfx-api-node-core.Manager+withSocket"></a>

#### manager.withSocket(cb)
Calls the provided function with a random open connection instance. If none
exists, this is a no-op.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | callback |

<a id="module_bfx-api-node-core.Manager+sampleWS"></a>

#### manager.sampleWS() ⇒ [<code>SocketState</code>](#module_bfx-api-node-core.SocketState)
Returns a random connection from the pool

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**Returns**: [<code>SocketState</code>](#module_bfx-api-node-core.SocketState) - state  
<a id="module_bfx-api-node-core.Manager+sampleWSI"></a>

#### manager.sampleWSI() ⇒ <code>number</code>
Returns a random connection index from the pool

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  
**Returns**: <code>number</code> - index  
<a id="module_bfx-api-node-core.Manager+applyWS"></a>

#### manager.applyWS(i, cb)
Calls the provided callback with the connection at the specified pool
index, and saves the return value as the new connection instance.

**Kind**: instance method of [<code>Manager</code>](#module_bfx-api-node-core.Manager)  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | socket index |
| cb | <code>function</code> | callback |

