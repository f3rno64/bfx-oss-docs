---
id: rest-public-lends
title: "Lends"
subtitle: "Get a list of the most recent funding data for the given currency: total amount provided and Flash Return Rate (in % by 365 days) over time."
---

** Request Details **

Key  |  Required  |  Type  |  Default  |  Description
--|--|--|--|--
timestamp  |  false  |  [time]  |    |  Only show data at or after this timestamp
limit_lends  |  false  |  [int]  |  50  |  Limit the amount of funding data returned. Must be >= 1


** Response Details **

Key  |  Type  |  Description
--|--|--
rate  |  [decimal, % by 365 days]  |  Average rate of total funding received at fixed rates, ie past Flash Return Rate annualized
amount_lent  |  [decimal]  |  Total amount of open margin funding in the given currency
amount_used  |  [decimal]  |  Total amount of open margin funding used in a margin position in the given currency
timestamp  |  [time]  |


**Ratelimit**: 30 req/min
