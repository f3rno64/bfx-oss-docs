---
id: rest-public-pulse-profile
title: "Pulse Profile Details"
subtitle: "This endpoint shows details for a specific Pulse profile"
---

**Response Details**

Fields | Type | Description
--- | --- | ---
PUID | string | Pulse User ID
MTS  |  int  | Millisecond timestamp
NICKNAME | string | Pulse user nickname
PICTURE | string| Pulse user profile picture
TEXT|  float  | Pulse user bio
TWITTER_HANDLE | string | Shows the user's Twitter handle (if available)

**Ratelimit**: 90 req/min
