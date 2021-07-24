import { render } from '@testing-library/react'
import { NavActions } from '@/views/NavActions/NavActions'

describe('NavActions', () => {
  it('should render with actions with a label', () => {
    const label = 'Test Label'

    const { getByText } = render(<NavActions actions={[{ label }]} />)

    expect(getByText(label)).toBeInTheDocument()
  })
})
