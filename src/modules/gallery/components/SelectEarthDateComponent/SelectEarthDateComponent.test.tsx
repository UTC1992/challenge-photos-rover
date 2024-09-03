import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import SelectEarthDateComponent from './SelectEarthDateComponent'

describe('SelectEarthDateComponent', () => {
  it('should render modal when buttons is pressed', () => {
    // Arrange
    render(<SelectEarthDateComponent />)

    // Act
    const button = screen.getByRole('button')

    fireEvent.click(button)
    const modal = screen.getByRole('dialog')

    // Assert
    expect(modal).toBeInTheDocument()
  })

  it('should change label of button when user choose a date and modal should close', () => {
    // Arrange
    render(<SelectEarthDateComponent />)

    // Act
    const button = screen.getByRole('button')

    fireEvent.click(button)

    const date = screen.queryAllByRole('gridcell')
    const modal = screen.getByRole('dialog')

    fireEvent.click(date[0])

    // Assert
    expect(button).not.toHaveTextContent(/earth date/i)
    expect(modal).not.toBeInTheDocument()
  })
})
