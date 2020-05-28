---
id: rest-auth-settings
title: "User Settings Read"
subtitle: "Allows you to read custom settings by providing a key. You can set or adjust these settings using the [User Settings Write](https://docs.bitfinex.com/reference#user-settings-set) endpoint."
---

**Body Fields**

Term | Type | Description
-- | -- | --
Keys  |   Array  |   Array of keys requested. Must follow regex pattern `/^api:[A-Za-z0-9_-]*$/`

**Returned Fields**

Term | Type | Description
-- | -- | --
KEY  |   String  |   Requested Key
VALUE | Self defined | Returned setting

**Ratelimit**: 45 req/min
