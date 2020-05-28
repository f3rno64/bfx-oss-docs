---
id: derivatives
title: "API Derivatives Trading"
---

The Bitfinex APIs are designed to allow access to all the features of the Bitfinex platform and are subject to the [API Terms of Service](https://www.bitfinex.com/legal/api_terms).
The end goal is to allow users to create trading platforms and highly customised and advanced trading strategies.
Bitfinex APIs can be used to retrieve data and perform derivatives trading*.

*The derivatives platform is provided by iFinex Financial Technologies Limited. References to Bitfinex Derivatives on this page are references to iFinex Financial Technologies Limited. Product specifications for our derivative contracts can be found here:
[Product Description](https://www.bitfinex.com/legal/derivative_product)
[Funding Payment Summary](https://www.bitfinex.com/legal/derivative_funding)

### Retrieving derivatives data from public endpoints

Retrieving data from public endpoints for derivatives functions the same as it does for our other trading pairs. The following endpoints are available:


::: callout info Trading pairs
To use these endpoints, where applicable, specify the trading pair as either tBTCF0:USTF0 or ETHF0:USTF0
:::



* The Status endpoints are of particular interest and provide information on the derivative price, spot price, mark price, insurance fund balance, next funding timestamp, next funding accrued, next funding step, current funding, and open interest all from a single endpoint.

### Authenticated derivatives data

Instructions on how to use authenticated endpoints can be found here:
- [Rest Authentication](https://docs.bitfinex.com/docs/rest-auth)
- [WebSocket Authentication](https://docs.bitfinex.com/docs/ws-auth)

The following authenticated endpoints provide information relevant to trading derivatives:



### Converting funds

Derivatives trading requires USDt0 in your derivatives wallet. Conversion and transfer can be done on the website following these instructions:
- [Knowledge Base: How to convert USDt to USDt0](https://support.bitfinex.com/hc/en-us/articles/360035475154-How-to-convert-USDt-to-USDt0)

Alternatively, the API allows conversion through the following endpoint:
- [Transfer Between Wallets](ref:transfer-between-wallets)

### Trading derivatives through the API

You can submit, update, and cancel your derivative trades using the following endpoints:


::: callout info Trading pairs
To use these endpoints for derivative trading, specify the trading pair as either tBTCF0:USTF0 or ETHF0:USTF0
:::



* See [Input API](ref:ws-input) for details on placing, updating, and canceling orders through WS.
