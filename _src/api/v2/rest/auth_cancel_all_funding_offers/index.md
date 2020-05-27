---
id: rest-auth-cancel-all-funding-offers
title: Cancel All Funding Offers
subtitle: Cancel all of your current funding offers. Can also be used to only cancel offers in the specified currency.
---

::: callout info Currency
Specifying a currency is optional. If the currency param is omitted, all open offers will be cancelled.
:::


**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('foc_all-req'(funding offer cancel all request))
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification
