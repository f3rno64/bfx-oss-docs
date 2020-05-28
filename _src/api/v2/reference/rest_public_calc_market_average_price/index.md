---
id: rest-public-calc-market-average-price
title: "Market Average Price"
subtitle: "Calculate the average execution price for Trading or rate for Margin funding."
---

**Stream Fields**

Fields | Type | Description
--- | --- | ---
PRICE_AVG | float | Average price for amount bought or sold given the current order book (Trading only)
AMOUNT| float | Amount traded or taken/provided in funding
RATE_AVG | float | Average rate for amount taken or provided given the current order book (Funding only)

**Ratelimit**: 20 req/min
