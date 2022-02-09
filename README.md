# Builder.io + Shopify Hydrogen - headless visual page building example

Example repo using Builder.io for drag and drop page building with Shopify hydrogen

- [Check out the hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
- See [./src/pages/landing/[handle].server.jsx](./src/pages/landing/[handle].server.jsx) for where we integrate Builder.io
- [Learn more about Builder.io](https://github.com/builderio/builder)

![Demo](https://user-images.githubusercontent.com/844291/153227170-93e82c34-c2a4-43f9-a858-2c32753dd085.gif)

## Getting started

**Requirements:**

- Node v14+
- Yarn

```bash
yarn
yarn dev
```

Remember to update `shopify.config.js` with your shop's domain and Storefront API token!

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
yarn build
yarn preview
```

## Building for production

```bash
yarn build
```

Then, you can run a local `server.js` using the production build with:

```bash
yarn serve
```
