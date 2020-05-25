if (this.inALongPosition()) {
  if (
    (this.ticksSinceLastTrade() > 5) &&
    (price > lastTrade.price) &&
    (price < l) &&
    (prevCandleA.close < prevCandleA.iv.l) &&
    (prevCandleB.close < prevCandleB.iv.l)
  ) {
    return closePosition('close long A')
  }
}
