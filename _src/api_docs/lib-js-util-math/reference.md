---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
:::
<a id="avg"></a>

## avg(values, [selector]) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array</code> |  | values |
| [selector] | <code>function</code> | <code></code> | selector lambda, if not provided item will be   used as value |

<a id="max"></a>

## max(values, [selector]) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - max  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array</code> |  | values |
| [selector] | <code>function</code> | <code></code> | selector lambda, if not provided item will be   used as value |

<a id="min"></a>

## min(values, [selector]) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - min  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array</code> |  | values |
| [selector] | <code>function</code> | <code></code> | selector lambda, if not provided item will be   used as value |

<a id="nBN"></a>

## nBN(value) ⇒ <code>BigNumber</code>
**Kind**: global function  
**Returns**: <code>BigNumber</code> - bn  
**Throws**:

- <code>Error</code> fails if given NaN


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> \| <code>BigNumber</code> | value |

<a id="validateBN"></a>

## validateBN(value, opts)
**Kind**: global function  
**Throws**:

- <code>Error</code> fails on validation error


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> \| <code>number</code> \| <code>BigNumber</code> |  | value |
| opts | <code>object</code> |  | validation options |
| [opts.allowNegative] | <code>boolean</code> | <code>true</code> | allow negative values |
| [opts.allowZero] | <code>boolean</code> | <code>true</code> | allow zero values |
| [opts.allowDecimals] | <code>boolean</code> | <code>true</code> | allow decimal values |

<a id="multiplier"></a>

## multiplier(timePeriods) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - v  

| Param | Type | Description |
| --- | --- | --- |
| timePeriods | <code>string</code> \| <code>number</code> | periods |

<a id="EMA"></a>

## EMA(closePrice, prevEMA, multiplier) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - ema  

| Param | Type | Description |
| --- | --- | --- |
| closePrice | <code>string</code> \| <code>number</code> | close price |
| prevEMA | <code>string</code> \| <code>number</code> | previous EMA |
| multiplier | <code>string</code> \| <code>number</code> | multiplier |

<a id="impactMidPrice"></a>

## impactMidPrice(bids, asks, bookDepth) ⇒ <code>BigNumber</code> \| <code>null</code>
**Kind**: global function  
**Returns**: <code>BigNumber</code> \| <code>null</code> - v  
**Throws**:

- <code>Error</code> if given invalid data


| Param | Type | Description |
| --- | --- | --- |
| bids | <code>Array.&lt;number&gt;</code> | 0 - price, 1 - amount |
| asks | <code>Array.&lt;number&gt;</code> | 0 - price, 1 - amount |
| bookDepth | <code>number</code> | book depth |

<a id="stdDeviation"></a>

## stdDeviation(values, [selector]) ⇒ <code>BigNumber</code>
**Kind**: global function  
**Returns**: <code>BigNumber</code> - stddev - std deviation  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array</code> |  | values |
| [selector] | <code>function</code> | <code></code> | selector lambda, if not provided item will be   used as value |

<a id="filterStdDeviated"></a>

## filterStdDeviated(values, threshold, selector) ⇒ <code>Array.&lt;BigNumber&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;BigNumber&gt;</code> - filtered  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array</code> |  | values |
| threshold | <code>string</code> \| <code>number</code> | <code>1</code> | threshold |
| selector | <code>function</code> | <code></code> | selector lambda, if not provided item will be   used as value |

<a id="zScore"></a>

## zScore(value, mean, dev) ⇒ <code>BigNumber</code>
**Kind**: global function  
**Returns**: <code>BigNumber</code> - zScore  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> | i-th value |
| mean | <code>string</code> \| <code>number</code> | Average of values |
| dev | <code>string</code> \| <code>number</code> | Standard deviation |

<a id="groupBySize"></a>

## groupBySize(values, size, [selector]) ⇒ <code>Array.&lt;Array&gt;</code>
Groups items based on size, e.g. if size 30 and we have values `[10, 20, 30,
50]` it will return `[[10, 20], [30, 50]]`

**Kind**: global function  
**Returns**: <code>Array.&lt;Array&gt;</code> - grouped  
**Throws**:

- <code>Error</code> if given invalid data


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array</code> |  | values |
| size | <code>number</code> |  | size |
| [selector] | <code>function</code> | <code></code> | selector lambda, if not provided item   will be used as value |

<a id="kline"></a>

## kline(values, [selector]) ⇒ [<code>Kline</code>](#module_lib-js-util-math.Kline)
**Kind**: global function  
**Returns**: [<code>Kline</code>](#module_lib-js-util-math.Kline) - kline  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array</code> |  | oldest price first |
| [selector] | <code>function</code> | <code></code> | selector lambda, if not provided item   will be used as value |

<a id="typicalPrice"></a>

## typicalPrice(values, [selector]) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - typical  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| values | <code>Array</code> |  | oldest price first |
| [selector] | <code>function</code> | <code></code> | selector lambda, if not provided item   will be used as value |

<a id="TWAP"></a>

## TWAP(values, interval, [tsSelector], [priceSelector]) ⇒ <code>string</code>
Calculate TWAP

**Kind**: global function  
**Returns**: <code>string</code> - twap  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array</code> | values |
| interval | <code>number</code> | size |
| [tsSelector] | <code>function</code> | time series selector lambda |
| [priceSelector] | <code>function</code> | time series selector lambda |

<a id="VWAP"></a>

## VWAP(values) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - vwap  
**Throws**:

- <code>Error</code> fails if given prices below or equal to zero, or otherwise
  invalid


| Param | Type | Description |
| --- | --- | --- |
| values | [<code>Array.&lt;VWAPDataPoint&gt;</code>](#module_lib-js-util-math.VWAPDataPoint) | values |

<a id="EWVWAP"></a>

## EWVWAP(values, weights) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - ewvwap  

| Param | Type | Description |
| --- | --- | --- |
| values | [<code>Array.&lt;EWVWAPDataPoint&gt;</code>](#module_lib-js-util-math.EWVWAPDataPoint) | values |
| weights | <code>object</code> | e.g `{ bfx: 0.7, kraken: 0.3 }`, sum of all   weights must be equal to 1 |

