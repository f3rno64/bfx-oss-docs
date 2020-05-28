// request
{ 
  event: "subscribe", 
  channel: "trades", 
  symbol: SYMBOL 
}

// response Trading
{
  event: "subscribed",
  channel: "trades",
  chanId: CHANNEL_ID,
  symbol: "tBTCUSD"
  pair: "BTCUSD"
}

{"event":"subscribed","channel":"trades","chanId":19111,"symbol":"tBTCUSD","pair":"BTCUSD"}

// response Funding
{
  event: "subscribed",
  channel: "trades",
  chanId: CHANNEL_ID,
  symbol: "fUSD"
}

{"event":"subscribed","channel":"trades","chanId":339521,"symbol":"fUSD","currency":"USD"}