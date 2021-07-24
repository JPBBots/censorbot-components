import { render } from '@testing-library/react'
import {
  CCProvider,
  NextFontHead,
  NextColorModeScript,
} from '@/utils/CCProvider/CCProvider'

describe('CCProvider', () => {
  it('should render', () => {
    render(<CCProvider />)
  })
})

describe('NextFontHead', () => {
  it('should render', () => {
    render(<NextFontHead />)
  })
})

describe('NextColorModeScript', () => {
  it('should render', () => {
    render(<NextColorModeScript />)
  })
})
