import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

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

  it('should call function when it is pressed', () => {
    // Arrange
    const onShow = jest.fn()

    render(<SelectButtonComponent title="Select Option" onShow={onShow} />)

    // Act
    const button = screen.getByText('Select Option')

    fireEvent.click(button)

    // Assert
    expect(onShow).toHaveBeenCalled()
  })
})
