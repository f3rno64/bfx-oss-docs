<a id="module_bfx-hf-data-server"></a>

## bfx-hf-data-server
The HF data server exposes a websocket interface for querying trade/candle
data from Bitfinex, and syncronizes that data in a local DB.

The DB backend is implemented by a plugin, currently the following are available:
* [bfx-hf-models-adapter-sql](module:bfx-hf-models-adapter-sql)
* [bfx-hf-models-adapter-lowdb](module:bfx-hf-models-adapter-lowdb)

Regardless of the backend, a schema must be specified (providing
exchange-specific API methods). The official Bitfinex schema is
[bfx-hf-ext-plugin-bitfinex](module:bfx-hf-ext-plugin-bitfinex)

### Installation

For standalone usage:

```bash
git clone https://github.com/bitfinexcom/bfx-hf-data-server
cd bfx-hf-data-server
npm i

cp .env.example .env

npm run start-lowdb
```

For usage/extension within an existing project:

```bash
npm i --save bfx-hf-data-server
```

### Quickstart

Follow the installation instructions, and run either `npm run start-lowdb`
or `npm run start-sql` depending on your selected DB backend. Be sure the
required `DB_FILENAME` or `PSQL_CONNECTION` strings are present in `.env`
(see `.env.example`).

**License**: Apache-2.0  
::: api-docs-index
* [bfx-hf-data-server](#module_bfx-hf-data-server)
    * _static_
        * [.BacktestParameters](#module_bfx-hf-data-server.BacktestParameters) : <code>object</code>
    * _inner_
        * [~Server](#module_bfx-hf-data-server.Server)
            * [new Server(args)](#new_module_bfx-hf-data-server.Server_new)
            * [.open()](#module_bfx-hf-data-server.Server+open)
            * [.close()](#module_bfx-hf-data-server.Server+close)
            * [.getRunningSyncRanges()](#module_bfx-hf-data-server.Server+getRunningSyncRanges) ⇒ <code>Array.&lt;object&gt;</code>
            * [.isSyncActive(range)](#module_bfx-hf-data-server.Server+isSyncActive) ⇒ <code>boolean</code>
            * [.expectSync(range)](#module_bfx-hf-data-server.Server+expectSync) ⇒ <code>Promise</code>
            * [.optimizeSyncRange(range)](#module_bfx-hf-data-server.Server+optimizeSyncRange) ⇒ <code>object</code>
            * [.notifySyncStart(range)](#module_bfx-hf-data-server.Server+notifySyncStart)
            * [.notifySyncEnd(range)](#module_bfx-hf-data-server.Server+notifySyncEnd)
:::
<a id="module_bfx-hf-data-server.BacktestParameters"></a>

### bfx-hf-data-server.BacktestParameters : <code>object</code>
Backtest parameters

**Kind**: static typedef of [<code>bfx-hf-data-server</code>](#module_bfx-hf-data-server)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| exchange | <code>string</code> | exchange ID, i.e. `'bitfinex'` |
| symbol | <code>string</code> | backtest symbol, i.e. `'tBTCUSD'` |
| tf | <code>string</code> | candle timeframe, i.e. `'1h'` |
| start | <code>number</code> | start timestamp |
| end | <code>number</code> | end timestamp |
| includeTrades | <code>boolean</code> | enables trade data in backtest |
| includeCandles | <code>boolean</code> | enables candle data in backtest |
| sync | <code>boolean</code> | if true, missing data is synced from Bitfinex |

<a id="module_bfx-hf-data-server.Server"></a>

### bfx-hf-data-server~Server
Honey Framework Data Server

**Kind**: inner class of [<code>bfx-hf-data-server</code>](#module_bfx-hf-data-server)  

* [~Server](#module_bfx-hf-data-server.Server)
    * [new Server(args)](#new_module_bfx-hf-data-server.Server_new)
    * [.open()](#module_bfx-hf-data-server.Server+open)
    * [.close()](#module_bfx-hf-data-server.Server+close)
    * [.getRunningSyncRanges()](#module_bfx-hf-data-server.Server+getRunningSyncRanges) ⇒ <code>Array.&lt;object&gt;</code>
    * [.isSyncActive(range)](#module_bfx-hf-data-server.Server+isSyncActive) ⇒ <code>boolean</code>
    * [.expectSync(range)](#module_bfx-hf-data-server.Server+expectSync) ⇒ <code>Promise</code>
    * [.optimizeSyncRange(range)](#module_bfx-hf-data-server.Server+optimizeSyncRange) ⇒ <code>object</code>
    * [.notifySyncStart(range)](#module_bfx-hf-data-server.Server+notifySyncStart)
    * [.notifySyncEnd(range)](#module_bfx-hf-data-server.Server+notifySyncEnd)

<a id="new_module_bfx-hf-data-server.Server_new"></a>

#### new Server(args)

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | arguments |
| args.db | <code>object</code> | bfx-hf-models DB instance |
| args.apiKey | <code>string</code> | for bfx proxy |
| args.apiSecret | <code>string</code> | for bfx proxy |
| args.agent | <code>object</code> | optional proxy agent for bfx proxy connection |
| args.wsURL | <code>string</code> | bitfinex websocket API URL |
| args.restURL | <code>string</code> | bitfinex RESTv2 API URL |
| args.transform | <code>boolean</code> | for bfx proxy |
| args.proxy | <code>boolean</code> | if true, a bfx proxy will be opened for every client |
| args.port | <code>number</code> | websocket server port |

<a id="module_bfx-hf-data-server.Server+open"></a>

#### server.open()
Spawns the WebSocket API server; throws an error if it is already open

**Kind**: instance method of [<code>Server</code>](#module_bfx-hf-data-server.Server)  
<a id="module_bfx-hf-data-server.Server+close"></a>

#### server.close()
Closes the WebSocket API server; throws an error if it is not open

**Kind**: instance method of [<code>Server</code>](#module_bfx-hf-data-server.Server)  
<a id="module_bfx-hf-data-server.Server+getRunningSyncRanges"></a>

#### server.getRunningSyncRanges() ⇒ <code>Array.&lt;object&gt;</code>
Returns an array of active sync ranges

**Kind**: instance method of [<code>Server</code>](#module_bfx-hf-data-server.Server)  
**Returns**: <code>Array.&lt;object&gt;</code> - ranges  
<a id="module_bfx-hf-data-server.Server+isSyncActive"></a>

#### server.isSyncActive(range) ⇒ <code>boolean</code>
Queries if an active sync exists covering the specified range

**Kind**: instance method of [<code>Server</code>](#module_bfx-hf-data-server.Server)  
**Returns**: <code>boolean</code> - isActive  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>object</code> | range |
| range.start | <code>number</code> | start timestamp |
| range.end | <code>number</code> | end timestamp |
| range.exchange | <code>string</code> | exchange ID |
| range.symbol | <code>string</code> | symbol |
| range.tf | <code>string</code> | timeframe |

<a id="module_bfx-hf-data-server.Server+expectSync"></a>

#### server.expectSync(range) ⇒ <code>Promise</code>
Returns a promise that resolves when a sync covering the specified range
finishes. If no such sync is active, this is a no-op.

**Kind**: instance method of [<code>Server</code>](#module_bfx-hf-data-server.Server)  
**Returns**: <code>Promise</code> - p - resolves on sync completion  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>object</code> | range |
| range.start | <code>number</code> | start timestamp |
| range.end | <code>number</code> | end timestamp |
| range.exchange | <code>string</code> | exchange ID |
| range.symbol | <code>string</code> | symbol |
| range.tf | <code>string</code> | timeframe |

<a id="module_bfx-hf-data-server.Server+optimizeSyncRange"></a>

#### server.optimizeSyncRange(range) ⇒ <code>object</code>
Returns a sync range that takes into account active syncs, to prevent
overlapping sync tasks.

**Kind**: instance method of [<code>Server</code>](#module_bfx-hf-data-server.Server)  
**Returns**: <code>object</code> - optimalRange - null if sync not required at all  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>object</code> | range |
| range.exchange | <code>string</code> | exchange ID |
| range.symbol | <code>string</code> | symbol |
| range.tf | <code>string</code> | timeframe |
| range.start | <code>number</code> | start timestamp |
| range.end | <code>number</code> | end timestamp |

<a id="module_bfx-hf-data-server.Server+notifySyncStart"></a>

#### server.notifySyncStart(range)
Notify the server that a sync is running for the specified range/market

**Kind**: instance method of [<code>Server</code>](#module_bfx-hf-data-server.Server)  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>object</code> | range |
| range.exchange | <code>string</code> | exchange ID |
| range.symbol | <code>string</code> | symbol |
| range.tf | <code>string</code> | timeframe |
| range.start | <code>number</code> | start timestamp |
| range.end | <code>number</code> | end timestamp |

<a id="module_bfx-hf-data-server.Server+notifySyncEnd"></a>

#### server.notifySyncEnd(range)
Notify the server that a sync has finished for the specified range/market

**Kind**: instance method of [<code>Server</code>](#module_bfx-hf-data-server.Server)  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>object</code> | range |
| range.exchange | <code>string</code> | exchange ID |
| range.symbol | <code>string</code> | symbol |
| range.tf | <code>string</code> | timeframe |
| range.start | <code>number</code> | start timestamp |
| range.end | <code>number</code> | end timestamp |

