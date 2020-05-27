---
id: rest-public-rankings
title: Leaderboards
subtitle: The leaderboards endpoint allows you to retrieve leaderboard standings for unrealized profit (period delta), unrealized profit (inception), volume, and realized profit.
---

::: callout info Leaderboard Competitions
The [Configs Endpoint](https://dash.readme.io/project/bitfinex/v2/refs/rest-public-conf) can be used to retrieve a list of all competitions shown on our [Leaderboards](https://leaderboard.bitfinex.com/). 

The endpoint can be called like this: [https://api-pub.bitfinex.com/v2/conf/pub:list:competitions](https://api-pub.bitfinex.com/v2/conf/pub:list:competitions)
:::




**Response Details**

Fields | Type | Description
--- | --- | ---
MTS  |  int  | millisecond timestamp
USERNAME | string | Username
RANKING | int | Place on leaderboard
VALUE  |  float  |  Value of volume, unrealized profit, or realized profit
TWITTER_HANDLE | string | Shows the user's Twitter handle (if available)

**Ratelimit**: 90 req/min
