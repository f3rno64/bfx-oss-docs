---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
:::
<a id="module_bfx-api-node-plugin-managed-candles"></a>

## bfx-api-node-plugin-managed-candles
This module is a plugin for
[bfx-api-node-core](module:bfx-api-node-core) that maintains a full
sorted candle set on its internal state, and emits it with every candle
update with the event name `data:managed:candles`. The internal dataset is
populated when receiving data from candle channels.

Note that the [Manager](module:bfx-api-node-core.Manager) proxies the
event as `managed:candles`. If subscribing on a socket instance
(`wsState.ev.on(...)`) use the internal event name, otherwise use the
manager name with `manager.onWS(...)`.

### Features

* Maintains an up-to-date array of all received candles
* Emits a new 'managed:candles' event with the full dataset on each update

### Installation

```bash
npm i --save bfx-api-node-plugin-managed-candles
```

### Quickstart

```js
const { Manager } = require('bfx-api-node-core')
const ManagedCandlesPlugin = require('bfx-api-node-plugin-managed-candles')

const mgr = new Manager({
  plugins: [ManagedCandlesPlugin()]
})

// set up a connection, event listeners, etc

mgr.onWS('managed:candles', {}, (candles) => {
  debug(JSON.stringify(candles.toJS(), null, 2))
})
```

**License**: MIT  
<a id="module_bfx-api-node-plugin-managed-candles"></a>

## bfx-api-node-plugin-managed-candles ⇒ <code>module:bfx-api-node-core.Plugin</code>
Maintains a collection of candle data on the plugin state, and emits entire
candle sets for each incoming candle update.

**Returns**: <code>module:bfx-api-node-core.Plugin</code> - pluginState  
