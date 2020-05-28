// request
{ 
  event: "subscribe", 
  channel: "ticker", 
  symbol: SYMBOL
}

// response - trading
{
   event: "subscribed",
   channel: "ticker",
   chanId: CHANNEL_ID,
   symbol: SYMBOL,
   pair: PAIR
}

{"event":"subscribed","channel":"ticker","chanId":224555,"symbol":"tBTCUSD","pair":"BTCUSD"}

// response - funding
{
  event: "subscribed",
  channel: "fticker",
  chanId: CHANNEL_ID,
  symbol: SYMBOL
}

{"event":"subscribed","channel":"ticker","chanId":232591,"symbol":"fUSD","currency":"USD"}