<a id="module_bfx-hf-strategy-exec"></a>

## bfx-hf-strategy-exec
Execute a strategy on a live market

**License**: Apache-2.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| strategy | <code>module:bfx-hf-strategy.StrategyState</code> |  | as created by   define() from bfx-hf-strategy |
| wsManager | <code>module:bfx-api-node-core.Manager</code> |  | WSv2 pool instance |
| args | <code>object</code> |  | execution parameters |
| args.symbol | <code>string</code> |  | market to execute on |
| args.tf | <code>string</code> |  | time frame to execute on |
| args.includeTrades | <code>boolean</code> |  | if true, trade data is subscribed to   and processed |
| [args.seedCandleCount] | <code>number</code> | <code>5000</code> | size of indicator candle seed   window, before which trading is disabled |

::: api-docs-index
:::
