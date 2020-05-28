---
id: ws-auth-balance-info
title: "Balance Info"
subtitle: "The Balance Info channel provides data on the total and net assets in your account."
dataSamples:
  json_update_bu_template0.json: Update ('bu') template
---

Subscribe to the account information channel to keep track of your account balance. The account information channel will provide a feed of your balance for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Balance events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Balance update events can be recognised by the 'bu' (balance update) abbreviation.


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Trade events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'te' (trade executed), 'tu' (trade execution update)
AUM  |  float  |  Total Assets Under Management
AUM_NET  |  float  |  Net Assets Under Management (total assets - total liabilities)
