import theme from '../src/theme/index.ts'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { CCProvider } from "../src/utils/CCProvider/CCProvider";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withChakra = (Story) =>
  (
    <CCProvider>
      <Story />
    </CCProvider>
  )


export const decorators = [
  withChakra
]
