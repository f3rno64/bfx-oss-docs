---
id: rest-auth-summary
title: "Summary"
subtitle: "Returns a 30-day summary of your trading volume and return on margin funding."
---

**Response Details**

Key | Type | Description
-- | -- | --
trade_vol_30d    |    [string]    |    Trading volumes for any currency for the last 30 days
funding_profit_30d    |    [string]    |    Funding profits for any currency for the last 30 days
maker_fees    |    [decimal]    |    Your current fees for maker orders (limit orders not marketable, in percent)
taker_fees    |    [decimal]    |    Your current fees for taker orders (marketable order, in percent)
