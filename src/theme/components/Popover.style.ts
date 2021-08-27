import { ComponentStyleConfig } from '@chakra-ui/react'

export const PopoverStyle: ComponentStyleConfig = {
  parts: ['popper', 'content', 'header', 'body', 'footer', 'arrow'],
  baseStyle: {
    content: {
      p: 2,
      bg: 'bg',
      zIndex: 1,
      minW: '320px',
      color: 'lighter.60',
      borderWidth: '2px',
      borderColor: 'brand.100',
      borderTopWidth: 0,
      borderTopRadius: 0,
      borderBottomRadius: 'md',
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
}
