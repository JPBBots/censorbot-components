import { ChakraTheme, ThemeOverride } from '@chakra-ui/react'

// These imports need to be local for theme type generation
import { colors } from './colors'
import { textStyles } from './textStyles'
import { MenuStyle as Menu } from './components/Menu.style'
import { InputStyle as Input } from './components/Input.style'
import { ButtonStyle as Button } from './components/Button.style'
import { SwitchStyle as Switch } from './components/Switch.style'
import { SelectStyle as Select } from './components/Select.style'
import { TextareaStyle as Textarea } from './components/Textarea.style'
import { NumberInputStyle as NumberInput } from './components/NumberInput.style'

export const DEFAULT_COLOR_MODE = 'dark'

const baseFillStyle = {
  bg: colors.bg,
  d: 'flex',
  flexGrow: 1,
  h: '100%',
  minH: '100%',
  scrollBehavior: 'smooth',
  textRendering: 'optimizeLegibility',
} as const

const sizing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  13: '52px',
  14: '56px',
  15: '60px',
  16: '64px',
  half: '50%',
  full: '100%',
}

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
  sizes: sizing,
  space: sizing,
  radii: {
    none: '0px',
    sm: '5px',
    md: '10px',
    lg: '20px',
    full: '9999px',
  },
  components: {
    Icon: { baseStyle: { color: 'inherit' } },
    Text: { baseStyle: { color: 'lighter.80', textStyle: 'default' } },
    Divider: {
      baseStyle: {
        bg: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'currentColor',
      },
    },
    Menu,
    Input,
    Switch,
    Button,
    Select,
    Textarea,
    NumberInput,
  },
}

export default theme
