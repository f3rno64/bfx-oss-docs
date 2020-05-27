---
id: rest-auth-pulse-hist
title: Pulse History
subtitle: Allows you to retrieve your private pulse history or the public pulse history with an additional UID_LIKED field.
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
UID_LIKED| int | 1 if you liked the post, 0 if you did not like the post
NICKNAME | string | Pulse user nickname
PICTURE | string| Pulse user profile picture
TEXT|  float  | Pulse user bio
TWITTER_HANDLE | string | Shows the user's Twitter handle (if available)

**Ratelimit**: 90 req/min
