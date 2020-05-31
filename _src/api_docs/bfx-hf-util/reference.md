---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
* [bfx-hf-util](#module_bfx-hf-util)
    * [.TIME_FRAME_WIDTHS](#module_bfx-hf-util.TIME_FRAME_WIDTHS) : <code>enum</code>
    * [.TIME_FRAMES](#module_bfx-hf-util.TIME_FRAMES) : <code>enum</code>
    * [.WALLET_TYPES](#module_bfx-hf-util.WALLET_TYPES)
    * [.alignRangeMTS(tf, mts)](#module_bfx-hf-util.alignRangeMTS) ⇒ <code>number</code>
    * [.candleWidth(tf)](#module_bfx-hf-util.candleWidth) ⇒ <code>number</code>
    * [.chunksForRange(tf, start, end, candlesPerChunk)](#module_bfx-hf-util.chunksForRange) ⇒ <code>Array.&lt;object&gt;</code>
    * [.preprocessRemoteCandles(tf, candles, transformed)](#module_bfx-hf-util.preprocessRemoteCandles) ⇒ <code>Array</code>
    * [.registerExitCallback(cb, [priority])](#module_bfx-hf-util.registerExitCallback)
    * [.genRangeString(from, to)](#module_bfx-hf-util.genRangeString) ⇒ <code>string</code>
:::
<a id="module_bfx-hf-util"></a>

## bfx-hf-util
This library hosts a set of utility functions used throughout the Bitfinex
Honey Framework & API Libraries.

### Features

* Logic for processing Bitfinex candle data
* [Helper for catching uncaught errors](module:bfx-hf-util.catchUncaughtErrors)

### Installation

```bash
npm i --save bfx-hf-util
```

### Quickstart

```js
const { preprocessRemoteCandles } = require('bfx-hf-util')
const { RESTv2 } = require('bfx-api-node-rest')

const rest = new RESTv2()
const candles = await rest.candles({
  timeframe: '1m',
  symbol: 'tBTCUSD',
  query: {
    start: Date.now() - (24 * 60 * 60 * 1000),
    end: Date.now(),
    sort: 1,
  }
})

// Fill in empty candles to generate a consistent dataset
const processedCandles = preprocessRemoteCandles('1m', candles)

// Do something with data
processCandles.forEach(candle => console.log(JSON.stringify(candle)))
```

**License**: Apache-2.0  
<a id="module_bfx-hf-util.TIME_FRAME_WIDTHS"></a>

### bfx-hf-util.TIME\_FRAME\_WIDTHS : <code>enum</code>
Candle time frame widths in ms

**Kind**: static enum of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| 1m | <code>number</code> | <code></code> | One Minute Candles |
| 5m | <code>number</code> | <code></code> | Five Minutes Candles |
| 15m | <code>number</code> | <code></code> | Fifteen Minutes Candles |
| 30m | <code>number</code> | <code></code> | Thirty Minutes Candles |
| 1h | <code>number</code> | <code></code> | One Hour Candles |
| 3h | <code>number</code> | <code></code> | Three Hour Candles |
| 6h | <code>number</code> | <code></code> | Six Hour Candles |
| 12h | <code>number</code> | <code></code> | Twelve Hour Candles |
| 1D | <code>number</code> | <code></code> | One Day Candles |
| 7D | <code>number</code> | <code></code> | Seven Day Candles |
| 14D | <code>number</code> | <code></code> | Fourteen Day Candles |
| 1M | <code>number</code> | <code></code> | One Month Candles |

<a id="module_bfx-hf-util.TIME_FRAMES"></a>

### bfx-hf-util.TIME\_FRAMES : <code>enum</code>
Candle time frame string names

**Kind**: static enum of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ONE_MINUTE | <code>string</code> | <code>&quot;1m&quot;</code> | One Minute Candles |
| FIVE_MINUTES | <code>string</code> | <code>&quot;5m&quot;</code> | Five Minutes Candles |
| FIFTEEN_MINUTES | <code>string</code> | <code>&quot;15m&quot;</code> | Fifteen Minutes Candles |
| THIRTY_MINUTES | <code>string</code> | <code>&quot;30m&quot;</code> | Thirty Minutes Candles |
| ONE_HOUR | <code>string</code> | <code>&quot;1h&quot;</code> | One Hour Candles |
| THREE_HOURS | <code>string</code> | <code>&quot;3h&quot;</code> | Three Hour Candles |
| SIX_HOURS | <code>string</code> | <code>&quot;6h&quot;</code> | Six Hour Candles |
| TWELVE_HOURS | <code>string</code> | <code>&quot;12h&quot;</code> | Twelve Hour Candles |
| ONE_DAY | <code>string</code> | <code>&quot;1D&quot;</code> | One Day Candles |
| SEVEN_DAYS | <code>string</code> | <code>&quot;7D&quot;</code> | Seven Day Candles |
| FOURTEEN_DAYS | <code>string</code> | <code>&quot;14D&quot;</code> | Fourteen Day Candles |
| ONE_MONTH | <code>string</code> | <code>&quot;1M&quot;</code> | One Month Candles |

<a id="module_bfx-hf-util.WALLET_TYPES"></a>

### bfx-hf-util.WALLET\_TYPES
Array of valid wallet types

**Kind**: static constant of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  
**Read only**: true  
<a id="module_bfx-hf-util.alignRangeMTS"></a>

### bfx-hf-util.alignRangeMTS(tf, mts) ⇒ <code>number</code>
Rounds the timestamp to the nearest 1m/5m/1h/etc (0 sec & 0 ms)

**Kind**: static method of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  
**Returns**: <code>number</code> - aligned - rounded to nearest candle width  

| Param | Type | Description |
| --- | --- | --- |
| tf | <code>string</code> | candle time frame to use for alignment |
| mts | <code>number</code> |  |

<a id="module_bfx-hf-util.candleWidth"></a>

### bfx-hf-util.candleWidth(tf) ⇒ <code>number</code>
Returns the width of a candle time frame in ms

**Kind**: static method of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  
**Returns**: <code>number</code> - width - null if time frame is invalid  

| Param | Type | Description |
| --- | --- | --- |
| tf | <code>string</code> | candle time frame, i.e. '1m' |

<a id="module_bfx-hf-util.chunksForRange"></a>

### bfx-hf-util.chunksForRange(tf, start, end, candlesPerChunk) ⇒ <code>Array.&lt;object&gt;</code>
Returns a set of aligned chunks covering the specified range; the chunks will
almost always start before & end beyond the range.

**Kind**: static method of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  
**Returns**: <code>Array.&lt;object&gt;</code> - chunks  

| Param | Type |
| --- | --- |
| tf | <code>string</code> | 
| start | <code>number</code> | 
| end | <code>number</code> | 
| candlesPerChunk | <code>number</code> | 

<a id="module_bfx-hf-util.preprocessRemoteCandles"></a>

### bfx-hf-util.preprocessRemoteCandles(tf, candles, transformed) ⇒ <code>Array</code>
Fills in gaps in candle data as returned by bfx; candles with no
trades are not returned by the API.

Generated dummy candles have OHLC set to previous col, vol 0

NOTE: Result size may exceed the fetch limit

**Kind**: static method of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  
**Returns**: <code>Array</code> - consistentCandles  

| Param | Type | Description |
| --- | --- | --- |
| tf | <code>string</code> | candle timeframe |
| candles | <code>module:bfx-api-node-models.Candle</code> \| <code>module:bfx-api-node-models.Candle~Data</code> | array of ws2/rest2 format candle data |
| transformed | <code>boolean</code> | indicates if the dataset is transformed |

<a id="module_bfx-hf-util.registerExitCallback"></a>

### bfx-hf-util.registerExitCallback(cb, [priority])
Registers a callback to be executed upon application exit (including
uncaught exceptions, SIGINT, SIGUSR1, SIGUSR2)

**Kind**: static method of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cb | <code>function</code> |  | callback |
| [priority] | <code>number</code> | <code>0</code> | callbacks are executed in descending priority   order |

<a id="module_bfx-hf-util.genRangeString"></a>

### bfx-hf-util.genRangeString(from, to) ⇒ <code>string</code>
Generates a locale-formatted string describing a date range

**Kind**: static method of [<code>bfx-hf-util</code>](#module_bfx-hf-util)  
**Returns**: <code>string</code> - range  

| Param | Type |
| --- | --- |
| from | <code>number</code> \| <code>string</code> \| <code>Date</code> | 
| to | <code>number</code> \| <code>string</code> \| <code>Date</code> | 

