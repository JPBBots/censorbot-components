import { ChakraTheme, ThemeOverride } from '@chakra-ui/react'

// These imports need to be local for theme type generation
import { colors } from './colors'
import { textStyles } from './textStyles'
import { ButtonStyle as Button } from './components/Button.style'
import { SwitchStyle as Switch } from './components/Switch.style'

export const DEFAULT_COLOR_MODE = 'dark'

const baseFillStyle = {
  bg: 'bg',
  d: 'flex',
  flexGrow: 1,
  h: '100%',
  minH: '100%',
  scrollBehavior: 'smooth',
  textRendering: 'optimizeLegibility',
} as const

const theme: ThemeOverride<ChakraTheme> = {
  config: {
    cssVarPrefix: 'ccvars',
    initialColorMode: DEFAULT_COLOR_MODE,
    useSystemColorMode: false,
  },
  shadows: {
    outline: `0 0 0 2px ${colors.outline}`,
    // For better animations
    'no-outline': '0 0 0 2px transparent',
    // For buttons or components that are brand-colored already
    'anti-outline': `0 0 0 2px ${colors.lighter['100']}`,
  },
  styles: {
    global: {
      html: baseFillStyle,
      body: {
        ...baseFillStyle,
        '&::-webkit-scrollbar': {
          w: 'scrollbar',
          h: 'scrollbar',
        },
        '&::-webkit-scrollbar-track': {
          w: 'scrollbar',
          h: 'scrollbar',
        },
        '&::-webkit-scrollbar-thumb': {
          bg: 'brand.100',
        },
      },
      '#__next': baseFillStyle,
    },
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading:
      "'Inter',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    mono: "'Jetbrains Mono', monospace",
  },
  colors,
  textStyles,
  sizes: {
    none: '0px',
    xxs: '8px',
    xs: '12px',
    sm: '16px',
    md: '32px',
    lg: '48px',
    xl: '64px',
    half: '50%',
    full: '100%',
  },
  radii: {
    none: '0px',
    sm: '5px',
    md: '10px',
    lg: '20px',
    full: '9999px',
  },
  space: {
    none: '0px',
    px: '1px',
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  components: {
    Text: { baseStyle: { color: 'lighter.80', textStyle: 'default' } },
    Switch,
    Button,
  },
}

export default theme
