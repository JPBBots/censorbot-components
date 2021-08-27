import { ComponentStyleConfig } from '@chakra-ui/react'

export const ButtonStyle: ComponentStyleConfig = {
  baseStyle: {
    rounded: 'sm',
    textStyle: 'label.md',
    boxShadow: 'no-outline',
    transition:
      'color .1s ease, box-shadow .2s ease, background-color .1s ease',
    color: 'lighter.80',
    _hover: {
      color: 'lighter.100',
    },
    _active: {
      color: 'lighter.100',
    },
    _focus: {
      color: 'lighter.100',
      boxShadow: 'outline',
    },
  },
  variants: {
    none: {},
    default: {
      bg: 'lighter.5',
      _hover: {
        bg: 'lighter.10',
      },
      _active: {
        bg: 'lighter.20',
      },
    },
    primary: {
      bg: 'brand.20',
      _hover: {
        bg: 'brand.80',
      },
      _active: {
        bg: 'brand.100',
      },
      _focus: {
        boxShadow: 'anti-outline',
      },
    },
    ghost: {
      bg: 'transparent',
      _hover: {
        bg: 'lighter.5',
      },
      _active: {
        bg: 'lighter.10',
      },
    },
  },
  sizes: {
    none: {
      py: 1,
      px: 2,
    },
    sm: {
      py: 1,
      px: 2,
    },
    md: {
      py: 2,
      px: 4,
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
}
