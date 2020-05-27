---
id: rest-auth-keep-funding
title: Keep Funding
subtitle: Toggle to keep funding taken. Specify loan for unused funding and credit for used funding.
---

::: callout info Loan and credit ID's
Loan or credit ID's can be retrieved throug the  [Funding Loans](https://docs.bitfinex.com/reference?showHidden=94bdb#rest-auth-funding-loans) and [Funding Credits](https://docs.bitfinex.com/reference?showHidden=94bdb#rest-auth-funding-credits) endpoints.
:::


**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('fk-req' (funding keep request))
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification
