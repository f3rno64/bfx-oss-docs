---
id: rest-auth-deriv-pos-collateral-set
title: Derivative Position Collateral
subtitle: Update the amount of collateral for a Derivative position
---

Sets the amount of collateral, applied to the active derivative position, for the given symbol.
[block:image]
{
"images": [
{
"image": [
"https://files.readme.io/1e9466b-Screenshot_2.png",
"Screenshot_2.png",
1543,
127,
"#161e28"
],
"caption": ""
}
]
}
The amount of collateral applied correlates to the spread between the base price and the liquidation price.

More collateral equals less chance of the position being liquidated, and vice-versa

**Response Fields**

Term | Type | Description
-- | -- | --
STATUS|  int  |  Returns 1 if successful
