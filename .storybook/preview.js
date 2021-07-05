import theme from '../src/theme/index.ts'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Story />
    </ChakraProvider>
  )
]
