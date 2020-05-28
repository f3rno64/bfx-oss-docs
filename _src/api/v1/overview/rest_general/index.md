---
id: rest-general
title: "General"
---

### URL

Endpoints that require authentication should use the domain:
https://api.bitfinex.com/

Public endpoints should use the domain:
https://api.bitfinex.com/

```text
// Public endpoint
https://api.bitfinex.com/v1/<endpoint>/?parameter=value...

// Authenticated endpoint
https://api.bitfinex.com/v1/<endpoint>/?parameter=value...

Where <endpoint> is one of the public / authenticated endpoints.
```


### Parameters
Requests parameters for POST requests (authenticated) in the "Authenticated Enpoints" section are part of the PAYLOAD, not GET parameters.

Requests parameters for GET requests (non-authenticated) are GET parameters,
appended to the URL being called as follows:



```curl
/v1/<endpoint>/?parameter=value

```

::: callout warning NOTE
In order to offer the best service possible we have added a rate limit to the number of REST requests.
Our rate limit policy can vary in a range of 10 to 90 requests per minute depending on some factors (e.g. servers load, endpoint, etc.).
:::
