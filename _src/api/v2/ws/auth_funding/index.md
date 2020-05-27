---
id: ws-auth-funding
title: Funding Info
subtitle: Get account funding info
dataSamples:
  text_update_fiu.md: Update ('fiu')
---

**Stream Fields**

Term | Type | Description
-- | -- | --
SYMBOL | string  |  The symbol the information pertains to (funding currencies)
YIELD_LOAN |  float  |  Weighted average rate for taken funding
YIELD_LEND |  float  | Weighted average rate for provided funding
DURATION_LOAN |  float  |  Weighted average duration for taken funding
DURATION_LEND |  float  | Weighted average duration for provided funding


::: callout info NOTE
These messages have gained the ability to send the calculation values equal to "null" meaning that the new calculated value is not yet available.In order to receive those values the user have to actively request for it with a "calc" message.See calc input dedicated section for more details.
:::
