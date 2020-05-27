---
id: ws-auth-trades
title: Trades
subtitle: Receive updates for any trade events on your account.
dataSamples:
  json_update_te.json: Update (te)
  json_update_te.json: Update (te)
  json_update_tu.json: Update (tu)
  json_update_tu.json: Update (tu)
---

Subscribe to the account information channel to keep track of your trades. The account information channel will provide a feed of your trades for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Trade events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Trade events will use one of the following abbreviations: 'te' (trade executed) and 'tu' (trade execution update). The 'te' message is sent when a trade is executed while the 'tu' message is sent shortly after containing the trade id (ID) and additional updated fields.


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Trade events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'te' (trade executed), 'tu' (trade execution update)
ID  |  integer  |  Trade database id
CID | integer | Client Order ID
SYMBOL  |  string  |  Symbol (tBTCUSD, …)
MTS_CREATE  |  integer  |  Execution timestamp
ORDER_ID  |  integer  |  Order id
EXEC_AMOUNT  |  float  |  Positive means buy, negative means sell
EXEC_PRICE  |  float  |  Execution price
ORDER_TYPE  |  string  |  Order type
ORDER_PRICE  |  float  |  Order price
MAKER  |  int  |  1 if true, -1 if false
FEE  |  float  |  Fee ('tu' only)
FEE_CURRENCY  |  string  |  Fee currency ('tu' only)
