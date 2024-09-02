import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import TabMenuComponent from './TabMenuComponent'

describe('TabMenuComponent', () => {
  it('should render 3 buttons', () => {
    // Arrange
    render(<TabMenuComponent />)

    // Act
    const buttons = screen.queryAllByRole('button')

    // Assert
    expect(buttons).toHaveLength(3)
  })

  it('should call function when each button is pressed', () => {
    // Arrange
    const onNavigate = jest.fn()

    render(<TabMenuComponent onNavigate={onNavigate} />)

    // Act
    const buttons = screen.queryAllByRole('button')

    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    fireEvent.click(buttons[2])

    // Assert
    expect(onNavigate).toHaveBeenCalledTimes(3)
  })
})
