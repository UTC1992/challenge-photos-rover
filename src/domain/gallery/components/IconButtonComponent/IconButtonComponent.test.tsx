import '@testing-library/jest-dom'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { render, screen } from '@testing-library/react'

import IconButtonComponent from './IconButtonComponent'

describe('IconButtonComponent', () => {
  it('should render button and icon', () => {
    // Arrange
    render(<IconButtonComponent icon={<BookmarkIcon />} />)

    // Act
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('BookmarkIcon')

    // Assert
    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
