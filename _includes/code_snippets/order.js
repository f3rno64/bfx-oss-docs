const ws = new WSv2({ transform: true })
const o = new Order({
  type: Order.type.EXCHANGE_LIMIT,
  symbol: 'tBTCUSD',
  price: 10000,
  amount: -1,
  cid: Date.now()
}, ws)

await o.submit()
