---
id: rest-auth-new-order
title: "New Order"
subtitle: "Submit a new Order, can be used to create margin, exchange, and derivative orders."
---

::: callout info aff_code
API orders can now pass an affiliate code through which you can earn rebates. To learn more about these rebates and our affiliate program, please look at the relevant [announcement](https://blog.bitfinex.com/announcements/the-revolution-continues/) and [knowledge base article](https://support.bitfinex.com/hc/en-us/articles/360036965234-The-Bitfinex-Affiliate-Program).
:::


**Response Details**

Key | Type | Description
-- | -- | --
order_id  |  [int64]  |  An order object containing the order’s ID as well as all the information provided by /order/status
