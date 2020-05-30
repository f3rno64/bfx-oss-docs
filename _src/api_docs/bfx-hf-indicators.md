<a id="module_bfx-hf-indicators"></a>

## bfx-hf-indicators
This module contains a collection of trading indicators implemented to
support incremental updates, both from trade and candle data (depending on
the indicator).

### Features
* [Average True Range](#module_bfx-hf-indicators.ATR)
* [Normalised Average True Range](#module_bfx-hf-indicators.NATR)
* [Acceleration](#module_bfx-hf-indicators.Acceleration)
* [Accumulation/Distribution](#module_bfx-hf-indicators.AccumulationDistribution)
* [Accumulative Swing Index](#module_bfx-hf-indicators.AccumulativeSwingIndex)
* [Arnoud Legoux Moving Average](module:bxf-hf-indicators.ALMA)
* [Aroon](module:bxf-hf-indicators.Aroon)
* [Average Directional Index](module:bxf-hf-indicators.ADX)
* [Awesome Oscillator](module:bxf-hf-indicators.AO)
* [Balance of Power](module:bxf-hf-indicators.BOP)
* [Bollinger Bands](module:bxf-hf-indicators.BollingerBands)
* [Chaikin Money Flow](module:bxf-hf-indicators.CMF)
* [Chaikin Oscillator](module:bxf-hf-indicators.ChaikinOsc)
* [Chande Momentum Oscillator](module:bxf-hf-indicators.ChandeMO)
* [Coppock Curve](module:bxf-hf-indicators.CoppockCurve)
* [Detrended Price Oscillator](module:bxf-hf-indicators.DPO)
* [Donchian Channels](module:bxf-hf-indicators.DC)
* [Ease of Movement](module:bxf-hf-indicators.EOM)
* [Envelope](module:bxf-hf-indicators.Envelope)
* [Exponential Moving Average](module:bxf-hf-indicators.EMA)
* [Exponential Moving Average of Volume](module:bxf-hf-indicators.EMAVolume)
* [Know Sure Thing](module:bxf-hf-indicators.KST)
* [MACD](module:bxf-hf-indicators.MACD)
* [Mass Index](module:bxf-hf-indicators.MassIndex)
* [Momentum](module:bxf-hf-indicators.Momentum)
* [Net Volume](module:bxf-hf-indicators.NetVolume)
* [On Balance Volume](module:bxf-hf-indicators.OBV)
* [Price Channel](module:bxf-hf-indicators.PC)
* [Price Oscillator](module:bxf-hf-indicators.PPO)
* [Price Volume Trend](module:bxf-hf-indicators.PVT)
* [RSI](module:bxf-hf-indicators.RSI)
* [Rate of Change](module:bxf-hf-indicators.ROC)
* [Relative Vigor Index](module:bxf-hf-indicators.RVGI)
* [Relative Volatility Index](module:bxf-hf-indicators.RVI)
* [Smoothed Moving Average](module:bxf-hf-indicators.SMA)
* [Standard Deviation](module:bxf-hf-indicators.StdDeviation)
* [Stochastic](module:bxf-hf-indicators.Stochastic)
* [Stochastic RSI](module:bxf-hf-indicators.StochasticRSI)
* [TRIX](module:bxf-hf-indicators.TRIX)
* [True Strength Index](module:bxf-hf-indicators.TSI)
* [Volume Weighted Average Price](module:bxf-hf-indicators.VWAP)
* [Volume Oscillator](module:bxf-hf-indicators.VO)
* [Volume Weighted Moving Average](module:bxf-hf-indicators.VWMA)
* [Weighted Moving Average](module:bxf-hf-indicators.WMA)
* [Williams %R](module:bxf-hf-indicators.WilliamsR)

### Installation

```bash
npm i --save bfx-hf-indicators
```

### Quickstart & Example
```js
const { RSI } = require('bfx-hf-indicators')

const rsi = new RSI([14])

rsi.add(14000)
rsi.add(14010)
rsi.add(14025)
rsi.add(14035)
// ...
// 8 more data points
// ...
rsi.add(13998)
rsi.add(13952)

const v = rsi.v() // query current RSI(14) value
```

**License**: Apache-2.0  
::: api-docs-index
* [bfx-hf-indicators](#module_bfx-hf-indicators)
    * [~Acceleration](#module_bfx-hf-indicators.Acceleration) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~AccumulationDistribution](#module_bfx-hf-indicators.AccumulationDistribution) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~AccumulativeSwingIndex](#module_bfx-hf-indicators.AccumulativeSwingIndex) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~ALMA](#module_bfx-hf-indicators.ALMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~Aroon](#module_bfx-hf-indicators.Aroon) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~ATR](#module_bfx-hf-indicators.ATR) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [new ATR(args)](#new_module_bfx-hf-indicators.ATR_new)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~ADX](#module_bfx-hf-indicators.ADX) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~AO](#module_bfx-hf-indicators.AO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~BOP](#module_bfx-hf-indicators.BOP) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~BollingerBands](#module_bfx-hf-indicators.BollingerBands) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~CMF](#module_bfx-hf-indicators.CMF) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~ChaikinOsc](#module_bfx-hf-indicators.ChaikinOsc) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~ChandeMO](#module_bfx-hf-indicators.ChandeMO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~CoppockCurve](#module_bfx-hf-indicators.CoppockCurve) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~DPO](#module_bfx-hf-indicators.DPO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~DC](#module_bfx-hf-indicators.DC) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~EOM](#module_bfx-hf-indicators.EOM) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~EMAVolume](#module_bfx-hf-indicators.EMAVolume) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~EMA](#module_bfx-hf-indicators.EMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~Envelope](#module_bfx-hf-indicators.Envelope) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~Indicator](#module_bfx-hf-indicators.Indicator)
        * [new Indicator(opts)](#new_module_bfx-hf-indicators.Indicator_new)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~KST](#module_bfx-hf-indicators.KST) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~MACD](#module_bfx-hf-indicators.MACD) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~MassIndex](#module_bfx-hf-indicators.MassIndex) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~Momentum](#module_bfx-hf-indicators.Momentum) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~NetVolume](#module_bfx-hf-indicators.NetVolume) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~NATR](#module_bfx-hf-indicators.NATR) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~OBV](#module_bfx-hf-indicators.OBV) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~PC](#module_bfx-hf-indicators.PC) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~PPO](#module_bfx-hf-indicators.PPO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~PVT](#module_bfx-hf-indicators.PVT) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~RVGI](#module_bfx-hf-indicators.RVGI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~RVI](#module_bfx-hf-indicators.RVI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~ROC](#module_bfx-hf-indicators.ROC) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~RSI](#module_bfx-hf-indicators.RSI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~SMA](#module_bfx-hf-indicators.SMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~StdDeviation](#module_bfx-hf-indicators.StdDeviation) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~StochasticRSI](#module_bfx-hf-indicators.StochasticRSI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~Stochastic](#module_bfx-hf-indicators.Stochastic) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~TRIX](#module_bfx-hf-indicators.TRIX) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~TSI](#module_bfx-hf-indicators.TSI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~VO](#module_bfx-hf-indicators.VO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~VWAP](#module_bfx-hf-indicators.VWAP) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~VWMA](#module_bfx-hf-indicators.VWMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~WilliamsR](#module_bfx-hf-indicators.WilliamsR) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
    * [~WMA](#module_bfx-hf-indicators.WMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
        * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
        * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
        * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
        * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
        * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
        * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
        * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
        * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
        * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
        * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
        * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
        * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
        * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
        * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
        * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
        * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>
:::
<a id="module_bfx-hf-indicators.Acceleration"></a>

### bfx-hf-indicators~Acceleration ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Acceleration

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~Acceleration](#module_bfx-hf-indicators.Acceleration) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### acceleration.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### acceleration.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### acceleration.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### acceleration.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### acceleration.update(v)
**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### acceleration.add(v)
**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### acceleration.reset()
Clears historical data

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### acceleration.prev([n])
Query a historical data point

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### acceleration.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### acceleration.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### acceleration.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### acceleration.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### acceleration.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### acceleration.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### acceleration.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### acceleration.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>Acceleration</code>](#module_bfx-hf-indicators.Acceleration)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.AccumulationDistribution"></a>

### bfx-hf-indicators~AccumulationDistribution ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Accumulation Distribution

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~AccumulationDistribution](#module_bfx-hf-indicators.AccumulationDistribution) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### accumulationDistribution.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### accumulationDistribution.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### accumulationDistribution.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### accumulationDistribution.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### accumulationDistribution.update(v)
**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### accumulationDistribution.add(v)
**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### accumulationDistribution.reset()
Clears historical data

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### accumulationDistribution.prev([n])
Query a historical data point

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### accumulationDistribution.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### accumulationDistribution.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### accumulationDistribution.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### accumulationDistribution.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### accumulationDistribution.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### accumulationDistribution.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### accumulationDistribution.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### accumulationDistribution.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>AccumulationDistribution</code>](#module_bfx-hf-indicators.AccumulationDistribution)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.AccumulativeSwingIndex"></a>

### bfx-hf-indicators~AccumulativeSwingIndex ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Accumulative Swing Index

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~AccumulativeSwingIndex](#module_bfx-hf-indicators.AccumulativeSwingIndex) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### accumulativeSwingIndex.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### accumulativeSwingIndex.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### accumulativeSwingIndex.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### accumulativeSwingIndex.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### accumulativeSwingIndex.update(v)
**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### accumulativeSwingIndex.add(v)
**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### accumulativeSwingIndex.reset()
Clears historical data

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### accumulativeSwingIndex.prev([n])
Query a historical data point

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### accumulativeSwingIndex.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### accumulativeSwingIndex.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### accumulativeSwingIndex.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### accumulativeSwingIndex.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### accumulativeSwingIndex.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### accumulativeSwingIndex.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### accumulativeSwingIndex.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### accumulativeSwingIndex.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>AccumulativeSwingIndex</code>](#module_bfx-hf-indicators.AccumulativeSwingIndex)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.ALMA"></a>

### bfx-hf-indicators~ALMA ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Arnoud Legoux Moving Average

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~ALMA](#module_bfx-hf-indicators.ALMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### almA.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### almA.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### almA.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### almA.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### almA.update(v)
**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### almA.add(v)
**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### almA.reset()
Clears historical data

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### almA.prev([n])
Query a historical data point

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### almA.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### almA.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### almA.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### almA.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### almA.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### almA.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### almA.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### almA.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>ALMA</code>](#module_bfx-hf-indicators.ALMA)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.Aroon"></a>

### bfx-hf-indicators~Aroon ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Aroon

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~Aroon](#module_bfx-hf-indicators.Aroon) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### aroon.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### aroon.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### aroon.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### aroon.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### aroon.update(v)
**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### aroon.add(v)
**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### aroon.reset()
Clears historical data

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### aroon.prev([n])
Query a historical data point

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### aroon.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### aroon.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### aroon.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### aroon.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### aroon.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### aroon.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### aroon.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### aroon.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>Aroon</code>](#module_bfx-hf-indicators.Aroon)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.ATR"></a>

### bfx-hf-indicators~ATR ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Average True Range

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~ATR](#module_bfx-hf-indicators.ATR) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [new ATR(args)](#new_module_bfx-hf-indicators.ATR_new)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="new_module_bfx-hf-indicators.ATR_new"></a>

#### new ATR(args)

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Array</code> | [period] |

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### atR.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### atR.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### atR.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### atR.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### atR.update(v)
**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### atR.add(v)
**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### atR.reset()
Clears historical data

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### atR.prev([n])
Query a historical data point

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### atR.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### atR.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### atR.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### atR.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### atR.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### atR.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### atR.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### atR.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>ATR</code>](#module_bfx-hf-indicators.ATR)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.ADX"></a>

### bfx-hf-indicators~ADX ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Average Directional Index

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Todo**

- [ ] compare behavior with other implementations, output differs


* [~ADX](#module_bfx-hf-indicators.ADX) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### adX.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### adX.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### adX.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### adX.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### adX.update(v)
**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### adX.add(v)
**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### adX.reset()
Clears historical data

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### adX.prev([n])
Query a historical data point

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### adX.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### adX.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### adX.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### adX.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### adX.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### adX.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### adX.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### adX.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>ADX</code>](#module_bfx-hf-indicators.ADX)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.AO"></a>

### bfx-hf-indicators~AO ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Awesome Oscillator

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~AO](#module_bfx-hf-indicators.AO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### aO.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### aO.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### aO.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### aO.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### aO.update(v)
**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### aO.add(v)
**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### aO.reset()
Clears historical data

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### aO.prev([n])
Query a historical data point

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### aO.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### aO.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### aO.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### aO.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### aO.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### aO.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### aO.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### aO.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>AO</code>](#module_bfx-hf-indicators.AO)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.BOP"></a>

### bfx-hf-indicators~BOP ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Balance of Power

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~BOP](#module_bfx-hf-indicators.BOP) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### boP.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### boP.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### boP.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### boP.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### boP.update(v)
**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### boP.add(v)
**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### boP.reset()
Clears historical data

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### boP.prev([n])
Query a historical data point

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### boP.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### boP.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### boP.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### boP.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### boP.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### boP.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### boP.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### boP.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>BOP</code>](#module_bfx-hf-indicators.BOP)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.BollingerBands"></a>

### bfx-hf-indicators~BollingerBands ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Bollinger Bands

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~BollingerBands](#module_bfx-hf-indicators.BollingerBands) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### bollingerBands.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### bollingerBands.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### bollingerBands.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### bollingerBands.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### bollingerBands.update(v)
**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### bollingerBands.add(v)
**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### bollingerBands.reset()
Clears historical data

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### bollingerBands.prev([n])
Query a historical data point

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### bollingerBands.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### bollingerBands.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### bollingerBands.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### bollingerBands.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### bollingerBands.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### bollingerBands.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### bollingerBands.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### bollingerBands.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>BollingerBands</code>](#module_bfx-hf-indicators.BollingerBands)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.CMF"></a>

### bfx-hf-indicators~CMF ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Chaikin Money Flow

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~CMF](#module_bfx-hf-indicators.CMF) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### cmF.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### cmF.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### cmF.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### cmF.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### cmF.update(v)
**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### cmF.add(v)
**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### cmF.reset()
Clears historical data

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### cmF.prev([n])
Query a historical data point

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### cmF.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### cmF.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### cmF.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### cmF.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### cmF.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### cmF.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### cmF.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### cmF.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>CMF</code>](#module_bfx-hf-indicators.CMF)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.ChaikinOsc"></a>

### bfx-hf-indicators~ChaikinOsc ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Chaikin Oscillator

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~ChaikinOsc](#module_bfx-hf-indicators.ChaikinOsc) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### chaikinOsc.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### chaikinOsc.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### chaikinOsc.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### chaikinOsc.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### chaikinOsc.update(v)
**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### chaikinOsc.add(v)
**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### chaikinOsc.reset()
Clears historical data

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### chaikinOsc.prev([n])
Query a historical data point

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### chaikinOsc.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### chaikinOsc.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### chaikinOsc.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### chaikinOsc.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### chaikinOsc.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### chaikinOsc.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### chaikinOsc.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### chaikinOsc.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>ChaikinOsc</code>](#module_bfx-hf-indicators.ChaikinOsc)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.ChandeMO"></a>

### bfx-hf-indicators~ChandeMO ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Chande Momentum Oscillator

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~ChandeMO](#module_bfx-hf-indicators.ChandeMO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### chandeMO.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### chandeMO.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### chandeMO.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### chandeMO.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### chandeMO.update(v)
**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### chandeMO.add(v)
**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### chandeMO.reset()
Clears historical data

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### chandeMO.prev([n])
Query a historical data point

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### chandeMO.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### chandeMO.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### chandeMO.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### chandeMO.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### chandeMO.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### chandeMO.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### chandeMO.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### chandeMO.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>ChandeMO</code>](#module_bfx-hf-indicators.ChandeMO)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.CoppockCurve"></a>

### bfx-hf-indicators~CoppockCurve ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Coppock Curve

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~CoppockCurve](#module_bfx-hf-indicators.CoppockCurve) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### coppockCurve.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### coppockCurve.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### coppockCurve.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### coppockCurve.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### coppockCurve.update(v)
**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### coppockCurve.add(v)
**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### coppockCurve.reset()
Clears historical data

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### coppockCurve.prev([n])
Query a historical data point

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### coppockCurve.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### coppockCurve.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### coppockCurve.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### coppockCurve.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### coppockCurve.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### coppockCurve.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### coppockCurve.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### coppockCurve.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>CoppockCurve</code>](#module_bfx-hf-indicators.CoppockCurve)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.DPO"></a>

### bfx-hf-indicators~DPO ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Detrended Price Oscillator

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~DPO](#module_bfx-hf-indicators.DPO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### dpO.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### dpO.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### dpO.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### dpO.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### dpO.update(v)
**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### dpO.add(v)
**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### dpO.reset()
Clears historical data

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### dpO.prev([n])
Query a historical data point

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### dpO.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### dpO.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### dpO.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### dpO.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### dpO.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### dpO.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### dpO.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### dpO.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>DPO</code>](#module_bfx-hf-indicators.DPO)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.DC"></a>

### bfx-hf-indicators~DC ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Donchian Channels

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~DC](#module_bfx-hf-indicators.DC) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### dC.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### dC.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### dC.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### dC.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### dC.update(v)
**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### dC.add(v)
**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### dC.reset()
Clears historical data

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### dC.prev([n])
Query a historical data point

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### dC.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### dC.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### dC.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### dC.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### dC.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### dC.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### dC.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### dC.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>DC</code>](#module_bfx-hf-indicators.DC)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.EOM"></a>

### bfx-hf-indicators~EOM ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Ease of Movement

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~EOM](#module_bfx-hf-indicators.EOM) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### eoM.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### eoM.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### eoM.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### eoM.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### eoM.update(v)
**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### eoM.add(v)
**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### eoM.reset()
Clears historical data

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### eoM.prev([n])
Query a historical data point

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### eoM.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### eoM.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### eoM.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### eoM.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### eoM.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### eoM.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### eoM.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### eoM.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>EOM</code>](#module_bfx-hf-indicators.EOM)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.EMAVolume"></a>

### bfx-hf-indicators~EMAVolume ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Exponential Moving Average of Volume

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~EMAVolume](#module_bfx-hf-indicators.EMAVolume) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### emaVolume.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### emaVolume.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### emaVolume.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### emaVolume.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### emaVolume.update(v)
**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### emaVolume.add(v)
**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### emaVolume.reset()
Clears historical data

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### emaVolume.prev([n])
Query a historical data point

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### emaVolume.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### emaVolume.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### emaVolume.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### emaVolume.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### emaVolume.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### emaVolume.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### emaVolume.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### emaVolume.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>EMAVolume</code>](#module_bfx-hf-indicators.EMAVolume)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.EMA"></a>

### bfx-hf-indicators~EMA ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Exponential Moving Average

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~EMA](#module_bfx-hf-indicators.EMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### emA.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### emA.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### emA.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### emA.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### emA.update(v)
**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### emA.add(v)
**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### emA.reset()
Clears historical data

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### emA.prev([n])
Query a historical data point

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### emA.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### emA.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### emA.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### emA.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### emA.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### emA.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### emA.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### emA.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>EMA</code>](#module_bfx-hf-indicators.EMA)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.Envelope"></a>

### bfx-hf-indicators~Envelope ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Envelope

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~Envelope](#module_bfx-hf-indicators.Envelope) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### envelope.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### envelope.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### envelope.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### envelope.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### envelope.update(v)
**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### envelope.add(v)
**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### envelope.reset()
Clears historical data

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### envelope.prev([n])
Query a historical data point

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### envelope.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### envelope.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### envelope.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### envelope.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### envelope.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### envelope.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### envelope.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### envelope.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>Envelope</code>](#module_bfx-hf-indicators.Envelope)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.Indicator"></a>

### bfx-hf-indicators~Indicator
Base indicator class, providing logic to track and query calculated values.

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  

* [~Indicator](#module_bfx-hf-indicators.Indicator)
    * [new Indicator(opts)](#new_module_bfx-hf-indicators.Indicator_new)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="new_module_bfx-hf-indicators.Indicator_new"></a>

#### new Indicator(opts)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| opts | <code>object</code> |  | options |
| opts.id | <code>string</code> |  | unique indicator ID |
| [opts.name] | <code>string</code> |  | indicator name to be shown in an UI,   including provided arguments (i.e. 'RSI(14)') |
| [opts.seedPeriod] | <code>number</code> | <code>0</code> | number of input values required   before the indicator can provide a valid calculated output. |
| [opts.args] | <code>Array</code> | <code>[]</code> | arguments as passed to the child class   constructor. Used for serialization. |
| [opts.dataType] | <code>string</code> | <code>&quot;&#x27;*&#x27;&quot;</code> | indicates input data type. Either   'trade', 'candle', or '*' indicating both may be provided. If '*' the   `dataKey` field is ignored. |
| [opts.dataKey] | <code>string</code> | <code>&quot;&#x27;close&#x27;&quot;</code> | key on input data object,   [module:bfx-api-node-models.Trade](module:bfx-api-node-models.Trade) or   [module:bfx-api-node-models.Candle](module:bfx-api-node-models.Candle), to be accessed as the input   value. See the `dataType` field. |

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### indicator.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### indicator.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### indicator.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### indicator.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### indicator.update(v)
**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### indicator.add(v)
**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### indicator.reset()
Clears historical data

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### indicator.prev([n])
Query a historical data point

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### indicator.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### indicator.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### indicator.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### indicator.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### indicator.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### indicator.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### indicator.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### indicator.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.KST"></a>

### bfx-hf-indicators~KST ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Know Sure Thing

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~KST](#module_bfx-hf-indicators.KST) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### ksT.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### ksT.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### ksT.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### ksT.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### ksT.update(v)
**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### ksT.add(v)
**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### ksT.reset()
Clears historical data

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### ksT.prev([n])
Query a historical data point

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### ksT.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### ksT.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### ksT.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### ksT.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### ksT.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### ksT.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### ksT.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### ksT.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>KST</code>](#module_bfx-hf-indicators.KST)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.MACD"></a>

### bfx-hf-indicators~MACD ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
MACD

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~MACD](#module_bfx-hf-indicators.MACD) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### macD.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### macD.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### macD.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### macD.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### macD.update(v)
**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### macD.add(v)
**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### macD.reset()
Clears historical data

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### macD.prev([n])
Query a historical data point

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### macD.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### macD.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### macD.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### macD.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### macD.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### macD.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### macD.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### macD.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>MACD</code>](#module_bfx-hf-indicators.MACD)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.MassIndex"></a>

### bfx-hf-indicators~MassIndex ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Mass Index

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~MassIndex](#module_bfx-hf-indicators.MassIndex) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### massIndex.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### massIndex.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### massIndex.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### massIndex.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### massIndex.update(v)
**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### massIndex.add(v)
**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### massIndex.reset()
Clears historical data

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### massIndex.prev([n])
Query a historical data point

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### massIndex.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### massIndex.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### massIndex.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### massIndex.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### massIndex.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### massIndex.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### massIndex.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### massIndex.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>MassIndex</code>](#module_bfx-hf-indicators.MassIndex)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.Momentum"></a>

### bfx-hf-indicators~Momentum ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Momentum

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~Momentum](#module_bfx-hf-indicators.Momentum) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### momentum.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### momentum.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### momentum.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### momentum.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### momentum.update(v)
**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### momentum.add(v)
**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### momentum.reset()
Clears historical data

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### momentum.prev([n])
Query a historical data point

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### momentum.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### momentum.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### momentum.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### momentum.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### momentum.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### momentum.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### momentum.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### momentum.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>Momentum</code>](#module_bfx-hf-indicators.Momentum)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.NetVolume"></a>

### bfx-hf-indicators~NetVolume ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Net Volume

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~NetVolume](#module_bfx-hf-indicators.NetVolume) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### netVolume.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### netVolume.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### netVolume.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### netVolume.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### netVolume.update(v)
**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### netVolume.add(v)
**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### netVolume.reset()
Clears historical data

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### netVolume.prev([n])
Query a historical data point

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### netVolume.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### netVolume.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### netVolume.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### netVolume.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### netVolume.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### netVolume.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### netVolume.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### netVolume.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>NetVolume</code>](#module_bfx-hf-indicators.NetVolume)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.NATR"></a>

### bfx-hf-indicators~NATR ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Normalised Average True Range

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~NATR](#module_bfx-hf-indicators.NATR) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### natR.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### natR.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### natR.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### natR.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### natR.update(v)
**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### natR.add(v)
**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### natR.reset()
Clears historical data

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### natR.prev([n])
Query a historical data point

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### natR.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### natR.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### natR.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### natR.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### natR.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### natR.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### natR.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### natR.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>NATR</code>](#module_bfx-hf-indicators.NATR)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.OBV"></a>

### bfx-hf-indicators~OBV ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
On Balance Volume

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~OBV](#module_bfx-hf-indicators.OBV) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### obV.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### obV.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### obV.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### obV.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### obV.update(v)
**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### obV.add(v)
**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### obV.reset()
Clears historical data

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### obV.prev([n])
Query a historical data point

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### obV.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### obV.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### obV.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### obV.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### obV.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### obV.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### obV.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### obV.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>OBV</code>](#module_bfx-hf-indicators.OBV)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.PC"></a>

### bfx-hf-indicators~PC ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Price Channel

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~PC](#module_bfx-hf-indicators.PC) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### pC.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### pC.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### pC.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### pC.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### pC.update(v)
**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### pC.add(v)
**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### pC.reset()
Clears historical data

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### pC.prev([n])
Query a historical data point

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### pC.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### pC.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### pC.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### pC.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### pC.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### pC.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### pC.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### pC.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>PC</code>](#module_bfx-hf-indicators.PC)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.PPO"></a>

### bfx-hf-indicators~PPO ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Price Oscillator

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~PPO](#module_bfx-hf-indicators.PPO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### ppO.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### ppO.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### ppO.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### ppO.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### ppO.update(v)
**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### ppO.add(v)
**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### ppO.reset()
Clears historical data

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### ppO.prev([n])
Query a historical data point

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### ppO.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### ppO.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### ppO.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### ppO.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### ppO.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### ppO.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### ppO.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### ppO.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>PPO</code>](#module_bfx-hf-indicators.PPO)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.PVT"></a>

### bfx-hf-indicators~PVT ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Price Volume Trend

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~PVT](#module_bfx-hf-indicators.PVT) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### pvT.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### pvT.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### pvT.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### pvT.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### pvT.update(v)
**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### pvT.add(v)
**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### pvT.reset()
Clears historical data

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### pvT.prev([n])
Query a historical data point

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### pvT.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### pvT.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### pvT.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### pvT.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### pvT.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### pvT.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### pvT.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### pvT.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>PVT</code>](#module_bfx-hf-indicators.PVT)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.RVGI"></a>

### bfx-hf-indicators~RVGI ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Relative Vigor Index

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~RVGI](#module_bfx-hf-indicators.RVGI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### rvgI.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### rvgI.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### rvgI.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### rvgI.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### rvgI.update(v)
**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### rvgI.add(v)
**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### rvgI.reset()
Clears historical data

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### rvgI.prev([n])
Query a historical data point

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### rvgI.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### rvgI.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### rvgI.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### rvgI.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### rvgI.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### rvgI.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### rvgI.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### rvgI.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>RVGI</code>](#module_bfx-hf-indicators.RVGI)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.RVI"></a>

### bfx-hf-indicators~RVI ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Relative Volatility Index

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~RVI](#module_bfx-hf-indicators.RVI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### rvI.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### rvI.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### rvI.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### rvI.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### rvI.update(v)
**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### rvI.add(v)
**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### rvI.reset()
Clears historical data

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### rvI.prev([n])
Query a historical data point

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### rvI.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### rvI.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### rvI.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### rvI.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### rvI.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### rvI.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### rvI.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### rvI.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>RVI</code>](#module_bfx-hf-indicators.RVI)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.ROC"></a>

### bfx-hf-indicators~ROC ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Rate of Change

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~ROC](#module_bfx-hf-indicators.ROC) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### roC.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### roC.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### roC.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### roC.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### roC.update(v)
**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### roC.add(v)
**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### roC.reset()
Clears historical data

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### roC.prev([n])
Query a historical data point

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### roC.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### roC.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### roC.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### roC.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### roC.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### roC.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### roC.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### roC.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>ROC</code>](#module_bfx-hf-indicators.ROC)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.RSI"></a>

### bfx-hf-indicators~RSI ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
RSI

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~RSI](#module_bfx-hf-indicators.RSI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### rsI.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### rsI.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### rsI.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### rsI.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### rsI.update(v)
**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### rsI.add(v)
**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### rsI.reset()
Clears historical data

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### rsI.prev([n])
Query a historical data point

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### rsI.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### rsI.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### rsI.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### rsI.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### rsI.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### rsI.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### rsI.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### rsI.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>RSI</code>](#module_bfx-hf-indicators.RSI)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.SMA"></a>

### bfx-hf-indicators~SMA ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Smoothed Moving Average

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~SMA](#module_bfx-hf-indicators.SMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### smA.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### smA.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### smA.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### smA.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### smA.update(v)
**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### smA.add(v)
**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### smA.reset()
Clears historical data

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### smA.prev([n])
Query a historical data point

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### smA.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### smA.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### smA.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### smA.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### smA.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### smA.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### smA.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### smA.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>SMA</code>](#module_bfx-hf-indicators.SMA)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.StdDeviation"></a>

### bfx-hf-indicators~StdDeviation ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Standard Deviation

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~StdDeviation](#module_bfx-hf-indicators.StdDeviation) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### stdDeviation.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### stdDeviation.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### stdDeviation.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### stdDeviation.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### stdDeviation.update(v)
**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### stdDeviation.add(v)
**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### stdDeviation.reset()
Clears historical data

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### stdDeviation.prev([n])
Query a historical data point

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### stdDeviation.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### stdDeviation.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### stdDeviation.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### stdDeviation.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### stdDeviation.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### stdDeviation.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### stdDeviation.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### stdDeviation.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>StdDeviation</code>](#module_bfx-hf-indicators.StdDeviation)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.StochasticRSI"></a>

### bfx-hf-indicators~StochasticRSI ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Stochastic RSI

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~StochasticRSI](#module_bfx-hf-indicators.StochasticRSI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### stochasticRSI.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### stochasticRSI.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### stochasticRSI.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### stochasticRSI.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### stochasticRSI.update(v)
**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### stochasticRSI.add(v)
**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### stochasticRSI.reset()
Clears historical data

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### stochasticRSI.prev([n])
Query a historical data point

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### stochasticRSI.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### stochasticRSI.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### stochasticRSI.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### stochasticRSI.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### stochasticRSI.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### stochasticRSI.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### stochasticRSI.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### stochasticRSI.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>StochasticRSI</code>](#module_bfx-hf-indicators.StochasticRSI)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.Stochastic"></a>

### bfx-hf-indicators~Stochastic ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Stochastic

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~Stochastic](#module_bfx-hf-indicators.Stochastic) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### stochastic.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### stochastic.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### stochastic.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### stochastic.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### stochastic.update(v)
**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### stochastic.add(v)
**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### stochastic.reset()
Clears historical data

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### stochastic.prev([n])
Query a historical data point

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### stochastic.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### stochastic.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### stochastic.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### stochastic.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### stochastic.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### stochastic.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### stochastic.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### stochastic.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>Stochastic</code>](#module_bfx-hf-indicators.Stochastic)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.TRIX"></a>

### bfx-hf-indicators~TRIX ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
TRIX

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~TRIX](#module_bfx-hf-indicators.TRIX) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### triX.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### triX.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### triX.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### triX.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### triX.update(v)
**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### triX.add(v)
**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### triX.reset()
Clears historical data

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### triX.prev([n])
Query a historical data point

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### triX.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### triX.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### triX.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### triX.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### triX.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### triX.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### triX.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### triX.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>TRIX</code>](#module_bfx-hf-indicators.TRIX)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.TSI"></a>

### bfx-hf-indicators~TSI ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
True Strength Index

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~TSI](#module_bfx-hf-indicators.TSI) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### tsI.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### tsI.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### tsI.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### tsI.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### tsI.update(v)
**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### tsI.add(v)
**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### tsI.reset()
Clears historical data

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### tsI.prev([n])
Query a historical data point

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### tsI.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### tsI.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### tsI.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### tsI.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### tsI.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### tsI.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### tsI.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### tsI.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>TSI</code>](#module_bfx-hf-indicators.TSI)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.VO"></a>

### bfx-hf-indicators~VO ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Volume Oscillator

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~VO](#module_bfx-hf-indicators.VO) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### vO.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### vO.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### vO.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### vO.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### vO.update(v)
**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### vO.add(v)
**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### vO.reset()
Clears historical data

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### vO.prev([n])
Query a historical data point

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### vO.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### vO.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### vO.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### vO.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### vO.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### vO.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### vO.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### vO.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>VO</code>](#module_bfx-hf-indicators.VO)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.VWAP"></a>

### bfx-hf-indicators~VWAP ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Volume Weighted Average Price

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~VWAP](#module_bfx-hf-indicators.VWAP) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### vwaP.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### vwaP.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### vwaP.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### vwaP.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### vwaP.update(v)
**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### vwaP.add(v)
**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### vwaP.reset()
Clears historical data

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### vwaP.prev([n])
Query a historical data point

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### vwaP.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### vwaP.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### vwaP.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### vwaP.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### vwaP.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### vwaP.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### vwaP.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### vwaP.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>VWAP</code>](#module_bfx-hf-indicators.VWAP)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.VWMA"></a>

### bfx-hf-indicators~VWMA ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Volume Weighted Moving Average

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~VWMA](#module_bfx-hf-indicators.VWMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### vwmA.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### vwmA.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### vwmA.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### vwmA.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### vwmA.update(v)
**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### vwmA.add(v)
**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### vwmA.reset()
Clears historical data

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### vwmA.prev([n])
Query a historical data point

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### vwmA.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### vwmA.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### vwmA.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### vwmA.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### vwmA.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### vwmA.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### vwmA.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### vwmA.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>VWMA</code>](#module_bfx-hf-indicators.VWMA)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.WilliamsR"></a>

### bfx-hf-indicators~WilliamsR ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Williams %R

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~WilliamsR](#module_bfx-hf-indicators.WilliamsR) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### williamsR.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### williamsR.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### williamsR.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### williamsR.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### williamsR.update(v)
**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### williamsR.add(v)
**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### williamsR.reset()
Clears historical data

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### williamsR.prev([n])
Query a historical data point

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### williamsR.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### williamsR.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### williamsR.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### williamsR.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### williamsR.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### williamsR.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### williamsR.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### williamsR.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>WilliamsR</code>](#module_bfx-hf-indicators.WilliamsR)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
<a id="module_bfx-hf-indicators.WMA"></a>

### bfx-hf-indicators~WMA ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
Weighted Moving Average

**Kind**: inner class of [<code>bfx-hf-indicators</code>](#module_bfx-hf-indicators)  
**Extends**: [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)  

* [~WMA](#module_bfx-hf-indicators.WMA) ⇐ [<code>Indicator</code>](#module_bfx-hf-indicators.Indicator)
    * [.getName()](#module_bfx-hf-indicators.Indicator+getName) ⇒ <code>string</code>
    * [.getSeedPeriod()](#module_bfx-hf-indicators.Indicator+getSeedPeriod) ⇒ <code>number</code>
    * [.getDataType()](#module_bfx-hf-indicators.Indicator+getDataType) ⇒ <code>string</code>
    * [.getDataKey()](#module_bfx-hf-indicators.Indicator+getDataKey) ⇒ <code>string</code>
    * [.update(v)](#module_bfx-hf-indicators.Indicator+update)
    * [.add(v)](#module_bfx-hf-indicators.Indicator+add)
    * [.reset()](#module_bfx-hf-indicators.Indicator+reset)
    * [.prev([n])](#module_bfx-hf-indicators.Indicator+prev)
    * [.v()](#module_bfx-hf-indicators.Indicator+v) ⇒ <code>Object</code> \| <code>number</code>
    * [.l()](#module_bfx-hf-indicators.Indicator+l) ⇒ <code>number</code>
    * [.nValues([n])](#module_bfx-hf-indicators.Indicator+nValues) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
    * [.avg([n])](#module_bfx-hf-indicators.Indicator+avg) ⇒ <code>number</code>
    * [.crossed(target)](#module_bfx-hf-indicators.Indicator+crossed) ⇒ <code>boolean</code>
    * [.logStr()](#module_bfx-hf-indicators.Indicator+logStr) ⇒ <code>string</code>
    * [.ready()](#module_bfx-hf-indicators.Indicator+ready) ⇒ <code>boolean</code>
    * [.serialize()](#module_bfx-hf-indicators.Indicator+serialize) ⇒ <code>object</code>

<a id="module_bfx-hf-indicators.Indicator+getName"></a>

#### wmA.getName() ⇒ <code>string</code>
**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>getName</code>](#module_bfx-hf-indicators.Indicator+getName)  
**Returns**: <code>string</code> - name - human readable label, i.e. 'RSI(14)'  
<a id="module_bfx-hf-indicators.Indicator+getSeedPeriod"></a>

#### wmA.getSeedPeriod() ⇒ <code>number</code>
**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>getSeedPeriod</code>](#module_bfx-hf-indicators.Indicator+getSeedPeriod)  
**Returns**: <code>number</code> - seedPeriod - seed period  
<a id="module_bfx-hf-indicators.Indicator+getDataType"></a>

#### wmA.getDataType() ⇒ <code>string</code>
**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>getDataType</code>](#module_bfx-hf-indicators.Indicator+getDataType)  
**Returns**: <code>string</code> - dataType - data type  
<a id="module_bfx-hf-indicators.Indicator+getDataKey"></a>

#### wmA.getDataKey() ⇒ <code>string</code>
**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>getDataKey</code>](#module_bfx-hf-indicators.Indicator+getDataKey)  
**Returns**: <code>string</code> - dataKey - data key  
<a id="module_bfx-hf-indicators.Indicator+update"></a>

#### wmA.update(v)
**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>update</code>](#module_bfx-hf-indicators.Indicator+update)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | calculated value to replace the current value |

<a id="module_bfx-hf-indicators.Indicator+add"></a>

#### wmA.add(v)
**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>add</code>](#module_bfx-hf-indicators.Indicator+add)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | new calculated value |

<a id="module_bfx-hf-indicators.Indicator+reset"></a>

#### wmA.reset()
Clears historical data

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>reset</code>](#module_bfx-hf-indicators.Indicator+reset)  
<a id="module_bfx-hf-indicators.Indicator+prev"></a>

#### wmA.prev([n])
Query a historical data point

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>prev</code>](#module_bfx-hf-indicators.Indicator+prev)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>1</code> | index where `0` is the current value |

<a id="module_bfx-hf-indicators.Indicator+v"></a>

#### wmA.v() ⇒ <code>Object</code> \| <code>number</code>
Query the current value

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>v</code>](#module_bfx-hf-indicators.Indicator+v)  
**Returns**: <code>Object</code> \| <code>number</code> - v - may be an object depending on the child class  
<a id="module_bfx-hf-indicators.Indicator+l"></a>

#### wmA.l() ⇒ <code>number</code>
Query the number of calculated values

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>l</code>](#module_bfx-hf-indicators.Indicator+l)  
**Returns**: <code>number</code> - length  
<a id="module_bfx-hf-indicators.Indicator+nValues"></a>

#### wmA.nValues([n]) ⇒ <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code>
Returns a slice of historical data points

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>nValues</code>](#module_bfx-hf-indicators.Indicator+nValues)  
**Returns**: <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;Object&gt;</code> - values - historical values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   result |

<a id="module_bfx-hf-indicators.Indicator+avg"></a>

#### wmA.avg([n]) ⇒ <code>number</code>
Returns the average of historical data points. Only valid for indicators
storing numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>avg</code>](#module_bfx-hf-indicators.Indicator+avg)  
**Returns**: <code>number</code> - avg  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>2</code> | number of historical data points to include in   average |

<a id="module_bfx-hf-indicators.Indicator+crossed"></a>

#### wmA.crossed(target) ⇒ <code>boolean</code>
Query if the indicator value has crossed the provided numeric value
between the most recent 2 data points. Only valid for indicators working
with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>crossed</code>](#module_bfx-hf-indicators.Indicator+crossed)  
**Returns**: <code>boolean</code> - crossed  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>number</code> | target |

<a id="module_bfx-hf-indicators.Indicator+logStr"></a>

#### wmA.logStr() ⇒ <code>string</code>
Returns a string with the indicator name and current value. Only valid for
indicators working with numeric values, undefined behavior otherwise.

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>logStr</code>](#module_bfx-hf-indicators.Indicator+logStr)  
**Returns**: <code>string</code> - str  
<a id="module_bfx-hf-indicators.Indicator+ready"></a>

#### wmA.ready() ⇒ <code>boolean</code>
Query if the indicator has a finite current value. Only valid for
indicators working with numeric values, undefined behavior otherwise. The
seed period provided to the constructor should reflect the ready state
based on the number of processed inputs.

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>ready</code>](#module_bfx-hf-indicators.Indicator+ready)  
**Returns**: <code>boolean</code> - isReady  
<a id="module_bfx-hf-indicators.Indicator+serialize"></a>

#### wmA.serialize() ⇒ <code>object</code>
Returns an object containing all data necessary to reconstruct the
indicator.

**Kind**: instance method of [<code>WMA</code>](#module_bfx-hf-indicators.WMA)  
**Overrides**: [<code>serialize</code>](#module_bfx-hf-indicators.Indicator+serialize)  
**Returns**: <code>object</code> - data  
