---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
* [Server](#Server)
    * [new Server(args, dataPath)](#new_Server_new)
    * [.listen()](#Server+listen)
    * [.close()](#Server+close) ⇒ <code>Promise</code>
    * [.getResponse(key)](#Server+getResponse) ⇒ <code>string</code>
    * [.setResponse(key, data)](#Server+setResponse)
* [REST2Server](#REST2Server)
    * [new REST2Server(args)](#new_REST2Server_new)
    * [.listen()](#REST2Server+listen)
    * [.close()](#REST2Server+close) ⇒ <code>Promise</code>
* [WS2Server](#WS2Server)
    * [new WS2Server(args)](#new_WS2Server_new)
    * [.isOpen()](#WS2Server+isOpen) ⇒ <code>boolean</code>
    * [.listen()](#WS2Server+listen)
    * [.close()](#WS2Server+close) ⇒ <code>Promise</code>
    * [.once(eventName, cb)](#WS2Server+once)
    * [.send(packet)](#WS2Server+send)
:::
<a id="Server"></a>

## Server
Mock server base class, listens for commands to get/set responses

**Kind**: global class  
<a id="new_Server_new"></a>

### new Server(args, dataPath)

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.cmdPort | <code>number</code> | port to listen on for HTTP command API |
| dataPath | <code>string</code> | path to JSON file with responses |

<a id="Server+listen"></a>

### server.listen()
Starts the HTTP command server listening on the configured port. This is
a no-op if the server is already up.

**Kind**: instance method of [<code>Server</code>](#Server)  
<a id="Server+close"></a>

### server.close() ⇒ <code>Promise</code>
Closes the command server if it is running, no-op if not.

**Kind**: instance method of [<code>Server</code>](#Server)  
**Returns**: <code>Promise</code> - p - resolves upon completion  
<a id="Server+getResponse"></a>

### server.getResponse(key) ⇒ <code>string</code>
Returns the configured server response for the given key

**Kind**: instance method of [<code>Server</code>](#Server)  
**Returns**: <code>string</code> - response - JSON  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a id="Server+setResponse"></a>

### server.setResponse(key, data)
Sets the provided data as the server response for the given key. Note that
the data is converted to JSON.

**Kind**: instance method of [<code>Server</code>](#Server)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| data | <code>\*</code> | 

<a id="REST2Server"></a>

## REST2Server
REST v2 API server mock

Exposes the same routes as the real API, and maps them to a response table.
Multiple potential responses can be defined for endpoints with arguments,
with the best match sent to clients on request.

i.e. If the following responses are configured:
  orders.tBTCUSD: [42],
  orders: [41]
A GET on /v2/auth/r/orders/tBTCUSD/hist would return [42], but a query for
a different symbol (tETHUSD) would return [41].

**Kind**: global class  
<a id="new_REST2Server_new"></a>

### new REST2Server(args)

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.apiPort | <code>number</code> |  |
| args.cmdPort | <code>number</code> |  |
| args.listen | <code>boolean</code> | if true, listen() is called automatically |

<a id="REST2Server+listen"></a>

### resT2Server.listen()
Starts the API server listening on the configured port. This is a no-op if
the server is already up

**Kind**: instance method of [<code>REST2Server</code>](#REST2Server)  
<a id="REST2Server+close"></a>

### resT2Server.close() ⇒ <code>Promise</code>
Closes the API server if it is running; This is a no-op if it is not.

**Kind**: instance method of [<code>REST2Server</code>](#REST2Server)  
**Returns**: <code>Promise</code> - p - resolves/rejects on success/error  
<a id="WS2Server"></a>

## WS2Server
Acts as a mock for v2 of the Bitfinex websocket API. Responses to available
commands are loaded from data/ws2.json and can be modified at runtime. The
command API allows for arbitrary packets to be injected into the ws stream.

If `syncOnConnect` is true, clients receive snapshots when connecting

Responses are of the form [{ packets: [...] }], where mulitple packets are
sent in order. A packet can be a string referencing another response by key.

**Kind**: global class  
**See**: ws2.json  
<a id="new_WS2Server_new"></a>

### new WS2Server(args)
Spawns a new mock WS2 API server. Supported commands:
  POST /send - body is parsed as JSON and sent to all clients
  POST /config - body is parsed as JSON, and valid config keys are saved


| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.apiPort | <code>number</code> | which port to listen on for ws clients |
| args.cmdPort | <code>number</code> | which port to listen on for commands |
| args.syncOnConnect | <code>boolean</code> | send snapshots to clients on connect |
| args.listen | <code>boolean</code> | if true, listen() is called automatically |

<a id="WS2Server+isOpen"></a>

### wS2Server.isOpen() ⇒ <code>boolean</code>
Returns server active status

**Kind**: instance method of [<code>WS2Server</code>](#WS2Server)  
**Returns**: <code>boolean</code> - open  
<a id="WS2Server+listen"></a>

### wS2Server.listen()
Starts the API server listening on the configured port. This is a no-op if
the server is already up

**Kind**: instance method of [<code>WS2Server</code>](#WS2Server)  
<a id="WS2Server+close"></a>

### wS2Server.close() ⇒ <code>Promise</code>
Closes the API server if it is running; This is a no-op if it is not.

**Kind**: instance method of [<code>WS2Server</code>](#WS2Server)  
**Returns**: <code>Promise</code> - p - resolves/rejects on success/error  
<a id="WS2Server+once"></a>

### wS2Server.once(eventName, cb)
Configures an event handler to be called once when the specified event is
emitted by the API server. No-op if the server is not yet up.

**Kind**: instance method of [<code>WS2Server</code>](#WS2Server)  

| Param | Type |
| --- | --- |
| eventName | <code>string</code> | 
| cb | <code>function</code> | 

<a id="WS2Server+send"></a>

### wS2Server.send(packet)
Sends the provided packet to all connected clients

**Kind**: instance method of [<code>WS2Server</code>](#WS2Server)  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>\*</code> | stringifed before being sent |

