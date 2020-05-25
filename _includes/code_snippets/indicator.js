const ema = new EMA([20])

ema.add(14000)
// …

console.log('ema(20) value: %f', ema.v())
