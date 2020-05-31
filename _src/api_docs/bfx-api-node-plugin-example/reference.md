---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
:::
<a id="module_bfx-api-node-plugin-example"></a>

## bfx-api-node-plugin-example
# Bitfinex Example Plugin for the Node.JS API

This repo provides an example plugin compatible with
[bfx-api-node-core](module:bfx-api-node-core) which logs all emitted
events to the console.

### Installation

```bash
npm i --save bfx-api-node-plugin-example
```

### Quickstart & Example

```js
const { Manager } = require('bfx-api-node-core')
const ExamplePlugin = require('bfx-api-node-plugin-example')

const m = new Manager({
  plugins: [ExamplePlugin()],
  // ...
})

m.openWS()
```

**License**: MIT  
<a id="module_bfx-api-node-plugin-example"></a>

## bfx-api-node-plugin-example ⇒ <code>module:bfx-api-node-core.Plugin</code>
Example WSv2 plugin that logs called handlers

**Returns**: <code>module:bfx-api-node-core.Plugin</code> - pluginState  
