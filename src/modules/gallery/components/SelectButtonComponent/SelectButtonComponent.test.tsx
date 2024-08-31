import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import SelectButtonComponent from './SelectButtonComponent'

describe('SelectButton', () => {
  it('should render the button', () => {
    // Arrange
    render(<SelectButtonComponent title="Select Option" />)

    // Act
    const button = screen.getByText('Select Option')

    // Assert
    expect(button).toBeInTheDocument()
  })
})
