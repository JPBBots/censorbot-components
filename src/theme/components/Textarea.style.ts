import { ComponentStyleConfig } from '@chakra-ui/react'

export const TextareaStyle: ComponentStyleConfig = {
  baseStyle: {
    w: 'full',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transition: '.12s ease',
    color: 'lighter.80',
    _placeholder: {
      color: 'lighter.20',
    },
    minH: '64px',
  },
  sizes: {
    md: {
      textStyle: 'default',
      p: 4,
      rounded: 'md',
    },
  },
  variants: {
    default: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: 'lighter.5',
      _hover: {
        bg: 'lighter.10',
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _invalid: {
        borderColor: 'red',
      },
      _focus: {
        bg: 'lighter.5',
        borderColor: 'brand.100',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'default',
  },
}
