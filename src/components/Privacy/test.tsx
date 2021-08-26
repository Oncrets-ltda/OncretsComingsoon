import { render, screen } from '@testing-library/react'

import Privacy from '.'

describe('<Privacy />', () => {
  it('should render the heading', () => {
    const { container } = render(<Privacy />)

    expect(
      screen.getByRole('heading', { name: /Privacy/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
