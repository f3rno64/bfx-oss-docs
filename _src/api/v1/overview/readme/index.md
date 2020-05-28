---
id: readme
title: "Readme"
---

# Notes

- Do not parse text descriptions, use only codes
- All times are UTC timestamps expressed as seconds (eg 1477409622)



::: callout warning Protocol extension
We wish to emphasize to only rely on the event message codes rather than the text descriptions of the event messages. The descriptions may change over  time and are not part of the protocol.
:::


## Price Precision

The precision level of all trading prices is calculated based on significant figures.

For all pairs on Bitfinex we use 5 significant digits. Examples of five significant digits would be 12.123, 1.1234, 123.43, and 1234.5.

This mimics how traditional global markets dynamically handle precision of small, medium, and larger values. The rationale behind this is that the higher the amount the less relevant the number of decimals becomes. The corollary is true for very small amounts, where more precision is more useful.

Note: API will truncate price with precision > 5
