---
id: rest-public-symbol-details
title: "Symbol Details"
subtitle: "Get a list of valid symbol IDs and the pair details."
---

**Response Details**

Key | Type | Description
--|--|--
pair | [string] | The pair code
price_precision | [integer] | Maximum number of significant digits for price in this pair
initial_margin | [decimal] | Initial margin required to open a position in this pair
minimum_margin | [decimal] | Minimal margin to maintain (in %)
maximum_order_size | [decimal] | Maximum order size of the pair
minimum_order_size | [decimal] | Minimum order size of the pair
expiration | [string] | Expiration date for limited contracts/pairs
margin | [boolean] | margin trading enabled for this pair


**Ratelimit**: 10 req/min
