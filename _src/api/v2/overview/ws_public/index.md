---
id: ws-public
title: "Public Channels"
---

### URL
Public channels should use the domain:
wss://api-pub.bitfinex.com/

The domain:
wss://api.bitfinex.com/
Should only be used for channels that require authentication.

### Connecting to a channel

Use a subscription message to subscribe to a channel:

```json
{
   "event": "subscribe",
   "channel": CHANNEL_NAME
}
```

Each channel documentation page also includes example subscription messages.

- [Ticker](/v2/reference#ws-public-ticker)
- [Trades](/v2/reference#ws-public-trades)
- [Books](/v2/reference#ws-public-order-books)
- [Raw Books](/v2/reference#ws-public-raw-order-books)
- [Candles](/v2/reference#ws-public-candle)
