---
id: rest-auth-wallet-balances
title: "Wallet Balances"
subtitle: "See your balances"
---

**Response Details**

An array of wallet balances.

Key | Type | Description
-- | -- | --
type  |  [string]  |  “trading”, “deposit” or “exchange”
currency  |  [string]  |  Currency
amount  |  [decimal]  |  How much balance of this currency in this wallet
available  |  [decimal]  |  How much X there is in this wallet that is available to trade


**Ratelimit**: 10 req/min
