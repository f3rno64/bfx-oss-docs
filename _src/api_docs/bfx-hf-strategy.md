<a id="module_bfx-hf-strategy"></a>

## bfx-hf-strategy
This module serves as a framework for creating trading bots/strategies on
the Bitfinex platform. It consists of a set of order methods and an
architecture compatible with
[bfx-hf-data-server](module:bfx-hf-data-server) and
[bfx-hf-backtest](module:bfx-hf-backtest) for backtests on historical
candle/trade data, which can be transitioned seamlessly to trading on the
live markets.

Strategies written using this framework must define an `exec` function which
in turn is provided an instance of the
[Helpers](#module_bfx-hf-strategy.Helpers) object bound to that strategy
during execution. The helpers can be used to control the execution flow of
the strategy, inspect data & indicators, and make automated trading
decisions.

See [Helpers](#module_bfx-hf-strategy.Helpers) for a full list of
strategy runtime methods.

### Features
* Event-driven design approach allowing strategies to react to market
  updates in real-time
* Compatibility with [bfx-hf-backtest](module:bfx-hf-backtest) for
  backtest execution
* Compatibility with
  [bfx-hf-strategy-exec](module:bfx-hf-strategy-exec) for execution on
  live markets

### Installation

```bash
npm i --save bfx-hf-strategy
```

### Quickstart & Example

Using [bfx-hf-strategy](#module_bfx-hf-strategy) implies writing a
custom strategy utilizing the methods provided by the library. The following
is an example of a valid strategy as defined within `examples/macd_cross`:

```js
const { MACD } = require('bfx-hf-indicators')
const { SYMBOLS, TIME_FRAMES } = require('bfx-hf-util')
const HFS = require('bfx-hf-strategy')

module.exports = ({
  symbol = SYMBOLS.BTC_USD,
  tf = TIME_FRAMES.ONE_HOUR
} = {}) => HFS.define({
  id: 'quickstart_example',
  name: 'quickstart_example',
  symbol,
  tf,

  indicators: {
    macd: new MACD([10, 26, 9])
  },

  // This quickstart example immediately opens a long position, and then no
  // longer reacts to future market updates
  onPriceUpdate: async (state = {}, update = {}) => {
    const position = HFS.getPosition(state)

    if (position) {
      return state
    }

    return HFS.openLongPositionMarket(state, {
      mtsCreate: mts,
      amount: 1,
      price
    })
  }
})
```

::: api-docs-index
* [bfx-hf-strategy](#module_bfx-hf-strategy)
    * [.defineStrategy(args)](#module_bfx-hf-strategy.defineStrategy) ⇒ [<code>StrategyState</code>](#module_bfx-hf-strategy.StrategyState)
    * [.initHelpersForStrategy(strategy)](#module_bfx-hf-strategy.initHelpersForStrategy) ⇒ [<code>Helpers</code>](#module_bfx-hf-strategy.Helpers)
    * [.trades](#module_bfx-hf-strategy.trades) ⇒ [<code>Array.&lt;StrategyTrade&gt;</code>](#module_bfx-hf-strategy.StrategyTrade)
    * [.closeOpenPositions](#module_bfx-hf-strategy.closeOpenPositions) ⇒ <code>Promise</code>
    * [.closePosition](#module_bfx-hf-strategy.closePosition) ⇒ <code>Promise</code>
    * [.closePositionLimit](#module_bfx-hf-strategy.closePositionLimit) ⇒ <code>Promise</code>
    * [.closePositionMarket](#module_bfx-hf-strategy.closePositionMarket) ⇒ <code>Promise</code>
    * [.closePositionWithOrder](#module_bfx-hf-strategy.closePositionWithOrder) ⇒ <code>Promise</code>
    * [.openLongPosition](#module_bfx-hf-strategy.openLongPosition) ⇒ <code>Promise</code>
    * [.openLongPositionLimit](#module_bfx-hf-strategy.openLongPositionLimit) ⇒ <code>Promise</code>
    * [.openLongPositionMarket](#module_bfx-hf-strategy.openLongPositionMarket) ⇒ <code>Promise</code>
    * [.openPosition](#module_bfx-hf-strategy.openPosition) ⇒ <code>Promise</code>
    * [.openPositionLimit](#module_bfx-hf-strategy.openPositionLimit) ⇒ <code>Promise</code>
    * [.openPositionMarket](#module_bfx-hf-strategy.openPositionMarket) ⇒ <code>Promise</code>
    * [.openPositionWithOrder](#module_bfx-hf-strategy.openPositionWithOrder) ⇒ <code>Promise</code>
    * [.openShortPosition](#module_bfx-hf-strategy.openShortPosition) ⇒ <code>Promise</code>
    * [.openShortPositionLimit](#module_bfx-hf-strategy.openShortPositionLimit) ⇒ <code>Promise</code>
    * [.openShortPositionMarket](#module_bfx-hf-strategy.openShortPositionMarket) ⇒ <code>Promise</code>
    * [.updateLongPosition](#module_bfx-hf-strategy.updateLongPosition) ⇒ <code>Promise</code>
    * [.updateLongPositionLimit](#module_bfx-hf-strategy.updateLongPositionLimit) ⇒ <code>Promise</code>
    * [.updateLongPositionMarket](#module_bfx-hf-strategy.updateLongPositionMarket) ⇒ <code>Promise</code>
    * [.updatePosition](#module_bfx-hf-strategy.updatePosition) ⇒ <code>Promise</code>
    * [.updatePositionLimit](#module_bfx-hf-strategy.updatePositionLimit) ⇒ <code>Promise</code>
    * [.updatePositionMarket](#module_bfx-hf-strategy.updatePositionMarket) ⇒ <code>Promise</code>
    * [.updatePositionWithOrder](#module_bfx-hf-strategy.updatePositionWithOrder) ⇒ <code>Promise</code>
    * [.updateShortPosition](#module_bfx-hf-strategy.updateShortPosition) ⇒ <code>Promise</code>
    * [.updateShortPositionLimit](#module_bfx-hf-strategy.updateShortPositionLimit) ⇒ <code>Promise</code>
    * [.updateShortPositionMarket](#module_bfx-hf-strategy.updateShortPositionMarket) ⇒ <code>Promise</code>
    * [.withNoPosition](#module_bfx-hf-strategy.withNoPosition) ⇒ <code>Promise</code>
    * [.withPosition](#module_bfx-hf-strategy.withPosition) ⇒ <code>Promise</code>
    * [.minTradeIntervalMet](#module_bfx-hf-strategy.minTradeIntervalMet) ⇒ <code>boolean</code>
    * [.enforceMinTradeInterval](#module_bfx-hf-strategy.enforceMinTradeInterval) : <code>function</code>
    * [.getState](#module_bfx-hf-strategy.getState) ⇒ <code>object</code>
    * [.getLastPrice](#module_bfx-hf-strategy.getLastPrice) ⇒ <code>number</code>
    * [.indicatorValues](#module_bfx-hf-strategy.indicatorValues) ⇒ <code>object</code>
    * [.indicators](#module_bfx-hf-strategy.indicators) ⇒ <code>object</code>
    * [.inAPosition](#module_bfx-hf-strategy.inAPosition) ⇒ <code>boolean</code>
    * [.inALongPosition](#module_bfx-hf-strategy.inALongPosition) ⇒ <code>boolean</code>
    * [.inAShortPosition](#module_bfx-hf-strategy.inAShortPosition) ⇒ <code>boolean</code>
    * [.condition](#module_bfx-hf-strategy.condition) : <code>function</code>
    * [.conditionIndicatorCrossed](#module_bfx-hf-strategy.conditionIndicatorCrossed) : <code>function</code>
    * [.conditionIndicatorsCrossed](#module_bfx-hf-strategy.conditionIndicatorsCrossed) : <code>function</code>
    * [.conditionInAPosition](#module_bfx-hf-strategy.conditionInAPosition) : <code>function</code>
    * [.Helpers](#module_bfx-hf-strategy.Helpers) : <code>object</code>
    * [.OrderParameters](#module_bfx-hf-strategy.OrderParameters) : <code>object</code>
    * [.PositionParameters](#module_bfx-hf-strategy.PositionParameters)
    * [.StrategyDefinition](#module_bfx-hf-strategy.StrategyDefinition) : <code>object</code>
    * [.StrategyPosition](#module_bfx-hf-strategy.StrategyPosition) : <code>object</code>
    * [.StrategyState](#module_bfx-hf-strategy.StrategyState)
    * [.StrategyTrade](#module_bfx-hf-strategy.StrategyTrade)
:::
<a id="module_bfx-hf-strategy.defineStrategy"></a>

### bfx-hf-strategy.defineStrategy(args) ⇒ [<code>StrategyState</code>](#module_bfx-hf-strategy.StrategyState)
Returns an initial strategy state object for the provided arguments. The
state object can then be used with the various HF strategy methods.

**Kind**: static method of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: [<code>StrategyState</code>](#module_bfx-hf-strategy.StrategyState) - state - strategy state  

| Param | Type | Description |
| --- | --- | --- |
| args | [<code>StrategyDefinition</code>](#module_bfx-hf-strategy.StrategyDefinition) | definition |

<a id="module_bfx-hf-strategy.initHelpersForStrategy"></a>

### bfx-hf-strategy.initHelpersForStrategy(strategy) ⇒ [<code>Helpers</code>](#module_bfx-hf-strategy.Helpers)
Returns an initialized [Helpers](#module_bfx-hf-strategy.Helpers)
instance bound to the provided `strategy` state.

**Kind**: static method of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: [<code>Helpers</code>](#module_bfx-hf-strategy.Helpers) - helpers  

| Param | Type | Description |
| --- | --- | --- |
| strategy | [<code>StrategyState</code>](#module_bfx-hf-strategy.StrategyState) | strategy state |

<a id="module_bfx-hf-strategy.trades"></a>

### bfx-hf-strategy.trades ⇒ [<code>Array.&lt;StrategyTrade&gt;</code>](#module_bfx-hf-strategy.StrategyTrade)
Returns the strategy's trades

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: [<code>Array.&lt;StrategyTrade&gt;</code>](#module_bfx-hf-strategy.StrategyTrade) - trades  
<a id="module_bfx-hf-strategy.closeOpenPositions"></a>

### bfx-hf-strategy.closeOpenPositions ⇒ <code>Promise</code>
Closes all open positions with market orders

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
<a id="module_bfx-hf-strategy.closePosition"></a>

### bfx-hf-strategy.closePosition ⇒ <code>Promise</code>
Closes an open position with an order. Throws an error if no position is open
for the order's symbol.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.closePositionLimit"></a>

### bfx-hf-strategy.closePositionLimit ⇒ <code>Promise</code>
Closes a position with a limit order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.closePositionMarket"></a>

### bfx-hf-strategy.closePositionMarket ⇒ <code>Promise</code>
Closes a position with a market order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.closePositionWithOrder"></a>

### bfx-hf-strategy.closePositionWithOrder ⇒ <code>Promise</code>
Closes an open position with an order. Throws an error if no position is open
for the order's symbol.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> Fails if no position is open for the symbol, if the provided
  order would not close the position, or if given invalid order parameters


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openLongPosition"></a>

### bfx-hf-strategy.openLongPosition ⇒ <code>Promise</code>
Alias for openPositon

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openLongPositionLimit"></a>

### bfx-hf-strategy.openLongPositionLimit ⇒ <code>Promise</code>
Opens a new long position with a limit order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openLongPositionMarket"></a>

### bfx-hf-strategy.openLongPositionMarket ⇒ <code>Promise</code>
Opens a new long position with a market order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openPosition"></a>

### bfx-hf-strategy.openPosition ⇒ <code>Promise</code>
Opens a position with a new order; resolves to an error if a position is
already open.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> Fails if a position already exists for the specified symbol


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | passed directly to order constructor |

<a id="module_bfx-hf-strategy.openPositionLimit"></a>

### bfx-hf-strategy.openPositionLimit ⇒ <code>Promise</code>
Opens a new position with a limit order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> Fails if a position already exists for the specified symbol


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openPositionMarket"></a>

### bfx-hf-strategy.openPositionMarket ⇒ <code>Promise</code>
Opens a new position with a market order. Pulls order timestamp and price
from last received data for the order's symbol.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> If no timestamp or price data available and none supplied


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openPositionWithOrder"></a>

### bfx-hf-strategy.openPositionWithOrder ⇒ <code>Promise</code>
Submits a new order via ws2 with the supplied parameters, creates a new
strategy trade and creates a position.

If no ws client is available, no data is saved & no order is dispatched

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> Fails if a position already exists for the specified symbol


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openShortPosition"></a>

### bfx-hf-strategy.openShortPosition ⇒ <code>Promise</code>
Opens a short position (negates passed amount)

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> Fails if a position already exists for the specified symbol


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openShortPositionLimit"></a>

### bfx-hf-strategy.openShortPositionLimit ⇒ <code>Promise</code>
Opens a short position (negates passed amount)

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> Fails if a position already exists for the specified symbol


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.openShortPositionMarket"></a>

### bfx-hf-strategy.openShortPositionMarket ⇒ <code>Promise</code>
Opens a short position (negates passed amount)

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> Fails if a position already exists for the specified symbol


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updateLongPosition"></a>

### bfx-hf-strategy.updateLongPosition ⇒ <code>Promise</code>
**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updateLongPositionLimit"></a>

### bfx-hf-strategy.updateLongPositionLimit ⇒ <code>Promise</code>
Updates a long position with a limit order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updateLongPositionMarket"></a>

### bfx-hf-strategy.updateLongPositionMarket ⇒ <code>Promise</code>
Updates a long position with a market order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updatePosition"></a>

### bfx-hf-strategy.updatePosition ⇒ <code>Promise</code>
Alias for updatePositionWithOrder

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | passed directly to order constructor |

<a id="module_bfx-hf-strategy.updatePositionLimit"></a>

### bfx-hf-strategy.updatePositionLimit ⇒ <code>Promise</code>
Updates a position with a limit order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updatePositionMarket"></a>

### bfx-hf-strategy.updatePositionMarket ⇒ <code>Promise</code>
Updates a new position with a market order. Pulls order timestamp and price
from last received data for the order's symbol.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> If no timestamp or price data available and none supplied


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updatePositionWithOrder"></a>

### bfx-hf-strategy.updatePositionWithOrder ⇒ <code>Promise</code>
Submits a new order via ws2 with the supplied parameters, creates a new
strategy trade and updates the current position.

If no ws client is available, no data is saved & no order is dispatched

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  
**Throws**:

- <code>Error</code> Fails if no position is open for the symbol, if the order
  would close the position, or if given invalid order parameters


| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updateShortPosition"></a>

### bfx-hf-strategy.updateShortPosition ⇒ <code>Promise</code>
Updates a short position (negates passed amount)

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updateShortPositionLimit"></a>

### bfx-hf-strategy.updateShortPositionLimit ⇒ <code>Promise</code>
Updates a short position (negates passed amount)

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.updateShortPositionMarket"></a>

### bfx-hf-strategy.updateShortPositionMarket ⇒ <code>Promise</code>
Updates a short position (negates passed amount)

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>OrderParameters</code>](#module_bfx-hf-strategy.OrderParameters) | order parameters |

<a id="module_bfx-hf-strategy.withNoPosition"></a>

### bfx-hf-strategy.withNoPosition ⇒ <code>Promise</code>
Calls the provided async function if no position is open for the symbol

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| [symbol] | <code>string</code> | symbol |
| f | <code>function</code> | async function to call if no position is open |

<a id="module_bfx-hf-strategy.withPosition"></a>

### bfx-hf-strategy.withPosition ⇒ <code>Promise</code>
Calls the provided async function with the position if it is open

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| [symbol] | <code>string</code> | symbol |
| f | <code>function</code> | async function to call if position is open |

<a id="module_bfx-hf-strategy.minTradeIntervalMet"></a>

### bfx-hf-strategy.minTradeIntervalMet ⇒ <code>boolean</code>
Evaluates whether the time since the last strategy trade is greater than
the specified interval in milliseconds.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>boolean</code> - intervalMet  

| Param | Type | Description |
| --- | --- | --- |
| intervalMS | <code>number</code> | interval in milliseconds |

<a id="module_bfx-hf-strategy.enforceMinTradeInterval"></a>

### bfx-hf-strategy.enforceMinTradeInterval : <code>function</code>
Breaks execution if the time since the last strategy trade is less than
the specified interval in milliseconds.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  

| Param | Type | Description |
| --- | --- | --- |
| intervalMS | <code>number</code> | interval in milliseconds |

<a id="module_bfx-hf-strategy.getState"></a>

### bfx-hf-strategy.getState ⇒ <code>object</code>
Returns the strategy state

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>object</code> - state  
<a id="module_bfx-hf-strategy.getLastPrice"></a>

### bfx-hf-strategy.getLastPrice ⇒ <code>number</code>
Returns the last received price (from a trade or candle) for the specified
symbol/timeframe pair.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>number</code> - lastPrice  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | defaults to default strategy symbol |
| tf | <code>string</code> | defaults to default strategy timeframe |

<a id="module_bfx-hf-strategy.indicatorValues"></a>

### bfx-hf-strategy.indicatorValues ⇒ <code>object</code>
Returns a map of indicator values key'ed by indicator ID

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>object</code> - values  
<a id="module_bfx-hf-strategy.indicators"></a>

### bfx-hf-strategy.indicators ⇒ <code>object</code>
Returns a map of indicators key'ed by ID

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>object</code> - indicators  
<a id="module_bfx-hf-strategy.inAPosition"></a>

### bfx-hf-strategy.inAPosition ⇒ <code>boolean</code>
Returns true if a position is open for the specified symbol

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>boolean</code> - inPosition  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | defaults to default strategy symbol |

<a id="module_bfx-hf-strategy.inALongPosition"></a>

### bfx-hf-strategy.inALongPosition ⇒ <code>boolean</code>
Returns true if a long position is open for the specified symbol.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>boolean</code> - inLongPosition  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | defaults to default strategy symbol |

<a id="module_bfx-hf-strategy.inAShortPosition"></a>

### bfx-hf-strategy.inAShortPosition ⇒ <code>boolean</code>
Returns true if a short position is open for the specified symbol.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Returns**: <code>boolean</code> - inShortPosition  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | defaults to default strategy symbol |

<a id="module_bfx-hf-strategy.condition"></a>

### bfx-hf-strategy.condition : <code>function</code>
Interrupts execution if the condition is not meant. Either parameter to
the condition can be an indicator ID or literal. If given an indicator
ID and the indicator has sub-values (i.e. bollinger bands), the sub-value
name can be specified following a dot after the indicator name
(i.e. 'bb.middle')

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Throws**:

- <code>Error</code> Fails if given an unknown indicator ID. Logs an error if
  executing live.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> \| <code>number</code> | indicator ID or literal |
| condition | <code>string</code> | one of (=, ==, eq), (!=, !==, neq), (>, gt),   (>=, gte), (<, lt), or (<=, lte) |
| b | <code>string</code> \| <code>number</code> | indicator ID or literal |

<a id="module_bfx-hf-strategy.conditionIndicatorCrossed"></a>

### bfx-hf-strategy.conditionIndicatorCrossed : <code>function</code>
Interrupts execution if the specified indicator did not cross the provided
literal value. Always breaks execution when given an unknown indicator ID
and running live.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Throws**:

- <code>Error</code> Fails if an unknown indicator was specified and
  backtesting. Logs an error if executing live.


| Param | Type | Description |
| --- | --- | --- |
| iID | <code>string</code> | ID of indicator |
| v | <code>number</code> | literal value |

<a id="module_bfx-hf-strategy.conditionIndicatorsCrossed"></a>

### bfx-hf-strategy.conditionIndicatorsCrossed : <code>function</code>
Interrupts execution if the specified indicators did not cross values.
Always breaks execution when given an uknown indicator ID and running live.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Throws**:

- <code>Error</code> Fails if either indicator ID is unknown and backtesting.
  Logs an error if executing live.


| Param | Type | Description |
| --- | --- | --- |
| iaID | <code>string</code> | ID of first indicator |
| ibID | <code>string</code> | ID of second indicator |

<a id="module_bfx-hf-strategy.conditionInAPosition"></a>

### bfx-hf-strategy.conditionInAPosition : <code>function</code>
Interrupts strategy execution if not in a position for the specified
symbol

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | defaults to default strategy symbol |

<a id="module_bfx-hf-strategy.Helpers"></a>

### bfx-hf-strategy.Helpers : <code>object</code>
A set of utility functions bound to the strategy they are used in, providing
control over strategy execution, access to data, and order manipulation
methods.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| trades | [<code>trades</code>](#module_bfx-hf-strategy.trades) | [function](#module_bfx-hf-strategy.trades) |
| closeOpenPositions | [<code>closeOpenPositions</code>](#module_bfx-hf-strategy.closeOpenPositions) | [function](#module_bfx-hf-strategy.closeOpenPositions) |
| closePosition | [<code>closePosition</code>](#module_bfx-hf-strategy.closePosition) | [function](#module_bfx-hf-strategy.closePosition) |
| closePositionLimit | [<code>closePositionLimit</code>](#module_bfx-hf-strategy.closePositionLimit) | [function](#module_bfx-hf-strategy.closePositionLimit) |
| closePositionMarket | [<code>closePositionMarket</code>](#module_bfx-hf-strategy.closePositionMarket) | [function](#module_bfx-hf-strategy.closePositionMarket) |
| closePositionWithOrder | [<code>closePositionWithOrder</code>](#module_bfx-hf-strategy.closePositionWithOrder) | [function](#module_bfx-hf-strategy.closePositionWithOrder) |
| openLongPosition | [<code>openLongPosition</code>](#module_bfx-hf-strategy.openLongPosition) | [function](#module_bfx-hf-strategy.openLongPosition) |
| openLongPositionLimit | [<code>openLongPositionLimit</code>](#module_bfx-hf-strategy.openLongPositionLimit) | [function](#module_bfx-hf-strategy.openLongPositionLimit) |
| openLongPositionMarket | [<code>openLongPositionMarket</code>](#module_bfx-hf-strategy.openLongPositionMarket) | [function](#module_bfx-hf-strategy.openLongPositionMarket) |
| openPosition | [<code>openPosition</code>](#module_bfx-hf-strategy.openPosition) | [function](#module_bfx-hf-strategy.openPosition) |
| openPositionLimit | [<code>openPositionLimit</code>](#module_bfx-hf-strategy.openPositionLimit) | [function](#module_bfx-hf-strategy.openPositionLimit) |
| openPositionMarket | [<code>openPositionMarket</code>](#module_bfx-hf-strategy.openPositionMarket) | [function](#module_bfx-hf-strategy.openPositionMarket) |
| openPositionWithOrder | [<code>openPositionWithOrder</code>](#module_bfx-hf-strategy.openPositionWithOrder) | [function](#module_bfx-hf-strategy.openPositionWithOrder) |
| openShortPosition | [<code>openShortPosition</code>](#module_bfx-hf-strategy.openShortPosition) | [function](#module_bfx-hf-strategy.openShortPosition) |
| openShortPositionLimit | [<code>openShortPositionLimit</code>](#module_bfx-hf-strategy.openShortPositionLimit) | [function](#module_bfx-hf-strategy.openShortPositionLimit) |
| openShortPositionMarket | [<code>openShortPositionMarket</code>](#module_bfx-hf-strategy.openShortPositionMarket) | [function](#module_bfx-hf-strategy.openShortPositionMarket) |
| updateLongPosition | [<code>updateLongPosition</code>](#module_bfx-hf-strategy.updateLongPosition) | [function](#module_bfx-hf-strategy.updateLongPosition) |
| updateLongPositionLimit | [<code>updateLongPositionLimit</code>](#module_bfx-hf-strategy.updateLongPositionLimit) | [function](#module_bfx-hf-strategy.updateLongPositionLimit) |
| updateLongPositionMarket | [<code>updateLongPositionMarket</code>](#module_bfx-hf-strategy.updateLongPositionMarket) | [function](#module_bfx-hf-strategy.updateLongPositionMarket) |
| updatePosition | [<code>updatePosition</code>](#module_bfx-hf-strategy.updatePosition) | [function](#module_bfx-hf-strategy.updatePosition) |
| updatePositionMarket | [<code>updatePositionMarket</code>](#module_bfx-hf-strategy.updatePositionMarket) | [function](#module_bfx-hf-strategy.updatePositionMarket) |
| updatePositionWithOrder | [<code>updatePositionWithOrder</code>](#module_bfx-hf-strategy.updatePositionWithOrder) | [function](#module_bfx-hf-strategy.updatePositionWithOrder) |
| updateShortPosition | [<code>updateShortPosition</code>](#module_bfx-hf-strategy.updateShortPosition) | [function](#module_bfx-hf-strategy.updateShortPosition) |
| updateShortPositionLimit | [<code>updateShortPositionLimit</code>](#module_bfx-hf-strategy.updateShortPositionLimit) | [function](#module_bfx-hf-strategy.updateShortPositionLimit) |
| withNoPosition | [<code>withNoPosition</code>](#module_bfx-hf-strategy.withNoPosition) | [function](#module_bfx-hf-strategy.withNoPosition) |
| withPosition | [<code>withPosition</code>](#module_bfx-hf-strategy.withPosition) | [function](#module_bfx-hf-strategy.withPosition) |
| minTradeIntervalMet | [<code>minTradeIntervalMet</code>](#module_bfx-hf-strategy.minTradeIntervalMet) | [function](#module_bfx-hf-strategy.minTradeIntervalMet) |
| enforceMinTradeInterval | [<code>enforceMinTradeInterval</code>](#module_bfx-hf-strategy.enforceMinTradeInterval) | [function](#module_bfx-hf-strategy.enforceMinTradeInterval) |
| getState | [<code>getState</code>](#module_bfx-hf-strategy.getState) | [function](#module_bfx-hf-strategy.getState) |
| getLastPrice | [<code>getLastPrice</code>](#module_bfx-hf-strategy.getLastPrice) | [function](#module_bfx-hf-strategy.getLastPrice) |
| indicatorValues | [<code>indicatorValues</code>](#module_bfx-hf-strategy.indicatorValues) | [function](#module_bfx-hf-strategy.indicatorValues) |
| indicators | [<code>indicators</code>](#module_bfx-hf-strategy.indicators) | [function](#module_bfx-hf-strategy.indicators) |
| inAPosition | [<code>inAPosition</code>](#module_bfx-hf-strategy.inAPosition) | [function](#module_bfx-hf-strategy.inAPosition) |
| inALongPosition | [<code>inALongPosition</code>](#module_bfx-hf-strategy.inALongPosition) | [function](#module_bfx-hf-strategy.inALongPosition) |
| inAShortPosition | [<code>inAShortPosition</code>](#module_bfx-hf-strategy.inAShortPosition) | [function](#module_bfx-hf-strategy.inAShortPosition) |
| condition | [<code>condition</code>](#module_bfx-hf-strategy.condition) | [function](#module_bfx-hf-strategy.condition) |
| conditionIndicatorCrossed | [<code>conditionIndicatorCrossed</code>](#module_bfx-hf-strategy.conditionIndicatorCrossed) | [function](#module_bfx-hf-strategy.conditionIndicatorCrossed) |
| conditionIndicatorsCrossed | [<code>conditionIndicatorsCrossed</code>](#module_bfx-hf-strategy.conditionIndicatorsCrossed) | [function](#module_bfx-hf-strategy.conditionIndicatorsCrossed) |
| conditionInAPosition | [<code>conditionInAPosition</code>](#module_bfx-hf-strategy.conditionInAPosition) | [function](#module_bfx-hf-strategy.conditionInAPosition) |

<a id="module_bfx-hf-strategy.OrderParameters"></a>

### bfx-hf-strategy.OrderParameters : <code>object</code>
Parameters defining an atomic order

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [id] | <code>number</code> | ID |
| [gid] | <code>number</code> | group ID |
| [cid] | <code>number</code> | client ID |
| [mtsTIF] | <code>number</code> | TIF timestamp |
| [flags] | <code>number</code> | order flags |
| [tag] | <code>string</code> | string rendered in execution results, and   attached to the trade associated with the order. used for specifying meta   information about the order i.e. event that triggered it. Identical tags   are grouped together in execution results |
| [label] | <code>string</code> | rendered in the Bitfinex UI |
| price | <code>number</code> | desired excution price, required even for   `MARKET` orders in order to have a fill price when backtesting. |
| [priceTrailing] | <code>string</code> | trailing distance for TRAILING STOP orders |
| [priceAuxLimit] | <code>string</code> | stop price for STOP LIMIT and OCO orders |
| amount | <code>number</code> | order amount |
| [type] | <code>string</code> | i.e. stop, stop-limit. May be required if using   an order creation method that does not set it |
| [affiliateCode] | <code>string</code> | affiliate code |
| [lev] | <code>number</code> | leverage |

<a id="module_bfx-hf-strategy.PositionParameters"></a>

### bfx-hf-strategy.PositionParameters
Parameters used to create a new position

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| price | <code>number</code> | price |
| symbol | <code>string</code> | symbol |
| amount | <code>number</code> | amount |
| [trades] | <code>Array.&lt;object&gt;</code> | trades that affected the position |
| [tag] | <code>string</code> | position label, visible in results output |

<a id="module_bfx-hf-strategy.StrategyDefinition"></a>

### bfx-hf-strategy.StrategyDefinition : <code>object</code>
A set of parameters defining a trading strategy. Can be passed to
[defineStrategy](#module_bfx-hf-strategy.defineStrategy) to obtain a
[StrategyState](#module_bfx-hf-strategy.StrategyState) object which can
then be used with either
[bfx-hf-backtest](module:bfx-hf-backtest) for backtesting on historical
data, or [bfx-hf-strategy-exec](module:bfx-hf-strategy-exec) for live
execution.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | strategy ID |
| name | <code>string</code> |  | strategy name (human readable) |
| makerFee | <code>number</code> |  | maker fee as percent |
| takerFee | <code>number</code> |  | taker fee as percent |
| [simulateLiveCandleEnabled] | <code>boolean</code> | <code>false</code> | if true, generates   random trades for each candle |
| [plugins] | <code>Array.&lt;object&gt;</code> |  | array of plugins |
| [margin] | <code>boolean</code> |  | if true, trades on margin, otherwise exchange |
| [symbol] | <code>string</code> |  | default symbol for data/trades |
| [tf] | <code>string</code> |  | default candle time frame |
| [candlePrice] | <code>string</code> | <code>&quot;&#x27;close&#x27;&quot;</code> | key to access on candle for price |
| [indicators] | <code>object</code> |  | managed indicators map |
| exec | <code>function</code> |  | strategy logic, called on every price update |

<a id="module_bfx-hf-strategy.StrategyPosition"></a>

### bfx-hf-strategy.StrategyPosition : <code>object</code>
An object representing a strategy position in a market, including all
relevant [trades](#module_bfx-hf-strategy.StrategyTrade).

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | symbol |
| price | <code>number</code> | current base price |
| amount | <code>number</code> | total position amount |
| trades | [<code>Array.&lt;StrategyTrade&gt;</code>](#module_bfx-hf-strategy.StrategyTrade) | all trades   relevant to this position, in order of execution. |
| [tag] | <code>string</code> | metadata accessible at runtime |

<a id="module_bfx-hf-strategy.StrategyState"></a>

### bfx-hf-strategy.StrategyState
Strategy state updated throughout the lifetime of a strategy, used for both
backtesting and live execution. The core of this library.

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | strategy ID |
| name | <code>string</code> | strategy name (human readable) |
| [candlePrice] | <code>string</code> | key on candle from which to pull price,   used for updating indicators. Defaults to 'close' |
| marketData | <code>object</code> | internal map of market data, trades and  candles |
| positions | <code>object</code> | internal map of positions key'ed by symbol |
| trades | <code>Array.&lt;object&gt;</code> | array of trades performed by the strategy |
| [plugins] | <code>Array.&lt;object&gt;</code> | array of plugins |
| [margin] | <code>boolean</code> | if true, trades on margin, otherwise exchange |
| [symbol] | <code>string</code> | default symbol for data/trades |
| [tf] | <code>string</code> | default candle time frame |
| [indicators] | <code>object</code> | managed indicators map |
| [onPriceUpdate] | <code>function</code> | called on every price update |
| [onEnter] | <code>function</code> | called when a position is opened |
| [onUpdate] | <code>function</code> | called on every price update if a   position is open |
| [onUpdateLong] | <code>function</code> | called if a long position is open |
| [onUpdateShort] | <code>function</code> | called if a short position is open   closed |
| [onPositionOpen] | <code>function</code> | called when a position is opened |
| [onPositionUpdate] | <code>function</code> | called when a position is updated |
| [onPositionClose] | <code>function</code> | called when a position is closed |
| [onStart] | <code>function</code> | called on strategy execution start |
| [onStop] | <code>function</code> | called on strategy execution end |

<a id="module_bfx-hf-strategy.StrategyTrade"></a>

### bfx-hf-strategy.StrategyTrade
A trade performed by a strategy

**Kind**: static typedef of [<code>bfx-hf-strategy</code>](#module_bfx-hf-strategy)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | symbol |
| label | <code>string</code> | informative label shown in generated strategy   results |
| tag | <code>string</code> | like label, but meant to be used internally for   identifying the nature of the trade (i.e. 'rsi-high', etc) |
| amount | <code>number</code> | amount |
| price | <code>number</code> | price |
| pl | <code>number</code> | profit/loss relative to prior trades made on the   same symbol |
| mts | <code>number</code> | creation timestamp |
| mtsCreate | <code>number</code> | order creation timestamp |
| orderID | <code>number</code> | ID of the trade's order |
| orderPrice | <code>number</code> | price of the trade's order |
| orderStatus | <code>string</code> | status of the trade's order |
| orderJS | <code>object</code> | POJO of the trade's order |
| maker | <code>boolean</code> | true if the trade inserted an order into the book |
| fee | <code>number</code> | fee amount |
| feeCCY | <code>string</code> | fee currency |
| positionID | <code>string</code> | ID of position the trade affected, if any |
| iv | <code>object</code> | indicator values at the moment the trade was created |

