---
id: rest-auth-new-offer
title: "New Offer"
subtitle: "Submit a new Offer"
---

**Response Details**

Key | Type | Description
-- | -- | --
id  |  [int]  |  A randomly generated ID for the offer and the information given by /offer/status
currency  |  [string]  |  The name of the currency.
rate  |  [decimal]  |  Rate to lend or borrow at. In percentage per 365 days. (Set to 0 for FRR).
period  |  [integer]  |  Number of days of the funding contract (in days)
direction  |  [string]  |  Either “lend” or “loan”.
is_live  |  [bool]  |  Could the offer still be filled?
is_cancelled  |  [bool]  |  Has the offer been cancelled?
executed_amount  |  [decimal]  |  How much of the offer has been executed so far in its history?
remaining_amount  |  [decimal]  |  How much is still remaining to be submitted?
original_amount  |  [decimal]  |  What was the offer originally submitted for?
