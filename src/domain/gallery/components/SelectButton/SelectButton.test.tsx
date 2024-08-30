import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SelectButton from './SelectButton'

describe('SelectButton', () => {
  it('should render the button', () => {
    // Arrange
    render(<SelectButton title="Select Option" />)

    // Act
    const button = screen.getByText('Select Option')

    // Assert
    expect(button).toBeInTheDocument()
  })
})
