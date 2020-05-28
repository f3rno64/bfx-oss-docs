---
id: rest-public-pulse-hist
title: "Pulse History"
subtitle: "View the latest pulse messages. You can specify an end timestamp to view older messages."
---

**Response Details**

Fields | Type | Description
--- | --- | ---
PID|  string | Pulse Message ID
MTS  |  int  |  Millisecond timestamp
PUID|  string | Pulse User ID
TITLE|  string | Title of the pulse message
CONTENT|  string | Content of the pulse message
IS_PIN|  int| 1 if the message is pinned, 0 if it is not pinned
IS_PUBLIC|  int| 1 if the message is public, 0 if it is not public
TAGS| array of strings | Tags used in the message
ATTACHMENTS| array of strings | Attachments used in the message
LIKES |  int  |  Number of likes
NICKNAME | string | Pulse user nickname
PICTURE | string| Pulse user profile picture
TEXT|  float  | Pulse user bio
TWITTER_HANDLE | string | Shows the user's Twitter handle (if available)

**Ratelimit**: 90 req/min
