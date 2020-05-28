---
id: rest-auth-deposit-address
title: "Deposit Address"
subtitle: "Retrieve your deposit address or generate a new deposit address for a specific currency and wallet."
---

::: callout info Tag/Memo/Payment_ID
For currencies that require a tag, memo, or payment ID, the endpoint will provide these. The deposit address cannot be retrieved through this endpoint, but you can find it on your deposit page on the website. The deposit address is always the same; the tag, memo, or payment ID is used to direct your deposit to the correct account and wallet.
:::


**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('acc_dep' for account deposit)
MESSAGE_ID  |  int  |  unique ID of the message
METHOD | string | Method of deposit
CURRENCY_CODE | string | Currency code of new address
ADDRESS | string | Deposit address (instead of the address, this field will show Tag/Memo/Payment_ID for currencies that require it)
POOL_ADDRESS | string | Pool address (for currencies that require a Tag/Memo/Payment_ID)
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification


::: callout info Address Limit
Please note that you may generate up to 3 addresses in total per currency per month. The only exception to this is IOTA, for which you can generate 3 deposit addresses per day (1 for each wallet type).
:::
