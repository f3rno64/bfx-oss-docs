---
id: rest-auth-position-claim
title: "Claim Position"
subtitle: "The claim feature allows the use of funds you have in your Margin Wallet to settle a leveraged position as an exchange buy or sale. Claiming some or all of a position requires that you have enough partially realized P/L (you've reduced the position at a profit) and/or funds (BTC or USD) in your Margin Wallet (net of any outstanding financing charges) to satisfy some or all of the outstanding financing associated with your position."
---

**Response Fields**

Term | Type | Description
-- | -- | --
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('on-req', 'oc-req', 'uca', 'fon-req', 'foc-req', 'pm-req')
MESSAGE_ID  |  int  |  unique ID of the message
SYMBOL | string | Pair (tBTCUSD, …).
POSITION_STATUS | string | Status (ACTIVE, CLOSED).
±AMOUNT | float | Size of the position. Positive values means a long position, negative values means a short position.
BASE_PRICE | float | Base price of the position. (Average traded price of the previous orders of the position)
MARGIN_FUNDING | float | The amount of funding being used for this position.
MARGIN_FUNDING_TYPE | int | 0 for daily, 1 for term.
POSITION_ID | int | position identifier
MTS_CREATE | time | Timestamp of creation (millis)
MTS_UPDATE | time | Timestamp of last update (millis)
POS_TYPE | int | Type of Position (0 for margin, 1 for deriv)
COLLATERAL | str | Collateral
MIN_COLLATERAL | str | Min Collateral Required
META | str | Meta data about the position claim
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification


::: callout info Position ID
Position ID retrievable via https://docs.bitfinex.com/v2/reference#rest-auth-positions
:::
