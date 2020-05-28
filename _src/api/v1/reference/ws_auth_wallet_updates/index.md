---
id: ws-auth-wallet-updates
title: "Wallet Updates"
dataSamples:
  json_response0.json: Response
---

::: callout info Limit Order Behavior
- When you place a limit order, you will first receive an ‘on’ (order new) which means that the order has been accepted by the system
- When the order rests on the book, you will receive an ‘ou’ (order update).
- If you send a market order, you will only receive the ‘on’ because it won’t actually rest on the book (as it matches the first order it runs into).
:::
