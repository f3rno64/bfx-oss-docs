---
id: rest-auth-settings-set
title: "User Settings Write"
subtitle: "Allows you to create custom settings by creating key: value pairs."
---

**Body Fields**

Term | Type | Description
-- | -- | --
Settings  |   Object  |   Object of keys and values to be set. Must follow regex pattern `/^api:[A-Za-z0-9_-]*$/`

**Response Fields**

Term | Type | Description
-- | -- | --
TIMESTAMP | int | Timestamp in milliseconds
TYPE | string | Purpose of notification ('acc_ss' (account settings set))
NUMBER_OF_SETTINGS | string | Number of settings changed or created with this request
STATUS | string | Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
