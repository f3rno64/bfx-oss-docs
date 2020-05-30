<a id="module_bfx-hf-backtest"></a>

## bfx-hf-backtest
This module provides an interface for executing backtests using either
offline data, or a [bfx-hf-data-server](module:bfx-hf-data-server)
instance for historical Bitfinex market data.

### Features

* Offline backtest execution with user-supplied trade & candle data
* Online backtest execution with data from
  [bfx-hf-data-server](module:bfx-hf-data-server)
* Simulates trades within a candle if none are provided

### Installation

```bash
npm i --save bfx-hf-backtest
```

### Quickstart

```js
const HFS = require('bfx-hf-strategy')
const HFBT = require('bfx-hf-backtest')
const Strategy = ... // strategy instance
const candles = [...]

const candleKey = HFS.candleMarketDataKey({
  symbol: SYMBOLS.BTC_USD,
  tf: TIME_FRAMES.ONE_HOUR
})

HFBT.execOffline(strat, {
  trades: {},
  candles: {
    [candleKey]: candles,
  }
}).then((btState) => {
  const { trades = [] } = btState

  // analyze backtest trades...
})
```

**License**: Apache-2.0  
::: api-docs-index
* [bfx-hf-backtest](#module_bfx-hf-backtest)
    * [.execOffline(strategy, args, [progressCallback])](#module_bfx-hf-backtest.execOffline) ⇒ <code>object</code>
    * [.execOnline(strategies, args)](#module_bfx-hf-backtest.execOnline)
:::
<a id="module_bfx-hf-backtest.execOffline"></a>

### bfx-hf-backtest.execOffline(strategy, args, [progressCallback]) ⇒ <code>object</code>
Run an offline backtest with user-supplied data

**Kind**: static method of [<code>bfx-hf-backtest</code>](#module_bfx-hf-backtest)  
**Returns**: <code>object</code> - btState  

| Param | Type | Description |
| --- | --- | --- |
| strategy | <code>module:bfx-hf-strategy.StrategyState</code> | strategy |
| args | <code>object</code> | arguments |
| args.candles | <code>object</code> | key'ed by market, assumed sorted! |
| [args.trades] | <code>object</code> | key'ed by market, assumed sorted! |
| [progressCallback] | <code>function</code> | optional, called with i/total updates |

<a id="module_bfx-hf-backtest.execOnline"></a>

### bfx-hf-backtest.execOnline(strategies, args)
Executes a backtest for the specified period/symbol/tf, logs results to the
console.

**Kind**: static method of [<code>bfx-hf-backtest</code>](#module_bfx-hf-backtest)  

| Param | Type | Description |
| --- | --- | --- |
| strategies | <code>Array.&lt;module:bfx-hf-strategy.StrategyState&gt;</code> | strategies |
| args | <code>object</code> | arguments |
| [args.host] | <code>string</code> | HF data server endpoint |
| args.from | <code>number</code> \| <code>Date</code> | backtest period start timestamp |
| args.to | <code>number</code> \| <code>Date</code> | backtest period end timestamp |
| args.symbol | <code>string</code> | symbol |
| args.tf | <code>string</code> | time frame |
| [args.includeTrades] | <code>boolean</code> | defaults to false |
| [args.sync] | <code>boolean</code> | default true |
| [args.seedPeriod] | <code>number</code> | optional, calculated from indicators |
| [args.candleFields] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | data to include on candle   objects, default all fields |
| [args.tradeFields] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | data to include on trade   objects, default all fields |

