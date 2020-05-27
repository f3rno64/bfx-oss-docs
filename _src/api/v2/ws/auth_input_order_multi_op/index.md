---
id: ws-auth-input-order-multi-op
title: Order Multi-OP
subtitle: Send multiple order-related operations.
dataSamples:
  json_payload.json: Payload
  json_payload.json: Payload
---

The Order Multi-OP command allows sending of multiple order operations at the same time. To do this, construct a payload with the "ox_multi" (order operation multi) abbreviation. Use the inner array to specify the different operations you would like to perform, starting each separate operation with the appropriate abbreviation followed by an object holding the details.

You will receive messages to confirm your requests through "n" (notification) events and, if successful, confirmation of the operations using other event messages ("on", "oc", "ou", etc.). Please look to the [Orders](ref:ws-auth-orders) and [Notifications](ref:ws-auth-notifications) pages for further information on the responses you receive.

Order inputs require you to run the authentication code along with additional code for the input. The authentication code can be found  on our [Authenticated Channels](doc:ws-auth) and the additional code for inputs can be found on the [Websocket Inputs](ref:ws-input) page.
