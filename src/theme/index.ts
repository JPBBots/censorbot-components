import { ChakraTheme, DeepPartial } from '@chakra-ui/react'
import { ButtonStyle } from '@/theme/components/Button.style'

const DEFAULT_MODE = 'dark'

const theme: DeepPartial<ChakraTheme> = {
  config: {
    cssVarPrefix: 'cbc',
    initialColorMode: DEFAULT_MODE,
    useSystemColorMode: false,
  },
  components: {
    Button: ButtonStyle,
  },
}

export default theme
