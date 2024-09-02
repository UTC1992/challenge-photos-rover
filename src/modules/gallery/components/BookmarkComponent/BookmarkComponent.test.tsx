import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

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

  it('should call function when close button is clicked', () => {
    // Arrange
    const onClick = jest.fn()
    render(<BookmarkComponent title="Camera, Date" onDelete={onClick} />)

    // Act
    const icon = screen.getByTestId('CancelIcon')
    fireEvent.click(icon)

    // Assert
    expect(onClick).toHaveBeenCalled()
  })
})
