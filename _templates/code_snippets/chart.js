import React from 'react'
import HFI from 'bfx-hf-indicators'
import BFXChart from '../dist/components/Chart/Chart'

const DATA = [....]
const INDICATORS = [
  [new HFI.EMA([20]), [20]],
  [new HFI.EMA([100]), [100]],
  [new HFI.RSI([14]), [14]]
]

const DemoComponent = () => (
  <BFXChart
    disableToolbar
    candles={DATA}
    candleWidth='1m'
    indicators={indicators}
    width={800}
    height={600}
  />
)
