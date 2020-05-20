# Bitfinex Documentation

> Heavily WIP

## TODO

* roll own build system
* extract core as static site generator global module
* more, for now https://docs.bitfinex.com
* CLI helper **(TODO)**

## Features

* No babel, webpack, gulp, grunt, etc
* Generates minified HTML/CSS, fast & minimal
* [markdown-it](https://www.npmjs.com/package/markdown-it) parser with support
  for [plugins](https://www.npmjs.com/search?q=keywords:markdown-it-plugin)
* [nunjucks](https://mozilla.github.io/nunjucks)-powered layouts
* [stylus](https://stylus-lang.com/) for stylesheets
* [highlight.js](https://highlightjs.org/) for static syntax highlighting with
  over 91 themes.

## Setup

```bash
yarn
```

### Configuration

See the `lib/types/docs/index.js` for config file options. Values may also be
provided via `package.json` on the `docs` key.

### Folder Structure

All site sources are stored in `lib` and the standalone distribution copy is in
`dist`.

* `lib/layouts` - [nunjucks](https://mozilla.github.io/nunjucks) layouts,
  this directory is included by default on the `config.nunjucks.includes` array
* `lib/widgets` - like `lib/layouts` but meant to contain markup for composable
  compnents which can be used via nunjucks' `import`, `include`, `render`, and
  other template manipulation helpers.
* `lib/assets` - static files to be made available in the built distribution
* `lib/styles` - [stylus](https://stylus-lang.com/) sources, compiled based on
  the settings in `config.stylus`. For more information see `StylusOptions`
* `lib/pages` - site source files to be processed by the configured template
  engine, extending those in `lib/layouts`. Each file in this folder
  corresponds to one page by default. Further routing can be controlled with
  the `config.core.routing` map.

### Building

```bash
yarn build
yarn serve
```

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
