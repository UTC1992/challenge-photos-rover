import '@testing-library/jest-dom'
import { fireEvent, render, screen, cleanup } from '@testing-library/react'

import SelectCameraComponent from './SelectCameraComponent'

export const camerasDummy = [
  {
    abbreviation: 'FHAZ',
    camera: 'Front Hazard Avoidance Camera',
  },
  {
    abbreviation: 'RHAZ',
    camera: 'Rear Hazard Avoidance Camera',
  },
]
describe('OptionsContainer', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render only button in the initial state', () => {
    // Arrange
    render(<SelectCameraComponent />)

    // Act
    const button = screen.getByRole('button')
    const modal = screen.queryByRole('dialog')

    // Assert
    expect(button).toBeInTheDocument()
    expect(modal).not.toBeInTheDocument()
  })

  it('should render modal when button is pressed', () => {
    // Arrange
    render(<SelectCameraComponent />)

    // Act
    const button = screen.getByRole('button')

    fireEvent.click(button)
    const modal = screen.queryByRole('dialog')

    // Assert
    expect(button).toBeInTheDocument()
    expect(modal).toBeInTheDocument()
  })

  it('should close modal when it is opened and the close icon is pressed', () => {
    // Arrange
    render(<SelectCameraComponent />)

    // Act
    const button = screen.getByRole('button')

    fireEvent.click(button) // open modal

    const closeIconButton = screen.queryAllByRole('button')
    const modal = screen.queryByRole('dialog')

    fireEvent.click(closeIconButton[0]) // close modal

    // Assert
    expect(modal).not.toBeInTheDocument()
  })

  it('should render list with items when modal is opened', () => {
    // Arrange
    render(<SelectCameraComponent options={camerasDummy} />)

    // Act
    const button = screen.getByRole('button')

    fireEvent.click(button) // open modal
    const list = screen.getByRole('list')
    const itemsList = screen.getAllByRole('listitem')

    // Assert
    expect(list).toBeInTheDocument()
    expect(itemsList).toHaveLength(camerasDummy.length)
  })

  it('should render items that there were sent', () => {
    // Arrange
    render(<SelectCameraComponent options={camerasDummy} />)

    // Act
    const button = screen.getByRole('button')

    fireEvent.click(button) // open modal
    const itemsList = screen.getAllByRole('listitem')

    // Assert
    expect(itemsList).toHaveLength(2)
  })
})
