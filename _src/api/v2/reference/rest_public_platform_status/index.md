---
id: rest-public-platform-status
title: "Platform Status"
subtitle: "Get the current status of the platform, “Operative” or “Maintenance”. Maintenance periods generally last for a few minutes to a couple of hours and may be necessary from time to time during infrastructure upgrades.   For real-time status notifications, we suggest using Websockets to listen to events 20060/20061. For more information about Websockets please see https://docs.bitfinex.com/v2/docs/ws-general.  For more information on REST Public endpoint example code structure please see https://docs.bitfinex.com/v2/docs/rest-public"
---

**Response Details**

Fields | Type | Description
--- | --- | ---
OPERATIVE  | int  |  1=operative, 0=maintenance


::: callout warning Maintenance mode
When the platform is marked in maintenance mode, bots should stop all trading activity. Cancelling and placing new orders will not be possible during this time.
:::


**Ratelimit**: 15 req/min
