---
id: rest-auth-funding-auto-renew
title: "Funding Auto-renew"
subtitle: "Activate or deactivate auto-renew. Allows you to specify the currency, amount, rate, and period."
---

**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('on-req', 'oc-req', 'uca', 'fon-req', 'foc-req', 'fa-req')
MESSAGE_ID  |  int  |  unique ID of the message
CURRENCY  |  string  |  Currency (USD, …)
PERIOD  |  int  |  Period in days
RATE  |  float  |  Rate
THRESHOLD  |  float  |  Max amount to be auto-renewed
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification
