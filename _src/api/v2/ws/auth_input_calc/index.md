---
id: ws-auth-input-calc
title: Calc
subtitle: Send calc requests to trigger specific calculations.
dataSamples:
  js_payload.js: Payload
---

Requesting a calculation can be done by constructing a payload using the "calc" abbreviation. Include the calc parameters in the payload as an array. Please look to the sidebar for an example payload.


## Possible prefixes:

- `margin_sym_SYMBOL`
- `funding_sym_SYMBOL`
- `position_SYMBOL`
- `wallet_WALLET-TYPE_CURRENCY`
- `balance`


::: callout info NOTE
Calculations are on demand, so no more streaming of unnecessary data.
Websocket server allows up to 30 calculations per batch. If the client sends too many concurrent requests (or tries to spam) requests, it will receive an error and potentially a disconnection.
The Websocket server performs a maximum of 8 calculations per second per client.
:::
