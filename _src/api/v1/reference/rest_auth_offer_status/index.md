---
id: rest-auth-offer-status
title: "Offer Status"
subtitle: "Get the status of an offer. Is it active? Was it cancelled? To what extent has it been executed? etc."
---

**Response Details**

Key | Type | Description
--|--|--
currency  |  [string]  |  The currency name of the offer.
rate  |  [decimal]  |  The rate the offer was issued at (in % per 365 days).
period  |  [integer]  |  The number of days of the offer.
direction  |  [string]  |  Either “lend” or “loan”.
type  |  [string]  |  Either “market” / “limit” / “stop” / “trailing-stop”.
timestamp  |  [time]  |  The timestamp the offer was submitted.
is_live  |  [bool]  |  Could the offer still be filled?
is_cancelled  |  [bool]  |  Has the offer been cancelled?
executed_amount  |  [decimal]  |  How much of the offer has been executed so far in its history?
remaining_amount  |  [decimal]  |  How much is still remaining to be submitted?
original_amount  |  [decimal]  |  What was the offer originally submitted for?
