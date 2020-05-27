---
id: rest-auth-transfer
title: Transfer Between Wallets
subtitle: Transfer funds between wallets. This endpoint can also be used to convert USDT to USDT0 for derivatives trading.
---

**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('on-req', 'oc-req', 'uca', 'fon-req', 'foc-req')
MESSAGE_ID  |  int  |  unique ID of the message
MTS_UPDATED  |  int  |  Millisecond Time Stamp when the transfer was created
WALLET_FROM | string | Starting wallet
WALLET_TO | string | Destination wallet
CURRENCY | string | Currency
CURRENCY_TO | str | Currency converted to
AMOUNT | int | Amount of Transfer
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification


::: callout info Derivatives Wallet
Note that the margin wallet, for Derivative symbols, is the derivatives wallet. If the destination is 'margin' and the currency_to is 'USTF0', the funds will end up in the derivatives wallet.
:::
