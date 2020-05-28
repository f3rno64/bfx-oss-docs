---
id: rest-public-fundingbook
title: "Fundingbook"
subtitle: "Get the full margin funding book"
---

**Request Details**

Key  |  Required  |  Type  |  Default  |  Description
--|--|--|--|--
limit_bids  |  false  |  [int]  |  50  |  Limit the number of funding bids returned. May be 0 in which case the array of bids is empty
limit_asks  |  false  |  [int]  |  50  |  Limit the number of funding offers returned. May be 0 in which case the array of asks is empty

** Response Details **

Key  |  Type  |  Description
--  |  --  |  --
bids  |  [array of funding bids]  |
rate  |  [rate in % per 365 days] 	  |
amount  |  [decimal]  |
period  |  [days]  |  Minimum period for the margin funding contract
timestamp  |  [time]  |
frr  |  [yes/no]  |  “Yes” if the offer is at Flash Return Rate, “No” if the offer is at fixed rate
asks  |  [array of funding offers]  |
rate  |  [rate in % per 365 days]  |
amount  |  [decimal]  |
period  |  [days]  |  Maximum period for the funding contract
timestamp  |  [time]  |
frr  |  [yes/no]  |  “Yes” if the offer is at Flash Return Rate, “No” if the offer is at fixed rate


**Ratelimit**: 15 req/min
