import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import SelectEarthDateComponent from './SelectEarthDateComponent'

describe('SelectEarthDateComponent', () => {
  it('should render modal when buttons is pressed', () => {
    // Arrange
    render(<SelectEarthDateComponent />)

    // Act
    const button = screen.getByRole('button', { name: /earth date/i })

    fireEvent.click(button)
    const modal = screen.getByRole('dialog')

    // Assert
    expect(modal).toBeInTheDocument()
  })
})
