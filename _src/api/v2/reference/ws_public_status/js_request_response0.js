// request
{ 
  event: "subscribe", 
  channel: "status", 
  key: KEY
}

// response - 
{
   event: "subscribed",
   channel: "status",
   chanId: CHANNEL_ID,
   key: KEY
}

//Derivative pair status
{"event":"subscribed","channel":"status","chanId":335856,"key":"deriv:tBTCF0:USTF0"}

//Liquidation feed
{"event":"subscribed","channel":"status","chanId":91684,"key":"liq:global"}