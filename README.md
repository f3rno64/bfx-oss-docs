# Bitfinex Documentation

> Heavily WIP

### Configuring

For now, see `config.json` for the config structure.

### Building

```bash
yarn prepare
yarn build-bfx-jsdoc
yarn build-site
```

or just

```bash
yarn dist
```

### Serving Locally

* `yarn serve-site` to serve the built static site
* `yarn serve-jsdoc` to serve the built unified JSDoc documentation

### Building Unified JSDoc Documentation

Generating the unified JSDoc documentation for all of Bitfinex's JavaScript
projects is multi-step process:

* `yarn build-bfx-jsdoc-config` to generate the JSDoc config file for all
  projects (assuming `config.json` is correctly populated and submodules are
  present)
* `yarn build-bfx-jsdoc-html` to generate the unified documentation
* `yarn build-bfx-jsdoc-assets` to copy static assets to the dist folder

All of the above are available as `yarn build-bfx-jsdoc`, and can be cleaned up
with `yarn clean-jsdoc`.

### Building the Static Site

Similarly, building the static site requires:

* `yarn prepare-bfx-hf-chart` to build the `bfx-hf-chart` for inclusion in an
  iframe from the assets folder
* `yarn build-site` to render the site itself

All of the above are available as `yarn build-site`, and can be cleaned up
with `yarn clean-site`.

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
