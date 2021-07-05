import { ComponentStyleConfig, DeepPartial } from '@chakra-ui/react'

export const ButtonStyle: DeepPartial<ComponentStyleConfig> = {
  baseStyle: {
    color: 'white',
    rounded: '5px',
  },
  variants: {
    default: {
      bg: 'rgba(255, 255, 255, .05)',
      _hover: {
        bg: 'rgba(255, 255, 255, .1)',
      },
    },
    primary: {
      bg: 'rgba(234, 84, 84, .2)',
      _hover: {
        bg: 'rgba(234, 84, 84, .8)',
      },
    },
  },
  sizes: {
    sm: {
      p: '8px 16px',
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'sm',
  },
}
