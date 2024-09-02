import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import InputSolComponent from './InputSolComponent'

describe('InputSolComponent', () => {
  it('should render input to type mars sol', () => {
    // Arrange
    render(<InputSolComponent />)

    // Act
    const input = screen.getByRole('textbox')

    // Assert
    expect(input).toBeInTheDocument()
  })

  it('should display the text entered by the user', () => {
    // Arrange
    render(<InputSolComponent />)

    // Act
    const inputInitial = screen.getByRole('textbox')

    fireEvent.change(inputInitial, { target: { value: '1000' } })

    // Assert
    expect(inputInitial).toHaveValue('1000')
  })
})
