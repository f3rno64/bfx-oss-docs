---
id: rest-auth-withdraw
title: Withdrawal
subtitle: Allows you to request a withdrawal from one of your wallets.
---

::: callout warning Tether methods
Tether can be withdrawn using different different networks. Different methods are used to specify which network should be used. These methods are the following:

"tetheruso" = Tether(USD) on Omni
"tetheruse" = Tether(USD) on Ethereum
"tetheruss" = Tether(USD) on EOS
"tetherusx" = Tether(USD) on Tron
"tetherusl" = Tether(USD) on Liquid
"tetherusdtalg" = Tether(USD) on Algorand
:::


**Response Fields**

[Term | Type | Description]
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('acc_wd-req' - account withdrawal request)
MESSAGE_ID  |  int  |  unique ID of the message
WITHDRAWAL_ID | int | Unique Withdrawal ID
METHOD | string | Method of withdrawal
PAYMENT_ID | string | Payment ID (if relevant)
WALLET | string | Sending wallet
AMOUNT | int | Amount of Withdrawal less fee
WITHDRAWAL_FEE | int | Fee on withdrawal
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification
