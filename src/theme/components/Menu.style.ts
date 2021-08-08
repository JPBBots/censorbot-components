import { ComponentStyleConfig } from '@chakra-ui/react'

export const MenuStyle: ComponentStyleConfig = {
  parts: ['item', 'command', 'list', 'button', 'groupTitle', 'divider'],
  baseStyle: {
    list: {
      bg: 'bg',
      zIndex: 1,
      minW: '320px',
      rounded: 'sm',
      color: 'lighter.60',
      borderWidth: '1px',
      borderColor: 'lighter.10',
    },
    item: {
      py: 2,
      px: 4,
      rounded: 'sm',
      transitionProperty: 'background',
      transitionDuration: 'ultra-fast',
      transitionTimingFunction: 'ease-in',
      _hover: {
        color: 'lighter.100',
      },
      _focus: {
        bg: 'lighter.5',
        shadow: 'outline',
      },
      _active: {
        bg: 'lighter.5',
      },
      _expanded: {
        bg: 'lighter.5',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
}
