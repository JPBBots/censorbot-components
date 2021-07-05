import { create } from '@storybook/theming'
import brandImage from './components-logo.png'

export default create({
  base: 'dark',

  colorPrimary: '#f44646',
  colorSecondary: '#f44646',

  // UI
  appBg: '#0e1723',
  appContentBg: '#1c2339',
  appBorderColor: '#0e1723',
  appBorderRadius: 10,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#e3cbbc',
  textInverseColor: '#0e1723',

  // Toolbar default and active colors
  barTextColor: '#ffffff60',
  barSelectedColor: '#ffffff',
  barBg: '#151a25',

  // Form colors
  inputBg: '#0e1723',
  inputBorder: '#1c2339',
  inputTextColor: '#f44646',
  inputBorderRadius: 5,

  brandTitle: 'Censor Bot Storybook',
  brandUrl: 'https://censor.bot/',
  brandImage,
});
