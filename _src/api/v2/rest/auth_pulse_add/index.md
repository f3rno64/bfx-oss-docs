---
id: rest-auth-pulse-add
title: Pulse Write
subtitle: Allows you to write Pulse messages
---

**Formatting**

* Title and Content should be strings (no HTML content allowed).
* Content field can be formatted using markdown.
* Images can be added to the body using the base64 format.

**Response Fields**

Term | Type | Description
-- | -- | --
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
UID_LIKED | int | Flag to show if the private user liked the pulse
