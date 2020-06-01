---
title: "reference"
menuTitle: "reference"
---
::: api-docs-index
[[toc]]
:::

<a name=".bfxapi"></a>
## bfxapi

This module is used to interact with the bitfinex api

<a name=".bfxapi.models"></a>
## bfxapi.models

This module contains a group of different models which
are used to define data types

<a name=".bfxapi.models.transfer"></a>
## bfxapi.models.transfer

Module used to describe a transfer object

<a name=".bfxapi.models.transfer.TransferModel"></a>
### TransferModel

```python
class TransferModel()
```

Enum used to index the location of each value in a raw array

<a name=".bfxapi.models.transfer.Transfer"></a>
### Transfer

```python
class Transfer():
  Transfer(mts, wallet_from, wallet_to, currency_from, currency_to, amount)
```

MTS	int	Millisecond Time Stamp of the update
WALLET_FROM string	Wallet name (exchange, margin, funding)
WALLET_TO string	Wallet name (exchange, margin, funding)
CURRENCY_FROM 	string Currency (BTC, etc)
CURRENCY_TO	 string Currency (BTC, etc)
AMOUNT string  Amount of funds to transfer

<a name=".bfxapi.models.transfer.Transfer.from_raw_transfer"></a>
#### from\_raw\_transfer

```python
  @staticmethod
  from_raw_transfer(raw_transfer)
```

Parse a raw transfer object into a Transfer object

**Returns**: `Transfer`
<a name=".bfxapi.models.transfer.Transfer.__str__"></a>
#### \_\_str\_\_

```python
  __str__()
```

Allow us to print the Transfer object in a pretty format

<a name=".bfxapi.models.notification"></a>
## bfxapi.models.notification

Module used to describe all of the different notification data types

<a name=".bfxapi.models.notification.NotificationModal"></a>
### NotificationModal

```python
class NotificationModal()
```

Enum used index the different values in a raw order array

<a name=".bfxapi.models.notification.NotificationError"></a>
### NotificationError

```python
class NotificationError()
```

Enum used to hold the error response statuses

<a name=".bfxapi.models.notification.NotificationTypes"></a>
### NotificationTypes

```python
class NotificationTypes()
```

Enum used to hold the different notification types

<a name=".bfxapi.models.notification.Notification"></a>
### Notification

```python
class Notification():
  Notification(mts, notify_type, message_id, notify_info, code, status, text)
```

MTS	int	Millisecond Time Stamp of the update
TYPE string	Purpose of notification ('on-req', 'oc-req', 'uca', 'fon-req', 'foc-req')
MESSAGE_ID	int	unique ID of the message
NOTIFY_INFO	array/object	A message containing information regarding the notification
CODE null or integer	Work in progress
STATUS string	Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT string	Text of the notification

<a name=".bfxapi.models.notification.Notification.is_success"></a>
#### is\_success

```python
  is_success()
```

Check if the notification status was a success.

**Returns**: `bool: True if is success else False`
<a name=".bfxapi.models.notification.Notification.from_raw_notification"></a>
#### from\_raw\_notification

```python
  @staticmethod
  from_raw_notification(raw_notification)
```

Parse a raw notification object into an Order object

**Returns**: `Notification`
<a name=".bfxapi.models.notification.Notification.__str__"></a>
#### \_\_str\_\_

```python
  __str__()
```

Allow us to print the Notification object in a pretty format

<a name=".bfxapi.models.order"></a>
## bfxapi.models.order

Module used to describe all of the different order data types

<a name=".bfxapi.models.order.OrderType"></a>
### OrderType

```python
class OrderType()
```

Enum used to describe all of the different order types available for use

<a name=".bfxapi.models.order.OrderSide"></a>
### OrderSide

```python
class OrderSide()
```

Enum used to describe the different directions of an order

<a name=".bfxapi.models.order.OrderClosedModel"></a>
### OrderClosedModel

```python
class OrderClosedModel()
```

Enum used to index the different values in a raw order array

<a name=".bfxapi.models.order.OrderFlags"></a>
### OrderFlags

```python
class OrderFlags()
```

Enum used to explain the different values that can be passed in
as flags

<a name=".bfxapi.models.order.now_in_mills"></a>
#### now\_in\_mills

```python
now_in_mills()
```

Gets the current time in milliseconds

<a name=".bfxapi.models.order.Order"></a>
### Order

```python
class Order():
  Order(oid, gid, cid, symbol, mts_create, mts_update, amount, amount_orig, o_type, typePrev, flags, status, price, price_avg, price_trailing, price_aux_limit, notfiy, place_id, meta)
```

ID	int64	Order ID
GID	int	Group ID
CID	int	Client Order ID
SYMBOL	string	Pair (tBTCUSD, ...)
MTS_CREATE	int	Millisecond timestamp of creation
MTS_UPDATE	int	Millisecond timestamp of update
AMOUNT	float	Positive means buy, negative means sell.
AMOUNT_ORIG	float	Original amount
TYPE	string	The type of the order: LIMIT, MARKET, STOP, TRAILING STOP,
  EXCHANGE MARKET, EXCHANGE LIMIT, EXCHANGE STOP, EXCHANGE TRAILING STOP, FOK, EXCHANGE FOK.
TYPE_PREV	string	Previous order type
FLAGS	int	Upcoming Params Object (stay tuned)
ORDER_STATUS	string	Order Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
PRICE	float	Price
PRICE_AVG	float	Average price
PRICE_TRAILING	float	The trailing price
PRICE_AUX_LIMIT	float	Auxiliary Limit price (for STOP LIMIT)
HIDDEN	int	1 if Hidden, 0 if not hidden
PLACED_ID	int	If another order caused this order to be placed (OCO) this will be that other
order's ID

<a name=".bfxapi.models.order.Order.from_raw_order"></a>
#### from\_raw\_order

```python
  @staticmethod
  from_raw_order(raw_order)
```

Parse a raw order object into an Order object

**Returns**: `Order`
<a name=".bfxapi.models.order.Order.from_raw_order_snapshot"></a>
#### from\_raw\_order\_snapshot

```python
  @staticmethod
  from_raw_order_snapshot(raw_order_snapshot)
```

Parse a raw order snapshot array into an array of order objects

**Returns**: `Orders: array of order objects`
<a name=".bfxapi.models.order.Order.set_confirmed"></a>
#### set\_confirmed

```python
  set_confirmed()
```

Set the state of the order to be confirmed

<a name=".bfxapi.models.order.Order.set_open_state"></a>
#### set\_open\_state

```python
  set_open_state(is_open)
```

Set the is_open state of the order

<a name=".bfxapi.models.order.Order.is_open"></a>
#### is\_open

```python
  is_open()
```

Check if the order is still open

**Returns**: `bool: Ture if order open else False`
<a name=".bfxapi.models.order.Order.is_pending"></a>
#### is\_pending

```python
  is_pending()
```

Check if the state of the order is still pending

**Returns**: `bool: True if is pending else False`
<a name=".bfxapi.models.order.Order.is_confirmed"></a>
#### is\_confirmed

```python
  is_confirmed()
```

Check if the order has been confirmed by the bitfinex api

**Returns**: `bool: True if has been confirmed else False`
<a name=".bfxapi.models.order.Order.__str__"></a>
#### \_\_str\_\_

```python
  __str__()
```

Allow us to print the Order object in a pretty format

<a name=".bfxapi.models.wallet"></a>
## bfxapi.models.wallet

Module used to describe all of the different data types

<a name=".bfxapi.models.wallet.Wallet"></a>
### Wallet

```python
class Wallet():
  Wallet(wType, currency, balance, unsettled_interest)
```

Stores data relevant to a users wallet such as balance and
currency

<a name=".bfxapi.models.wallet.Wallet.set_balance"></a>
#### set\_balance

```python
  set_balance(data)
```

Set the balance of the wallet

<a name=".bfxapi.models.wallet.Wallet.set_unsettled_interest"></a>
#### set\_unsettled\_interest

```python
  set_unsettled_interest(data)
```

Set the unsettled interest of the wallet

<a name=".bfxapi.models.subscription"></a>
## bfxapi.models.subscription

Module used to describe all of the different data types

<a name=".bfxapi.models.subscription.generate_sub_id"></a>
#### generate\_sub\_id

```python
generate_sub_id()
```

Generates a unique id in the form of 12345566-12334556

<a name=".bfxapi.models.subscription.Subscription"></a>
### Subscription

```python
class Subscription():
  Subscription(socket, channel_name, symbol, key=None, timeframe=None, **kwargs)
```

Object used to represent an individual subscription to the websocket.
This class also exposes certain functions which helps to manage the subscription
such as unsibscribe and subscribe.

<a name=".bfxapi.models.subscription.Subscription.get_key"></a>
#### get\_key

```python
  get_key()
```

Generates a unique key string for the subscription

<a name=".bfxapi.models.subscription.Subscription.confirm_subscription"></a>
#### confirm\_subscription

```python
  confirm_subscription(chan_id)
```

Update the subscription to confirmed state

<a name=".bfxapi.models.subscription.Subscription.unsubscribe"></a>
#### unsubscribe

```python
  async unsubscribe()
```

Send an unsubscription request to the bitfinex socket

<a name=".bfxapi.models.subscription.Subscription.subscribe"></a>
#### subscribe

```python
  async subscribe()
```

Send a subscription request to the bitfinex socket

<a name=".bfxapi.models.subscription.Subscription.confirm_unsubscribe"></a>
#### confirm\_unsubscribe

```python
  confirm_unsubscribe()
```

Update the subscription to unsubscribed state

<a name=".bfxapi.models.subscription.Subscription.is_subscribed"></a>
#### is\_subscribed

```python
  is_subscribed()
```

Check if the subscription is currently subscribed

**Returns**: `bool: True if subscribed else False`
<a name=".bfxapi.models.funding_ticker"></a>
## bfxapi.models.funding\_ticker

Module used to describe all of the different data types

<a name=".bfxapi.models.funding_ticker.FundingTickerModel"></a>
### FundingTickerModel

```python
class FundingTickerModel()
```

Enum used to index the different values in a raw funding ticker array

<a name=".bfxapi.models.funding_ticker.FundingTicker"></a>
### FundingTicker

```python
class FundingTicker():
  FundingTicker(pair, frr, bid, bid_period, bid_size, ask, ask_period, ask_size, daily_change, daily_change_perc, last_price, volume, high, low, frr_amount_avail)
```

FRR	        float	Flash Return Rate - average of all fixed rate funding over the last hour
            (funding tickers only)
BID	        float	Price of last highest bid
BID_PERIOD	int	Bid period covered in days (funding tickers only)
BID_SIZE	float	Sum of the 25 highest bid sizes
ASK	float	Price of last lowest ask
ASK_PERIOD	int	Ask period covered in days (funding tickers only)
ASK_SIZE	float	Sum of the 25 lowest ask sizes
DAILY_CHANGE	float	Amount that the last price has changed since yesterday
DAILY_CHANGE_RELATIVE	float	Relative price change since yesterday
                        (*100 for percentage change)
LAST_PRICE	float	Price of the last trade
VOLUME	    float	Daily volume
HIGH	    float	Daily high
LOW	        float	Daily low
FRR_AMOUNT_AVAILABLE	float	The amount of funding that is available at the
            Flash Return Rate (funding tickers only)

<a name=".bfxapi.models.funding_ticker.FundingTicker.from_raw_ticker"></a>
#### from\_raw\_ticker

```python
  @staticmethod
  from_raw_ticker(raw_ticker, pair)
```

Generate a Ticker object from a raw ticker array

<a name=".bfxapi.models.funding_loan"></a>
## bfxapi.models.funding\_loan

Module used to describe all of the different data types

<a name=".bfxapi.models.funding_loan.FundingLoanModel"></a>
### FundingLoanModel

```python
class FundingLoanModel()
```

Enum used to index the location of each value in a raw array

<a name=".bfxapi.models.funding_loan.FundingLoan"></a>
### FundingLoan

```python
class FundingLoan()
```

ID	integer	Offer ID
SYMBOL	string	The currency of the offer (fUSD, etc)
SIDE	string	"Lend" or "Loan"
MTS_CREATE	int	Millisecond Time Stamp when the offer was created
MTS_UPDATE	int	Millisecond Time Stamp when the offer was created
AMOUNT	float	Amount the offer is for
FLAGS	object	future params object (stay tuned)
STATUS	string	Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE	float	Rate of the offer
PERIOD	int	Period of the offer
MTS_OPENING	int	Millisecond Time Stamp for when the loan was opened
MTS_LAST_PAYOUT	int	Millisecond Time Stamp for when the last payout was made
NOTIFY	int	0 if false, 1 if true
HIDDEN	int	0 if false, 1 if true
RENEW	int	0 if false, 1 if true
NO_CLOSE	int	If funding will be returned when position is closed. 0 if false, 1 if true

<a name=".bfxapi.models.funding_loan.FundingLoan.__init__"></a>
#### \_\_init\_\_

```python
  __init__(fid, symbol, side, mts_create, mts_update, amount, flags, status, rate, period, mts_opening, mts_last_payout, notify, hidden, renew, no_close)
```

pylint: disable=invalid-name

<a name=".bfxapi.models.funding_loan.FundingLoan.from_raw_loan"></a>
#### from\_raw\_loan

```python
  @staticmethod
  from_raw_loan(raw_loan)
```

Parse a raw funding load into a FundingLoan object

**Returns**: `FundingLoan`
<a name=".bfxapi.models.funding_credit"></a>
## bfxapi.models.funding\_credit

Module used to describe all of the different data types

<a name=".bfxapi.models.funding_credit.FundingCreditModel"></a>
### FundingCreditModel

```python
class FundingCreditModel()
```

Enum used to index the location of each value in a raw array

<a name=".bfxapi.models.funding_credit.FundingCredit"></a>
### FundingCredit

```python
class FundingCredit()
```

ID	integer	Offer ID
SYMBOL	string	The currency of the offer (fUSD, etc)
SIDE	string	"Lend" or "Loan"
MTS_CREATE	int	Millisecond Time Stamp when the offer was created
MSG_UPDATE	int	Millisecond Time Stamp when the offer was updated
AMOUNT	float	Amount the offer is for
FLAGS	object	future params object (stay tuned)
STATUS	string	Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE	float	Rate of the offer
PERIOD	int	Period of the offer
MTS_OPENING	int	Millisecond Time Stamp when funding opened
MTS_LAST_PAYOUT	int	Millisecond Time Stamp when last payout received
NOTIFY	int	0 if false, 1 if true
HIDDEN	int	0 if false, 1 if true
RENEW	int	0 if false, 1 if true
NO_CLOSE	int	0 if false, 1 if true Whether the funding will be closed when the
          position is closed
POSITION_PAIR	string	Pair of the position that the funding was used for

<a name=".bfxapi.models.funding_credit.FundingCredit.__init__"></a>
#### \_\_init\_\_

```python
  __init__(fid, symbol, side, mts_create, mts_update, amount, flags, status, rate, period, mts_opening, mts_last_payout, notify, hidden, renew, no_close, position_pair)
```

pylint: disable=invalid-name

<a name=".bfxapi.models.funding_credit.FundingCredit.from_raw_credit"></a>
#### from\_raw\_credit

```python
  @staticmethod
  from_raw_credit(raw_credit)
```

Parse a raw credit object into a FundingCredit object

**Returns**: `FundingCredit`
<a name=".bfxapi.models.withdraw"></a>
## bfxapi.models.withdraw

Module used to describe a withdraw object

<a name=".bfxapi.models.withdraw.WithdrawModel"></a>
### WithdrawModel

```python
class WithdrawModel()
```

Enum used to index the location of each value in a raw array

<a name=".bfxapi.models.withdraw.Withdraw"></a>
### Withdraw

```python
class Withdraw():
  Withdraw(w_id, method, wallet, amount, fee=0)
```

[13063236, None, 'tetheruse', None, 'exchange', 5, None, None, 0.00135]

MTS	int	Millisecond Time Stamp of the update
WALLET_FROM string	Wallet name (exchange, margin, funding)
WALLET_TO string	Wallet name (exchange, margin, funding)
CURRENCY_FROM 	string Currency (BTC, etc)
CURRENCY_TO	 string Currency (BTC, etc)
AMOUNT string  Amount of funds to transfer

<a name=".bfxapi.models.withdraw.Withdraw.from_raw_withdraw"></a>
#### from\_raw\_withdraw

```python
  @staticmethod
  from_raw_withdraw(raw_withdraw)
```

Parse a raw withdraw object into a Withdraw object

**Returns**: `Withdraw`
<a name=".bfxapi.models.withdraw.Withdraw.__str__"></a>
#### \_\_str\_\_

```python
  __str__()
```

Allow us to print the Withdraw object in a pretty format

<a name=".bfxapi.models.funding_offer"></a>
## bfxapi.models.funding\_offer

Module used to describe all of the different data types

<a name=".bfxapi.models.funding_offer.FundingOfferTypes"></a>
### FundingOfferTypes

```python
class FundingOfferTypes()
```

Enum used to define the different funding offer types

<a name=".bfxapi.models.funding_offer.FundingOfferModel"></a>
### FundingOfferModel

```python
class FundingOfferModel()
```

Enum used to index the location of each value in a raw array

<a name=".bfxapi.models.funding_offer.FundingOffer"></a>
### FundingOffer

```python
class FundingOffer()
```

ID	integer	Offer ID
SYMBOL	string	The currency of the offer (fUSD, etc)
MTS_CREATED	int	Millisecond Time Stamp when the offer was created
MSG_UPDATED	int	Millisecond Time Stamp when the offer was created
AMOUNT	float	Amount the offer is for
AMOUNT_ORIG	float	Amount the offer was entered with originally
TYPE	string	"lend" or "loan"
FLAGS	object	future params object (stay tuned)
STATUS	string	Offer Status: ACTIVE, EXECUTED, PARTIALLY FILLED, CANCELED
RATE	float	Rate of the offer
PERIOD	int	Period of the offer
NOTIFY	int	0 if false, 1 if true
HIDDEN	int	0 if false, 1 if true
RENEW	int	0 if false, 1 if true

<a name=".bfxapi.models.funding_offer.FundingOffer.__init__"></a>
#### \_\_init\_\_

```python
  __init__(fid, symbol, mts_create, mts_updated, amount, amount_orig, f_type, flags, status, rate, period, notify, hidden, renew)
```

pylint: disable=invalid-name

<a name=".bfxapi.models.funding_offer.FundingOffer.from_raw_offer"></a>
#### from\_raw\_offer

```python
  @staticmethod
  from_raw_offer(raw_offer)
```

Parse a raw funding offer into a RawFunding object

**Returns**: `FundingOffer`
<a name=".bfxapi.models.trade"></a>
## bfxapi.models.trade

Module used to describe all of the different data types

<a name=".bfxapi.models.trade.TradeModel"></a>
### TradeModel

```python
class TradeModel()
```

Enum used to index the different values in a raw trade array

<a name=".bfxapi.models.trade.Trade"></a>
### Trade

```python
class Trade()
```

ID	integer	Trade database id
PAIR	string	Pair (BTCUSD, ...)
MTS_CREATE	integer	Execution timestamp
ORDER_ID	integer	Order id
EXEC_AMOUNT	float	Positive means buy, negative means sell
EXEC_PRICE	float	Execution price
ORDER_TYPE	string	Order type
ORDER_PRICE	float	Order price
MAKER	int	1 if true, 0 if false
FEE	float	Fee
FEE_CURRENCY	string	Fee currency

<a name=".bfxapi.models.trade.Trade.__init__"></a>
#### \_\_init\_\_

```python
  __init__(tid, pair, mts_create, order_id, amount, price, order_type, order_price, maker, fee, fee_currency)
```

pylint: disable=invalid-name

<a name=".bfxapi.models.trade.Trade.from_raw_rest_trade"></a>
#### from\_raw\_rest\_trade

```python
  @staticmethod
  from_raw_rest_trade(raw_trade)
```

Generate a Trade object from a raw trade array

<a name=".bfxapi.models.deposit_address"></a>
## bfxapi.models.deposit\_address

Module used to describe a DepositAddress object

<a name=".bfxapi.models.deposit_address.DepositModel"></a>
### DepositModel

```python
class DepositModel()
```

Enum used to index the location of each value in a raw array

<a name=".bfxapi.models.deposit_address.DepositAddress"></a>
### DepositAddress

```python
class DepositAddress():
  DepositAddress(method, currency, address)
```

[None, 'BITCOIN', 'BTC', None, '38zsUkv8q2aiXK9qsZVwepXjWeh3jKvvZw']

METHOD string  Protocol used for funds transfer
SYMBOL string  Currency symbol
ADDRESS string  Deposit address for funds transfer

<a name=".bfxapi.models.deposit_address.DepositAddress.from_raw_deposit_address"></a>
#### from\_raw\_deposit\_address

```python
  @staticmethod
  from_raw_deposit_address(raw_add)
```

Parse a raw deposit object into a DepositAddress object

**Returns**: `DepositAddress`
<a name=".bfxapi.models.deposit_address.DepositAddress.__str__"></a>
#### \_\_str\_\_

```python
  __str__()
```

Allow us to print the Transfer object in a pretty format

<a name=".bfxapi.models.position"></a>
## bfxapi.models.position

Module used to describe all of the different data types

<a name=".bfxapi.models.position.PositionModel"></a>
### PositionModel

```python
class PositionModel()
```

Enum used to index the different values in a raw position array

<a name=".bfxapi.models.position.Position"></a>
### Position

```python
class Position():
  Position(symbol, status, amount, b_price, m_funding, m_funding_type, profit_loss, profit_loss_perc, l_price, lev, pid, mts_create, mts_update, p_type, collateral, collateral_min, meta)
```

SYMBOL	        string	Pair (tBTCUSD, …).
STATUS	        string	Status (ACTIVE, CLOSED).
±AMOUNT	        float	Size of the position. A positive value indicates a
                long position; a negative value indicates a short position.
BASE_PRICE	    float	Base price of the position. (Average traded price
                of the previous orders of the position)
MARGIN_FUNDING	float	The amount of funding being used for this position.
MARGIN_FUNDING_TYPE	int	0 for daily, 1 for term.
PL	            float	Profit & Loss
PL_PERC	        float	Profit & Loss Percentage
PRICE_LIQ	    float	Liquidation price
LEVERAGE	    float	Leverage used for the position
POSITION_ID	    int64	Position ID
MTS_CREATE	    int	Millisecond timestamp of creation
MTS_UPDATE	    int	Millisecond timestamp of update
TYPE	        int	Identifies the type of position, 0 = Margin position,
                1 = Derivatives position
COLLATERAL	    float	The amount of collateral applied to the open position
COLLATERAL_MIN	float	The minimum amount of collateral required for the position
META	        json string	Additional meta information about the position

<a name=".bfxapi.models.position.Position.from_raw_rest_position"></a>
#### from\_raw\_rest\_position

```python
  @staticmethod
  from_raw_rest_position(raw_position)
```

Generate a Position object from a raw position array

**Returns**: `Position`
<a name=".bfxapi.models.position.Position.__str__"></a>
#### \_\_str\_\_

```python
  __str__()
```

Allow us to print the Trade object in a pretty format

<a name=".bfxapi.models.ticker"></a>
## bfxapi.models.ticker

Module used to describe all of the different data types

<a name=".bfxapi.models.ticker.TickerModel"></a>
### TickerModel

```python
class TickerModel()
```

Enum used to index the different values in a raw ticker array

<a name=".bfxapi.models.ticker.Ticker"></a>
### Ticker

```python
class Ticker():
  Ticker(pair, bid, bid_size, ask, ask_size, daily_change, daily_change_rel, last_price, volume, high, low)
```

BID	float	    Price of last highest bid
BID_SIZE	    float	Sum of the 25 highest bid sizes
ASK	float	    Price of last lowest ask
ASK_SIZE	    float	Sum of the 25 lowest ask sizes
DAILY_CHANGE	float	Amount that the last price has changed since yesterday
DAILY_CHANGE_PERCENT	float	Relative price change since yesterday (*100 for percentage change)
LAST_PRICE	    float	Price of the last trade
VOLUME	        float	Daily volume
HIGH	        float	Daily high
LOW	            float	Daily low

<a name=".bfxapi.models.ticker.Ticker.from_raw_ticker"></a>
#### from\_raw\_ticker

```python
  @staticmethod
  from_raw_ticker(raw_ticker, pair)
```

Generate a Ticker object from a raw ticker array

<a name=".bfxapi.models.order_book"></a>
## bfxapi.models.order\_book

Module used to describe all of the different data types

<a name=".bfxapi.models.order_book.OrderBook"></a>
### OrderBook

```python
class OrderBook():
  OrderBook()
```

Object used to store the state of the orderbook. This can then be used
in one of two ways. To get the checksum of the book or so get the bids/asks
of the book

<a name=".bfxapi.models.order_book.OrderBook.get_bids"></a>
#### get\_bids

```python
  get_bids()
```

Get all of the bids from the orderbook

**Returns**: `bids Array`
<a name=".bfxapi.models.order_book.OrderBook.get_asks"></a>
#### get\_asks

```python
  get_asks()
```

Get all of the asks from the orderbook

**Returns**: `asks Array`
<a name=".bfxapi.models.order_book.OrderBook.update_from_snapshot"></a>
#### update\_from\_snapshot

```python
  update_from_snapshot(data, orig_raw_msg)
```

Update the orderbook with a raw orderbook snapshot

<a name=".bfxapi.models.order_book.OrderBook.update_with"></a>
#### update\_with

```python
  update_with(order, orig_raw_msg)
```

Update the orderbook with a single update

<a name=".bfxapi.models.order_book.OrderBook.checksum"></a>
#### checksum

```python
  checksum()
```

Generate a CRC32 checksum of the orderbook

<a name=".bfxapi.client"></a>
## bfxapi.client

This module exposes the core bitfinex clients which includes both
a websocket client and a rest interface client

<a name=".bfxapi.client.Client"></a>
### Client

```python
class Client():
  Client(API_KEY=None, API_SECRET=None, rest_host=REST_HOST, ws_host=WS_HOST, create_event_emitter=None, logLevel='INFO', dead_man_switch=False, ws_capacity=25, channel_filter=[], *args, **kwargs)
```

The bfx client exposes rest and websocket objects

<a name=".bfxapi.utils"></a>
## bfxapi.utils

<a name=".bfxapi.utils.auth"></a>
## bfxapi.utils.auth

This module is used to house all of the functions which are used
to handle the http authentication of the client

<a name=".bfxapi.utils.auth.generate_auth_payload"></a>
#### generate\_auth\_payload

```python
generate_auth_payload(API_KEY, API_SECRET)
```

Generate a signed payload

**Returns**: `json Oject headers`
<a name=".bfxapi.utils.auth.generate_auth_headers"></a>
#### generate\_auth\_headers

```python
generate_auth_headers(API_KEY, API_SECRET, path, body)
```

Generate headers for a signed payload

<a name=".bfxapi.utils.testing_tools"></a>
## bfxapi.utils.testing\_tools

<a name=".bfxapi.utils.decimal"></a>
## bfxapi.utils.decimal

<a name=".bfxapi.utils.custom_logger"></a>
## bfxapi.utils.custom\_logger

Module used to describe all of the different data types

<a name=".bfxapi.utils.custom_logger.formatter_message"></a>
#### formatter\_message

```python
formatter_message(message, use_color=True)
```

Syntax highlight certain keywords

<a name=".bfxapi.utils.custom_logger.format_word"></a>
#### format\_word

```python
format_word(message, word, color_seq, bold=False, underline=False)
```

Surround the fiven word with a sequence

<a name=".bfxapi.utils.custom_logger.Formatter"></a>
### Formatter

```python
class Formatter(logging.Formatter):
  Formatter(msg, use_color=True)
```

This Formatted simply colors in the levelname i.e 'INFO', 'DEBUG'

<a name=".bfxapi.utils.custom_logger.Formatter.format"></a>
#### format

```python
  format(record)
```

Format and highlight certain keywords

<a name=".bfxapi.utils.custom_logger.CustomLogger"></a>
### CustomLogger

```python
class CustomLogger(logging.Logger):
  CustomLogger(name, logLevel='DEBUG')
```

This adds extra logging functions such as logger.trade and also
sets the logger to use the custom formatter

<a name=".bfxapi.utils.custom_logger.CustomLogger.trade"></a>
#### trade

```python
  trade(message, *args, **kws)
```

Print a syntax highlighted trade signal

<a name=".bfxapi.tests"></a>
## bfxapi.tests

<a name=".bfxapi.tests.test_ws_orderbook"></a>
## bfxapi.tests.test\_ws\_orderbook

<a name=".bfxapi.tests.test_ws_orders"></a>
## bfxapi.tests.test\_ws\_orders

<a name=".bfxapi.tests.test_ws_capacit"></a>
## bfxapi.tests.test\_ws\_capacit

<a name=".bfxapi.tests.test_ws_subscriptions"></a>
## bfxapi.tests.test\_ws\_subscriptions

<a name=".bfxapi.tests.helpers"></a>
## bfxapi.tests.helpers

<a name=".bfxapi.tests.test_decimal"></a>
## bfxapi.tests.test\_decimal

<a name=".bfxapi.websockets"></a>
## bfxapi.websockets

<a name=".bfxapi.websockets.bfx_websocket"></a>
## bfxapi.websockets.bfx\_websocket

Module used to house the bitfine websocket client

<a name=".bfxapi.websockets.bfx_websocket.Flags"></a>
### Flags

```python
class Flags()
```

Enum used to index the available flags used in the authentication
websocket packet

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket"></a>
### BfxWebsocket

```python
class BfxWebsocket(GenericWebsocket):
  BfxWebsocket(API_KEY=None, API_SECRET=None, host='wss://api-pub.bitfinex.com/ws/2', manageOrderBooks=False, dead_man_switch=False, ws_capacity=25, logLevel='INFO', parse_float=float, channel_filter=[], *args, **kwargs)
```

More complex websocket that heavily relies on the btfxwss module.
This websocket requires authentication and is capable of handling orders.
https://github.com/Crypto-toolbox/btfxwss

### Emitter events:
* `all` (array|Object): listen for all messages coming through
* `connected:` () called when a connection is made
* `disconnected`: () called when a connection is ended (A reconnect attempt may follow)
* `stopped`: () called when max amount of connection retries is met and the socket is closed
* `authenticated` (): called when the websocket passes authentication
* `notification` (Notification): incoming account notification
* `error` (array): error from the websocket
* `order_closed` (Order, Trade): when an order has been closed
* `order_new` (Order, Trade): when an order has been created but not closed. Note: will not be called if order is executed and filled instantly
* `order_confirmed` (Order, Trade): When an order has been submitted and received
* `wallet_snapshot` (array[Wallet]): Initial wallet balances (Fired once)
* `order_snapshot` (array[Order]): Initial open orders (Fired once)
* `positions_snapshot` (array): Initial open positions (Fired once)
* `wallet_update` (Wallet): changes to the balance of wallets
* `status_update` (Object): new platform status info
* `seed_candle` (Object): initial past candle to prime strategy
* `seed_trade` (Object): initial past trade to prime strategy
* `funding_offer_snapshot` (array): opening funding offer balances
* `funding_loan_snapshot` (array): opening funding loan balances
* `funding_credit_snapshot` (array): opening funding credit balances
* `balance_update` (array): when the state of a balance is changed
* `new_trade` (array): a new trade on the market has been executed
* `new_ticker` (Ticker|FundingTicker): a new ticker update has been published
* `new_funding_ticker` (FundingTicker): a new funding ticker update has been published
* `new_trading_ticker` (Ticker): a new trading ticker update has been published
* `trade_update` (array): a trade on the market has been updated
* `new_candle` (array): a new candle has been produced
* `margin_info_updates` (array): new margin information has been broadcasted
* `funding_info_updates` (array): new funding information has been broadcasted
* `order_book_snapshot` (array): initial snapshot of the order book on connection
* `order_book_update` (array): a new order has been placed into the ordebrook
* `subscribed` (Subscription): a new channel has been subscribed to
* `unsubscribed` (Subscription): a channel has been un-subscribed
<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.enable_flag"></a>
#### enable\_flag

```python
  async enable_flag(flag)
```

Enable flag on websocket connection

__Attributes__

* `flag (int)`: int flag value
<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.subscribe_order_book"></a>
#### subscribe\_order\_book

```python
  async subscribe_order_book(symbol)
```

Subscribe to an orderbook data feed

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code></code> | the trading symbol i.e 'tBTCUSD' |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.subscribe_candles"></a>
#### subscribe\_candles

```python
  async subscribe_candles(symbol, timeframe)
```

Subscribe to a candle data feed

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code></code> | the trading symbol i.e 'tBTCUSD' |
| timeframe | <code></code> | resolution of the candle i.e 15m, 1h |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.subscribe_trades"></a>
#### subscribe\_trades

```python
  async subscribe_trades(symbol)
```

Subscribe to a trades data feed

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code></code> | the trading symbol i.e 'tBTCUSD' |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.subscribe_ticker"></a>
#### subscribe\_ticker

```python
  async subscribe_ticker(symbol)
```

Subscribe to a ticker data feed

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code></code> | the trading symbol i.e 'tBTCUSD' |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.subscribe_derivative_status"></a>
#### subscribe\_derivative\_status

```python
  async subscribe_derivative_status(symbol)
```

Subscribe to a status data feed

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code></code> | the trading symbol i.e 'tBTCUSD' |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.subscribe"></a>
#### subscribe

```python
  async subscribe(*args, **kwargs)
```

Subscribe to a new channel

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| channel_name | <code></code> | the name of the channel i.e 'books', 'candles' |
| symbol | <code></code> | the trading symbol i.e 'tBTCUSD' |
| timeframe | <code></code> | sepecifies the data timeframe between each candle (only required for the candles channel) |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.unsubscribe"></a>
#### unsubscribe

```python
  async unsubscribe(*args, **kwargs)
```

Unsubscribe from the channel with the given chanId

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| onComplete | <code></code> | function called when the bitfinex websocket resoponds with a signal that confirms the subscription has been unsubscribed to |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.resubscribe"></a>
#### resubscribe

```python
  async resubscribe(*args, **kwargs)
```

Unsubscribes and then subscribes to the channel with the given Id

This function is mostly used to force the channel to produce a fresh snapshot.

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.unsubscribe_all"></a>
#### unsubscribe\_all

```python
  async unsubscribe_all(*args, **kwargs)
```

Unsubscribe from all channels.

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.resubscribe_all"></a>
#### resubscribe\_all

```python
  async resubscribe_all(*args, **kwargs)
```

Unsubscribe and then subscribe to all channels

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.submit_order"></a>
#### submit\_order

```python
  async submit_order(*args, **kwargs)
```

Submit a new order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| gid | <code></code> | assign the order to a group identifier |
| symbol | <code></code> | the name of the symbol i.e 'tBTCUSD |
| price | <code></code> | the price you want to buy/sell at (must be positive) |
| amount | <code></code> | order size: how much you want to buy/sell, a negative amount indicates a sell order and positive a buy order |
| market_type | <code>Order.Type</code> | please see Order.Type enum amount	decimal string	Positive for buy, Negative for sell |
| hidden | <code></code> | if True, order should be hidden from orderbooks |
| price_trailing | <code></code> | decimal trailing price |
| price_aux_limit | <code></code> | decimal	auxiliary Limit price (only for STOP LIMIT) |
| oco_stop_price | <code></code> | set the oco stop price (requires oco = True) |
| close | <code></code> | if True, close position if position present |
| reduce_only | <code></code> | if True, ensures that the executed order does not flip the opened position |
| post_only | <code></code> | if True, ensures the limit order will be added to the order book and not match with a pre-existing order |
| oco | <code></code> | cancels other order option allows you to place a pair of orders stipulating that if one order is executed fully or partially, then the other is automatically canceled |
| time_in_force | <code></code> | datetime for automatic order cancellation ie. 2020-01-01 10:45:23 |
| leverage | <code></code> | the amount of leverage to apply to the order as an integer |
| onConfirm | <code></code> | function called when the bitfinex websocket receives signal that the order was confirmed |
| onClose | <code></code> | function called when the bitfinex websocket receives signal that the order was closed due to being filled or cancelled |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.update_order"></a>
#### update\_order

```python
  async update_order(*args, **kwargs)
```

Update an existing order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| orderId | <code></code> | the id of the order that you want to update |
| price | <code></code> | the price you want to buy/sell at (must be positive) |
| amount | <code></code> | order size: how much you want to buy/sell, a negative amount indicates a sell order and positive a buy order |
| delta | <code></code> | change of amount |
| price_trailing | <code></code> | decimal trailing price |
| price_aux_limit | <code></code> | decimal	auxiliary Limit price (only for STOP LIMIT) |
| hidden | <code></code> | if True, order should be hidden from orderbooks |
| close | <code></code> | if True, close position if position present |
| reduce_only | <code></code> | if True, ensures that the executed order does not flip the opened position |
| post_only | <code></code> | if True, ensures the limit order will be added to the order book and not match with a pre-existing order |
| time_in_force | <code></code> | datetime for automatic order cancellation ie. 2020-01-01 10:45:23 |
| leverage | <code></code> | the amount of leverage to apply to the order as an integer |
| onConfirm | <code></code> | function called when the bitfinex websocket receives signal that the order was confirmed |
| onClose | <code></code> | function called when the bitfinex websocket receives signal that the order was closed due to being filled or cancelled |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.cancel_order"></a>
#### cancel\_order

```python
  async cancel_order(*args, **kwargs)
```

Cancel an existing open order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| orderId | <code></code> | the id of the order that you want to update |
| onConfirm | <code></code> | function called when the bitfinex websocket receives signal that the order was confirmed |
| onClose | <code></code> | function called when the bitfinex websocket receives signal that the order was closed due to being filled or cancelled |

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.cancel_order_group"></a>
#### cancel\_order\_group

```python
  async cancel_order_group(*args, **kwargs)
```

Cancel a set of orders using a single group id.

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.cancel_all_orders"></a>
#### cancel\_all\_orders

```python
  async cancel_all_orders(*args, **kwargs)
```

Cancel all existing open orders

This function closes all open orders.

<a name=".bfxapi.websockets.bfx_websocket.BfxWebsocket.cancel_order_multi"></a>
#### cancel\_order\_multi

```python
  async cancel_order_multi(*args, **kwargs)
```

Cancel existing open orders as a batch

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| ids | <code></code> | an array of order ids |
| gids | <code></code> | an array of group ids |

<a name=".bfxapi.websockets.wallet_manager"></a>
## bfxapi.websockets.wallet\_manager

Module used to handle wallet updates and data types

<a name=".bfxapi.websockets.wallet_manager.WalletManager"></a>
### WalletManager

```python
class WalletManager():
  WalletManager()
```

This class is used to interact with all of the different wallets

<a name=".bfxapi.websockets.generic_websocket"></a>
## bfxapi.websockets.generic\_websocket

Module used as a interfeace to describe a generick websocket client

<a name=".bfxapi.websockets.generic_websocket.AuthError"></a>
### AuthError

```python
class AuthError(Exception)
```

Thrown whenever there is a problem with the authentication packet

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket"></a>
### GenericWebsocket

```python
class GenericWebsocket():
  GenericWebsocket(host, logLevel='INFO', max_retries=5, create_event_emitter=None)
```

Websocket object used to contain the base functionality of a websocket.
Inlcudes an event emitter and a standard websocket client.

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.run"></a>
#### run

```python
  run()
```

Starte the websocket connection. This functions spawns the initial socket
thread and connection.

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.get_task_executable"></a>
#### get\_task\_executable

```python
  get_task_executable()
```

Get the run indefinitely asyncio task

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.stop"></a>
#### stop

```python
  async stop()
```

Stop all websocket connections

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.remove_all_listeners"></a>
#### remove\_all\_listeners

```python
  remove_all_listeners(event)
```

Remove all listeners from event emitter

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.on"></a>
#### on

```python
  on(event, func=None)
```

Add a new event to the event emitter

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.once"></a>
#### once

```python
  once(event, func=None)
```

Add a new event to only fire once to the event
emitter

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.on_error"></a>
#### on\_error

```python
  async on_error(error)
```

On websocket error print and fire event

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.on_close"></a>
#### on\_close

```python
  async on_close()
```

This is used by the HF data server.

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.on_open"></a>
#### on\_open

```python
  async on_open()
```

On websocket open

<a name=".bfxapi.websockets.generic_websocket.GenericWebsocket.on_message"></a>
#### on\_message

```python
  async on_message(message)
```

On websocket message

<a name=".bfxapi.websockets.subscription_manager"></a>
## bfxapi.websockets.subscription\_manager

Module used to house all of the functions/classes used to handle
subscriptions

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.subscribe"></a>
#### subscribe

```python
  async subscribe(channel_name, symbol, key=None, timeframe=None, **kwargs)
```

Subscribe to a new channel

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| channel_name | <code></code> | the name of the channel i.e 'books', 'candles' |
| symbol | <code></code> | the trading symbol i.e 'tBTCUSD' |
| timeframe | <code></code> | sepecifies the data timeframe between each candle (only required for the candles channel) |

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.set_unsubscribed_by_socket"></a>
#### set\_unsubscribed\_by\_socket

```python
  set_unsubscribed_by_socket(socket_id)
```

Sets all f the subscriptions ot state 'unsubscribed'

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.set_all_unsubscribed"></a>
#### set\_all\_unsubscribed

```python
  set_all_unsubscribed()
```

Sets all f the subscriptions ot state 'unsubscribed'

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.unsubscribe"></a>
#### unsubscribe

```python
  async unsubscribe(chan_id, onComplete=None)
```

Unsubscribe from the channel with the given chanId

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| onComplete | <code></code> | function called when the bitfinex websocket resoponds with a signal that confirms the subscription has been unsubscribed to |

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.resubscribe"></a>
#### resubscribe

```python
  async resubscribe(chan_id)
```

Unsubscribes and then subscribes to the channel with the given Id

This function is mostly used to force the channel to produce a fresh snapshot.

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.channel_count"></a>
#### channel\_count

```python
  channel_count()
```

Returns the number of cannels

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.is_subscribed"></a>
#### is\_subscribed

```python
  is_subscribed(chan_id)
```

Returns True if the channel with the given chanId is currenly subscribed to

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.unsubscribe_all"></a>
#### unsubscribe\_all

```python
  async unsubscribe_all()
```

Unsubscribe from all channels.

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.resubscribe_by_socket"></a>
#### resubscribe\_by\_socket

```python
  async resubscribe_by_socket(socket_id)
```

Unsubscribe channels on socket and then subscribe to all channels

<a name=".bfxapi.websockets.subscription_manager.SubscriptionManager.resubscribe_all"></a>
#### resubscribe\_all

```python
  async resubscribe_all()
```

Unsubscribe and then subscribe to all channels

<a name=".bfxapi.websockets.order_manager"></a>
## bfxapi.websockets.order\_manager

Module used to house all of the functions/classes used to handle orders

<a name=".bfxapi.websockets.order_manager.OrderManager"></a>
### OrderManager

```python
class OrderManager():
  OrderManager(bfxapi, logLevel='INFO')
```

Handles all of the functionality for opening, updating and closing order.
Also contains state such as all of your open orders and orders that have
closed.

<a name=".bfxapi.websockets.order_manager.OrderManager.build_from_order_snapshot"></a>
#### build\_from\_order\_snapshot

```python
  async build_from_order_snapshot(raw_ws_data)
```

Rebuild the user orderbook based on an incoming snapshot

<a name=".bfxapi.websockets.order_manager.OrderManager.submit_order"></a>
#### submit\_order

```python
  async submit_order(symbol, price, amount, market_type=Order.Type.LIMIT, hidden=False, price_trailing=None, price_aux_limit=None, oco_stop_price=None, close=False, reduce_only=False, post_only=False, oco=False, aff_code=None, time_in_force=None, leverage=None, onConfirm=None, onClose=None, gid=None, *args, **kwargs)
```

Submit a new order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| gid | <code></code> | assign the order to a group identifier |
| symbol | <code></code> | the name of the symbol i.e 'tBTCUSD |
| price | <code></code> | the price you want to buy/sell at (must be positive) |
| amount | <code></code> | order size: how much you want to buy/sell, a negative amount indicates a sell order and positive a buy order |
| market_type | <code></code> | Order.Type see Order.Type enum amount	decimal string	Positive for buy, Negative for sell |
| hidden | <code></code> | if True, order should be hidden from orderbooks |
| price_trailing | <code></code> | decimal trailing price |
| price_aux_limit | <code></code> | decimal auxiliary Limit price (only for STOP LIMIT) |
| oco_stop_price | <code></code> | set the oco stop price (requires oco = True) |
| close | <code></code> | if True, close position if position present |
| reduce_only | <code></code> | if True, ensures that the executed order does not flip the opened position |
| post_only | <code></code> | if True, ensures the limit order will be added to the order book and not match with a pre-existing order |
| oco | <code></code> | cancels other order option allows you to place a pair of orders stipulating that if one order is executed fully or partially, then the other is automatically canceled |
| aff_code | <code></code> | bitfinex affiliate code |
| time_in_force | <code></code> | datetime for automatic order cancellation ie. 2020-01-01 10:45:23 |
| leverage | <code></code> | the amount of leverage to apply to the order as an integer |
| onConfirm | <code></code> | function called when the bitfinex websocket receives signal that the order was confirmed |
| onClose | <code></code> | function called when the bitfinex websocket receives signal that the order was closed due to being filled or cancelled |

<a name=".bfxapi.websockets.order_manager.OrderManager.update_order"></a>
#### update\_order

```python
  async update_order(orderId, price=None, amount=None, delta=None, price_aux_limit=None, price_trailing=None, hidden=False, close=False, reduce_only=False, post_only=False, time_in_force=None, leverage=None, onConfirm=None)
```

Update an existing order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| orderId | <code></code> | the id of the order that you want to update |
| price | <code></code> | the price you want to buy/sell at (must be positive) |
| amount | <code></code> | order size: how much you want to buy/sell, a negative amount indicates a sell order and positive a buy order |
| delta | <code></code> | change of amount |
| price_trailing | <code></code> | decimal trailing price |
| price_aux_limit | <code></code> | decimal auxiliary Limit price (only for STOP LIMIT) |
| hidden | <code></code> | if True, order should be hidden from orderbooks |
| close | <code></code> | if True, close position if position present |
| reduce_only | <code></code> | if True, ensures that the executed order does not flip the opened position |
| post_only | <code></code> | if True, ensures the limit order will be added to the order book and not match with a pre-existing order |
| time_in_force | <code></code> | datetime for automatic order cancellation ie. 2020-01-01 10:45:23 |
| leverage | <code></code> | the amount of leverage to apply to the order as an integer |
| onConfirm | <code></code> | function called when the bitfinex websocket receives signal that the order was confirmed |
| onClose | <code></code> | function called when the bitfinex websocket receives signal that the order was closed due to being filled or cancelled |

<a name=".bfxapi.websockets.order_manager.OrderManager.cancel_order"></a>
#### cancel\_order

```python
  async cancel_order(orderId, onConfirm=None)
```

Cancel an existing open order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| orderId | <code></code> | the id of the order that you want to update |
| onConfirm | <code></code> | function called when the bitfinex websocket receives signal that the order was confirmed |
| onClose | <code></code> | function called when the bitfinex websocket receives signal that the order was closed due to being filled or cancelled |

<a name=".bfxapi.websockets.order_manager.OrderManager.cancel_all_orders"></a>
#### cancel\_all\_orders

```python
  async cancel_all_orders()
```

Cancel all existing open orders

This function closes all open orders.

<a name=".bfxapi.websockets.order_manager.OrderManager.cancel_order_group"></a>
#### cancel\_order\_group

```python
  async cancel_order_group(gid, onConfirm=None)
```

Cancel a set of orders using a single group id.

<a name=".bfxapi.websockets.order_manager.OrderManager.cancel_order_multi"></a>
#### cancel\_order\_multi

```python
  async cancel_order_multi(ids=None, gids=None)
```

Cancel existing open orders as a batch

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| ids | <code></code> | an array of order ids |
| gids | <code></code> | an array of group ids |

<a name=".bfxapi.rest"></a>
## bfxapi.rest

<a name=".bfxapi.rest.bfx_rest"></a>
## bfxapi.rest.bfx\_rest

This module contains the BFX rest client data types

<a name=".bfxapi.rest.bfx_rest.BfxRest"></a>
### BfxRest

```python
class BfxRest():
  BfxRest(API_KEY, API_SECRET, host='https://api-pub.bitfinex.com/v2', loop=None, logLevel='INFO', parse_float=float, *args, **kwargs)
```

BFX rest interface contains functions which are used to interact with both the public
and private Bitfinex http api's.
To use the private api you have to set the API_KEY and API_SECRET variables to your
api key.

<a name=".bfxapi.rest.bfx_rest.BfxRest.fetch"></a>
#### fetch

```python
  async fetch(endpoint, params="")
```

Send a GET request to the bitfinex api

**Returns**: `reponse`
<a name=".bfxapi.rest.bfx_rest.BfxRest.post"></a>
#### post

```python
  async post(endpoint, data={}, params="")
```

Send a pre-signed POST request to the bitfinex api

**Returns**: `response`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_seed_candles"></a>
#### get\_seed\_candles

```python
  async get_seed_candles(symbol, tf='1m')
```

Used by the honey framework, this function gets the last 4k candles.

<a name=".bfxapi.rest.bfx_rest.BfxRest.get_public_candles"></a>
#### get\_public\_candles

```python
  async get_public_candles(symbol, start, end, section='hist', tf='1m', limit="100", sort=-1)
```

Get all of the public candles between the start and end period.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| secton | <code>string</code> | available values: "last", "hist" |
| start | <code>int</code> | millisecond start time |
| end | <code>int</code> | millisecond end time |
| limit | <code>int</code> | max number of items in response |
| tf | <code>int</code> | timeframe inbetween candles i.e 1m (min), ..., 1D (day),  ... 1M (month) |
| sort | <code>int</code> | if = 1 it sorts results returned with old > new |

**Returns**: `Array [ MTS, OPEN, CLOSE, HIGH, LOW, VOLUME ]`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_public_trades"></a>
#### get\_public\_trades

```python
  async get_public_trades(symbol, start, end, limit="100", sort=-1)
```

Get all of the public trades between the start and end period.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| start | <code>int</code> | millisecond start time |
| end | <code>int</code> | millisecond end time |
| limit | <code>int</code> | max number of items in response |

**Returns**: `Array [ ID, MTS, AMOUNT, RATE, PERIOD? ]`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_public_books"></a>
#### get\_public\_books

```python
  async get_public_books(symbol, precision="P0", length=25)
```

Get the public orderbook for a given symbol.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| precision | <code>string</code> | level of price aggregation (P0, P1, P2, P3, P4, R0) |
| length | <code>int</code> | number of price points ("25", "100") |

**Returns**: `Array [ PRICE, COUNT, AMOUNT ]`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_public_ticker"></a>
#### get\_public\_ticker

```python
  async get_public_ticker(symbol)
```

Get tickers for the given symbol. Tickers shows you the current best bid and ask,
as well as the last trade price.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbols | <code>string</code> | pair symbol i.e tBTCUSD |

**Returns**: `Array [ SYMBOL, BID, BID_SIZE, ASK, ASK_SIZE, DAILY_CHANGE,` DAILY_CHANGE_PERC, LAST_PRICE, VOLUME, HIGH, LOW ]
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_public_tickers"></a>
#### get\_public\_tickers

```python
  async get_public_tickers(symbols)
```

Get tickers for the given symbols. Tickers shows you the current best bid and ask,
as well as the last trade price.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbols | <code>Array<string></code> | array of symbols i.e [tBTCUSD, tETHUSD] |

**Returns**: `Array [ SYMBOL, BID, BID_SIZE, ASK, ASK_SIZE, DAILY_CHANGE,  DAILY_CHANGE_PERC,` LAST_PRICE, VOLUME, HIGH, LOW ]
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_derivative_status"></a>
#### get\_derivative\_status

```python
  async get_derivative_status(symbol)
```

Gets platform information for derivative symbol.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| derivativeSymbol | <code>string</code> | i.e tBTCF0:USTF0 |

**Returns**: `[KEY/SYMBOL, MTS, PLACEHOLDER, DERIV_PRICE, SPOT_PRICE, PLACEHOLDER, INSURANCE_FUND_BALANCE4,` PLACEHOLDER, PLACEHOLDER, FUNDING_ACCRUED, FUNDING_STEP, PLACEHOLDER]
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_derivative_statuses"></a>
#### get\_derivative\_statuses

```python
  async get_derivative_statuses(symbols)
```

Gets platform information for a collection of derivative symbols.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| derivativeSymbols | <code>Array<string></code> | array of symbols i.e [tBTCF0:USTF0 ...] or ["ALL"] |

**Returns**: `[KEY/SYMBOL, MTS, PLACEHOLDER, DERIV_PRICE, SPOT_PRICE, PLACEHOLDER, INSURANCE_FUND_BALANCE4,` PLACEHOLDER, PLACEHOLDER, FUNDING_ACCRUED, FUNDING_STEP, PLACEHOLDER]
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_wallets"></a>
#### get\_wallets

```python
  async get_wallets()
```

Get all wallets on account associated with API_KEY - Requires authentication.

**Returns**: `Array <models.Wallet>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_active_orders"></a>
#### get\_active\_orders

```python
  async get_active_orders(symbol)
```

Get all of the active orders associated with API_KEY - Requires authentication.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |

**Returns**: `Array <models.Order>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_order_history"></a>
#### get\_order\_history

```python
  async get_order_history(symbol, start, end, limit=25, sort=-1)
```

Get all of the orders between the start and end period associated with API_KEY
* Requires authentication.
__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| start | <code>int</code> | millisecond start time |
| end | <code>int</code> | millisecond end time |
| limit | <code>int</code> | max number of items in response |

**Returns**: `Array <models.Order>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_active_position"></a>
#### get\_active\_position

```python
  async get_active_position()
```

Get all of the active position associated with API_KEY - Requires authentication.

**Returns**: `Array <models.Position>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_order_trades"></a>
#### get\_order\_trades

```python
  async get_order_trades(symbol, order_id)
```

Get all of the trades that have been generated by the given order associated with API_KEY
* Requires authentication.
__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| order_id | <code>string</code> | id of the order |

**Returns**: `Array <models.Trade>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_trades"></a>
#### get\_trades

```python
  async get_trades(symbol, start, end, limit=25)
```

Get all of the trades between the start and end period associated with API_KEY
* Requires authentication.
__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| start | <code>int</code> | millisecond start time |
| end | <code>int</code> | millisecond end time |
| limit | <code>int</code> | max number of items in response |

**Returns**: `Array <models.Trade>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_funding_offers"></a>
#### get\_funding\_offers

```python
  async get_funding_offers(symbol)
```

Get all of the funding offers associated with API_KEY - Requires authentication.

**Returns**: `Array <models.FundingOffer>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_funding_offer_history"></a>
#### get\_funding\_offer\_history

```python
  async get_funding_offer_history(symbol, start, end, limit=25)
```

Get all of the funding offers between the start and end period associated with API_KEY
* Requires authentication.
__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| start | <code>int</code> | millisecond start time |
| end | <code>int</code> | millisecond end time |
| limit | <code>int</code> | max number of items in response |

**Returns**: `Array <models.FundingOffer>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_funding_loans"></a>
#### get\_funding\_loans

```python
  async get_funding_loans(symbol)
```

Get all of the funding loans associated with API_KEY - Requires authentication.

**Returns**: `Array <models.FundingLoan>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_funding_loan_history"></a>
#### get\_funding\_loan\_history

```python
  async get_funding_loan_history(symbol, start, end, limit=25)
```

Get all of the funding loans between the start and end period associated with API_KEY
* Requires authentication.
__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| start | <code>int</code> | millisecond start time |
| end | <code>int</code> | millisecond end time |
| limit | <code>int</code> | max number of items in response |

**Returns**: `Array <models.FundingLoan>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.get_funding_credit_history"></a>
#### get\_funding\_credit\_history

```python
  async get_funding_credit_history(symbol, start, end, limit=25)
```

Get all of the funding credits between the start and end period associated with API_KEY
* Requires authentication.
__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e tBTCUSD |
| start | <code>int</code> | millisecond start time |
| end | <code>int</code> | millisecond end time |
| limit | <code>int</code> | max number of items in response |

**Returns**: `Array <models.FundingCredit>`
<a name=".bfxapi.rest.bfx_rest.BfxRest.submit_funding_offer"></a>
#### submit\_funding\_offer

```python
  async submit_funding_offer(symbol, amount, rate, period, funding_type=FundingOffer.Type.LIMIT, hidden=False)
```

Submits a new funding offer

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code>string</code> | pair symbol i.e fUSD |
| amount | <code>float</code> | funding size |
| rate | <code>float</code> | percentage rate to charge per a day |
| period | <code>int</code> | number of days for funding to remain active once accepted |

<a name=".bfxapi.rest.bfx_rest.BfxRest.submit_cancel_funding_offer"></a>
#### submit\_cancel\_funding\_offer

```python
  async submit_cancel_funding_offer(fundingId)
```

Cancel a funding offer

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| fundingId | <code>int</code> | the id of the funding offer |

<a name=".bfxapi.rest.bfx_rest.BfxRest.submit_wallet_transfer"></a>
#### submit\_wallet\_transfer

```python
  async submit_wallet_transfer(from_wallet, to_wallet, from_currency, to_currency, amount)
```

Transfer funds between wallets

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| from_wallet | <code>string</code> | wallet name to transfer from i.e margin, exchange |
| to_wallet | <code>string</code> | wallet name to transfer to i.e margin, exchange |
| from_currency | <code>string</code> | currency symbol to tranfer from i.e BTC, USD |
| to_currency | <code>string</code> | currency symbol to transfer to i.e BTC, USD |
| amount | <code>float</code> | amount of funds to transfer |

<a name=".bfxapi.rest.bfx_rest.BfxRest.get_wallet_deposit_address"></a>
#### get\_wallet\_deposit\_address

```python
  async get_wallet_deposit_address(wallet, method, renew=0)
```

Get the deposit address for the given wallet and protocol

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| wallet | <code>string</code> | wallet name i.e margin, exchange |
| method | <code>string</code> | transfer protocol i.e bitcoin |

<a name=".bfxapi.rest.bfx_rest.BfxRest.create_wallet_deposit_address"></a>
#### create\_wallet\_deposit\_address

```python
  async create_wallet_deposit_address(wallet, method)
```

Creates a new deposit address for the given wallet and protocol.
Previously generated addresses remain linked.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| wallet | <code>string</code> | wallet name i.e margin, exchange |
| method | <code>string</code> | transfer protocol i.e bitcoin |

<a name=".bfxapi.rest.bfx_rest.BfxRest.submit_wallet_withdraw"></a>
#### submit\_wallet\_withdraw

```python
  async submit_wallet_withdraw(wallet, method, amount, address)
```

Submits a request to withdraw crypto funds to an external wallet.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| wallet | <code>string</code> | wallet name i.e margin, exchange |
| method | <code>string</code> | transfer protocol i.e bitcoin |
| amount | <code>float</code> | amount of funds to withdraw |
| address | <code>string</code> | external address to withdraw to |

<a name=".bfxapi.rest.bfx_rest.BfxRest.submit_order"></a>
#### submit\_order

```python
  async submit_order(symbol, price, amount, market_type=Order.Type.LIMIT, hidden=False, price_trailing=None, price_aux_limit=None, oco_stop_price=None, close=False, reduce_only=False, post_only=False, oco=False, aff_code=None, time_in_force=None, leverage=None, gid=None)
```

Submit a new order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| gid | <code></code> | assign the order to a group identifier |
| symbol | <code></code> | the name of the symbol i.e 'tBTCUSD |
| price | <code></code> | the price you want to buy/sell at (must be positive) |
| amount | <code></code> | order size: how much you want to buy/sell, a negative amount indicates a sell order and positive a buy order |
| market_type | <code>Order.Type</code> | please see Order.Type enum amount	decimal string	Positive for buy, Negative for sell |
| hidden | <code></code> | if True, order should be hidden from orderbooks |
| price_trailing | <code></code> | decimal trailing price |
| price_aux_limit | <code></code> | decimal	auxiliary Limit price (only for STOP LIMIT) |
| oco_stop_price | <code></code> | set the oco stop price (requires oco = True) |
| close | <code></code> | if True, close position if position present |
| reduce_only | <code></code> | if True, ensures that the executed order does not flip the opened position |
| post_only | <code></code> | if True, ensures the limit order will be added to the order book and not match with a pre-existing order |
| oco | <code></code> | cancels other order option allows you to place a pair of orders stipulating that if one order is executed fully or partially, then the other is automatically canceled |
| aff_code | <code></code> | bitfinex affiliate code |
| time_in_force | <code></code> | datetime for automatic order cancellation ie. 2020-01-01 10:45:23 |
| leverage | <code></code> | the amount of leverage to apply to the order as an integer |

<a name=".bfxapi.rest.bfx_rest.BfxRest.submit_cancel_order"></a>
#### submit\_cancel\_order

```python
  async submit_cancel_order(orderId)
```

Cancel an existing open order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| orderId | <code></code> | the id of the order that you want to update |

<a name=".bfxapi.rest.bfx_rest.BfxRest.submit_update_order"></a>
#### submit\_update\_order

```python
  async submit_update_order(orderId, price=None, amount=None, delta=None, price_aux_limit=None, price_trailing=None, hidden=False, close=False, reduce_only=False, post_only=False, time_in_force=None, leverage=None)
```

Update an existing order

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| orderId | <code></code> | the id of the order that you want to update |
| price | <code></code> | the price you want to buy/sell at (must be positive) |
| amount | <code></code> | order size: how much you want to buy/sell, a negative amount indicates a sell order and positive a buy order |
| delta | <code></code> | change of amount |
| price_trailing | <code></code> | decimal trailing price |
| price_aux_limit | <code></code> | decimal	auxiliary Limit price (only for STOP LIMIT) |
| hidden | <code></code> | if True, order should be hidden from orderbooks |
| close | <code></code> | if True, close position if position present |
| reduce_only | <code></code> | if True, ensures that the executed order does not flip the opened position |
| post_only | <code></code> | if True, ensures the limit order will be added to the order book and not match with a pre-existing order |
| time_in_force | <code></code> | datetime for automatic order cancellation ie. 2020-01-01 10:45:23 |
| leverage | <code></code> | the amount of leverage to apply to the order as an integer |

<a name=".bfxapi.rest.bfx_rest.BfxRest.set_derivative_collateral"></a>
#### set\_derivative\_collateral

```python
  async set_derivative_collateral(symbol, collateral)
```

Update the amount of callateral used to back a derivative position.

__Attributes__

| PARAM | TYPE | DESCRIPTION |
| --- | --- | --- |
| symbol | <code></code> | symbol of the derivative i.e 'tBTCF0:USTF0' |
| collateral | <code></code> | amount of collateral/value to apply to the open position |

<a name=".bfxapi.version"></a>
## bfxapi.version

This module contains the current version of the bfxapi lib

