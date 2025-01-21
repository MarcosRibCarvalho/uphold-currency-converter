![Uphold Logo](./public/images/logo/logo.svg)

# Uphold Currency Converter

Uphold Currency Converter UI repository

**Table of contents:**

<!-- TOC -->

- [Uphold Currency Converter](#uphold-currency-converter)
    - [Development](#development)
        - [Linting and formatting](#linting-and-formatting)
    - [Building and deploy](#building-and-deploy)

<!-- /TOC -->

## Development

Uphold Currency Converter uses Vite and NPM.
First, install the packages using Node v18+ and NPM v9+:

```
npm i
```

And then, to start the local server run:

```
npm run start
```

As default, it will run in port `5173`, to use a different port, e.g.: `4046` do as follows:

```
npm run start -- --port=4046
```

The same logic is applied to any other arguments.

ℹ️ The double dash (`--`) is used to pass the the arguments to the given command, i.e.: the command set on `start`.

### Linting and formatting

To lint and format, respectively, ESLint and Prettier are used.
They are available as NPM commands such as:

- `npm run lint`
- `npm run lint:fix`
- `npm run prettier`

## Building and deploy

To build the project use:

- `npm run build`

The build destination folder is `/dist` or `/dev-dist`.
