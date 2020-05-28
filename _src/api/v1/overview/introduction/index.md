---
id: introduction
title: "Introduction"
subtitle: "The Bitfinex APIs are designed to allow access to all of the features of the Bitfinex platform, subject to you complying with the <a href=\"https://www.bitfinex.com/legal/api_terms\" target=\"_blank\">API Terms of Service</a>. The end goal is to allow people to potentially recreate the entire platform on their own.  If you would like to suggest changes to the documentation, please use the \"Suggest Edits\" button found on the right-hand side."
---

This section of the portal gives a brief explanation of how to set up your system in order to use our API. If you need a detailed explanation of our exposed endpoints, you can jump right into our [Reference section](https://bitfinex.readme.io/v1/reference).


::: callout success undefined
- [REST API Version 2.0 Documentation (BETA)](https://bitfinex.readme.io/v2/docs/rest-general)

- [Websocket API Version 2.0 Documentation (BETA)](https://bitfinex.readme.io/v2/docs/ws-general)

Currently, the Version 2.0 is in BETA and we may introduce minor changes.
:::


::: callout warning undefined
- [REST API Version 1.1 Documentation](https://bitfinex.readme.io/v1/docs/rest-general)

- [Websocket API Version 1.1 Documentation](https://bitfinex.readme.io/v1/docs/ws-general)
:::


**NOTE**
If an IP address exceeds a certain number of requests per minute (between 10 and 90) to a specific REST API endpoint  e.g., /ticker, the requesting IP address will be blocked for 10-60 seconds on that endpoint and the JSON response {"error": "ERR_RATE_LIMIT"} will be returned. Please note the exact logic and handling for such DDoS defenses may change over time to further improve reliability.

If you are looking for the latest version of the docs, you can use the version switch in the upper left or  [click here](https://bitfinex.readme.io/v2/docs)
