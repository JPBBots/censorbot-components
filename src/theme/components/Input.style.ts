import { ComponentStyleConfig } from '@chakra-ui/react'

export const InputStyle: ComponentStyleConfig = {
  parts: ['field', 'addon', 'element'],
  baseStyle: {
    field: {
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
    },
    addon: {},
  },
  sizes: {
    md: {
      field: {
        textStyle: 'default',
        p: 4,
        rounded: 'md',
      },
      addon: {
        textStyle: 'default',
        p: 4,
        rounded: 'md',
      },
    },
  },
  variants: {
    default: {
      field: {
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
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: 'lighter.10',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'default',
  },
}
