---
id: rest-public-ticker
title: "Ticker"
subtitle: "The ticker is a high level overview of the state of the market. It shows you the current best bid and ask, as well as the last trade price. It also includes information such as daily volume and how much the price has moved over the last day."
---

**Response Details**

Key	|Type	|Description
--- |---|---
mid	| [price] |	(bid + ask) / 2
bid | [price] | Innermost bid
ask	| [price] |	Innermost ask
last_price |	[price] |	The price at which the last order executed
low	| [price]|	Lowest trade price of the last 24 hours
high	|[price]|	Highest trade price of the last 24 hours
volume	|[price]	|Trading volume of the last 24 hours
timestamp |	[time]|	The timestamp at which this information was valid


**Ratelimit**: 20 req/min
