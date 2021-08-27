import { textStyles } from '../textStyles'
import { ComponentStyleConfig } from '@chakra-ui/react'

export const TagStyle: ComponentStyleConfig = {
  parts: ['container', 'label', 'closeButton'],
  baseStyle: {
    label: {
      overflow: 'visible',
    },
    container: {
      ...textStyles.default,
      color: 'lighter.100',
      rounded: 'md',
      p: '6px 12px',
      bg: 'lighter.5',
      outline: 0,
      _focus: {
        shadow: 'outline',
      },
    },
    closeButton: {
      pointerEvents: 'none',
      fontSize: '20px',
      w: 4,
      h: 4,
      ml: 2,
    },
  },
  variants: {},
  sizes: {},
  defaultProps: {
    variant: 'default',
    size: 'default',
  },
}
