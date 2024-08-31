import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import TitleComponent from './TitleComponent'

describe('Title', () => {
  it('should render the title', () => {
    // Arrange
    render(<TitleComponent title="Gallery" />)

    // Act
    const title = screen.getByText('Gallery')

    // Assert
    expect(title).toBeInTheDocument()
  })
})
