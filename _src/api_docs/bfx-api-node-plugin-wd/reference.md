---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
:::
<a id="module_bfx-api-node-plugin-wd"></a>

## bfx-api-node-plugin-wd
This plugin implements a watch-dog for
[bfx-api-node-core](module:bfx-api-node-core). It can be initialized
with a reconnection & watch dog delay, and will close the socket connection
& automatically reconnect if no message arrives within the WD delay. It is
meant to be used to detect and cycle stale socket connections.
### Features
* Closes & re-opens connections if no packet arrives within the configured WD window
### Installation
```bash
npm i --save bfx-api-node-plugin-wd
```
### Quickstart & Example

```js
const debug = require('debug')('bfx:api:plugins:wd:example')
const { Manager, subscribe } = require('bfx-api-node-core')
const WDPlugin = require('bfx-api-node-plugin-wd')
const mgr = new Manager({
  transform: true,
  // include watch-dog plugin on manager init
  plugins: [WDPlugin({
    autoReconnect: true,  // if false, the connection will only be closed
    reconnectDelay: 5000, // wait 5 seconds before reconnecting
    packetWDDelay: 10000  // set the watch-dog to a 10s delay
  })]
})
// Note that we do nothing here; the watch-dog will fire due to a lack of
// incoming messages
mgr.onWS('open', {}, (state = {}) => {
  debug('open')
})
mgr.openWS()
```

**License**: MIT  
<a id="module_bfx-api-node-plugin-wd"></a>

## bfx-api-node-plugin-wd ⇒ <code>module:bfx-api-node-core.Plugin</code>
Implements auto-reconnect along with a packet watchdog that cycles the
connection after a configurable period of silence from the last packet.

**Returns**: <code>module:bfx-api-node-core.Plugin</code> - pluginState  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [autoReconnect] | <code>boolean</code> | <code>true</code> | if false, the plugin is inactive |
| [reconnectDelay] | <code>number</code> | <code>1000</code> | delay before reconnecting in ms |
| [packetWDDelay] | <code>number</code> | <code>6000</code> | watchdog timeout in ms |

