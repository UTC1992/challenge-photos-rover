import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('Title', () => {
  it('should render the title', () => {
    // Arrange
    render(<Title title="Gallery" />)

    // Act
    const title = screen.getByText('Gallery')

    // Assert
    expect(title).toBeInTheDocument()
  })
})
