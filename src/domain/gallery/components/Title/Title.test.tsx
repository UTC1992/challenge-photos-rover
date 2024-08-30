import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('Title', () => {
  it('should render the title', () => {
    render(<Title title="Gallery" />)

    const title = screen.getByText('Gallery')

    expect(title).toBeInTheDocument()
  })
})
