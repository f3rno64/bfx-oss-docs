<a id="assertWalletsUpdated"></a>

## assertWalletsUpdated(o, dataset, feeMultiplier, noRecursion) ⇒ <code>boolean</code>
Scans received wallet update packets, and verifies that the order and
associated fees have been applied

**Kind**: global function  
**Returns**: <code>boolean</code> - ok - true if there is a matching balance update  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>Order</code> |  | required |
| dataset | <code>Dataset</code> |  |  |
| feeMultiplier | <code>number</code> |  |  |
| noRecursion | <code>boolean</code> | <code>false</code> | @see assertWalletsUpdatedMultiTrade |

::: api-docs-index
:::
<a id="assertOrderChanged"></a>

## assertOrderChanged(o, dataset, direction, matchVirtual)
See assertOrderInserted & assertOrderRemoved. Does not log

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Order</code> |  |
| dataset | <code>Dataset</code> |  |
| direction | <code>number</code> | 1 for removed, -1 for inserted |
| matchVirtual | <code>boolean</code> | if true, a max-delta is employed |

::: api-docs-index
:::
<a id="setSigFig"></a>

## setSigFig(n, maxSigs) ⇒ <code>string</code>
Smartly set the precision (decimal) on a value based off of the significant
digit maximum. For example, calling with 3.34 when the max sig figs allowed
is 5 would return '3.3400', the representation number of decimals IF they
weren't zeros.

**Kind**: global function  
**Returns**: <code>string</code> - str  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> |  |
| maxSigs | <code>number</code> | default 5 |

::: api-docs-index
:::
