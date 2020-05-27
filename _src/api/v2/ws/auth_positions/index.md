---
id: ws-auth-positions
title: Positions
subtitle: Receive a snapshot and updates for any position events on your account.
dataSamples:
  json_snapshot_ps.json: Snapshot ('ps')
  json_snapshot_ps.json: Snapshot ('ps')
  json_update_pn_pu_pc.json: Update ('pn', 'pu', 'pc')
  json_update_pn_pu_pc.json: Update ('pn', 'pu', 'pc')
---

Subscribe to the account information channel to keep track of your positions. The account information channel provides a snapshot and updates on the positions in your account. The snapshot is delivered upon subscribing and any changes to your positions will be provided as updates for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Position events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Positions events will use one of the following abbreviations: 'ps' (positions snapshot), 'pn' (position new), 'pu' (position update), and 'pc' (position close).


**Stream Fields**

Term | Type | Description
--|--|--
CHAN_ID | int | Identification number for the channel subscribtion. Position events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'ps' (position snapshot), 'pn' (position new), 'pu' (position update), 'pc' (position close)
SYMBOL | string | Pair (tBTCUSD, …).
STATUS | string | Status (ACTIVE, CLOSED).
±AMOUNT | float | Size of the position. Positive values means a long position, negative values means a short position. 0 means position closed.
BASE_PRICE | float | The price at which you entered your position.
MARGIN_FUNDING | float | The amount of funding being used for this position.
MARGIN_FUNDING_TYPE | int | 0 for daily, 1 for term.
PL | float | Profit & Loss
PL_PERC | float | Profit & Loss Percentage
PRICE_LIQ | float | Liquidation price
LEVERAGE | float | Beta value
POSITION_ID | int | Position ID
MTS_CREATE| int | Millisecond timestamp of creation
MTS_UPDATE| int | Millisecond timestamp of update
TYPE| int | Identifies the type of position, 0 = Margin position, 1 = Derivatives position
COLLATERAL | float | The amount of collateral applied to the open position
COLLATERAL_MIN | float | The minimum amount of collateral required for the position
META | json string | Additional meta information about the position


::: callout info NOTE
These messages have gained the ability to send the calculation values (liquidation price) equal to "null" meaning that the new calculated value is not yet available.

In order to receive those values the user have to actively request for it with a "calc" message.
See [calc input dedicated section](http://docs.bitfinex.com/v2/docs/changelog#section--calc-input-message) for more details.
:::
