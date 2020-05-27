---
id: rest-auth-logins-hist
title: Login History
subtitle: Retrieve a list of past logins.
---

**Fields**

Term | Type | Description
-- | -- | --
ID  |  int |  Login ID
TIME |  int  | Millisecond timestamp of login
IP  |  string|  IP address of login
EXTRA INFO | object | Object with extra information

**Ratelimit**: 45 req/min
