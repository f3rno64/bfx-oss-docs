---
id: rest-auth-wallets
title: Wallets
subtitle: Get account wallet balances.
---

**Fields**

Term | Type | Description
-- | -- | --
WALLET_TYPE  |  string  |  Wallet name (exchange, margin, funding)
CURRENCY  |  string  |  Currency (e.g. USD, ...)
BALANCE  |  float  |  Wallet balance
UNSETTLED_INTEREST | float | Unsettled interest

**Ratelimit**: 45 req/min
