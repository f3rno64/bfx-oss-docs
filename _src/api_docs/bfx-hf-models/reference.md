---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
* [bfx-hf-models](#module_bfx-hf-models)
    * _static_
        * [.REQUIRED_GENERIC_METHODS](#module_bfx-hf-models.REQUIRED_GENERIC_METHODS)
        * [.REQUIRED_COLLECTION_METHODS](#module_bfx-hf-models.REQUIRED_COLLECTION_METHODS)
        * [.REQUIRED_MAP_METHODS](#module_bfx-hf-models.REQUIRED_MAP_METHODS)
        * [.DBAdapterCollectionMethods](#module_bfx-hf-models.DBAdapterCollectionMethods) : <code>object</code>
            * [~bulkInsert](#module_bfx-hf-models.DBAdapterCollectionMethods..bulkInsert) ⇒ <code>Array.&lt;object&gt;</code>
            * [~find](#module_bfx-hf-models.DBAdapterCollectionMethods..find) ⇒ <code>Array.&lt;object&gt;</code>
            * [~getAll](#module_bfx-hf-models.DBAdapterCollectionMethods..getAll) ⇒ <code>Array.&lt;object&gt;</code>
            * [~getInRange](#module_bfx-hf-models.DBAdapterCollectionMethods..getInRange) ⇒ <code>Array.&lt;object&gt;</code>
            * [~insert](#module_bfx-hf-models.DBAdapterCollectionMethods..insert) ⇒ <code>object</code>
            * [~rmAll](#module_bfx-hf-models.DBAdapterCollectionMethods..rmAll) ⇒ <code>number</code>
            * [~update](#module_bfx-hf-models.DBAdapterCollectionMethods..update) ⇒ <code>number</code>
        * [.DBAdapterCriteria](#module_bfx-hf-models.DBAdapterCriteria) : <code>Array</code>
        * [.DBAdapterGenericMethods](#module_bfx-hf-models.DBAdapterGenericMethods) : <code>object</code>
            * [~raw](#module_bfx-hf-models.DBAdapterGenericMethods..raw) ⇒ <code>Promise</code>
        * [.DBAdapterMapMethods](#module_bfx-hf-models.DBAdapterMapMethods) : <code>object</code>
            * [~create](#module_bfx-hf-models.DBAdapterMapMethods..create) ⇒ <code>object</code>
            * [~find](#module_bfx-hf-models.DBAdapterMapMethods..find) ⇒ <code>Array.&lt;object&gt;</code>
            * [~getAll](#module_bfx-hf-models.DBAdapterMapMethods..getAll) ⇒ <code>object</code>
            * [~get](#module_bfx-hf-models.DBAdapterMapMethods..get) ⇒ <code>object</code>
            * [~rm](#module_bfx-hf-models.DBAdapterMapMethods..rm) : <code>function</code>
            * [~set](#module_bfx-hf-models.DBAdapterMapMethods..set) ⇒ <code>object</code>
            * [~update](#module_bfx-hf-models.DBAdapterMapMethods..update) ⇒ <code>number</code>
        * [.DBAdapter](#module_bfx-hf-models.DBAdapter) : <code>object</code>
        * [.Model](#module_bfx-hf-models.Model) : <code>object</code>
    * _inner_
        * [~HFDB](#module_bfx-hf-models.HFDB)
            * [new HFDB(args)](#new_module_bfx-hf-models.HFDB_new)
            * [.close()](#module_bfx-hf-models.HFDB+close)
:::
<a id="module_bfx-hf-models"></a>

## bfx-hf-models
This module implements a backend-agnostic database system for the Bitfinex
Honey Framework. It is used by all HF repos for data storage, i.e:

* [bfx-hf-data-server](module:bfx-hf-data-server)
* [bfx-hf-algo-server](module:bfx-hf-algo-server)
* [bfx-hf-server](module:bfx-hf-server)

Both the DB backend and exchange-specific schema methods can be configured
upon initialization. There are currently two official exchange adapters:

* [bfx-hf-ext-plugin-bitfinex](module:bfx-hf-ext-plugin-bitfinex) -
  implements Bitfinex-specific model methods
* [bfx-hf-ext-plugin-dummy](module:bfx-hf-ext-plugin-dummy) - provides
  the base set of DB methods

Besides these, two DB backends are available:

* [bfx-hf-models-adapter-lowdb](module:bfx-hf-models-adapter-lowdb)
* [bfx-hf-models-adapter-sql](module:bfx-hf-models-adapter-sql) - uses
  knex internally, allowing flexibility in DB selection

For the required database adapter structure, see
[bfx-hf-models-adapter-template](module:bfx-hf-models-adapter-template)
or directly [DBAdapter](#module_bfx-hf-models.DBAdapter)

### Features

* DB-agnostic; currently two official backends are supported: `lowdb` and
  `knex` for SQL databases.
* Exchange-agnostic; exchange-specific sync logic is provided via a plugin
  system

#### Available Models
* [AlgoOrder](module:bfx-hf-models/AlgoOrder) Algorithmic Order for
  usage with [bfx-hf-algo](module:bfx-hf-algo)
* [Backtest](module:bfx-hf-models/Backtest) Backtest results for
  [bfx-hf-strategy](module:bfx-hf-strategy) and
  [bfx-hf-data-server](module:bfx-hf-data-server)
* [Candle](module:bfx-hf-models/Candle) to be used with backtests
* [Trade](module:bfx-hf-models/Trade) to be used with backtests
* [Credential](module:bfx-hf-models/Credential) for encrypted user
  secrets used with [bfx-hf-server](module:bfx-hf-server) (i.e. API
  keys)
* [Market](module:bfx-hf-models/Market) providing available exchange
  market data for [bfx-hf-server](module:bfx-hf-server)
* [Strategy](module:bfx-hf-models/Strategy) to save trading strategies
  created with [bfx-hf-strategy](module:bfx-hf-strategy)
* [User Settings](module:bfx-hf-models/UserSettings) to store settings
  for the [bfx-hf-ui](module:bfx-hf-ui) application.

### Installation

```bash
npm i --save bfx-hf-models
```

### Quickstart

```js
const HFDB = require('bfx-hf-models')
const HFDBLowDBAdapter = require('bfx-hf-models-adapter-lowdb')
const { schema: DummySchema } = require('bfx-hf-ext-plugin-dummy')

const db = new HFDB({
  schema: DummySchema,
  adapter: HFDBLowDBAdapter({
    dbPath: './db.json',
  })
})

// db is now ready to be used; see examples below
```

**License**: Apache-2.0  
<a id="module_bfx-hf-models.REQUIRED_GENERIC_METHODS"></a>

### bfx-hf-models.REQUIRED\_GENERIC\_METHODS
Array of required **Map** and **Collection** model methods

**Kind**: static constant of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**Read only**: true  
<a id="module_bfx-hf-models.REQUIRED_COLLECTION_METHODS"></a>

### bfx-hf-models.REQUIRED\_COLLECTION\_METHODS
Array of required **Collection** model methods

**Kind**: static constant of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**Read only**: true  
<a id="module_bfx-hf-models.REQUIRED_MAP_METHODS"></a>

### bfx-hf-models.REQUIRED\_MAP\_METHODS
Array of required **Map** model methods

**Kind**: static constant of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**Read only**: true  
<a id="module_bfx-hf-models.DBAdapterCollectionMethods"></a>

### bfx-hf-models.DBAdapterCollectionMethods : <code>object</code>
A set of functions providing functionality for operating on **Collection**
models (records identified by index in an array). Additional methods may be
provided and will be made available on any **Collection** models, but those
listed here are required for a valid
[bfx-hf-models](#module_bfx-hf-models) database adapter.

**Kind**: static typedef of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| find | [<code>find</code>](#module_bfx-hf-models.DBAdapterCollectionMethods..find) | record query function, returning an array of matches |
| rmAll | [<code>rmAll</code>](#module_bfx-hf-models.DBAdapterCollectionMethods..rmAll) | mass record delete function |
| getAll | [<code>getAll</code>](#module_bfx-hf-models.DBAdapterCollectionMethods..getAll) | mass record query function; same as `find` but with no criteria |
| update | [<code>update</code>](#module_bfx-hf-models.DBAdapterCollectionMethods..update) | record update function accepting an array of criteria; may update multiple   records at once |
| insert | [<code>insert</code>](#module_bfx-hf-models.DBAdapterCollectionMethods..insert) | record creation method |
| getInRange | [<code>getInRange</code>](#module_bfx-hf-models.DBAdapterCollectionMethods..getInRange) | high-level method to query records by criteria and a range of possible key   values, with optional sorting of results. |
| bulkInsert | [<code>bulkInsert</code>](#module_bfx-hf-models.DBAdapterCollectionMethods..bulkInsert) | similar to   [insert](#module_bfx-hf-models.DBAdapterCollectionMethods..insert), but   meant for multiple records and intended to run as one database transaction   (should be more performant than individual `insert` calls, but   implementation is up to the adapter) |


* [.DBAdapterCollectionMethods](#module_bfx-hf-models.DBAdapterCollectionMethods) : <code>object</code>
    * [~bulkInsert](#module_bfx-hf-models.DBAdapterCollectionMethods..bulkInsert) ⇒ <code>Array.&lt;object&gt;</code>
    * [~find](#module_bfx-hf-models.DBAdapterCollectionMethods..find) ⇒ <code>Array.&lt;object&gt;</code>
    * [~getAll](#module_bfx-hf-models.DBAdapterCollectionMethods..getAll) ⇒ <code>Array.&lt;object&gt;</code>
    * [~getInRange](#module_bfx-hf-models.DBAdapterCollectionMethods..getInRange) ⇒ <code>Array.&lt;object&gt;</code>
    * [~insert](#module_bfx-hf-models.DBAdapterCollectionMethods..insert) ⇒ <code>object</code>
    * [~rmAll](#module_bfx-hf-models.DBAdapterCollectionMethods..rmAll) ⇒ <code>number</code>
    * [~update](#module_bfx-hf-models.DBAdapterCollectionMethods..update) ⇒ <code>number</code>

<a id="module_bfx-hf-models.DBAdapterCollectionMethods..bulkInsert"></a>

#### DBAdapterCollectionMethods~bulkInsert ⇒ <code>Array.&lt;object&gt;</code>
Function that inserts an array of records at once into the database. Meant
for large inserts, should be optimized within the respective adapter.

**Kind**: inner typedef of [<code>DBAdapterCollectionMethods</code>](#module_bfx-hf-models.DBAdapterCollectionMethods)  
**Returns**: <code>Array.&lt;object&gt;</code> - insertedRecords  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| records | <code>Array.&lt;object&gt;</code> | records to insert |

<a id="module_bfx-hf-models.DBAdapterCollectionMethods..find"></a>

#### DBAdapterCollectionMethods~find ⇒ <code>Array.&lt;object&gt;</code>
Function returning all records matching the provided criteria.

**Kind**: inner typedef of [<code>DBAdapterCollectionMethods</code>](#module_bfx-hf-models.DBAdapterCollectionMethods)  
**Returns**: <code>Array.&lt;object&gt;</code> - records - matching records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| criteria | [<code>Array.&lt;DBAdapterCriteria&gt;</code>](#module_bfx-hf-models.DBAdapterCriteria) | array of   criteria which must be met for a record to be included in the results |

<a id="module_bfx-hf-models.DBAdapterCollectionMethods..getAll"></a>

#### DBAdapterCollectionMethods~getAll ⇒ <code>Array.&lt;object&gt;</code>
Function that returns all records in the collection.

**Kind**: inner typedef of [<code>DBAdapterCollectionMethods</code>](#module_bfx-hf-models.DBAdapterCollectionMethods)  
**Returns**: <code>Array.&lt;object&gt;</code> - records - all records in the collection  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |

<a id="module_bfx-hf-models.DBAdapterCollectionMethods..getInRange"></a>

#### DBAdapterCollectionMethods~getInRange ⇒ <code>Array.&lt;object&gt;</code>
Function that returns all records matching the provided criteria, and having
a key with a value in the provided start/end range (numeric).

**Kind**: inner typedef of [<code>DBAdapterCollectionMethods</code>](#module_bfx-hf-models.DBAdapterCollectionMethods)  
**Returns**: <code>Array.&lt;object&gt;</code> - records - matching records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| criteria | [<code>Array.&lt;DBAdapterCriteria&gt;</code>](#module_bfx-hf-models.DBAdapterCriteria) | array of   criteria to be met for a record to be matched, prior to range check |
| range | <code>object</code> | range definition |
| range.key | <code>string</code> | key name on records to be checked against   start/end limits |
| range.start | <code>number</code> | minimum value for `range.key` |
| range.end | <code>number</code> | maximum value for `range.key` |
| [sort] | <code>object</code> | sort parameters |
| [sort.orderBy] | <code>string</code> | key to sort results by |
| [sort.orderDirection] | <code>string</code> | `'desc'` for descending results,   otherwise ascending. |

<a id="module_bfx-hf-models.DBAdapterCollectionMethods..insert"></a>

#### DBAdapterCollectionMethods~insert ⇒ <code>object</code>
Function that adds a new record to the collection.

**Kind**: inner typedef of [<code>DBAdapterCollectionMethods</code>](#module_bfx-hf-models.DBAdapterCollectionMethods)  
**Returns**: <code>object</code> - record - inserted record data  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| record | <code>object</code> | record to be inserted |

<a id="module_bfx-hf-models.DBAdapterCollectionMethods..rmAll"></a>

#### DBAdapterCollectionMethods~rmAll ⇒ <code>number</code>
Function that removes all records from the collection.

**Kind**: inner typedef of [<code>DBAdapterCollectionMethods</code>](#module_bfx-hf-models.DBAdapterCollectionMethods)  
**Returns**: <code>number</code> - nRemoved - number of removed records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |

<a id="module_bfx-hf-models.DBAdapterCollectionMethods..update"></a>

#### DBAdapterCollectionMethods~update ⇒ <code>number</code>
Function that updates all records matching the criteria with the provided
data.

**Kind**: inner typedef of [<code>DBAdapterCollectionMethods</code>](#module_bfx-hf-models.DBAdapterCollectionMethods)  
**Returns**: <code>number</code> - nModified - number of modified records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| criteria | [<code>Array.&lt;DBAdapterCriteria&gt;</code>](#module_bfx-hf-models.DBAdapterCriteria) | array of   criteria to be met for a record to be updated |
| data | <code>object</code> | data to saved on matching records; partial update |

<a id="module_bfx-hf-models.DBAdapterCriteria"></a>

### bfx-hf-models.DBAdapterCriteria : <code>Array</code>
An array containing 3 values; a field name, condition, and target value. For
example:

`['fieldA', '<', 1000]` - states that fieldA must be less than 1000

Used to run queries against the DB.

**Kind**: static typedef of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**See**: module:bfx-hf-models.DBAdapterMapMethods~find  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| 0 | <code>string</code> | field name on record, value used as `lvalue` |
| 1 | <code>string</code> | condition, can be '=', '!=', '>', '>=', '<', or '<=' |
| 2 | <code>string</code> \| <code>number</code> | `rvalue` |

<a id="module_bfx-hf-models.DBAdapterGenericMethods"></a>

### bfx-hf-models.DBAdapterGenericMethods : <code>object</code>
A set of functions shared by both **Map** and **Collection** models.
Additional methods may be provided and will be made available on any models,
but those listed here are required for a valid
[bfx-hf-models](#module_bfx-hf-models) database adapter.

**Kind**: static typedef of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| raw | [<code>raw</code>](#module_bfx-hf-models.DBAdapterGenericMethods..raw) | raw   database query method |

<a id="module_bfx-hf-models.DBAdapterGenericMethods..raw"></a>

#### DBAdapterGenericMethods~raw ⇒ <code>Promise</code>
Function providing access to the underlying database object for custom
queries.

**Kind**: inner typedef of [<code>DBAdapterGenericMethods</code>](#module_bfx-hf-models.DBAdapterGenericMethods)  
**Returns**: <code>Promise</code> - p - as returned by the callback `cb`  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| cb | <code>function</code> | called with `(db, model)`, must return a promise |

<a id="module_bfx-hf-models.DBAdapterMapMethods"></a>

### bfx-hf-models.DBAdapterMapMethods : <code>object</code>
A set of functions providing functionality for operating on **Map** models
(records identified by a unique key). Additional methods may be provided and
will be made available on any **Map** models, but those listed here are
required for a valid [bfx-hf-models](#module_bfx-hf-models) database
adapter.

**Kind**: static typedef of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| create | [<code>create</code>](#module_bfx-hf-models.DBAdapterMapMethods..create) | record   creation method (throws error if the record already exists) |
| update | [<code>update</code>](#module_bfx-hf-models.DBAdapterMapMethods..update) | record   update (full) method (throws error if the record does not exist) |
| find | [<code>find</code>](#module_bfx-hf-models.DBAdapterMapMethods..find) | record   query method, accepting an array of one or multiple criteria to be matched |
| getAll | [<code>getAll</code>](#module_bfx-hf-models.DBAdapterMapMethods..getAll) | full   collection query method; must return a map of all records key'ed by   `mapKey` as stored in the DB. |
| get | [<code>get</code>](#module_bfx-hf-models.DBAdapterMapMethods..get) | single record   query method by ID or record-like object containing ID. |
| set | [<code>set</code>](#module_bfx-hf-models.DBAdapterMapMethods..set) | single record   create/update method |
| rm | [<code>rm</code>](#module_bfx-hf-models.DBAdapterMapMethods..rm) | single record   removal method; throws an error if the record does not exist |


* [.DBAdapterMapMethods](#module_bfx-hf-models.DBAdapterMapMethods) : <code>object</code>
    * [~create](#module_bfx-hf-models.DBAdapterMapMethods..create) ⇒ <code>object</code>
    * [~find](#module_bfx-hf-models.DBAdapterMapMethods..find) ⇒ <code>Array.&lt;object&gt;</code>
    * [~getAll](#module_bfx-hf-models.DBAdapterMapMethods..getAll) ⇒ <code>object</code>
    * [~get](#module_bfx-hf-models.DBAdapterMapMethods..get) ⇒ <code>object</code>
    * [~rm](#module_bfx-hf-models.DBAdapterMapMethods..rm) : <code>function</code>
    * [~set](#module_bfx-hf-models.DBAdapterMapMethods..set) ⇒ <code>object</code>
    * [~update](#module_bfx-hf-models.DBAdapterMapMethods..update) ⇒ <code>number</code>

<a id="module_bfx-hf-models.DBAdapterMapMethods..create"></a>

#### DBAdapterMapMethods~create ⇒ <code>object</code>
Function that creates a **Map** model record in the database. Like all
database methods, it is provided the initialized **model** object, which as
per the spec provides a `mapKey` function argument which is defined on the
model itself, and used to generate the unique key.

To create **or** update a record if it already exists, see
[set](#module_bfx-hf-models.DBAdapterMapMethods..set)

**Kind**: inner typedef of [<code>DBAdapterMapMethods</code>](#module_bfx-hf-models.DBAdapterMapMethods)  
**Returns**: <code>object</code> - record - created record  
**Throws**:

- <code>Error</code> if a record already exists with the same key


| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| data | <code>object</code> | data to be saved as a new record |

<a id="module_bfx-hf-models.DBAdapterMapMethods..find"></a>

#### DBAdapterMapMethods~find ⇒ <code>Array.&lt;object&gt;</code>
Function that returns all records matching the provided criteria.

**Kind**: inner typedef of [<code>DBAdapterMapMethods</code>](#module_bfx-hf-models.DBAdapterMapMethods)  
**Returns**: <code>Array.&lt;object&gt;</code> - records - array of records matching the provided
  criteria  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| criteria | [<code>Array.&lt;DBAdapterCriteria&gt;</code>](#module_bfx-hf-models.DBAdapterCriteria) | array of   conditions to apply to records in the collection; the first record meeting   all conditions is returned as the "found" record. |

<a id="module_bfx-hf-models.DBAdapterMapMethods..getAll"></a>

#### DBAdapterMapMethods~getAll ⇒ <code>object</code>
Function that returns all records in a **Map** as an object, with records
key'ed by their map key.

**Kind**: inner typedef of [<code>DBAdapterMapMethods</code>](#module_bfx-hf-models.DBAdapterMapMethods)  
**Returns**: <code>object</code> - records - map of all records, key'ed by `mapKey`  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |

<a id="module_bfx-hf-models.DBAdapterMapMethods..get"></a>

#### DBAdapterMapMethods~get ⇒ <code>object</code>
Function that returns a single record by ID. Also accepts a record-like
object containing at least the ID (i.e. `{ id: 42 }`)

**Kind**: inner typedef of [<code>DBAdapterMapMethods</code>](#module_bfx-hf-models.DBAdapterMapMethods)  
**Returns**: <code>object</code> - record - matching record  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| docOrID | <code>object</code> \| <code>string</code> \| <code>number</code> | record to fetch or its ID |

<a id="module_bfx-hf-models.DBAdapterMapMethods..rm"></a>

#### DBAdapterMapMethods~rm : <code>function</code>
Function that deletes a single record by ID. Also accepts a record-like
object containing at least the ID (i.e. `{ id: 42 }`).

**Kind**: inner typedef of [<code>DBAdapterMapMethods</code>](#module_bfx-hf-models.DBAdapterMapMethods)  
**Throws**:

- <code>Error</code> if the record does not exist


| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| docOrID | <code>object</code> \| <code>string</code> \| <code>number</code> | record to remove or its ID |

<a id="module_bfx-hf-models.DBAdapterMapMethods..set"></a>

#### DBAdapterMapMethods~set ⇒ <code>object</code>
Function that creates or updates a single record by ID. Also accepts a
record-like object containing at least the ID (i.e. `{ id: 42 }`).

To ensure existing records are not modified, use
[create](#module_bfx-hf-models.DBAdapterMapMethods..create)

**Kind**: inner typedef of [<code>DBAdapterMapMethods</code>](#module_bfx-hf-models.DBAdapterMapMethods)  
**Returns**: <code>object</code> - record - final record value as stored in the DB  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| value | <code>object</code> | record value, containing relevant data for key   generation. Any existing record with the same key will be overwritten. |

<a id="module_bfx-hf-models.DBAdapterMapMethods..update"></a>

#### DBAdapterMapMethods~update ⇒ <code>number</code>
Function that updates an existing **Map** model record in the database. Must
accept either the unique ID (key value) of the model to be updated, or the
model itself (containing the ID).

Must perform a full update. To create a record if it does not exist (or
update), use [set](#module_bfx-hf-models.DBAdapterMapMethods..set)

**Kind**: inner typedef of [<code>DBAdapterMapMethods</code>](#module_bfx-hf-models.DBAdapterMapMethods)  
**Returns**: <code>number</code> - nUpdatedRows - number of updated rows  
**Throws**:

- <code>Error</code> fails if the record does not exist.


| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | database object as provided by adapter |
| model | [<code>Model</code>](#module_bfx-hf-models.Model) | initialized model instance |
| docOrID | <code>object</code> \| <code>string</code> \| <code>number</code> | record to update or its ID |
| value | <code>object</code> | new data for the record |

<a id="module_bfx-hf-models.DBAdapter"></a>

### bfx-hf-models.DBAdapter : <code>object</code>
Database adapter structure for usage with
[bfx-hf-models](#module_bfx-hf-models). For an example module refer to
[bfx-hf-models-adapter-template](module:bfx-hf-models-adapter-template)

For reference implementations (in-memory & SQL) see:
* [bfx-hf-models-adapter-lowdb](module:bfx-hf-models-adapter-lowdb)
* [bfx-hf-models-adapter-sql](module:bfx-hf-models-adapter-sql)

It must provide methods for performing all database operations required for
a [bfx-hf-models](#module_bfx-hf-models) backend. Additional methods may
be provided and used, but the base set defined in this **type** are
required.

For reference, a **Map** model is a set of records identified by a unique
key, and a **Collection** model is a set of records stored as an array
(key'ed by index).

**Kind**: static typedef of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | name of the adapter, i.e. 'Redis' or 'PSQL', etc |
| db | <code>object</code> | database object provided to all methods (i.e. DB   client, or in-memory DB reference, etc) |
| [dbInit] | <code>function</code> | if provided, this function is called to   and expected to provide the `db` object, overriding any provided on this   adapter. It is called with each model instance, post-initialization, and   then passed to the model for all DB-related methods. |
| [close] | <code>function</code> | if provided, this function is called when the   adapter is closed. Use this to clean up the database connection and flush   any unsaved changes. |
| mapMethods | [<code>DBAdapterMapMethods</code>](#module_bfx-hf-models.DBAdapterMapMethods) | object of   methods for operating on **Map** models (collections of records identified   by unique key) |
| collectionMethods | [<code>DBAdapterCollectionMethods</code>](#module_bfx-hf-models.DBAdapterCollectionMethods) | object of methods for operating on **Collection**   models (identified by index) |
|  | [<code>DBAdapterGenericMethods</code>](#module_bfx-hf-models.DBAdapterGenericMethods) | object of methods   shared by all model types. i.e. raw database query support. |

<a id="module_bfx-hf-models.Model"></a>

### bfx-hf-models.Model : <code>object</code>
A [bfx-hf-models](#module_bfx-hf-models) model as defined by a path in
the database, name, type, schema, and any required data depending on the
model type.

**Kind**: static typedef of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | location in database; final path depends on the   adapter used, with this property only needing to be unique. May be a table   name or key in an in-memory DB. |
| name | <code>string</code> | human readable model name |
| type | <code>string</code> | one of [module:bfx-hf-models.MODEL_TYPES](module:bfx-hf-models.MODEL_TYPES) |
| schema | <code>object</code> | map of record key names to Javascript   primitive types, i.e. `{ gid: String }` |
| [mapKey] | <code>string</code> \| <code>function</code> | required for map models, either a   string with the key name or a function taking a model instance as the only   argument and returning the model's unique key. |
| [index] | <code>string</code> | name of key used as index for collections   instead of position in the collection. Meant to be used in conjunction   with `indexMatches` for updating documents in upserts. Only for   **collection** models. |
| [indexMatches] | <code>Array.&lt;string&gt;</code> | array of key names which must match   for two records to be considered the same in a collection. Used to update   documents in upserts. Only for **collection** models. |

<a id="module_bfx-hf-models.HFDB"></a>

### bfx-hf-models~HFDB
Database class, takes a storage adapter and database schema as constructor
options, then handles model persistence.

**Kind**: inner class of [<code>bfx-hf-models</code>](#module_bfx-hf-models)  

* [~HFDB](#module_bfx-hf-models.HFDB)
    * [new HFDB(args)](#new_module_bfx-hf-models.HFDB_new)
    * [.close()](#module_bfx-hf-models.HFDB+close)

<a id="new_module_bfx-hf-models.HFDB_new"></a>

#### new HFDB(args)
Create a new database instance. Models will be key'ed by name on the class
after initialization.

**Throws**:

- <code>Error</code> if given an invalid adapter (missing required method or
  having an otherwise invalid structure)


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | arguments |
| args.adapter | [<code>DBAdapter</code>](#module_bfx-hf-models.DBAdapter) | database adapter.   See [module:bfx-hf-models-adapter-sql](module:bfx-hf-models-adapter-sql) for an example, or the type   definition itself for a listing of required logic. |
| args.schema | <code>object</code> | database schema providing custom models on   top of the builtins. See [module:bfx-hf-ext-plugin-bitfinex](module:bfx-hf-ext-plugin-bitfinex) for   an example. |

**Example**  
```js
const HFDBSQLAdapter = require('bfx-hf-models-adapter-sql')
const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
const { PSQL_CONNECTION } = process.env

const db = new HFDB({
  schema: HFDBBitfinexSchema,
  adapter: HFDBSQLAdapter({
    connection: PSQL_CONNECTION,
    clientType: 'pg'
  })
})

const { Trade } = db
const trades = await Trade.getAll()

trades.forEach(t => console.log(JSON.stringify(t, null, 2)))
```
<a id="module_bfx-hf-models.HFDB+close"></a>

#### hfdB.close()
Closes any DB connection; calls through to `close()` on the adapter, hence
behavior is dependent on the adapter used.

**Kind**: instance method of [<code>HFDB</code>](#module_bfx-hf-models.HFDB)  
