import { ComponentStyleConfig } from '@chakra-ui/react'

export const SelectStyle: ComponentStyleConfig = {
  parts: ['field', 'icon'],
  baseStyle: {
    field: {
      w: 'full',
      flexGrow: 1,
      minWidth: 0,
      outline: 0,
      cursor: 'pointer',
      position: 'relative',
      appearance: 'none',
      transition: '.12s ease',
      color: 'lighter.80',
      _placeholder: {
        color: 'lighter.20',
      },
      '> option, > optgroup': {
        bg: 'bg',
        border: '1px solid red',
      },
    },
    icon: {
      flexShrink: 0,
      insetEnd: 0,
    },
  },
  sizes: {
    md: {
      field: {
        textStyle: 'default',
        p: 4,
        rounded: 'md',
      },
      icon: {
        p: 4,
        fontSize: 28,
      },
    },
    sm: {
      field: {
        textStyle: 'default',
        p: 2,
        rounded: 'md',
      },
      icon: {
        p: 2,
        fontSize: 20,
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
      icon: {
        color: 'lighter.80',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'default',
  },
}
