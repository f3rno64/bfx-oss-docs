---
id: rest-auth-replace-order
title: "Replace Order"
subtitle: "Replace an order with a new one. Can be used to replace an order with a new margin, exchange, or derivative order."
---

::: callout info aff_code
API orders can now pass an affiliate code through which you can earn rebates. To learn more about these rebates and our affiliate program, please look at the relevant [announcement](https://blog.bitfinex.com/announcements/the-revolution-continues/) and [knowledge base article](https://support.bitfinex.com/hc/en-us/articles/360036965234-The-Bitfinex-Affiliate-Program).
:::


**Response Details**

Key | Type | Description
-- | -- | --
order_id | [int64] | A randomly generated ID for the order and the information given by /order/status.
