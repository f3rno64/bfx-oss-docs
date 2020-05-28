---
id: rest-auth-multiple-new-orders
title: "Multiple New Orders"
subtitle: "Submit several new orders at once, can be used to create margin, exchange, and derivative orders."
---

**Response Details**

Key | Type | Description
-- | -- | --
order_id  |  [array]  |  An array of order objects each having their own unique ID, as well as the information given by /order/status for each of the orders opened.
