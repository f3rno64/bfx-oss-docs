---
id: rest-auth-info-margin
title: Margin Info
subtitle: Get account margin information (like P/L, Swaps, Margin Balance, Tradable Balance and others). Use different keys (base, SYMBOL, sym_all) to retrieve different kinds of data.
---

**Fields**

Term | Type | Description
-- | -- | --
SYMBOL | string | Pair (tBTCUSD, tBTCUST, ...) -  (key: 'SYMBOL')
USER_PL |  float  |  User Profit and Loss - (key: 'base')
USER_SWAPS |  float  |  Amount of swaps a user has - (key: 'base')
MARGIN_BALANCE |  float  |  Balance in your margin funding account - (key: 'base')
MARGIN_NET |  float  |  Balance after P&L is accounted for - (key: 'base')
MARGIN_MIN | float | Minimum required margin - (key: 'base')
TRADABLE_BALANCE |  float  |  Your buying power (how large a position you can obtain) - (key: 'SYMBOL' or 'sym_all')
GROSS_BALANCE | float | Your buying power including funds already reserved for open positions - (key: 'SYMBOL' or 'sym_all')
BUY | float | Maximum amount you can buy at current best ASK - (key: 'SYMBOL' or 'sym_all')
SELL | float | Maximum amount you can sell at current best BID - (key: 'SYMBOL' or 'sym_all')

**Ratelimit**: 45 req/min


::: callout info Limited to Margin Trading
The v2 Margin Info endpoint is limited to margin trading and does not provide information related to derivatives trading.
:::
