---
title: "API Reference"
menuTitle: "API Reference"
---
::: api-docs-index
:::
<a id="updateData"></a>

## updateData(data, dataWidth, dataKey)
Updates internal candle & indicator data sets

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Array&gt;</code> | candle dataset |
| dataWidth | <code>number</code> | candle width, default unchanged |
| dataKey | <code>string</code> | optional, resets pan on change |

<a id="onDataReset"></a>

## onDataReset()
Called when updated w/ data having a different dataKey. Resets pan

**Kind**: global function  
<a id="renderCrosshair"></a>

## renderCrosshair()
Renders the crosshair and updates the toolbar OHLC stats

**Kind**: global function  
