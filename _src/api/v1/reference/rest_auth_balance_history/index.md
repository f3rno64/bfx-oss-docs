---
id: rest-auth-balance-history
title: "Balance History"
subtitle: "View all of your balance ledger entries."
---

::: callout info Wallet Filtering Restrictions
When filtering by a specific wallet (“trading”, “exchange”, “deposit”) type, the time_since will be forced to = time_until - 1.day if time_since <= time_until - 1.day. This is due to performance restrictions on the increasing size of data sets within the database.
<br>
Users are encouraged to update their code to use the newer [REST v2 ledgers endpoint](https://docs.bitfinex.com/v2/reference#rest-auth-deposit-withdrawal-history).
:::


**Response Details**

Key | Type | Description
-- | -- | --
currency  |  [string]  |  Currency
amount  |  [decimal]  |  Positive (credit) or negative (debit)
balance  |  [decimal]  |  Wallet balance after the current entry
description  |  [string]  |  Description of the entry. Includes the wallet in which the operation took place
timestamp  |  [time]  |  Timestamp of the entry


**Ratelimit**: 15 req/min
