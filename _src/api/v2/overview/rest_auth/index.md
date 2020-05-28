---
id: rest-auth
title: "Authenticated Endpoints"
---

###URL

Authenticated endoints should use the domain:
https://api.bitfinex.com

All authenticated examples assume the following:
* You are using the ‘request’ HTTP library
* You are using your API key and API Secret key
* Your “signature”, “sig” and “nonce” variables follow the same format that is listed below
* Your “options” variable (or equivalent) follows the same format listed below and includes the ‘bfx-nonce’, ‘bfx-apikey’, and ‘bfx-signature’ HTTP encoded headers.

Below is the example code for authenticated endpoints. The example code uses the v2/auth/r/wallets endpoint.


```javascript
const CryptoJS = require('crypto-js') // Standard JavaScript cryptography library
const request = require('request') // "Request" HTTP req library
   
const apiKey = '' // const apiKey = 'paste key here'
const apiSecret = '' // const apiSecret = 'paste secret here'

const apiPath = 'v2/auth/r/wallets'// Example path

const nonce = (Date.now() * 1000).toString() // Standard nonce generator. Timestamp * 1000
const body = {} // Field you may change depending on endpoint

let signature = `/api/${apiPath}${nonce}${JSON.stringify(body)}` 
// Consists of the complete url, nonce, and request body

const sig = CryptoJS.HmacSHA384(signature, apiSecret).toString() 
// The authentication signature is hashed using the private key

const options = {
  url: `https://api.bitfinex.com/${apiPath}`,
  headers: {
    'bfx-nonce': nonce,
    'bfx-apikey': apiKey,
    'bfx-signature': sig
  },
  body: body,
  json: true
}

request.post(options, (error, response, body) => {
  console.log(body); // Logs the response body
})
```

###Path and Path Parameters

If you wish to retrieve data from or send data to a different endpoint, simply change the apiPath variable in the example code. Any Path Parameters that you would like to use are appended to the apiPath variable.

###Form Data and Query Parameters

Other parameters (listed in the documentation as “Form Data” or “Query Params”) are added to the body object as key: value pairs. Here’s an example of the code used to place an order through the API using "v2/auth/w/order/submit” and a body object:


```javascript
const CryptoJS = require('crypto-js') // Standard JavaScript cryptography library
const request = require('request') // "Request" HTTP req library
   
const apiKey = '' // const apiKey = 'paste key here'
const apiSecret = '' // const apiSecret = 'paste secret here'

const apiPath = 'v2/auth/w/order/submit'// Example path

const nonce = (Date.now() * 1000).toString() // Standard nonce generator. Timestamp * 1000
const body = {
		type: 'LIMIT',
    symbol: 'tBTCUSD',
    price: '15',
    amount: '0.1'
} // Field you may change depending on endpoint

let signature = `/api/${apiPath}${nonce}${JSON.stringify(body)}` 
// Consists of the complete url, nonce, and request body

const sig = CryptoJS.HmacSHA384(signature, apiSecret).toString() 
// The authentication signature is hashed using the private key

const options = {
  url: `https://api.bitfinex.com/${apiPath}`,
  headers: {
    'bfx-nonce': nonce,
    'bfx-apikey': apiKey,
    'bfx-signature': sig
  },
  body: body,
  json: true
}

request.post(options, (error, response, body) => {
  console.log(body); // Logs the response body
})
```

###REST Authenticated Endpoints

**Wallets**
* [Wallets](ref:rest-auth-wallets)
* [Wallets History](ref:rest-auth-wallets-hist)

**Orders**
* [Retrieve Orders](ref:rest-auth-orders)
* [Submit Order](ref:rest-auth-submit-order)
* [Order Update](ref:rest-auth-order-update)
* [Cancel Order](ref:rest-auth-cancel-order)
* [Order Multi-OP](ref:rest-auth-order-multi)
* [Cancel Order Multi](ref:rest-auth-order-cancel-multi)
* [Orders History](ref:rest-auth-orders-history)
* [Order Trades](ref:rest-auth-order-trades)
* [Trades](ref:rest-auth-trades)
* [Ledgers](ref:rest-auth-ledgers)

**Positions**
* [Margin Info](https://docs.bitfinex.com/reference#rest-auth-info-margin)
* [Retrieve Positions](https://docs.bitfinex.com/reference#rest-auth-positions)
* [Claim Position](https://docs.bitfinex.com/reference#rest-auth-position-claim)
* [Positions History](https://docs.bitfinex.com/reference#rest-auth-positions-hist)
* [Positions Audit](https://docs.bitfinex.com/reference#rest-auth-positions-audit)
* [Derivative Position Collateral](https://docs.bitfinex.com/reference#rest-auth-deriv-pos-collateral-set)

**Margin Funding**
* [Funding Offers](ref:rest-auth-funding-offers)
* [Submit Funding Offer](ref:rest-auth-submit-funding-offer)
* [Cancel Funding Offer](ref:rest-auth-cancel-funding-offer)
* [Cancel All Funding Offers](ref:rest-auth-cancel-all-funding-offers)
* [Funding Close](ref:rest-auth-funding-close)
* [Funding Auto-renew](ref:rest-auth-funding-auto-renew)
* [Keep Funding](ref:rest-auth-keep-funding)
* [Funding Offers](ref:rest-auth-funding-offers)
* [Funding Loans](ref:rest-auth-funding-loans)
* [Funding Loans History](ref:rest-auth-funding-loans-hist)
* [Funding Credits](ref:rest-auth-funding-credits)
* [Funding Credits History](ref:rest-auth-funding-credits-hist)
* [Funding Trades](ref:rest-auth-funding-trades-hist)
* [Funding Info](ref:rest-auth-info-funding)

**Account Actions**
* [User Info](ref:rest-auth-info-user)
* [Transfer Between Wallets](ref:rest-auth-transfer)
* [Deposit Address](ref:rest-auth-deposit-address)
* [Withdrawal](ref:rest-auth-withdraw)
* [Movements](ref:rest-auth-movements)
* [Alert List](ref:rest-auth-alerts)
* [Alert Set](ref:rest-auth-alert-set)
* [Alert Delete](ref:rest-auth-alert-del)
* [Balance Available for Orders/Offers](ref:rest-auth-calc-order-avail)
* [User Settings Write](ref:rest-auth-settings-set)
* [User Settings Read](ref:rest-auth-settings)
* [User Settings Delete](ref:rest-auth-settings-del)
