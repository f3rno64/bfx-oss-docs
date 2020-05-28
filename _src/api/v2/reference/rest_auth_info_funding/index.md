---
id: rest-auth-info-funding
title: "Funding Info"
subtitle: "Get account funding info"
---

**Fields**

Term | Type | Description
-- | -- | --
SYMBOL | string  |  The symbol the information pertains to (funding currencies)
YIELD_LOAN |  float  |  Weighted average rate for taken funding
YIELD_LEND |  float  | Weighted average rate for provided funding
DURATION_LOAN |  float  |  Weighted average duration for taken funding
DURATION_LEND |  float  | Weighted average duration for provided funding

**Ratelimit**: 45 req/min
