import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ImageComponent from './ImageComponent'

describe('ImageComponent', () => {
  it('should render image', () => {
    // Arrange
    render(<ImageComponent url={'/next.svg'} description="Image to test" />)

    // Act
    const image = screen.getByRole('img')
    const imageSrc = image.getAttribute('src')

    // Assert
    expect(image).toBeInTheDocument()
    expect(imageSrc).toBe('http://localhost/next.svg')
  })
})
