import photos from './fixtures/photos.data.json'

import { getPhotos } from '../getPhotos'

jest.mock('axios')

const params = {
  rover: 'curiosity',
  sol: '1000',
  camera: 'fhaz',
  page: 1,
}

describe('getPhotos', () => {
  const mockFetch = global as jest.Mocked<typeof global>

  beforeEach(() => {
    // Restablecer el mock antes de cada test
    global.fetch = jest.fn()
  })

  it('should return photos', async () => {
    // Arrange
    const resp = { photos }

    mockFetch.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => resp,
    } as Response)

    // Act
    const result = await getPhotos(params)

    // Assert
    expect(result.photos).toEqual(photos)
  })

  it('should return throw error', async () => {
    // Arrange
    mockFetch.fetch.mockRejectedValueOnce(new Error('Network Error'))

    // Act
    const result = getPhotos(params)

    // Assert
    await expect(result).rejects.toThrow('Error: Network Error')
  })
})
