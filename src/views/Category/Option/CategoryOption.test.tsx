import { render } from '@testing-library/react'
import { CategoryOption } from '@/views/Category/Option/CategoryOption'

describe('CategoryOption', () => {
  it('should render with icon and label', () => {
    const icon = 'icon'
    const label = 'Option Label'

    const { getByText } = render(<CategoryOption icon={icon} label={label} />)

    expect(getByText(icon)).toBeInTheDocument()
    expect(getByText(label)).toBeInTheDocument()
  })
})
