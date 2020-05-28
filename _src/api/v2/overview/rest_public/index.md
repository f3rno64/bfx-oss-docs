---
id: rest-public
title: "Public Endpoints"
---

Public endpoints should use the domain:
https://api-pub.bitfinex.com/

All Javascript public REST in our Documentation's "reference" section examples will follow the format below. The format uses the Node library "Fetch" with an async function which awaits the json object of the GET request. Unless otherwise noted in the docs, the raw examples will use this HTTP request library.

The example code will then console log the status of the request (200 = successful) along with the response. It assumes you are using the domain listed above.

```javascript [1590649447416000-javascript]
const fetch = require('node-fetch') // Fetch library for Node
const url = 'https://api-pub.bitfinex.com/v2/'// Domain

const pathParams = '' // Change these based on relevant path params listed in the docs
const queryParams = '' // Change these based on relevant query params listed in the docs

async function request() {
    try {
        const req = await fetch(`${url}/${pathParams}?${queryParams}`)
        const response = await req.json()
        console.log(`STATUS ${req.status} - ${JSON.stringify(response)}`) // Logs status and stringified response
    }
    catch (err) { 
        console.log(err) // Catches and logs any error
    }
}

request()
```

```ruby [1590649447416000-ruby]
tick = client.<method_name>
```

```go [1590649447416000-go]
// request
// TODO
```

## Public Endpoints

- GET [Platform Status](ref:rest-public-platform-status)
- GET [Tickers](/v2/reference#rest-public-tickers)
- GET [Ticker](/v2/reference#rest-public-ticker)
- GET [Trades](/v2/reference#rest-public-trades)
- GET [Book](ref:rest-public-book)
- GET [Stats](/v2/reference#rest-public-stats)
- GET [Candles](/v2/reference#rest-public-candles)
- GET [Configs](ref:rest-public-conf)
- GET [Status](ref:rest-public-status)
- GET [Liquidation Feed](ref:rest-public-liquidations)
- GET [Leaderboards](ref:rest-public-rankings)

## Calculation Endpoints

- POST [Market Average Price](ref:rest-public-calc-market-average-price)
- POST [Foreign Exchange Rate](ref:rest-public-calc-foreign-exchange-rate)
