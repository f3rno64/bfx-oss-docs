---
id: ws-auth-executed-trades
title: "Executed Trades"
dataSamples:
  json_response_sample0.json: Response sample
---

After a `te` message you receive shortly a `tu` message that contains the real trade id (`TRD_ID`) and additional/updated fields.


**Abbreviated Terms Glossary**

Term | Definition
-- | --
ps  |  position snapshot
pn  |  new position
pu  |  position update
pc  |  position close
ws  |  wallet snapshot
wu  |  wallet update
os  |  order snapshot
on  |  new order
ou  |  order update
oc  |  order cancel
te  |  trade executed
tu  |  trade execution update


::: callout danger Error Codes
10100 : Authentication failure (generic) 
10101 : Already authenticated 
10102 : Authentication Payload Error 
10103 : Authentication Signature Error 
10104 : Authentication HMAC Error
:::
