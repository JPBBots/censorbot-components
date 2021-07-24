import { render } from '@testing-library/react'
import { CCProvider } from '@/utils/CCProvider/CCProvider'

describe('CCProvider', () => {
  it('should render', () => {
    render(<CCProvider />)
  })
})
