<a id="module_bfx-api-node-plugin-managed-ob"></a>

## bfx-api-node-plugin-managed-ob
This module is a plugin for
[bfx-api-node-core](module:bfx-api-node-core) that maintains an
internal [OrderBook](module:bfx-api-node-models.OrderBook) model and
keeps it up to date with incoming ws2 data packets. On each update, a
`data:managed:book` event is emitted on the socket, providing a complete
[OrderBook](module:bfx-api-node-models.OrderBook) model instance.

Note that the [Manager](module:bfx-api-node-core.Manager) proxies the
event as `managed:book`. If subscribing on a socket instance
(`wsState.ev.on(...)`) use the internal event name, otherwise use the
manager name with `manager.onWS(...)`.

### Features

* Maintains up-to-date
  [OrderBook](module:bfx-api-node-models.OrderBook) models internally
* Emits a new 'managed:book' event with a full
  [OrderBook](module:bfx-api-node-models.OrderBook) instance on each
  update

### Installation

```bash
npm i --save bfx-api-node-plugin-managed-ob
```

### Quickstart

```js
const { Manager } = require('bfx-api-node-core')
const ManagedOBPlugin = require('bfx-api-node-plugin-managed-ob')

const mgr = new Manager({
  plugins: [ManagedOBPlugin()]
})

// set up a connection, event listeners, etc

mgr.onWS('managed:book', {}, (ob) => {
  debug('checksum: %s', ob.checksum())
})
```

**License**: MIT  
::: api-docs-index
:::
<a id="module_bfx-api-node-plugin-managed-ob"></a>

## bfx-api-node-plugin-managed-ob ⇒ <code>module:bfx-api-node-core.Plugin</code>
Maintains a collection of complete order books on the plugin state, and
emits entire books for each incoming book update.

**Returns**: <code>module:bfx-api-node-core.Plugin</code> - pluginState  
::: api-docs-index
:::
