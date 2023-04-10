# Builder.io + Shopify Hydrogen - headless visual page building example

## **Note**: *This starter works on *Hydrogen v1*

Example repo using Builder.io for drag and drop page building with Shopify hydrogen

- [Check out the hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
- See [./src/routes/builder/[handle].server.tsx](./src/routes/builder/[handle].server.tsx) for where we integrate Builder.io
- [Learn more about Builder.io](https://github.com/builderio/builder)

![Demo](https://user-images.githubusercontent.com/844291/153227170-93e82c34-c2a4-43f9-a858-2c32753dd085.gif)

## Get Started

- Clone this project: `git clone https://github.com/BuilderIO/builder-shopify-hydrogen`
- Install dependencies: `cd builder-shopify-hydrogen; yarn`
- Replace any `builder.init` calls with your API key: https://www.builder.io/c/docs/using-your-api-key#finding-your-public-api-key
- Run the server: `yarn dev`
- Create a free account at [builder.io](https://www.builder.io)
- Go to [builder.io/models](https://builder.io/models), choose the `page` model and change the Editing URL to `http://localhost:3000`
- Create a new page with url `/builder/testing`
- Explore the drag and drop editor
- Hit publish, then go to `http://localhost:3000/builder/testing` and see your page!

Explore more in the [Builder.io developer docs](https://www.builder.io/c/docs/developers)

## Why Builder.io?

Hardcoding layouts for frequently changing content bottlenecks your team and makes releases messy

Using an API-driven UI allows you to:

- Decouple page updates from deploys
- Schedule, a/b test, and personalize via APIs
- Reduce code + increase composability

<br />
<img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5b4fb32baace4475b993f6361e75e1b2" />


## Who uses Builder.io?

<br />
<p align="center">
  <img width="600" src="https://user-images.githubusercontent.com/844291/143297932-686144d0-598c-49ad-8493-0bffdf45aec8.png" />
</p>

## How is the content structured?

In Builder, content is structured in [models](https://www.builder.io/c/docs/guides/getting-started-with-models), and customized with [custom fields](https://www.builder.io/c/docs/custom-fields) and [targeting](https://www.builder.io/c/docs/guides/targeting-and-scheduling)

- **Builder pages** - full drag and drop control between your site's header and footer. [Try it out](https://builder.io/fiddle/fb98adf93ad5467180329fdaa9711f27)
- **Builder sections** - make a part of a page visually editable in Builder and use our [targeting and scheduling](https://www.builder.io/c/docs/guides/targeting-and-scheduling) to decide who sees what. [Try it out](https://builder.io/fiddle/81b6a689f6c74c82bbd982497cf08e34)
- **Builder data** - fetch structured data from Builder and use it anywhere in your application (e.g. menu items, structured pages). [Try it out](https://builder.io/fiddle/193e3e3128b84c80b1a9c4ba19612244)

<img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe809eac6ae7140beab81ce4c3ee75e20" />

Read more about how builder works [here](https://www.builder.io/c/docs/how-builder-works)

See [here](#structuring-your-site) for examples on how to structure a site with Builder

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

### Structuring your site

There are a lot of ways you can use Builder for your site. Some of the main questions you'll want to ask yourselves - what on your site should be in your code vs in Builder.

As a general rule, parts of your site that should be managed by non developers should probably be in Builder. Parts that are complex with a lot of code, should probably be in your codebase. Using [custom components](https://www.builder.io/c/docs/custom-react-components) in your Builder content can help you strike a good balance here as well

Here are some examples we recommend for how to structure various pages on your site, for instance for a headless commerce site:

![examples on how to structure your site](https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fc811a87f916f4e37990b1afc9df25721)

## How the Builder.io platform works

<p align="center">
  <img alt="How it works" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F1cae534290f54294a7b7b279ebda89fb" width="800" />
</p>

### Data models, components, SEO, and more

<img src="https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2F8c2699f47fea48b296b43dbb422336e8" />

Builder.io gives you a ton more power and control than just page building. Check our guides on

- [Custom models](https://builder.io/c/docs/guides/getting-started-with-models)
- [Custom design systems in Builder.io](https://github.com/BuilderIO/builder/tree/master/examples/react-design-system)
- [SEO optimizing Builder.io content](https://builder.io/c/docs/seo)
- [Custom React components in the visual editor](https://www.builder.io/c/docs/custom-react-components)
- [Components only mode](https://www.builder.io/c/docs/guides/components-only-mode)

Additional framework support:

- [Gatsby](https://github.com/BuilderIO/builder/tree/master/examples/gatsby)
- [Next.js](https://github.com/BuilderIO/builder/tree/master/examples/next-js)
- [Angular](https://github.com/BuilderIO/builder/tree/master/packages/angular)
- [HTML API (for any framework)](https://builder.io/c/docs/html-api)

As well as some handy power features like:

- [Symbols](https://builder.io/c/docs/guides/symbols)
- [Dynamic data fetching and binding](https://builder.io/c/docs/guides/advanced-data)
- [State handling](https://builder.io/c/docs/guides/state-and-actions)
- [Content API](https://builder.io/c/docs/query-api)
- [GraphQL API](https://builder.io/c/docs/graphql-api)
- [Webhooks](https://builder.io/c/docs/webhooks)
- [Targeting and scheduling content](https://builder.io/c/docs/guides/targeting-and-scheduling)
- [Extending Builder.io with plugins](https://github.com/BuilderIO/builder/tree/master/plugins)

## Join the community!

Questions? Requests? Feedback? Chat with us in our [Discord](https://discord.gg/eAvjGf4T)!

## Troubleshooting and feedback

Problems? Requests? Open an [issue](https://github.com/BuilderIO/builder/issues). We always want to hear feedback and interesting new use cases and are happy to help.
