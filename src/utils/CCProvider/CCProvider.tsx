import theme, { DEFAULT_COLOR_MODE } from '@/theme'
import type { PropsWithChildren } from 'react'
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
  CSSReset,
  GlobalStyle,
  localStorageManager,
} from '@chakra-ui/react'

export interface CCProviderProps extends PropsWithChildren<unknown> {
  cookies?: string | unknown
  useCssReset?: boolean
  useGlobalStyle?: boolean
}

/** For use in Next.JS in the _document.js file. */
export const NextColorModeScript = () => (
  <ColorModeScript initialColorMode={DEFAULT_COLOR_MODE} />
)

/** For importing the fonts used by our theme in Next.JS. */
export const NextFontHead = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </>
)

/** Wrapper to allow usage of the components within this library. */
export const CCProvider = ({
  cookies,
  useCssReset = true,
  useGlobalStyle = true,
  children,
}: CCProviderProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {useCssReset && <CSSReset />}
      {useGlobalStyle && <GlobalStyle />}
      {children}
    </ChakraProvider>
  )
}
