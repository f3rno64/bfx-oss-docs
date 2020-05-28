---
id: ws-auth-input
title: "Websocket Inputs"
subtitle: "This page lists the additional code necessary to send inputs through your Websocket connection. This code is needed in addition to the authentication payload listed [here](https://docs.bitfinex.com/docs/ws-auth)."
---

Edit the example code below depending on the type of input you wish to send. Simply edit the order details according to your wishes and the requirements for each input. You will also need to ensure that the payload (inputPayload) includes the appropriate abbreviation for the action you wish to perform. The example code included on this page is used to send a new order and therefore includes the 'on' (order new) abbreviation. Use different abbreviations for different actions. A full list of abbreviations can be found in our [Abbreviation Glossary](doc:abbreviations-glossary).

```javascript
//...
//authentication code
//....
const inputDetails = {
    "cid": Date.now(),
    "type": "LIMIT",
    "symbol": 'tBTCUSD',
    "amount": "0.020",
    "price": '9600'
}

const inputPayload = [0, 'on', null, inputDetails] // Note how the payload is constructed here. It consists of an array starting with the CHANNEL_ID, TYPE, and PLACEHOLDER and is followed by the inputDetails object.

//Websocket Listener

wss.on('message', (msg) => {     // The 'message' event is called whenever the ws recieves ANY message
  let response = JSON.parse(msg)
  if (response.event === 'auth') {
    wss.send(JSON.stringify(inputPayload));// Submit payload for input
  }
  console.log(msg); // ALL ws receipts will be logged to console
})
```

###Tradable Balance Error

In some cases, when the above code is used to place an order is used, a tradable balance error can be returned even though there is sufficient tradable balance in the account. This can happen when the order is sent before the wallet snapshot is sent through the channel. To avoid this, use a sleep function to slightly delay sending the order when opening a new connection. Here is an example:

```javascript
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
const wss = new WebSocket('wss://api.bitfinex.com/ws/2')
wss.onopen = function (event) {
            let inputPayload = JSON.stringify([
                0,
                "on",
                null,
                {
                  "cid": Date.now(),
                  "type": "LIMIT",
                  "symbol": 'tBTCUSD',
                  "amount": "0.020",
                  "price": '9600'
                }
                ])
            wss.send(JSON.stringify(payload))
            sleep(1000);
            wss.send(inputPayload);
          };
```