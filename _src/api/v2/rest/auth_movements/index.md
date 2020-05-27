---
id: rest-auth-movements
title: Movements
subtitle: View your past deposits/withdrawals. Currency can be specified to retrieve movements specific to that currency.
---

**Fields**

Term | Type | Description
-- | -- | --
ID  |   String  |   Movement identifier
CURRENCY    |   String  |   The symbol of the currency (ex. "BTC")
CURRENCY_NAME   |   String  |   The extended name of the currency (ex. "BITCOIN")
MTS_STARTED |   Date  |   Movement started at
MTS_UPDATED |   Date  |   Movement last updated at
STATUS  |   String  |   Current status
AMOUNT  |   String  |   Amount of funds moved (positive for deposits, negative for withdrawals)
FEES    |   String  |   Tx Fees applied
DESTINATION_ADDRESS |   String  |   Destination address
TRANSACTION_ID  |   String  |   Transaction identifier
WITHDRAW_TRANSACTION_ID  |   String  |   Optional personal withdraw transaction note

**Ratelimit**: 45 req/min
