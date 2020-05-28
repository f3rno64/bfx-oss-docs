---
id: public-endpoints
title: "Public Endpoints"
---

```javascript
// All examples assume the following:
// 1. You already have the request object available
// 2. You have the url variable
// 3. Will use BTCUSD as the default symbol
var request = require('request')
var url = "https://api.bitfinex.com/v1"
```

```javascript [1590649447466000-javascript]
// request
request.get(url + "Endpoint\address",
  function(error, response, body) {
    console.log(body);
});
```

```ruby [1590649447466000-ruby]
tick = client.<method_name>
```

```go [1590649447466000-go]
// request
// TODO
```

::: callout info undefined
All Public Endpoints use GET requests
:::



- GET [Tickers](/v1/reference#rest-public-ticker)
- GET [Stats](/v1/reference#rest-public-stats)
- GET [Fundingbook](/v1/reference#rest-public-fundingbook)
- GET [Orderbook](/v1/reference#rest-public-orderbook)
- GET [Trades](/v1/reference#rest-public-trades)
- GET [Lends](/v1/reference#rest-public-lends)
- GET [Symbols](/v1/reference#rest-public-symbols)
- GET [Symbol Details](/v1/reference#rest-public-symbol-details)
