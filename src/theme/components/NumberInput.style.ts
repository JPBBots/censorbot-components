import { ComponentStyleConfig } from '@chakra-ui/react'

export const NumberInputStyle: ComponentStyleConfig = {
  parts: ['root', 'field', 'stepper', 'stepperGroup'],
  baseStyle: {
    root: {},
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
    stepper: {
      p: 2,
      bg: 'darker.10',
      transition: '.2s ease',
      _first: {
        pb: 1,
        roundedTop: '8px',
      },
      _last: {
        pt: 1,
        roundedBottom: '8px',
      },
      _hover: {
        bg: 'lighter.10',
        color: 'lighter.100',
      },
    },
    stepperGroup: {
      p: '2px',
      color: 'lighter.60',
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
    },
  },
  sizes: {
    md: {
      field: {
        textStyle: 'default',
        p: 4,
        rounded: 'md',
      },
    },
    sm: {
      field: {
        textStyle: 'default',
        p: 2,
        rounded: 'md',
      },
      stepper: {
        p: '5px',
        fontSize: '10px',
        _first: {
          pb: 1,
          roundedTop: '4px',
        },
        _last: {
          pt: 1,
          roundedBottom: '4px',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'default',
  },
}
