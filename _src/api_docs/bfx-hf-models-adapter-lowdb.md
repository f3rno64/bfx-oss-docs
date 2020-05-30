<a id="module_bfx-hf-models-adapter-lowdb"></a>

## bfx-hf-models-adapter-lowdb
This is an adapter around {@npm lowdb} (a lodash-powered JSON database) for
the Bitfinex Honey Framework. To use, initialize an instance of the
[bfx-hf-models](module:bfx-hf-models) database with it as an adapter.

### Features
* {@npm lowdb} saves the DB contents as a JSON file on disk
* No need to run a 3rd party database server instance
* Fully compatible with [bfx-hf-models](module:bfx-hf-models) & the HF
  system ([bfx-hf-data-server](module:bfx-hf-data-server),
  [bfx-hf-algo-server](module:bfx-hf-algo-server),
  [bfx-hf-algo](module:bfx-hf-algo), etc)

### Unique Collection Methods
* `bulkUpsert()` like `upsert()` but for multiple records
* `insertSorted()` - insert a record while maintaing sort (sort configured
  per-call)

### Unique Map Methods
* `rmAll()` - removes all records

### Unique Generic Methods
* `write()` - flushes all changes to disk

### Installation

```bash
npm i --save bfx-hf-models-adapter-lowdb
```

### Quickstart & Example

```js
const HFDBLowDBAdapter = require('bfx-hf-models-adapter-lowdb')
const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
const HFDB = require('bfx-hf-models')

const LOWDB_FILENAME = '...'

const db = new HFDB({
  schema: HFDBBitfinexSchema,
  adapter: HFDBLowDBAdapter({
    dbPath: LOWDB_FILENAME,
    schema: HFDBBitfinexSchema,
  }),
})

const { Candle } = db
const candles = await Candle.getAll()

console.log(`read ${candles.length} candles`)
```

**License**: Apache-2.0  
::: api-docs-index
* [bfx-hf-models-adapter-lowdb](#module_bfx-hf-models-adapter-lowdb)
    * [.LowDBAdapter](#module_bfx-hf-models-adapter-lowdb.LowDBAdapter) : <code>module:bfx-hf-models.Model</code>
    * [.AdapterGenerator(config)](#module_bfx-hf-models-adapter-lowdb.AdapterGenerator) ⇒ <code>module:bfx-hf-models.DBAdapter</code>
    * [.LowDBInstance](#module_bfx-hf-models-adapter-lowdb.LowDBInstance) : <code>object</code>
:::
<a id="module_bfx-hf-models-adapter-lowdb.LowDBAdapter"></a>

### bfx-hf-models-adapter-lowdb.LowDBAdapter : <code>module:bfx-hf-models.Model</code>
**Kind**: static constant of [<code>bfx-hf-models-adapter-lowdb</code>](#module_bfx-hf-models-adapter-lowdb)  
**Read only**: true  
<a id="module_bfx-hf-models-adapter-lowdb.AdapterGenerator"></a>

### bfx-hf-models-adapter-lowdb.AdapterGenerator(config) ⇒ <code>module:bfx-hf-models.DBAdapter</code>
Adapter generator based on provided configuration

**Kind**: static method of [<code>bfx-hf-models-adapter-lowdb</code>](#module_bfx-hf-models-adapter-lowdb)  
**Returns**: <code>module:bfx-hf-models.DBAdapter</code> - adapter  
**Throws**:

- <code>Error</code> fails if given an invalid or empty `dbPath`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>object</code> |  | configuration |
| config.dbPath | <code>string</code> |  | path to `lowdb` JSON store on disk |
| [config.defaultData] | <code>object</code> |  | optional seed data if the DB is blank |
| [config.Backend] | <code>function</code> | <code>FileSync</code> | lowdb backend, by default   store is synced to a file on disk at `dbPath` |

<a id="module_bfx-hf-models-adapter-lowdb.LowDBInstance"></a>

### bfx-hf-models-adapter-lowdb.LowDBInstance : <code>object</code>
{@npm lowdb} database instance, used as `db` object for the provided
[bfx-hf-models.DBAdapter](module:bfx-hf-models.DBAdapter).

See the
[lowdb README](https://github.com/typicode/lowdb/blob/master/README.md)
for available methods.

This type is a stub to link to the documentation above; all `lodash` methods
are available for manipulation of data.

**Kind**: static typedef of [<code>bfx-hf-models-adapter-lowdb</code>](#module_bfx-hf-models-adapter-lowdb)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| get | <code>function</code> | getter |
| set | <code>function</code> | setter |

