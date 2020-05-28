Data payloads received via version 2 of the WebSocket API
{@link module:bitfinex-api-node.WSv2|client} are in `Array` format, and can
be automatically converted to model instances upon receival, prior to being
passed onwards to the relevant listeners by setting `transform: true` in the
{@link module:bitfinex-api-node.WSv2~Configuration|config} when instantiating a
{@link module:bitfinex-api-node.WSv2|WSv2} client instance.

#### WebSocket API v2 Array Data Format

Information on the value type & purpose at each index in an array payload can
be found in the relevant type definitions linked below:

* {@link module:bfx-api-node-models.Order~ArrayData|Order Array Data}
* {@link module:bfx-api-node-models.Alert~ArrayData|Alert Array Data}
* {@link module:bfx-api-node-models.BalanceInfo~ArrayData|Balance Info Array Data}
* {@link module:bfx-api-node-models.Candle~ArrayData|Candle Array Data}
* {@link module:bfx-api-node-models.ChangeLog~ArrayData|Change Log Array Data}
* {@link module:bfx-api-node-models.Currency~ArrayData|Currency Array Data}
* {@link module:bfx-api-node-models.FundingCredit~ArrayData|Funding Credit Array Data}
* {@link module:bfx-api-node-models.FundingInfo~ArrayData|Funding Info Array Data}
* {@link module:bfx-api-node-models.FundingLoan~ArrayData|Funding Loan Array Data}
* {@link module:bfx-api-node-models.FundingOffer~ArrayData|Funding Offer Array Data}
* {@link module:bfx-api-node-models.FundingTickerHist~ArrayData|Funding Ticker Hist Array Data}
* {@link module:bfx-api-node-models.FundingTicker~ArrayData|Funding Ticker Array Data}
* {@link module:bfx-api-node-models.FundingTrade~ArrayData|Funding Trade Array Data}
* {@link module:bfx-api-node-models.LedgerEntry~ArrayData|Ledger Entry Array Data}
* {@link module:bfx-api-node-models.Liquidations~ArrayData|Liquidations Array Data}
* {@link module:bfx-api-node-models.Login~ArrayData|Login Array Data}
* {@link module:bfx-api-node-models.MarginInfo~ArrayData|MarginInfo Array Data}
* {@link module:bfx-api-node-models.Movement~ArrayData|Movement Array Data}
* {@link module:bfx-api-node-models.Notification~ArrayData|Notification Array Data}
* {@link module:bfx-api-node-models.OrderBook~ArrayData|OrderBook Array Data}
* {@link module:bfx-api-node-models.Order~ArrayData|Order Array Data}
* {@link module:bfx-api-node-models.Position~ArrayData|Position Array Data}
* {@link module:bfx-api-node-models.PublicPulseProfile~ArrayData|Public Pulse Profile Array Data}
* {@link module:bfx-api-node-models.PublicTrade~ArrayData|Public Trade Array Data}
* {@link module:bfx-api-node-models.PulseMessage~ArrayData|Pulse Message Array Data}
* {@link module:bfx-api-node-models.StatusMessagesDeriv~ArrayData|Status Messages Deriv Array Data}
* {@link module:bfx-api-node-models.Trade~ArrayData|Trade Array Data}
* {@link module:bfx-api-node-models.TradingTickerHist~ArrayData|Trading TickerHist Array Data}
* {@link module:bfx-api-node-models.TradingTicker~ArrayData|Trading Ticker Array Data}
* {@link module:bfx-api-node-models.UserInfo~ArrayData|User Info Array Data}
* {@link module:bfx-api-node-models.WalletHist~ArrayData|Wallet History Array Data}
* {@link module:bfx-api-node-models.Wallet~ArrayData|Wallet Array Data}

#### High-Level Data Models

For each payload which may be received, there is a corresponding
{@link module:bfx-api-node-models.Model|Model} child class offering high level
manipulation methods, such as validation and data processing
(i.e. {@link module:bfx-api-node-models.OrderBook|Order Book}). Refer to the
class list below for further information:

* {@link module:bfx-api-node-models.Order|Order}
* {@link module:bfx-api-node-models.Alert|Alert}
* {@link module:bfx-api-node-models.BalanceInfo|Balance Info}
* {@link module:bfx-api-node-models.Candle|Candle}
* {@link module:bfx-api-node-models.ChangeLog|Change Log}
* {@link module:bfx-api-node-models.Currency|Currency}
* {@link module:bfx-api-node-models.FundingCredit|Funding Credit}
* {@link module:bfx-api-node-models.FundingInfo|Funding Info}
* {@link module:bfx-api-node-models.FundingLoan|Funding Loan}
* {@link module:bfx-api-node-models.FundingOffer|Funding Offer}
* {@link module:bfx-api-node-models.FundingTickerHist|Funding Ticker Hist}
* {@link module:bfx-api-node-models.FundingTicker|Funding Ticker}
* {@link module:bfx-api-node-models.FundingTrade|Funding Trade}
* {@link module:bfx-api-node-models.LedgerEntry|Ledger Entry}
* {@link module:bfx-api-node-models.Liquidations|Liquidations}
* {@link module:bfx-api-node-models.Login|Login}
* {@link module:bfx-api-node-models.MarginInfo|MarginInfo}
* {@link module:bfx-api-node-models.Movement|Movement}
* {@link module:bfx-api-node-models.Notification|Notification}
* {@link module:bfx-api-node-models.OrderBook|OrderBook}
* {@link module:bfx-api-node-models.Order|Order}
* {@link module:bfx-api-node-models.Position|Position}
* {@link module:bfx-api-node-models.PublicPulseProfile|Public Pulse Profile}
* {@link module:bfx-api-node-models.PublicTrade|Public Trade}
* {@link module:bfx-api-node-models.PulseMessage|Pulse Message}
* {@link module:bfx-api-node-models.StatusMessagesDeriv|Status Messages Deriv}
* {@link module:bfx-api-node-models.Trade|Trade}
* {@link module:bfx-api-node-models.TradingTickerHist|Trading TickerHist}
* {@link module:bfx-api-node-models.TradingTicker|Trading Ticker}
* {@link module:bfx-api-node-models.UserInfo|User Info}
* {@link module:bfx-api-node-models.WalletHist|Wallet History}
* {@link module:bfx-api-node-models.Wallet|Wallet}
