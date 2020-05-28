---
id: rest-auth-margin-information
title: "Margin Information"
subtitle: "See your trading wallet information for margin trading."
---

**Response Details**

Key | Type | Description
-- | -- | --
margin_balance  |  [decimal]  |  The USD value of all your trading assets (based on last prices)
unrealized_pl  |  [decimal]  |  The unrealized profit/loss of all your open positions
unrealized_swap  |  [decimal]  |  The margin funding used by all your open positions
net_value  |  [decimal]  |  Your net value (the USD value of your trading wallet, including your margin balance, your unrealized P/L and margin funding)
required_margin  |  [decimal]  |  The minimum net value to maintain in your trading wallet, under which all of your positions are fully liquidated
margin_limits  |  [array]  |  The list of margin limits for each pair. The array gives you the following information, for each pair
on_pair  |  [string]  |  The pair for which these limits are valid
initial_margin  |  [decimal]  |  The minimum margin (in %) to maintain to open or increase a position
tradable_balance  |  [decimal]  |  Your tradable balance in USD (the maximum size you can open on leverage for this pair)
margin_requirements  |  [decimal]  |  The maintenance margin (% of the USD value of all of your open positions in the current pair to maintain)


::: callout info Limited to Margin Trading
The v1/margin_infos endpoint is limited to margin trading and does not provide information related to derivatives trading.
:::
