---
id: rest-auth-deposit
title: "Deposit"
subtitle: "Return your deposit address to make a new deposit."
---

::: callout info Important
"tetheruso" deposit method works only for verified accounts
:::


**Response Details**

Key | Type | Description
-- | -- | --
result  |  [string]  |  “success” or “error”
method  |  [string]  |
currency  |  [string]  |
address  |  [string]  |  The deposit address (or error message if result = “error”)

*Notes on the Tether deposit method types:*
Each Tether type represents a transport layer as follows:
"tetheruso" -> Tether on Omni
"tetheruse" -> Tether on ERC20
"tetherusl" -> Tether on Liquid
"tetherusx" -> Tether on Tron
"tetheruss" -> Tether on EOS
