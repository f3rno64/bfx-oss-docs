# Markdown Render Test

[[toc]]

This page contains various markdown elements to test rendering.

## Headers (2)

### Header 3

#### Header 4

##### Header 5

###### Header 6

## Basic Elements

Paragraph content

![An image](/img/bfx-logo-bg-white.png =300x)

[An external link](https://www.bitfinex.com)

[An internal link](/index.html)

`Code`
**Bold text**
_Italic text_
***Bold italic text***
~~Strikethrough~~

> Blockquote

Paragraph content

> Nested Blockquote
>> Lower level

---

1. Ordered list 1
    1. Child 1
    2. Child 2
2. Ordered list 2
    1. Child 1

* Unordered list 1
    * Child 1
* Unordered list 2
    * Child 1
    * Child 2

## Task Lists

* [ ] Not done
* [x] Done

## Smart Arrows

-->
<--
<-->
==>
<==
<==>

## Callouts

::: callout info Example
A sample info callout
:::

::: callout warning Example
A sample warning callout
:::

::: callout success Example
A sample success callout
:::

::: callout danger Example
A sample danger callout
:::

## Collapsible

+++ Visible content
Hidden content
+++

## Code

```js {14}
'use strict'

const MarkdownIt = require('markdown-it')
const extensions = require('./ext')

/**
 * @param {module:bfx-oss-docs.Config} config - config
 * @returns {MarkdownIt} md - configured base instance
 */
const getMD = (config) => {
  const { markdown: markdownConfig = {} } = config
  const md = MarkdownIt(markdownConfig)

  extensions.forEach(register => { register(md) })

  return md
}

module.exports = getMD
```
