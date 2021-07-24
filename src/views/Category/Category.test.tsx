import { render } from '@testing-library/react'
import { Category } from '@/views/Category/Category'

describe('Category', () => {
  it('should render with title', () => {
    const { getByText } = render(<Category title="Test Title" />)

    expect(getByText('Test Title')).toBeInTheDocument()
  })
})
