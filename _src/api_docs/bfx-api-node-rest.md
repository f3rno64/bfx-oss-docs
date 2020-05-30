<a id="module_bfx-api-node-rest"></a>

## bfx-api-node-rest
A Node.JS reference implementation of the Bitfinex REST APIs

To use, construct a new instance of either the `RESTv1` or `RESTv2` classes.
All API methods return promises and accept a callback as the last parameter; the
callback will be called with `(error, response)`.

To minimize the data sent over the network the transmitted data is structured in
arrays. In order to reconstruct key / value pairs, set `opts.transform` to `true`
when creating an interface.

## Features

* Official implementation
* [REST v2 API](#module_bfx-api-node-rest.RESTv2)
* [REST v1 API](#module_bfx-api-node-rest.RESTv1)

## Installation

```bash
  npm i --save bfx-api-node-rest
```

### Quickstart

```js
const { RESTv2 } = require('bfx-api-node-rest')
const rest = new RESTv2({ transform: true })

// do something with the RESTv2 instance
```

**License**: MIT  
::: api-docs-index
* [bfx-api-node-rest](#module_bfx-api-node-rest)
    * [~RESTv1](#module_bfx-api-node-rest.RESTv1)
        * [new RESTv1(opts)](#new_module_bfx-api-node-rest.RESTv1_new)
        * [.ticker(symbol, cb)](#module_bfx-api-node-rest.RESTv1+ticker)
        * [.today(symbol, cb)](#module_bfx-api-node-rest.RESTv1+today)
        * [.stats(symbol, cb)](#module_bfx-api-node-rest.RESTv1+stats)
        * [.fundingbook(currency, options, cb)](#module_bfx-api-node-rest.RESTv1+fundingbook)
        * [.orderbook(symbol, options, cb)](#module_bfx-api-node-rest.RESTv1+orderbook)
        * [.trades(symbol, cb)](#module_bfx-api-node-rest.RESTv1+trades)
        * [.lends(symbol, cb)](#module_bfx-api-node-rest.RESTv1+lends)
        * [.get_symbols(cb)](#module_bfx-api-node-rest.RESTv1+get_symbols)
        * [.symbols_details(cb)](#module_bfx-api-node-rest.RESTv1+symbols_details)
        * [.new_order(symbol, amount, price, exchange, side, type, is_hidden, postOnly, cb)](#module_bfx-api-node-rest.RESTv1+new_order)
        * [.multiple_new_orders(orders, cb)](#module_bfx-api-node-rest.RESTv1+multiple_new_orders)
        * [.cancel_order(order_id, cb)](#module_bfx-api-node-rest.RESTv1+cancel_order)
        * [.cancel_all_orders(cb)](#module_bfx-api-node-rest.RESTv1+cancel_all_orders)
        * [.cancel_multiple_orders(order_ids, cb)](#module_bfx-api-node-rest.RESTv1+cancel_multiple_orders)
        * [.replace_order(order_id, symbol, amount, price, exchange, side, type, cb)](#module_bfx-api-node-rest.RESTv1+replace_order)
        * [.order_status(order_id, cb)](#module_bfx-api-node-rest.RESTv1+order_status)
        * [.active_orders(cb)](#module_bfx-api-node-rest.RESTv1+active_orders)
        * [.orders_history(cb)](#module_bfx-api-node-rest.RESTv1+orders_history)
        * [.active_positions(cb)](#module_bfx-api-node-rest.RESTv1+active_positions)
        * [.claim_position(position_id, amount, cb)](#module_bfx-api-node-rest.RESTv1+claim_position)
        * [.balance_history(currency, options, cb)](#module_bfx-api-node-rest.RESTv1+balance_history)
        * [.movements(currency, options, cb)](#module_bfx-api-node-rest.RESTv1+movements)
        * [.past_trades(symbol, options, cb)](#module_bfx-api-node-rest.RESTv1+past_trades)
        * [.new_deposit(currency, method, wallet_name, cb)](#module_bfx-api-node-rest.RESTv1+new_deposit)
        * [.new_offer(currency, amount, rate, period, direction, cb)](#module_bfx-api-node-rest.RESTv1+new_offer)
        * [.cancel_offer(offer_id, cb)](#module_bfx-api-node-rest.RESTv1+cancel_offer)
        * [.offer_status(offer_id, cb)](#module_bfx-api-node-rest.RESTv1+offer_status)
        * [.active_offers(cb)](#module_bfx-api-node-rest.RESTv1+active_offers)
        * [.active_credits(cb)](#module_bfx-api-node-rest.RESTv1+active_credits)
        * [.wallet_balances(cb)](#module_bfx-api-node-rest.RESTv1+wallet_balances)
        * [.taken_swaps(cb)](#module_bfx-api-node-rest.RESTv1+taken_swaps)
        * [.total_taken_swaps(cb)](#module_bfx-api-node-rest.RESTv1+total_taken_swaps)
        * [.close_swap(swap_id, cb)](#module_bfx-api-node-rest.RESTv1+close_swap)
        * [.account_infos(cb)](#module_bfx-api-node-rest.RESTv1+account_infos)
        * [.margin_infos(cb)](#module_bfx-api-node-rest.RESTv1+margin_infos)
        * [.withdraw(withdrawType, walletSelected, amount, address)](#module_bfx-api-node-rest.RESTv1+withdraw)
        * [.transfer(amount, currency, walletFrom, walletTo)](#module_bfx-api-node-rest.RESTv1+transfer)
    * [~RESTv2](#module_bfx-api-node-rest.RESTv2)
        * [new RESTv2(opts)](#new_module_bfx-api-node-rest.RESTv2_new)
        * [.getURL()](#module_bfx-api-node-rest.RESTv2+getURL) ⇒ <code>boolean</code>
        * [.usesAgent()](#module_bfx-api-node-rest.RESTv2+usesAgent) ⇒ <code>boolean</code>
        * [.orderBook(symbol, prec, [cb])](#module_bfx-api-node-rest.RESTv2+orderBook) ⇒ <code>Promise</code>
        * [.publicPulseProfile(nickname, [cb])](#module_bfx-api-node-rest.RESTv2+publicPulseProfile) ⇒ <code>Promise</code>
        * [.status([cb])](#module_bfx-api-node-rest.RESTv2+status) ⇒ <code>Promise</code>
        * [.statusMessages([type], [keys], [cb])](#module_bfx-api-node-rest.RESTv2+statusMessages) ⇒ <code>Promise</code>
        * [.ticker(symbol, [cb])](#module_bfx-api-node-rest.RESTv2+ticker) ⇒ <code>Promise</code>
        * [.tickers(symbols, [cb])](#module_bfx-api-node-rest.RESTv2+tickers) ⇒ <code>Promise</code>
        * [.tickersHistory(symbols, [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+tickersHistory) ⇒ <code>Promise</code>
        * [.stats(key, context, [cb])](#module_bfx-api-node-rest.RESTv2+stats) ⇒ <code>Promise</code>
        * [.candles(opts, [cb])](#module_bfx-api-node-rest.RESTv2+candles) ⇒ <code>Promise</code>
        * [.conf(keys, [cb])](#module_bfx-api-node-rest.RESTv2+conf) ⇒ <code>Promise</code>
        * [.currencies([cb])](#module_bfx-api-node-rest.RESTv2+currencies) ⇒ <code>Promise</code>
        * [.alertList(type, [cb])](#module_bfx-api-node-rest.RESTv2+alertList) ⇒ <code>Promise</code>
        * [.alertSet(type, symbol, price, [cb])](#module_bfx-api-node-rest.RESTv2+alertSet) ⇒ <code>Promise</code>
        * [.alertDelete(symbol, price, [cb])](#module_bfx-api-node-rest.RESTv2+alertDelete) ⇒ <code>Promise</code>
        * [.trades(symbol, [start], [end], [limit], [sort], [cb])](#module_bfx-api-node-rest.RESTv2+trades) ⇒ <code>Promise</code>
        * [.liquidations([start], [end], [limit], [sort], [cb])](#module_bfx-api-node-rest.RESTv2+liquidations) ⇒ <code>Promise</code>
        * [.accountTrades([symbol], [start], [end], [limit], [sort], [cb])](#module_bfx-api-node-rest.RESTv2+accountTrades) ⇒ <code>Promise</code>
        * [.logins([start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+logins) ⇒ <code>Promise</code>
        * [.wallets([cb])](#module_bfx-api-node-rest.RESTv2+wallets) ⇒ <code>Promise</code>
        * [.walletsHistory([end], [currency], [cb])](#module_bfx-api-node-rest.RESTv2+walletsHistory) ⇒ <code>Promise</code>
        * [.userInfo([cb])](#module_bfx-api-node-rest.RESTv2+userInfo) ⇒ <code>Promise</code>
        * [.activeOrders([cb])](#module_bfx-api-node-rest.RESTv2+activeOrders) ⇒ <code>Promise</code>
        * [.activeOrdersWithIds([ids], cb)](#module_bfx-api-node-rest.RESTv2+activeOrdersWithIds) ⇒ <code>Promise</code>
        * [.movements([ccy], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+movements) ⇒ <code>Promise</code>
        * [.ledgers(filters, [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+ledgers) ⇒ <code>Promise</code>
        * [.orderHistory(symbol, [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+orderHistory) ⇒ <code>Promise</code>
        * [.orderHistoryWithIds([ids], cb)](#module_bfx-api-node-rest.RESTv2+orderHistoryWithIds) ⇒ <code>Promise</code>
        * [.orderTrades([symbol], [start], [end], [limit], [orderID], [cb])](#module_bfx-api-node-rest.RESTv2+orderTrades) ⇒ <code>Promise</code>
        * [.positions([cb])](#module_bfx-api-node-rest.RESTv2+positions) ⇒ <code>Promise</code>
        * [.positionsHistory([start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+positionsHistory) ⇒ <code>Promise</code>
        * [.positionsAudit([id], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+positionsAudit) ⇒ <code>Promise</code>
        * [.positionsSnapshot([start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+positionsSnapshot) ⇒ <code>Promise</code>
        * [.fundingOffers(symbol, [cb])](#module_bfx-api-node-rest.RESTv2+fundingOffers) ⇒ <code>Promise</code>
        * [.fundingOfferHistory([symbol], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+fundingOfferHistory) ⇒ <code>Promise</code>
        * [.fundingLoans([symbol], [cb])](#module_bfx-api-node-rest.RESTv2+fundingLoans) ⇒ <code>Promise</code>
        * [.fundingLoanHistory([symbol], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+fundingLoanHistory) ⇒ <code>Promise</code>
        * [.fundingCredits([symbol], [cb])](#module_bfx-api-node-rest.RESTv2+fundingCredits) ⇒ <code>Promise</code>
        * [.fundingCreditHistory([symbol], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+fundingCreditHistory) ⇒ <code>Promise</code>
        * [.fundingTrades([symbol], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+fundingTrades) ⇒ <code>Promise</code>
        * [.marginInfo(key, [cb])](#module_bfx-api-node-rest.RESTv2+marginInfo) ⇒ <code>Promise</code>
        * [.changeLogs([start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+changeLogs) ⇒ <code>Promise</code>
        * [.fundingInfo(key, [cb])](#module_bfx-api-node-rest.RESTv2+fundingInfo) ⇒ <code>Promise</code>
        * [.performance([cb])](#module_bfx-api-node-rest.RESTv2+performance) ⇒ <code>Promise</code>
        * [.calcAvailableBalance(symbol, dir, rate, type, [cb])](#module_bfx-api-node-rest.RESTv2+calcAvailableBalance) ⇒ <code>Promise</code>
        * [.symbols([cb])](#module_bfx-api-node-rest.RESTv2+symbols) ⇒ <code>Promise</code>
        * [.inactiveSymbols([cb])](#module_bfx-api-node-rest.RESTv2+inactiveSymbols) ⇒ <code>Promise</code>
        * [.futures([cb])](#module_bfx-api-node-rest.RESTv2+futures) ⇒ <code>Promise</code>
        * [.derivsPositionCollateralSet(symbol, collateral, [cb])](#module_bfx-api-node-rest.RESTv2+derivsPositionCollateralSet) ⇒ <code>Promise</code>
        * ~~[.symbolDetails([cb])](#module_bfx-api-node-rest.RESTv2+symbolDetails) ⇒ <code>Promise</code>~~
        * ~~[.accountInfo([cb])](#module_bfx-api-node-rest.RESTv2+accountInfo) ⇒ <code>Promise</code>~~
        * ~~[.accountFees([cb])](#module_bfx-api-node-rest.RESTv2+accountFees) ⇒ <code>Promise</code>~~
        * [.accountSummary([cb])](#module_bfx-api-node-rest.RESTv2+accountSummary) ⇒ <code>Promise</code>
        * ~~[.keyPermissions([cb])](#module_bfx-api-node-rest.RESTv2+keyPermissions) ⇒ <code>Promise</code>~~
        * ~~[.balances([cb])](#module_bfx-api-node-rest.RESTv2+balances) ⇒ <code>Promise</code>~~
        * ~~[.closePosition(params, [cb])](#module_bfx-api-node-rest.RESTv2+closePosition) ⇒ <code>Promise</code>~~
        * [.updateSettings(settings, [cb])](#module_bfx-api-node-rest.RESTv2+updateSettings) ⇒ <code>Promise</code>
        * [.deleteSettings(keys, [cb])](#module_bfx-api-node-rest.RESTv2+deleteSettings) ⇒ <code>Promise</code>
        * [.getSettings(keys, [cb])](#module_bfx-api-node-rest.RESTv2+getSettings) ⇒ <code>Promise</code>
        * [.exchangeRate(ccy1, ccy2)](#module_bfx-api-node-rest.RESTv2+exchangeRate) ⇒ <code>Promise</code>
        * [.generateToken(opts, [cb])](#module_bfx-api-node-rest.RESTv2+generateToken) ⇒ <code>Promise</code>
        * [.submitOrder(order, [cb])](#module_bfx-api-node-rest.RESTv2+submitOrder) ⇒ <code>Promise</code>
        * [.updateOrder(changes, [cb])](#module_bfx-api-node-rest.RESTv2+updateOrder) ⇒ <code>Promise</code>
        * [.cancelOrder(id, [cb])](#module_bfx-api-node-rest.RESTv2+cancelOrder) ⇒ <code>Promise</code>
        * [.cancelOrderWithCid(cid, date, cb)](#module_bfx-api-node-rest.RESTv2+cancelOrderWithCid) ⇒ <code>Promise</code>
        * [.claimPosition(id, [cb])](#module_bfx-api-node-rest.RESTv2+claimPosition) ⇒ <code>Promise</code>
        * [.submitFundingOffer(offer, [cb])](#module_bfx-api-node-rest.RESTv2+submitFundingOffer) ⇒ <code>Promise</code>
        * [.cancelFundingOffer(id, [cb])](#module_bfx-api-node-rest.RESTv2+cancelFundingOffer) ⇒ <code>Promise</code>
        * [.cancelAllFundingOffers(params, [cb])](#module_bfx-api-node-rest.RESTv2+cancelAllFundingOffers) ⇒ <code>Promise</code>
        * [.closeFunding(params, [cb])](#module_bfx-api-node-rest.RESTv2+closeFunding) ⇒ <code>Promise</code>
        * [.submitAutoFunding(params, [cb])](#module_bfx-api-node-rest.RESTv2+submitAutoFunding) ⇒ <code>Promise</code>
        * [.transfer(params, [cb])](#module_bfx-api-node-rest.RESTv2+transfer) ⇒ <code>Promise</code>
        * [.getDepositAddress(params, [cb])](#module_bfx-api-node-rest.RESTv2+getDepositAddress) ⇒ <code>Promise</code>
        * [.withdraw(params, [cb])](#module_bfx-api-node-rest.RESTv2+withdraw) ⇒ <code>Promise</code>
:::
<a id="module_bfx-api-node-rest.RESTv1"></a>

### bfx-api-node-rest~RESTv1
Communicates with v1 of the Bitfinex HTTP API

**Kind**: inner class of [<code>bfx-api-node-rest</code>](#module_bfx-api-node-rest)  

* [~RESTv1](#module_bfx-api-node-rest.RESTv1)
    * [new RESTv1(opts)](#new_module_bfx-api-node-rest.RESTv1_new)
    * [.ticker(symbol, cb)](#module_bfx-api-node-rest.RESTv1+ticker)
    * [.today(symbol, cb)](#module_bfx-api-node-rest.RESTv1+today)
    * [.stats(symbol, cb)](#module_bfx-api-node-rest.RESTv1+stats)
    * [.fundingbook(currency, options, cb)](#module_bfx-api-node-rest.RESTv1+fundingbook)
    * [.orderbook(symbol, options, cb)](#module_bfx-api-node-rest.RESTv1+orderbook)
    * [.trades(symbol, cb)](#module_bfx-api-node-rest.RESTv1+trades)
    * [.lends(symbol, cb)](#module_bfx-api-node-rest.RESTv1+lends)
    * [.get_symbols(cb)](#module_bfx-api-node-rest.RESTv1+get_symbols)
    * [.symbols_details(cb)](#module_bfx-api-node-rest.RESTv1+symbols_details)
    * [.new_order(symbol, amount, price, exchange, side, type, is_hidden, postOnly, cb)](#module_bfx-api-node-rest.RESTv1+new_order)
    * [.multiple_new_orders(orders, cb)](#module_bfx-api-node-rest.RESTv1+multiple_new_orders)
    * [.cancel_order(order_id, cb)](#module_bfx-api-node-rest.RESTv1+cancel_order)
    * [.cancel_all_orders(cb)](#module_bfx-api-node-rest.RESTv1+cancel_all_orders)
    * [.cancel_multiple_orders(order_ids, cb)](#module_bfx-api-node-rest.RESTv1+cancel_multiple_orders)
    * [.replace_order(order_id, symbol, amount, price, exchange, side, type, cb)](#module_bfx-api-node-rest.RESTv1+replace_order)
    * [.order_status(order_id, cb)](#module_bfx-api-node-rest.RESTv1+order_status)
    * [.active_orders(cb)](#module_bfx-api-node-rest.RESTv1+active_orders)
    * [.orders_history(cb)](#module_bfx-api-node-rest.RESTv1+orders_history)
    * [.active_positions(cb)](#module_bfx-api-node-rest.RESTv1+active_positions)
    * [.claim_position(position_id, amount, cb)](#module_bfx-api-node-rest.RESTv1+claim_position)
    * [.balance_history(currency, options, cb)](#module_bfx-api-node-rest.RESTv1+balance_history)
    * [.movements(currency, options, cb)](#module_bfx-api-node-rest.RESTv1+movements)
    * [.past_trades(symbol, options, cb)](#module_bfx-api-node-rest.RESTv1+past_trades)
    * [.new_deposit(currency, method, wallet_name, cb)](#module_bfx-api-node-rest.RESTv1+new_deposit)
    * [.new_offer(currency, amount, rate, period, direction, cb)](#module_bfx-api-node-rest.RESTv1+new_offer)
    * [.cancel_offer(offer_id, cb)](#module_bfx-api-node-rest.RESTv1+cancel_offer)
    * [.offer_status(offer_id, cb)](#module_bfx-api-node-rest.RESTv1+offer_status)
    * [.active_offers(cb)](#module_bfx-api-node-rest.RESTv1+active_offers)
    * [.active_credits(cb)](#module_bfx-api-node-rest.RESTv1+active_credits)
    * [.wallet_balances(cb)](#module_bfx-api-node-rest.RESTv1+wallet_balances)
    * [.taken_swaps(cb)](#module_bfx-api-node-rest.RESTv1+taken_swaps)
    * [.total_taken_swaps(cb)](#module_bfx-api-node-rest.RESTv1+total_taken_swaps)
    * [.close_swap(swap_id, cb)](#module_bfx-api-node-rest.RESTv1+close_swap)
    * [.account_infos(cb)](#module_bfx-api-node-rest.RESTv1+account_infos)
    * [.margin_infos(cb)](#module_bfx-api-node-rest.RESTv1+margin_infos)
    * [.withdraw(withdrawType, walletSelected, amount, address)](#module_bfx-api-node-rest.RESTv1+withdraw)
    * [.transfer(amount, currency, walletFrom, walletTo)](#module_bfx-api-node-rest.RESTv1+transfer)

<a id="new_module_bfx-api-node-rest.RESTv1_new"></a>

#### new RESTv1(opts)
Instantiate a new REST v1 transport.


| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> |  |
| opts.apiKey | <code>string</code> |  |
| opts.apiSecret | <code>string</code> |  |
| opts.url | <code>string</code> | endpoint URL |
| opts.agent | <code>Object</code> | optional node agent for connection (proxy) |
| opts.nonceGenerator | <code>Method</code> | optional, should return a nonce |

<a id="module_bfx-api-node-rest.RESTv1+ticker"></a>

#### resTv1.ticker(symbol, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-ticker  

| Param | Type | Default |
| --- | --- | --- |
| symbol | <code>string</code> | <code>&quot;BTCUSD&quot;</code> | 
| cb | <code>Method</code> |  | 

<a id="module_bfx-api-node-rest.RESTv1+today"></a>

#### resTv1.today(symbol, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  

| Param | Type |
| --- | --- |
| symbol | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+stats"></a>

#### resTv1.stats(symbol, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-stats  

| Param | Type |
| --- | --- |
| symbol | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+fundingbook"></a>

#### resTv1.fundingbook(currency, options, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-fundingbook  

| Param | Type |
| --- | --- |
| currency | <code>string</code> | 
| options | <code>Object</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+orderbook"></a>

#### resTv1.orderbook(symbol, options, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-orderbook  

| Param | Type |
| --- | --- |
| symbol | <code>string</code> | 
| options | <code>Object</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+trades"></a>

#### resTv1.trades(symbol, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-trades  

| Param | Type |
| --- | --- |
| symbol | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+lends"></a>

#### resTv1.lends(symbol, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-lends  

| Param | Type |
| --- | --- |
| symbol | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+get_symbols"></a>

#### resTv1.get\_symbols(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-symbols  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+symbols_details"></a>

#### resTv1.symbols\_details(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-symbol-details  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+new_order"></a>

#### resTv1.new\_order(symbol, amount, price, exchange, side, type, is_hidden, postOnly, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-new-order  

| Param | Type |
| --- | --- |
| symbol | <code>string</code> | 
| amount | <code>number</code> | 
| price | <code>number</code> | 
| exchange | <code>string</code> | 
| side | <code>string</code> | 
| type | <code>string</code> | 
| is_hidden | <code>boolean</code> | 
| postOnly | <code>boolean</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+multiple_new_orders"></a>

#### resTv1.multiple\_new\_orders(orders, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-multiple-new-orders  

| Param | Type |
| --- | --- |
| orders | <code>Array.&lt;Object&gt;</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+cancel_order"></a>

#### resTv1.cancel\_order(order_id, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-cancel-order  

| Param | Type |
| --- | --- |
| order_id | <code>number</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+cancel_all_orders"></a>

#### resTv1.cancel\_all\_orders(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-cancel-all-orders  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+cancel_multiple_orders"></a>

#### resTv1.cancel\_multiple\_orders(order_ids, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-cancel-multiple-orders  

| Param | Type |
| --- | --- |
| order_ids | <code>Array.&lt;number&gt;</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+replace_order"></a>

#### resTv1.replace\_order(order_id, symbol, amount, price, exchange, side, type, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-replace-order  

| Param | Type |
| --- | --- |
| order_id | <code>number</code> | 
| symbol | <code>string</code> | 
| amount | <code>number</code> | 
| price | <code>number</code> | 
| exchange | <code>string</code> | 
| side | <code>string</code> | 
| type | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+order_status"></a>

#### resTv1.order\_status(order_id, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-order-status  

| Param | Type |
| --- | --- |
| order_id | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+active_orders"></a>

#### resTv1.active\_orders(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-active-orders  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+orders_history"></a>

#### resTv1.orders\_history(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-orders-history  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+active_positions"></a>

#### resTv1.active\_positions(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-active-positions  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+claim_position"></a>

#### resTv1.claim\_position(position_id, amount, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-claim-position  

| Param | Type |
| --- | --- |
| position_id | <code>string</code> | 
| amount | <code>number</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+balance_history"></a>

#### resTv1.balance\_history(currency, options, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-balance-history  

| Param | Type |
| --- | --- |
| currency | <code>string</code> | 
| options | <code>Object</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+movements"></a>

#### resTv1.movements(currency, options, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-deposit-withdrawal-history  

| Param | Type |
| --- | --- |
| currency | <code>string</code> | 
| options | <code>Object</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+past_trades"></a>

#### resTv1.past\_trades(symbol, options, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-past-trades  

| Param | Type |
| --- | --- |
| symbol | <code>string</code> | 
| options | <code>Object</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+new_deposit"></a>

#### resTv1.new\_deposit(currency, method, wallet_name, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-deposit  

| Param | Type |
| --- | --- |
| currency | <code>string</code> | 
| method | <code>string</code> | 
| wallet_name | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+new_offer"></a>

#### resTv1.new\_offer(currency, amount, rate, period, direction, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-new-offer  

| Param | Type |
| --- | --- |
| currency | <code>string</code> | 
| amount | <code>number</code> | 
| rate | <code>number</code> | 
| period | <code>number</code> | 
| direction | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+cancel_offer"></a>

#### resTv1.cancel\_offer(offer_id, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-cancel-offer  

| Param | Type |
| --- | --- |
| offer_id | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+offer_status"></a>

#### resTv1.offer\_status(offer_id, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-offer-status  

| Param | Type |
| --- | --- |
| offer_id | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+active_offers"></a>

#### resTv1.active\_offers(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-offers  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+active_credits"></a>

#### resTv1.active\_credits(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-active-credits  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+wallet_balances"></a>

#### resTv1.wallet\_balances(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-wallet-balances  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+taken_swaps"></a>

#### resTv1.taken\_swaps(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-active-funding-used-in-a-margin-position  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+total_taken_swaps"></a>

#### resTv1.total\_taken\_swaps(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-total-taken-funds  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+close_swap"></a>

#### resTv1.close\_swap(swap_id, cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  

| Param | Type |
| --- | --- |
| swap_id | <code>string</code> | 
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+account_infos"></a>

#### resTv1.account\_infos(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-account-info  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+margin_infos"></a>

#### resTv1.margin\_infos(cb)
**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-margin-information  

| Param | Type |
| --- | --- |
| cb | <code>Method</code> | 

<a id="module_bfx-api-node-rest.RESTv1+withdraw"></a>

#### resTv1.withdraw(withdrawType, walletSelected, amount, address)
POST /v1/withdraw

**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  

| Param | Type | Description |
| --- | --- | --- |
| withdrawType | <code>string</code> | "bitcoin", "litecoin", "darkcoin" or "mastercoin" |
| walletSelected | <code>string</code> | origin of the wallet to withdraw from, can be "trading", "exchange", or "deposit" |
| amount | <code>number</code> | amount to withdraw |
| address | <code>string</code> | destination address for withdrawal |

<a id="module_bfx-api-node-rest.RESTv1+transfer"></a>

#### resTv1.transfer(amount, currency, walletFrom, walletTo)
POST /v1/transfer

**Kind**: instance method of [<code>RESTv1</code>](#module_bfx-api-node-rest.RESTv1)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>number</code> | amount to transfer |
| currency | <code>string</code> | currency of funds to transfer |
| walletFrom | <code>string</code> | wallet to transfer from |
| walletTo | <code>string</code> | wallet to transfer to |

<a id="module_bfx-api-node-rest.RESTv2"></a>

### bfx-api-node-rest~RESTv2
Communicates with v2 of the Bitfinex HTTP API

**Kind**: inner class of [<code>bfx-api-node-rest</code>](#module_bfx-api-node-rest)  

* [~RESTv2](#module_bfx-api-node-rest.RESTv2)
    * [new RESTv2(opts)](#new_module_bfx-api-node-rest.RESTv2_new)
    * [.getURL()](#module_bfx-api-node-rest.RESTv2+getURL) ⇒ <code>boolean</code>
    * [.usesAgent()](#module_bfx-api-node-rest.RESTv2+usesAgent) ⇒ <code>boolean</code>
    * [.orderBook(symbol, prec, [cb])](#module_bfx-api-node-rest.RESTv2+orderBook) ⇒ <code>Promise</code>
    * [.publicPulseProfile(nickname, [cb])](#module_bfx-api-node-rest.RESTv2+publicPulseProfile) ⇒ <code>Promise</code>
    * [.status([cb])](#module_bfx-api-node-rest.RESTv2+status) ⇒ <code>Promise</code>
    * [.statusMessages([type], [keys], [cb])](#module_bfx-api-node-rest.RESTv2+statusMessages) ⇒ <code>Promise</code>
    * [.ticker(symbol, [cb])](#module_bfx-api-node-rest.RESTv2+ticker) ⇒ <code>Promise</code>
    * [.tickers(symbols, [cb])](#module_bfx-api-node-rest.RESTv2+tickers) ⇒ <code>Promise</code>
    * [.tickersHistory(symbols, [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+tickersHistory) ⇒ <code>Promise</code>
    * [.stats(key, context, [cb])](#module_bfx-api-node-rest.RESTv2+stats) ⇒ <code>Promise</code>
    * [.candles(opts, [cb])](#module_bfx-api-node-rest.RESTv2+candles) ⇒ <code>Promise</code>
    * [.conf(keys, [cb])](#module_bfx-api-node-rest.RESTv2+conf) ⇒ <code>Promise</code>
    * [.currencies([cb])](#module_bfx-api-node-rest.RESTv2+currencies) ⇒ <code>Promise</code>
    * [.alertList(type, [cb])](#module_bfx-api-node-rest.RESTv2+alertList) ⇒ <code>Promise</code>
    * [.alertSet(type, symbol, price, [cb])](#module_bfx-api-node-rest.RESTv2+alertSet) ⇒ <code>Promise</code>
    * [.alertDelete(symbol, price, [cb])](#module_bfx-api-node-rest.RESTv2+alertDelete) ⇒ <code>Promise</code>
    * [.trades(symbol, [start], [end], [limit], [sort], [cb])](#module_bfx-api-node-rest.RESTv2+trades) ⇒ <code>Promise</code>
    * [.liquidations([start], [end], [limit], [sort], [cb])](#module_bfx-api-node-rest.RESTv2+liquidations) ⇒ <code>Promise</code>
    * [.accountTrades([symbol], [start], [end], [limit], [sort], [cb])](#module_bfx-api-node-rest.RESTv2+accountTrades) ⇒ <code>Promise</code>
    * [.logins([start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+logins) ⇒ <code>Promise</code>
    * [.wallets([cb])](#module_bfx-api-node-rest.RESTv2+wallets) ⇒ <code>Promise</code>
    * [.walletsHistory([end], [currency], [cb])](#module_bfx-api-node-rest.RESTv2+walletsHistory) ⇒ <code>Promise</code>
    * [.userInfo([cb])](#module_bfx-api-node-rest.RESTv2+userInfo) ⇒ <code>Promise</code>
    * [.activeOrders([cb])](#module_bfx-api-node-rest.RESTv2+activeOrders) ⇒ <code>Promise</code>
    * [.activeOrdersWithIds([ids], cb)](#module_bfx-api-node-rest.RESTv2+activeOrdersWithIds) ⇒ <code>Promise</code>
    * [.movements([ccy], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+movements) ⇒ <code>Promise</code>
    * [.ledgers(filters, [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+ledgers) ⇒ <code>Promise</code>
    * [.orderHistory(symbol, [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+orderHistory) ⇒ <code>Promise</code>
    * [.orderHistoryWithIds([ids], cb)](#module_bfx-api-node-rest.RESTv2+orderHistoryWithIds) ⇒ <code>Promise</code>
    * [.orderTrades([symbol], [start], [end], [limit], [orderID], [cb])](#module_bfx-api-node-rest.RESTv2+orderTrades) ⇒ <code>Promise</code>
    * [.positions([cb])](#module_bfx-api-node-rest.RESTv2+positions) ⇒ <code>Promise</code>
    * [.positionsHistory([start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+positionsHistory) ⇒ <code>Promise</code>
    * [.positionsAudit([id], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+positionsAudit) ⇒ <code>Promise</code>
    * [.positionsSnapshot([start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+positionsSnapshot) ⇒ <code>Promise</code>
    * [.fundingOffers(symbol, [cb])](#module_bfx-api-node-rest.RESTv2+fundingOffers) ⇒ <code>Promise</code>
    * [.fundingOfferHistory([symbol], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+fundingOfferHistory) ⇒ <code>Promise</code>
    * [.fundingLoans([symbol], [cb])](#module_bfx-api-node-rest.RESTv2+fundingLoans) ⇒ <code>Promise</code>
    * [.fundingLoanHistory([symbol], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+fundingLoanHistory) ⇒ <code>Promise</code>
    * [.fundingCredits([symbol], [cb])](#module_bfx-api-node-rest.RESTv2+fundingCredits) ⇒ <code>Promise</code>
    * [.fundingCreditHistory([symbol], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+fundingCreditHistory) ⇒ <code>Promise</code>
    * [.fundingTrades([symbol], [start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+fundingTrades) ⇒ <code>Promise</code>
    * [.marginInfo(key, [cb])](#module_bfx-api-node-rest.RESTv2+marginInfo) ⇒ <code>Promise</code>
    * [.changeLogs([start], [end], [limit], [cb])](#module_bfx-api-node-rest.RESTv2+changeLogs) ⇒ <code>Promise</code>
    * [.fundingInfo(key, [cb])](#module_bfx-api-node-rest.RESTv2+fundingInfo) ⇒ <code>Promise</code>
    * [.performance([cb])](#module_bfx-api-node-rest.RESTv2+performance) ⇒ <code>Promise</code>
    * [.calcAvailableBalance(symbol, dir, rate, type, [cb])](#module_bfx-api-node-rest.RESTv2+calcAvailableBalance) ⇒ <code>Promise</code>
    * [.symbols([cb])](#module_bfx-api-node-rest.RESTv2+symbols) ⇒ <code>Promise</code>
    * [.inactiveSymbols([cb])](#module_bfx-api-node-rest.RESTv2+inactiveSymbols) ⇒ <code>Promise</code>
    * [.futures([cb])](#module_bfx-api-node-rest.RESTv2+futures) ⇒ <code>Promise</code>
    * [.derivsPositionCollateralSet(symbol, collateral, [cb])](#module_bfx-api-node-rest.RESTv2+derivsPositionCollateralSet) ⇒ <code>Promise</code>
    * ~~[.symbolDetails([cb])](#module_bfx-api-node-rest.RESTv2+symbolDetails) ⇒ <code>Promise</code>~~
    * ~~[.accountInfo([cb])](#module_bfx-api-node-rest.RESTv2+accountInfo) ⇒ <code>Promise</code>~~
    * ~~[.accountFees([cb])](#module_bfx-api-node-rest.RESTv2+accountFees) ⇒ <code>Promise</code>~~
    * [.accountSummary([cb])](#module_bfx-api-node-rest.RESTv2+accountSummary) ⇒ <code>Promise</code>
    * ~~[.keyPermissions([cb])](#module_bfx-api-node-rest.RESTv2+keyPermissions) ⇒ <code>Promise</code>~~
    * ~~[.balances([cb])](#module_bfx-api-node-rest.RESTv2+balances) ⇒ <code>Promise</code>~~
    * ~~[.closePosition(params, [cb])](#module_bfx-api-node-rest.RESTv2+closePosition) ⇒ <code>Promise</code>~~
    * [.updateSettings(settings, [cb])](#module_bfx-api-node-rest.RESTv2+updateSettings) ⇒ <code>Promise</code>
    * [.deleteSettings(keys, [cb])](#module_bfx-api-node-rest.RESTv2+deleteSettings) ⇒ <code>Promise</code>
    * [.getSettings(keys, [cb])](#module_bfx-api-node-rest.RESTv2+getSettings) ⇒ <code>Promise</code>
    * [.exchangeRate(ccy1, ccy2)](#module_bfx-api-node-rest.RESTv2+exchangeRate) ⇒ <code>Promise</code>
    * [.generateToken(opts, [cb])](#module_bfx-api-node-rest.RESTv2+generateToken) ⇒ <code>Promise</code>
    * [.submitOrder(order, [cb])](#module_bfx-api-node-rest.RESTv2+submitOrder) ⇒ <code>Promise</code>
    * [.updateOrder(changes, [cb])](#module_bfx-api-node-rest.RESTv2+updateOrder) ⇒ <code>Promise</code>
    * [.cancelOrder(id, [cb])](#module_bfx-api-node-rest.RESTv2+cancelOrder) ⇒ <code>Promise</code>
    * [.cancelOrderWithCid(cid, date, cb)](#module_bfx-api-node-rest.RESTv2+cancelOrderWithCid) ⇒ <code>Promise</code>
    * [.claimPosition(id, [cb])](#module_bfx-api-node-rest.RESTv2+claimPosition) ⇒ <code>Promise</code>
    * [.submitFundingOffer(offer, [cb])](#module_bfx-api-node-rest.RESTv2+submitFundingOffer) ⇒ <code>Promise</code>
    * [.cancelFundingOffer(id, [cb])](#module_bfx-api-node-rest.RESTv2+cancelFundingOffer) ⇒ <code>Promise</code>
    * [.cancelAllFundingOffers(params, [cb])](#module_bfx-api-node-rest.RESTv2+cancelAllFundingOffers) ⇒ <code>Promise</code>
    * [.closeFunding(params, [cb])](#module_bfx-api-node-rest.RESTv2+closeFunding) ⇒ <code>Promise</code>
    * [.submitAutoFunding(params, [cb])](#module_bfx-api-node-rest.RESTv2+submitAutoFunding) ⇒ <code>Promise</code>
    * [.transfer(params, [cb])](#module_bfx-api-node-rest.RESTv2+transfer) ⇒ <code>Promise</code>
    * [.getDepositAddress(params, [cb])](#module_bfx-api-node-rest.RESTv2+getDepositAddress) ⇒ <code>Promise</code>
    * [.withdraw(params, [cb])](#module_bfx-api-node-rest.RESTv2+withdraw) ⇒ <code>Promise</code>

<a id="new_module_bfx-api-node-rest.RESTv2_new"></a>

#### new RESTv2(opts)
Instantiate a new REST v2 transport.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| opts | <code>object</code> |  | options |
| [opts.affCode] | <code>string</code> |  | affiliate code to be applied to all orders |
| [opts.apiKey] | <code>string</code> |  | API key |
| [opts.apiSecret] | <code>string</code> |  | API secret |
| [opts.authToken] | <code>string</code> |  | auth option |
| [opts.url] | <code>string</code> | <code>&quot;&#x27;https://api.bitfinex.com&#x27;&quot;</code> | endpoint URL |
| [opts.transform] | <code>boolean</code> | <code>false</code> | enables automatic conversion of   received data to model instances |
| [opts.agent] | <code>object</code> |  | node agent for connection (proxy) |

<a id="module_bfx-api-node-rest.RESTv2+getURL"></a>

#### resTv2.getURL() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>boolean</code> - url  
<a id="module_bfx-api-node-rest.RESTv2+usesAgent"></a>

#### resTv2.usesAgent() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>boolean</code> - usesAgent  
<a id="module_bfx-api-node-rest.RESTv2+orderBook"></a>

#### resTv2.orderBook(symbol, prec, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-books  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | <code>&quot;tBTCUSD&quot;</code> | i.e. tBTCUSD |
| prec | <code>string</code> | <code>&quot;P0&quot;</code> | i.e. P0 |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+publicPulseProfile"></a>

#### resTv2.publicPulseProfile(nickname, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/reference#rest-public-pulse-profile  

| Param | Type | Description |
| --- | --- | --- |
| nickname | <code>string</code> | i.e. Bitfinex |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+status"></a>

#### resTv2.status([cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-platform-status  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+statusMessages"></a>

#### resTv2.statusMessages([type], [keys], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#status  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [type] | <code>string</code> | <code>&quot;deriv&quot;</code> | type |
| [keys] | <code>Array.&lt;string&gt;</code> |  | keys |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+ticker"></a>

#### resTv2.ticker(symbol, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-ticker  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | <code>&quot;tBTCUSD&quot;</code> | symbol |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+tickers"></a>

#### resTv2.tickers(symbols, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-tickers  

| Param | Type | Description |
| --- | --- | --- |
| symbols | <code>Array.&lt;string&gt;</code> | symbols |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+tickersHistory"></a>

#### resTv2.tickersHistory(symbols, [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-tickers-history  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| symbols | <code>Array.&lt;string&gt;</code> |  | symbols |
| [start] | <code>number</code> |  | query start timestamp |
| [end] | <code>number</code> |  | query end timestamp |
| [limit] | <code>number</code> | <code>250</code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+stats"></a>

#### resTv2.stats(key, context, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-stats  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>string</code> | <code>&quot;pos.size:1m:tBTCUSD:long&quot;</code> | key |
| context | <code>string</code> | <code>&quot;hist&quot;</code> | context |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+candles"></a>

#### resTv2.candles(opts, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: http://docs.bitfinex.com/v2/reference#rest-public-candles  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | options |
| opts.timeframe | <code>string</code> | 1m, 5m, 15m, 30m, 1h, 3h, 6h, 12h, 1D, 7D, 14D, 1M |
| opts.symbol | <code>string</code> | symbol |
| opts.section | <code>string</code> | hist, last |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+conf"></a>

#### resTv2.conf(keys, [cb]) ⇒ <code>Promise</code>
Query configuration information

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>Array.&lt;string&gt;</code> | keys |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+currencies"></a>

#### resTv2.currencies([cb]) ⇒ <code>Promise</code>
Get a list of valid currencies ids, full names, pool and explorer

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-currencies  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | legacy callback |

<a id="module_bfx-api-node-rest.RESTv2+alertList"></a>

#### resTv2.alertList(type, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-alert-list  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> | <code>&quot;price&quot;</code> | type |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+alertSet"></a>

#### resTv2.alertSet(type, symbol, price, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-alert-set  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> | <code>&quot;price&quot;</code> | type |
| symbol | <code>string</code> | <code>&quot;tBTCUSD&quot;</code> | symbol |
| price | <code>number</code> | <code>0</code> | price |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+alertDelete"></a>

#### resTv2.alertDelete(symbol, price, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-alert-delete  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | <code>&quot;tBTCUSD&quot;</code> | symbol |
| price | <code>number</code> | <code>0</code> | price |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+trades"></a>

#### resTv2.trades(symbol, [start], [end], [limit], [sort], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-trades  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | <code>&quot;tBTCUSD&quot;</code> | symbol |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> | <code></code> | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [sort] | <code>number</code> | <code></code> | if 1, sorts results oldest first |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+liquidations"></a>

#### resTv2.liquidations([start], [end], [limit], [sort], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-liquidations  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> | <code></code> | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [sort] | <code>number</code> | <code></code> | if 1, sorts results oldest first |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+accountTrades"></a>

#### resTv2.accountTrades([symbol], [start], [end], [limit], [sort], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-trades-hist  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [symbol] | <code>string</code> |  | optional, omit/leave empty for all |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> | <code></code> | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [sort] | <code>number</code> | <code></code> | if 1, sorts results oldest first |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+logins"></a>

#### resTv2.logins([start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-logins-hist  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code>0</code> | query start |
| [end] | <code>number</code> |  | query end |
| [limit] | <code>number</code> | <code>25</code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+wallets"></a>

#### resTv2.wallets([cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-wallets  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+walletsHistory"></a>

#### resTv2.walletsHistory([end], [currency], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-wallets-hist  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [end] | <code>number</code> |  | query end |
| [currency] | <code>string</code> | <code>null</code> | currency |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+userInfo"></a>

#### resTv2.userInfo([cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/reference#rest-auth-info-user  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+activeOrders"></a>

#### resTv2.activeOrders([cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-orders  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+activeOrdersWithIds"></a>

#### resTv2.activeOrdersWithIds([ids], cb) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-orders  

| Param | Type | Description |
| --- | --- | --- |
| [ids] | <code>Array</code> | order ids |
| cb | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+movements"></a>

#### resTv2.movements([ccy], [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#movements  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [ccy] | <code>string</code> |  | i.e. ETH |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> |  | query end |
| [limit] | <code>number</code> | <code>25</code> | query limit, default 25 |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+ledgers"></a>

#### resTv2.ledgers(filters, [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#ledgers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filters | <code>object</code> \| <code>string</code> |  | filters |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> |  | query end |
| [limit] | <code>number</code> | <code>25</code> | default 25 |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+orderHistory"></a>

#### resTv2.orderHistory(symbol, [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#orders-history  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> |  | optional, omit/leave empty for all |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> | <code></code> | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+orderHistoryWithIds"></a>

#### resTv2.orderHistoryWithIds([ids], cb) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#orders-history  

| Param | Type | Description |
| --- | --- | --- |
| [ids] | <code>Array</code> | order ids |
| cb | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+orderTrades"></a>

#### resTv2.orderTrades([symbol], [start], [end], [limit], [orderID], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-order-trades  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [symbol] | <code>string</code> | <code>&quot;tBTCUSD&quot;</code> | symbol |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> | <code></code> | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [orderID] | <code>number</code> |  | order ID |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+positions"></a>

#### resTv2.positions([cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-positions  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+positionsHistory"></a>

#### resTv2.positionsHistory([start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-positions-history  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code>0</code> | query start |
| [end] | <code>number</code> |  | query end |
| [limit] | <code>number</code> | <code>50</code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+positionsAudit"></a>

#### resTv2.positionsAudit([id], [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-positions-audit  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [id] | <code>Array.&lt;Array&gt;</code> |  | ids of positions to audit |
| [start] | <code>number</code> | <code>0</code> | query start |
| [end] | <code>number</code> |  | query end |
| [limit] | <code>number</code> | <code>250</code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+positionsSnapshot"></a>

#### resTv2.positionsSnapshot([start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-positions-snap  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code>0</code> | query start |
| [end] | <code>number</code> |  | query end |
| [limit] | <code>number</code> | <code>50</code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+fundingOffers"></a>

#### resTv2.fundingOffers(symbol, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-funding-offers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | <code>&quot;fUSD&quot;</code> | symbol |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+fundingOfferHistory"></a>

#### resTv2.fundingOfferHistory([symbol], [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-funding-offers-hist  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [symbol] | <code>string</code> |  | omit/leave empty for all |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> | <code></code> | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+fundingLoans"></a>

#### resTv2.fundingLoans([symbol], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-funding-loans  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [symbol] | <code>string</code> | <code>&quot;fUSD&quot;</code> | symbol |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+fundingLoanHistory"></a>

#### resTv2.fundingLoanHistory([symbol], [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-funding-loans-hist  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [symbol] | <code>string</code> |  | omit/leave empty for all |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> | <code></code> | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+fundingCredits"></a>

#### resTv2.fundingCredits([symbol], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-funding-credits  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [symbol] | <code>string</code> | <code>&quot;fUSD&quot;</code> | symbol |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+fundingCreditHistory"></a>

#### resTv2.fundingCreditHistory([symbol], [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-funding-credits-hist  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [symbol] | <code>string</code> |  | omit/leave empty for all |
| [start] | <code>number</code> | <code></code> | query start |
| [end] | <code>number</code> | <code></code> | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+fundingTrades"></a>

#### resTv2.fundingTrades([symbol], [start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-funding-trades-hist  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [symbol] | <code>string</code> | <code>&quot;fBTC&quot;</code> | optional, omit/leave empty for all |
| [start] | <code>number</code> | <code>0</code> | query start |
| [end] | <code>number</code> |  | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+marginInfo"></a>

#### resTv2.marginInfo(key, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-info-margin  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>string</code> | <code>&quot;base&quot;</code> | key |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+changeLogs"></a>

#### resTv2.changeLogs([start], [end], [limit], [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-audit-hist  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code>0</code> | query start |
| [end] | <code>number</code> |  | query end |
| [limit] | <code>number</code> | <code></code> | query limit |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+fundingInfo"></a>

#### resTv2.fundingInfo(key, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-info-funding  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>string</code> | <code>&quot;fUSD&quot;</code> | key |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+performance"></a>

#### resTv2.performance([cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-performance  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+calcAvailableBalance"></a>

#### resTv2.calcAvailableBalance(symbol, dir, rate, type, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-calc-bal-avail  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | <code>&quot;tBTCUSD&quot;</code> | symbol |
| dir | <code>string</code> |  | dir |
| rate | <code>number</code> |  | rate |
| type | <code>string</code> |  | type |
| [cb] | <code>function</code> |  | callback |

<a id="module_bfx-api-node-rest.RESTv2+symbols"></a>

#### resTv2.symbols([cb]) ⇒ <code>Promise</code>
Get a list of valid symbol names

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-symbols  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | legacy callback |

<a id="module_bfx-api-node-rest.RESTv2+inactiveSymbols"></a>

#### resTv2.inactiveSymbols([cb]) ⇒ <code>Promise</code>
Get a list of inactive symbol names

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-symbols  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | legacy callback |

<a id="module_bfx-api-node-rest.RESTv2+futures"></a>

#### resTv2.futures([cb]) ⇒ <code>Promise</code>
Get a list of valid symbol names

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-public-futures  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | legacy callback |

<a id="module_bfx-api-node-rest.RESTv2+derivsPositionCollateralSet"></a>

#### resTv2.derivsPositionCollateralSet(symbol, collateral, [cb]) ⇒ <code>Promise</code>
Changes the collateral value of an active derivatives position for a certain pair.

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v2/reference#rest-auth-deriv-pos-collateral-set  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | symbol |
| collateral | <code>number</code> | collateral |
| [cb] | <code>function</code> | legacy callback |

<a id="module_bfx-api-node-rest.RESTv2+symbolDetails"></a>

#### ~~resTv2.symbolDetails([cb]) ⇒ <code>Promise</code>~~
***Deprecated***

Get a list of valid symbol names and details

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v1/reference#rest-public-symbol-details  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callbak |

<a id="module_bfx-api-node-rest.RESTv2+accountInfo"></a>

#### ~~resTv2.accountInfo([cb]) ⇒ <code>Promise</code>~~
***Deprecated***

Request information about your account

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-account-info  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+accountFees"></a>

#### ~~resTv2.accountFees([cb]) ⇒ <code>Promise</code>~~
***Deprecated***

Request account withdrawl fees

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-fees  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+accountSummary"></a>

#### resTv2.accountSummary([cb]) ⇒ <code>Promise</code>
Returns a 30-day summary of your trading volume and return on margin
funding.

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-summary  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+keyPermissions"></a>

#### ~~resTv2.keyPermissions([cb]) ⇒ <code>Promise</code>~~
***Deprecated***

Fetch the permissions of the key being used to generate this request

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v1/reference#auth-key-permissions  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+balances"></a>

#### ~~resTv2.balances([cb]) ⇒ <code>Promise</code>~~
***Deprecated***

Request your wallet balances

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-wallet-balances  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+closePosition"></a>

#### ~~resTv2.closePosition(params, [cb]) ⇒ <code>Promise</code>~~
***Deprecated***

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  
**See**: https://docs.bitfinex.com/v1/reference#rest-auth-close-position  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | parameters |
| params.position_id | <code>number</code> | position ID |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+updateSettings"></a>

#### resTv2.updateSettings(settings, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| settings | <code>object</code> | key:value map |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+deleteSettings"></a>

#### resTv2.deleteSettings(keys, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>Array.&lt;string&gt;</code> | keys |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+getSettings"></a>

#### resTv2.getSettings(keys, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>Array.&lt;string&gt;</code> | keys |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+exchangeRate"></a>

#### resTv2.exchangeRate(ccy1, ccy2) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p - resolves to currenct exchange rate  

| Param | Type | Description |
| --- | --- | --- |
| ccy1 | <code>string</code> | i.e. BTC |
| ccy2 | <code>string</code> | i.e. USD |

<a id="module_bfx-api-node-rest.RESTv2+generateToken"></a>

#### resTv2.generateToken(opts, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | options |
| opts.ttl | <code>number</code> | time-to-live |
| opts.scope | <code>string</code> | scope |
| opts.writePermission | <code>boolean</code> | write permission |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+submitOrder"></a>

#### resTv2.submitOrder(order, [cb]) ⇒ <code>Promise</code>
Submit new order

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| order | <code>Order</code> | order model instance |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+updateOrder"></a>

#### resTv2.updateOrder(changes, [cb]) ⇒ <code>Promise</code>
Update existing order

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| changes | <code>object</code> | updates to order |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+cancelOrder"></a>

#### resTv2.cancelOrder(id, [cb]) ⇒ <code>Promise</code>
Cancel existing order

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | order id |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+cancelOrderWithCid"></a>

#### resTv2.cancelOrderWithCid(cid, date, cb) ⇒ <code>Promise</code>
Cancel existing order using the cID

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| cid | <code>number</code> | cid |
| date | <code>string</code> | Date of order YYYY-MM-DD |
| cb | <code>Method</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+claimPosition"></a>

#### resTv2.claimPosition(id, [cb]) ⇒ <code>Promise</code>
Claim existing open position

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | position id |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+submitFundingOffer"></a>

#### resTv2.submitFundingOffer(offer, [cb]) ⇒ <code>Promise</code>
Submit new funding offer

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| offer | <code>object</code> | offer model instance |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+cancelFundingOffer"></a>

#### resTv2.cancelFundingOffer(id, [cb]) ⇒ <code>Promise</code>
Cancel existing funding offer

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | offer id |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+cancelAllFundingOffers"></a>

#### resTv2.cancelAllFundingOffers(params, [cb]) ⇒ <code>Promise</code>
Cancel all existing funding offers

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | parameters |
| params.currency | <code>string</code> | currency i.e USD |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+closeFunding"></a>

#### resTv2.closeFunding(params, [cb]) ⇒ <code>Promise</code>
Close funding

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | parameters |
| params.id | <code>number</code> | funding id |
| params.type | <code>string</code> | funding type LIMIT | FRRDELTAVAR |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+submitAutoFunding"></a>

#### resTv2.submitAutoFunding(params, [cb]) ⇒ <code>Promise</code>
Submit automatic funding

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | parameters |
| params.status | <code>number</code> | status |
| params.currency | <code>string</code> | currency i.e fUSD |
| params.amount | <code>number</code> | amount to borrow/lend |
| params.rate | <code>number</code> | if == 0 then FRR is used |
| params.period | <code>number</code> | time the offer remains locked in for |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+transfer"></a>

#### resTv2.transfer(params, [cb]) ⇒ <code>Promise</code>
Execute a balance transfer between wallets

**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | parameters |
| params.amount | <code>number</code> | amount to transfer |
| params.from | <code>string</code> | wallet from |
| params.to | <code>string</code> | wallet to |
| params.currency | <code>string</code> | currency from |
| params.currencyTo | <code>string</code> | currency to |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+getDepositAddress"></a>

#### resTv2.getDepositAddress(params, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | parameters |
| params.wallet | <code>string</code> | wallet i.e exchange, margin |
| params.method | <code>string</code> | protocol method i.e bitcoin, tetherus |
| params.opRenew | <code>nubmer</code> | if 1 then generates a new address |
| [cb] | <code>function</code> | callback |

<a id="module_bfx-api-node-rest.RESTv2+withdraw"></a>

#### resTv2.withdraw(params, [cb]) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RESTv2</code>](#module_bfx-api-node-rest.RESTv2)  
**Returns**: <code>Promise</code> - p  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | parameters |
| params.wallet | <code>string</code> | wallet i.e exchange, margin |
| params.method | <code>string</code> | protocol method i.e bitcoin, tetherus |
| params.amount | <code>number</code> | amount to withdraw |
| params.address | <code>string</code> | destination address |
| [cb] | <code>function</code> | callback |

