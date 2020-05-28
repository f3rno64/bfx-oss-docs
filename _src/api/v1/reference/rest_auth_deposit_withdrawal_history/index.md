---
id: rest-auth-deposit-withdrawal-history
title: "Deposit-Withdrawal History"
subtitle: "View your past deposits/withdrawals."
---

**Response Details**

An array of histories

Key | Type | Description
-- | -- | --
currency  |  [string]  |
method  |  [string]  |
type  |  [string]  |
txid  |  [long] |  Transmission ID
amount  |  [decimal]  |  Absolute value of the movement
description  |  [string]  |  Description of the movement (txid, destination address,...)
address  |  [string]  |  Deposit address used or withdrawal destination address
status  |  [string]  |  Status of the movement (Sending, Processing, Pending, Postpending, Completed, User Emailed, Approved, User Approved, Canceled, Pending Cancellation, Unconfirmed)
timestamp  |  [time]  |  Timestamp of the movement
timestamp_created  |  [time]  |  Creation timestamp of the movement
fee  |  [decimal]  |  Fee


**Ratelimit**: 15 req/min
