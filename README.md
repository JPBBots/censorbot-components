<div align="center">
  <br />
  <p>
    <a href="https://jpbbots.org/"><img src="https://i.imgur.com/1vFSlx2.png" width="546" alt="jpbbots.org" /></a>
  </p>
  <br />
  <p>
    <a href="https://jpbbots.org/support"><img src="https://img.shields.io/discord/399688888739692552?color=f44847&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://github.com/JPBBots/censorbot-components/actions"><img src="https://github.com/JPBBots/censorbot-components/actions/workflows/test.action.yml/badge.svg" alt="Test" /></a>
    <a href="https://app.netlify.com/sites/eager-minsky-34b5ea/deploys"><img src="https://api.netlify.com/api/v1/badges/5ce98137-50f5-48e2-9252-9f442a2eb7cc/deploy-status" alt="Netlify Status" /></a>
  </p>
</div>

## About

censorbot-components is a component library built on top of the Chakra UI theming library.

## Prerequisite
In order to use our GitHub package and versions, you need to add this line to your .npmrc (or create one)
```
@jpbbots:registry=https://npm.pkg.github.com
```

## Installation

```sh-session
npm install @jpbbots/censorbot-components
```
Or with yarn
```sh-session
yarn add @jpbbots/censorbot-components
```

### Theme types
You will need to manually add a script to generate types for now until another solution is available.
```json
{
  ...
  "scripts": {
    "postinstall": "npx @chakra-ui/cli tokens ./node_modules/@jpbbots/censorbot-components/src/theme/index.ts"
  }
  ...
}
```

### Dependencies

- [@chakra-ui/react ^1.6.4](https://www.npmjs.com/package/@chakra-ui/react) - Our choice of component theming
- [@emotion/react ^11.4.0](https://www.npmjs.com/package/@emotion/react) - Chakra UI Peer Dependency
- [@emotion/styled ^11.3.0](https://www.npmjs.com/package/@emotion/styled) - Chakra UI Peer Dependency
- [chroma-js ^2.1.2](https://www.npmjs.com/package/chroma-js) - To ease the pain of color definitions for the theme
- [framer-motion ^4.1.17](https://www.npmjs.com/package/framer-motion) - Beautifully simple animations / Chakra UI Peer Dependency
- [react-icons ^4.2.0](https://www.npmjs.com/package/react-icons) - For our use of Font Awesome icons and easy implementation with Chakra UI's Icon component

### Peer Dependencies

- [react ^17.0.2](https://www.npmjs.com/package/react)
- [react-dom ^17.0.2](https://www.npmjs.com/package/react-dom)

## Example usage 

### General React
Wrap your React app with the CCProvider component:
```typescript jsx
import { CCProvider } from '@jpbbots/censorbot-components'

export const AppWrapper = ({ children }) => (
  <CCProvider>
    {children}
  </CCProvider>
)
```
_Any ChakraUI components placed within the provider will be themed_

### Next.js

_app.js
```typescript jsx
import { CCProvider } from '@jpbbots/censorbot-components'

function MyApp({ Component, pageProps }) {
  return (
    <CCProvider cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </CCProvider>
  )
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  }
}

export default MyApp
```

_document.js
```typescript jsx
import { NextColorModeScript, NextFontHead } from '@jpbbots/censorbot-components'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <NextFontHead/>
        </Head>
        <body>
          <NextColorModeScript/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

## Links
- [Components Storybook](https://eager-minsky-34b5ea.netlify.app/)
- [JPBBots Discord server](https://jpbbots.org/support)

## Help
If you're having problems or don't understand how to implement the library for your own purposes, join our [Support Discord Server](https://jpbbots.org/support) for help.
