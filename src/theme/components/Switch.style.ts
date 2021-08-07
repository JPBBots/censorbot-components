import { ComponentStyleConfig } from '@chakra-ui/react'

export const SwitchStyle: ComponentStyleConfig = {
  baseStyle: {
    container: {
      display: 'inline-flex',
      '--slider-track-diff':
        'calc(var(--slider-track-width) - var(--slider-track-height))',
      '--slider-thumb-x': 'var(--slider-track-diff)',
      _rtl: {
        '--slider-thumb-x': 'calc(-1 * var(--slider-track-diff))',
      },
    },
    track: {
      borderRadius: 'full',
      p: 1,
      width: 'var(--slider-track-width)',
      height: 'var(--slider-track-height)',
      transitionProperty: 'common',
      transitionDuration: 'fast',
      bg: 'lighter.10',
      boxShadow: 'no-outline',
      transition: 'box-shadow .2s ease, background-color .2s ease',
      _focus: {
        boxShadow: 'outline',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _checked: {
        bg: 'brand.100',
        _focus: {
          boxShadow: 'anti-outline',
        },
      },
    },
    thumb: {
      bg: 'darker.40',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      borderRadius: 'inherit',
      width: 'var(--slider-track-height)',
      height: 'var(--slider-track-height)',
      _checked: {
        transform: 'translateX(var(--slider-thumb-x))',
      },
      transition: 'transform .2s ease',
    },
  },
  sizes: {
    default: {
      container: {
        '--slider-track-width': '56px',
        '--slider-track-height': '24px',
      },
    },
  },
  variants: {
    rounded: {},
    default: {},
  },
  defaultProps: {
    variant: 'rounded',
    size: 'default',
  },
}
