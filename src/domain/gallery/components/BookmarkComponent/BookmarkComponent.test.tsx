import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import BookmarkComponent from './BookmarkComponent'

describe('BookMarkComponent', () => {
  it('should render the button', () => {
    // Arrange
    render(<BookmarkComponent title="Camera, Date" />)

    // Act
    const button = screen.getByText('Camera, Date')

    // Assert
    expect(button).toBeInTheDocument()
  })
})
