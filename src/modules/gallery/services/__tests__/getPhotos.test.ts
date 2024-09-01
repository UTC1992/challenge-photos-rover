import axios, { AxiosError } from 'axios'
import photos from './fixtures/photos.data.json'
import { getPhotos } from '../getPhotos'

jest.mock('axios')

const params = {
  rover: 'curiosity',
  sol: 1000,
  camera: 'fhaz',
  page: 1,
}

describe('getPhotos', () => {
  beforeEach(() => {
    axios.get.mockClear()
  })

  it('should return photos', async () => {
    // Arrange
    const resp = { data: photos }
    axios.get.mockResolvedValueOnce(resp)

    // Act
    const result = await getPhotos(params)

    // Assert
    expect(result).toEqual(photos)
  })

  it('should return throw error', async () => {
    // Arrange
    axios.get.mockRejectedValueOnce(new Error('Network Error'))

    // Act
    const result = getPhotos(params)

    // Assert
    await expect(result).rejects.toThrow('Error: Network Error')
  })
})
