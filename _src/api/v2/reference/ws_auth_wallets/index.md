---
id: ws-auth-wallets
title: "Wallets"
subtitle: "Receive a snapshot and updates for any wallet events on your account."
dataSamples:
  json_snapshot_ws_template0.json: Snapshot ('ws') template
  json_update_wu_template0.json: Update ('wu') template
---

Subscribe to the account information channel to keep track of your wallets. The account information channel provides a snapshot and updates on the wallet events in your account. The snapshot is delivered upon subscribing and any changes to your wallets will be provided as updates for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Wallet events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Wallet events will use one of the following abbreviations: 'ws' (wallet snapshot) and 'wu' (wallet update).


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Wallet events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'ws' (wallet snapshot), 'wu' (wallet update)
WALLET_TYPE  |  string  |  Wallet name (exchange, margin, funding)
CURRENCY  |  string  |  Currency (fUSD, etc)
BALANCE  |  float  |  Wallet balance
UNSETTLED_INTEREST | float | Unsettled interest
BALANCE_AVAILABLE  |  float / null  |  Amount not tied up in active orders, positions or funding (null if the value is not fresh enough).
DESCRIPTION | string | Description of the ledger entry
META | json | Provides info on the reason for the wallet update, if available.


::: callout info Important
These messages have gained the ability to send the calculation values (available balance) equal to "null" meaning that the new calculated value is not yet available.

In order to receive those values the user have to actively request for it with a "calc" message.
See [calc input dedicated section](http://docs.bitfinex.com/v2/docs/changelog#section--calc-input-message) for more details.
:::
