---
id: rest-auth-order-status
title: "Order Status"
subtitle: "Get the status of an order. Is it active? Was it cancelled? To what extent has it been executed? etc."
---

**Response Details**

Key | Type | Description
--|--|--
symbol  |  [string]  |  The symbol name the order belongs to
exchange  |  [string]  |  “bitfinex”
price  |  [decimal]  |  The price the order was issued at (can be null for market orders)
avg_execution_price  |  [decimal]  |  The average price at which this order as been executed so far. 0 if the order has not been executed at all
side  |  [string]  |  Either “buy” or “sell”
type  |  [string]  |  Either “market” / “limit” / “stop” / “trailing-stop”
timestamp  |  [time]  |  The timestamp the order was submitted
is_live  |  [bool]  |  Could the order still be filled?
is_cancelled  |  [bool]  |  Has the order been cancelled?
is_hidden  |  [bool]  |  Is the order hidden?
oco_order  |  [int64]  |  If the order is an OCO order, the ID of the linked order. Otherwise, null
was_forced  |  [bool]  |  For margin only true if it was forced by the system
executed_amount  |  [decimal]  |  How much of the order has been executed so far in its history?
remaining_amount  |  [decimal]  |  How much is still remaining to be submitted?
original_amount  |  [decimal]  |  What was the order originally submitted for?

**Ratelimit**: 30 req/min
