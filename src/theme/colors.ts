import { hex } from 'chroma-js'

const dark = hex('#000000')
const light = hex('#ffffff')
const brand = hex('#ea5454')

export const colors = {
  bg: '#161e2e',
  outline: brand.hex(),
  lighter: {
    5: light.alpha(0.05).hex(),
    10: light.alpha(0.1).hex(),
    20: light.alpha(0.2).hex(),
    40: light.alpha(0.4).hex(),
    60: light.alpha(0.6).hex(),
    80: light.alpha(0.8).hex(),
    100: light.alpha(1).hex(),
  },
  darker: {
    5: dark.alpha(0.05).hex(),
    10: dark.alpha(0.1).hex(),
    20: dark.alpha(0.2).hex(),
    40: dark.alpha(0.4).hex(),
    60: dark.alpha(0.6).hex(),
    80: dark.alpha(0.8).hex(),
    100: dark.alpha(1).hex(),
  },
  brand: {
    20: brand.alpha(0.2).hex(),
    60: brand.alpha(0.6).hex(),
    80: brand.alpha(0.8).hex(),
    100: brand.alpha(1).hex(),
  },
}
