import { ComponentStyleConfig } from '@chakra-ui/react'

export const SliderStyle: ComponentStyleConfig = {
  parts: ['thumb', 'track', 'container', 'filledTrack'],
  baseStyle: {
    container: {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      w: 'full',
      _disabled: {
        opacity: 0.6,
        cursor: 'default',
        pointerEvents: 'none',
      },
    },
    thumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      outline: 0,
      top: '50%',
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`,
      },
      w: '20px',
      h: '20px',
      zIndex: 1,
      borderRadius: 'full',
      bg: 'WHITE',
      boxShadow: 'base',
      border: '1px solid',
      borderColor: 'transparent',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      _focus: { boxShadow: 'outline' },
      _disabled: { bg: 'gray.300' },
    },
    track: {
      borderRadius: 'sm',
      h: '15px',
      bg: 'darker.20',
    },
    filledTrack: {
      width: 'inherit',
      height: 'inherit',
      bg: 'brand.100',
    },
  },
}
