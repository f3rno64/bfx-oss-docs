<a id="module_bfx-hf-models-adapter-template"></a>

## bfx-hf-models-adapter-template
This module serves as a template for creating new database adapters for the
honey framework. All adapters must implement the methods broken out here,
and provide a custom initialisation function. This system enables the use of
the Honey Framework with multiple database backends. The only requirement
for valid adapters is that all method signatures remain the same, and all
return values are promises that resolve to the standardized values. All
methods are asynchronous.
### Features
* Provides a template enumerating all required methods for
  [bfx-hf-models](module:bfx-hf-models) compatibility
### Installation
```bash
npm i --save bfx-hf-models-adapter-template
```
### Quickstart & Example
Although the resulting DB instance is useless as it does not have an actual
DB backend to write/read data, the following example illustrates how to pass
an adapter to a [bfx-hf-models](module:bfx-hf-models) instance:
```js
const HFDBTemplateAdapter = require('bfx-hf-models-adapter-template')
const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
const HFDB = require('bfx-hf-models')
const db = new HFDB({
  schema: HFDBBitfinexSchema,
  adapter: HFDBTemplateAdapter()
})
// db is now a valid bfx-hf-models database instance
```

**License**: Apache-2.0  
::: api-docs-index
* [bfx-hf-models-adapter-template](#module_bfx-hf-models-adapter-template)
    * [.TemplateAdapter](#module_bfx-hf-models-adapter-template.TemplateAdapter) : <code>module:bfx-hf-models.Model</code>
    * [.AdapterGenerator()](#module_bfx-hf-models-adapter-template.AdapterGenerator) ⇒ <code>module:bfx-hf-models.DBAdapter</code>
:::
<a id="module_bfx-hf-models-adapter-template.TemplateAdapter"></a>

### bfx-hf-models-adapter-template.TemplateAdapter : <code>module:bfx-hf-models.Model</code>
**Kind**: static constant of [<code>bfx-hf-models-adapter-template</code>](#module_bfx-hf-models-adapter-template)  
**Read only**: true  
<a id="module_bfx-hf-models-adapter-template.AdapterGenerator"></a>

### bfx-hf-models-adapter-template.AdapterGenerator() ⇒ <code>module:bfx-hf-models.DBAdapter</code>
DB init method; can take any arguments, but must return the example object
structure.

**Kind**: static method of [<code>bfx-hf-models-adapter-template</code>](#module_bfx-hf-models-adapter-template)  
**Returns**: <code>module:bfx-hf-models.DBAdapter</code> - adapter  
