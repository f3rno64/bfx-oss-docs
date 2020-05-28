---
id: rest-auth-info-user
title: "User Info"
subtitle: "Retrieve the user ID, email, username and timezone setting for the account associated with the API key used."
---

**Fields**

Term | Type | Description
-- | -- | --
ID  |  int |  Account ID
EMAIL  |  string  |  Account Email
USERNAME  |  string|  Account username
MTS_ACCOUNT_CREATE | int | Millisecond timestamp of account creation
VERIFIED | int |  Indicates if the user has a verified status (KYC) 1 = true, 0 = false
TIMEZONE | string | Account timezone setting

**Ratelimit**: 45 req/min
