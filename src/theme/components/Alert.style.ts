import { ComponentStyleConfig } from '@chakra-ui/react'

export const AlertStyle: ComponentStyleConfig = {
  parts: ['container', 'title', 'description', 'icon'],
  baseStyle: {
    container: {
      px: 4,
      py: 3,
      bg: 'rgba(254, 178, 178, 0.16)',
      color: 'white',
    },
    title: {
      fontWeight: 'bold',
      lineHeight: 6,
      marginEnd: 2,
    },
    description: {
      lineHeight: 6,
    },
    icon: {
      flexShrink: 0,
      marginEnd: 3,
      w: 5,
      h: 6,
      color: 'rgba(255, 255, 255, 0.50)',
    },
  },
  variants: {},
  defaultProps: {
    variant: 'subtle',
    colorScheme: 'blue',
  },
}
