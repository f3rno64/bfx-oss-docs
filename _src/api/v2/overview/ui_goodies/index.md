---
id: ui-goodies
title: "UI Goodies"
---

### UI Goodies examples repository


https://github.com/bitfinexcom/bfx-stuff-ui : small examples to master Bitfinex UI Goodies


### Chart Marks


## Overview
Chart markers allow you to display certain events, such as important news, on the Bitfinex UI chart. All markers are associated with a specific timestamp which determines the candle above which the mark will be shown.


![undefined](https://files.readme.io/6b14588-chart.jpg)


## API
Chart markers can be manipulated with websocket messages:

### Create a new mark


```text
wss.send(JSON.stringify([0, 'n', 12345, {
  type: 'ucm-ui-chart',
  info: {
    type: 'marker_create',
    id: 'mark_0',
    ts: Date.now(), // timestamp in milliseconds
    symbol: 'tBTCUSD', // not required. If not present applies to all symbols
		content: 'lorem <a href="https://www.bitfinex.com/assets/bfx-stacked.png">here</a>', // content to show in tooltip
    color_bg: '#FF1133', // RGB
    color_text: '#FF1133', // RGB
    color_border: '#FF1133', // RGB
    label: 'M', // marker letter
    size_min: 8,
  } 
}]))
```

### Clear all existing marks

```text
wss.send(JSON.stringify([0, 'n', 12345, {
  type: 'ucm-ui-chart', info: {
  type: 'marker_clear',
} }]))
```

## Fields



### HTML Sanitize settings

Definition of allowed HTML tags and attributes

```text
const SANITIZE_SETTINGS = {
 allowedTags: ['h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
   'li', 'b', 'i', 'strong', 'em', 'code', 'hr', 'br', 'div',
   'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'img'],
 allowedAttributes: {
   a: ['href', 'name', 'target'],
   img: ['src', 'height', 'width'],
 },
}
```

### Custom Notifications


Broadcasts a custom notification to all connected websockets belonging to the authenticated user.


![Simple notification](https://files.readme.io/aeab2a2-notification-1.png)


## Fields



## Functionality

* Display entire message content
* Play a sound, if provided, according to the specified user setting or provided tone (see structure above)
* Display an image, if provided, underneath the message content
* If a link is provided, the notification should open the link
* Display the title, if provided, above the message
* Close after either the provided TTL or the default

```text
wss.send(JSON.stringify([0, 'n', 12345, {
  type: 'ucm-notify-ui', info: {
  type: 'all',
  level: 'success',
  image: 'https://www.bitfinex.com/assets/bfx-stacked.png',
  link: 'http://www.bitfinex.com',
  message: 'This is a test notification',
  sound: {
     tone: 'pingUp',
  }
} }]))
```

![Chart Markers + Custom notifications from Twitter](https://files.readme.io/3b3e3a9-Screenshot_2018-10-26_14-00-22.png)
