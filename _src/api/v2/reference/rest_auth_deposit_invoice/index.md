---
id: rest-auth-deposit-invoice
title: "Generate Invoice"
subtitle: "Generates a Lightning Network deposit invoice"
---

::: callout danger Creating a deposit address
If this is the first time you are generating an LNX invoice on your account, you will first need to create a deposit address. To do this, call w/deposit/address  with { method: 'LNX', wallet: 'exchange' }
:::


**Response Fields**

Term | Type | Description
-- | -- | --
INVOICE_HASH  | string |  Hashed invoice
INVOICE  | string |  Requested invoice
AMOUNT |  string  |  Amount of invoice
