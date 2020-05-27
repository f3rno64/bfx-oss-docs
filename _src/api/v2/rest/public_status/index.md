---
id: rest-public-status
title: Status
subtitle: Endpoint used to receive different types of platform information - currently supports derivatives pair status only.
---

**Stream Fields**

Fields | Type | Description
--- | --- | ---
KEY                                        | string | Requested Key(s)
MTS                        | int | Millisecond timestamp
DERIV_PRICE                         | float | Derivative book mid price.
SPOT_PRICE                         | float | Book mid price of the underlying Bitfinex spot trading pair
MARK_PRICE                         | float | Price based on the BFX Composite Index
INSURANCE_FUND_BALANCE             | float | The balance available to the liquidation engine to absorb losses.
NEXT_FUNDING_EVT_TIMESTAMP_MS                         | int | Millisecond timestamp of next funding event
NEXT_FUNDING_ACCRUED                     | float | Current accrued funding for next 8h period
NEXT_FUNDING_STEP                         | int | Incremental accrual counter
CURRENT_FUNDING                         | float | Funding applied in the current 8h period
OPEN_INTEREST            | float | Total number of outstanding derivative contracts


::: callout info Historical Data
Note: You must use the /hist path param if you wish to access historical data
:::
