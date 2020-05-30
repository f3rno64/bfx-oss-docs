<a id="module_bfx-api-node-plugin-ob-checksum"></a>

## bfx-api-node-plugin-ob-checksum
This module enables the
[Order Book](module:bfx-api-node-models.OrderBook) checksum flag upon
connecting, and maintains internal
[Order Book](module:bfx-api-node-models.OrderBook) model instances for
all subscribed book channels. Upon receiving a checksum from the server, the
relevant internal model is audited and an `error` event is emitted on
checksum miss-match. Valid checksums are reported in debug output.

Note that the [Manager](module:bfx-api-node-core.Manager) proxies the
event as `ws2:error`. If subscribing on a socket instance
(`wsState.ev.on(...)`) use the internal event name, otherwise use the
manager name with `manager.onWS(...)`.

### Features

* Maintains up-to-date internal
  [Order Book](module:bfx-api-node-models.OrderBook) model instances
* Verfies managed [Order Book](module:bfx-api-node-models.OrderBook)
  checksums with each incoming remote checksum packet
* Emits a `ws2:error` event on checksum miss-match

### Installation

```bash
npm i --save bfx-api-node-plugin-ob-checksum
```

### Quickstart & Example

```js
const debug = require('debug')('bfx:api:plugins:managed-ob-cs:example')
const { Manager, subscribe } = require('bfx-api-node-core')
const ManagedOBChecksumPlugin = require('../')

const SYMBOL = 'tBTCUSD'
const mgr = new Manager({
  transform: true,
  plugins: [ManagedOBChecksumPlugin()]
})

mgr.onWS('open', {}, () => debug('connection open'))

// Catch checksum errors
mgr.onWS('ws2:error', {}, (err) => {
  if (err.message.match(/ob checksum/)) {
    debug('recv ob checksum error: %s', err.message)
  }
})

const wsState = mgr.openWS()

subscribe(wsState, 'book', {
  symbol: SYMBOL,
  len: '25',
  prec: 'P0'
})
```

**License**: MIT  
::: api-docs-index
:::
<a id="module_bfx-api-node-plugin-ob-checksum"></a>

## bfx-api-node-plugin-ob-checksum ⇒ <code>module:bfx-api-node-core.Plugin</code>
Maintains a locally managed OB collection and validates it against incoming
checksums. Automatically enables checksums when ws2 clients connect.

**Returns**: <code>module:bfx-api-node-core.Plugin</code> - pluginState  
::: api-docs-index
:::
