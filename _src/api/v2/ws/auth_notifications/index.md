---
id: ws-auth-notifications
title: Notifications
subtitle: The Notifications channel is a work in progress that will be used for different changes in status, price alerts, etc.
dataSamples:
  json_update_n.json: Update ('n')
  json_update_n.json: Update ('n')
  js_onreq_ocreq.js: on-req / oc-req
  js_uca_price.js: uca / price
  js_fonreq_focreq.js: fon-req / foc-req
---

Subscribe to the account information channel to keep track of your notifications. The account information channel will provide a feed of your notifications for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Notification events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Notification events can be recognised by the 'n' (notification) abbreviation.


::: callout warning Work In Progress
This section (Notifications) is currently a work in progress, but it will be a way to be alerted as to different changes in status, price alerts, etc
:::


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Notification events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'n' (notification)
MTS  |  int  |  Millisecond Time Stamp of the update
TYPE  |  string  |  Purpose of notification ('on-req', 'oc-req', 'uca', 'fon-req', 'foc-req') - an overview of all types can be found in our [Abbreviation Glossary](doc:abbreviations-glossary)
MESSAGE_ID  |  int  |  unique ID of the message
NOTIFY_INFO  |  array/object |  A message containing information regarding the notification
CODE  |  null or integer  | Work in progress
STATUS  |  string  |  Status of the notification; it may vary over time (SUCCESS, ERROR, FAILURE, ...)
TEXT  |  string  |  Text of the notification


### Custom Notifications


The following javascript example will allow you to create a custom notification.

```javascript
const obj = [
  0,
  'n',
  MESSAGE_ID, // can be null
  {
    type: 'ucm-test',
    info: {
      foo: 1,
      bar: 2
    }
  }
]

w1.send(JSON.stringify(obj))
```

A custom notification will be broadcasted to every channel that the user is subscribed to.
