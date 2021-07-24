import { render } from '@testing-library/react'
import { Category } from '@/views/Category/Category'

describe('Category', () => {
  it('should render with title', () => {
    const title = 'Test Title'

    const { getByText } = render(<Category title={title} />)

    expect(getByText(title)).toBeInTheDocument()
  })
})
