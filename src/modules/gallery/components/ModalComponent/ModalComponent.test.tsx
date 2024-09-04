import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import ModalComponent from './ModalComponent'

describe('ModalComponent', () => {
  it('should render modal when open option is in true', () => {
    // Arrange
    const open = true

    render(<ModalComponent open={open} />)

    // Act
    const modal = screen.queryAllByRole('dialog')

    // Assert
    expect(modal).toHaveLength(1)
  })

  it('should not render modal when open option is in false', () => {
    // Arrange
    const open = false

    render(<ModalComponent open={open} />)

    // Act
    const modal = screen.queryAllByRole('dialog')

    // Assert
    expect(modal).toHaveLength(0)
  })

  it('should call function when button is pressed', () => {
    // Arrange
    const open = true
    const onClose = jest.fn()

    render(<ModalComponent open={open} onClose={onClose} />)

    // Act
    fireEvent.click(screen.getByRole('button'))

    // Assert
    expect(onClose).toHaveBeenCalled()
  })

  it('should render children', () => {
    // Arrange
    const open = true

    render(
      <ModalComponent open={open}>
        <>Hi</>
      </ModalComponent>,
    )

    // Act
    const children = screen.queryByText('Hi')

    // Assert
    expect(children).toBeInTheDocument()
  })

  it('should render title', () => {
    // Arrange
    const open = true

    render(
      <ModalComponent open={open} title="Data List">
        <>Hi</>
      </ModalComponent>,
    )

    // Act
    const title = screen.getByText('Data List')

    // Assert
    expect(title).toBeInTheDocument()
  })
})
