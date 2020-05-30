<a id="module_bfx-hf-models-adapter-sql"></a>

## bfx-hf-models-adapter-sql
This is an adapter around {@npm knex} for the Bitfinex Honey Framework. To
use, initialize an instance of the `bfx-hf-models` database with it as an
adapter.

### Features
* Compatible with multiple flavours of SQL via {@npm knex}
* High-scalability vs
  [bfx-hf-models-adapter-lowdb](module:bfx-hf-models-adapter-lowdb)
* Fully compatible with [bfx-hf-models](module:bfx-hf-models) & the HF
  system ([bfx-hf-data-server](module:bfx-hf-data-server),
  [bfx-hf-algo-server](module:bfx-hf-algo-server),
  [bfx-hf-algo](module:bfx-hf-algo), etc)

### Installation

```bash
npm i --save bfx-hf-models-adapter-sql
```

### Quickstart & Example

```js
const HFDBSQLAdapter = require('bfx-hf-models-adapter-sql')
const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
const HFDB = require('bfx-hf-models')

const PSQL_CONNECTION = '...'

const db = new HFDB({
  schema: HFDBBitfinexSchema,
  adapter: HFDBSQLAdapter({
    connection: PSQL_CONNECTION,
    clientType: 'pg'
  }),
})

const { Candle } = db
const candles = await Candle.getAll()

console.log(`read ${candles.length} candles`)
```

**License**: Apache-2.0  
::: api-docs-index
* [bfx-hf-models-adapter-sql](#module_bfx-hf-models-adapter-sql)
    * [.CLIENT_TYPES](#module_bfx-hf-models-adapter-sql.CLIENT_TYPES) : <code>Array.&lt;string&gt;</code>
    * [.SQLDBAdapter](#module_bfx-hf-models-adapter-sql.SQLDBAdapter) : <code>module:bfx-hf-models.Model</code>
    * [.AdapterGenerator(config)](#module_bfx-hf-models-adapter-sql.AdapterGenerator) ⇒ <code>module:bfx-hf-models.DBAdapter</code>
    * [.KnexDBInstance](#module_bfx-hf-models-adapter-sql.KnexDBInstance) : <code>object</code>
:::
<a id="module_bfx-hf-models-adapter-sql.CLIENT_TYPES"></a>

### bfx-hf-models-adapter-sql.CLIENT\_TYPES : <code>Array.&lt;string&gt;</code>
Valid client types for the adapter

**Kind**: static constant of [<code>bfx-hf-models-adapter-sql</code>](#module_bfx-hf-models-adapter-sql)  
**Read only**: true  
<a id="module_bfx-hf-models-adapter-sql.SQLDBAdapter"></a>

### bfx-hf-models-adapter-sql.SQLDBAdapter : <code>module:bfx-hf-models.Model</code>
**Kind**: static constant of [<code>bfx-hf-models-adapter-sql</code>](#module_bfx-hf-models-adapter-sql)  
**Read only**: true  
<a id="module_bfx-hf-models-adapter-sql.AdapterGenerator"></a>

### bfx-hf-models-adapter-sql.AdapterGenerator(config) ⇒ <code>module:bfx-hf-models.DBAdapter</code>
Adapter generator based on provided configuration

**Kind**: static method of [<code>bfx-hf-models-adapter-sql</code>](#module_bfx-hf-models-adapter-sql)  
**Returns**: <code>module:bfx-hf-models.DBAdapter</code> - adapter  
**Throws**:

- <code>Error</code> if given an unsupported client type


| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | configuration |
| config.clientType | <code>string</code> | one of   [CLIENT_TYPES](#module_bfx-hf-models-adapter-sql.CLIENT_TYPES) |
| config.connection | <code>string</code> | connection string, i.e. PSQL URL with   authentication query params |

<a id="module_bfx-hf-models-adapter-sql.KnexDBInstance"></a>

### bfx-hf-models-adapter-sql.KnexDBInstance : <code>object</code>
{@npm knex} database client, used as `db` object for the provided
[bfx-hf-models.DBAdapter](module:bfx-hf-models.DBAdapter).

See the
[knex README](https://github.com/knex/knex/blob/master/README.md)
for available methods.

This type is a stub to link to the documentation above.

**Kind**: static typedef of [<code>bfx-hf-models-adapter-sql</code>](#module_bfx-hf-models-adapter-sql)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| insert | <code>function</code> | inserter |

