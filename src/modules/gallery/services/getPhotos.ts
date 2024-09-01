import { env } from '@/modules/config/env'
import axios, { AxiosError } from 'axios'
import { IPhoto } from './interfaces'

interface IResponse {
  photos: IPhoto[]
}

interface IGetPhotosParams {
  rover: string
  sun?: number
  earthDate?: string
  camera?: string
  page?: number
}

export const getPhotos = async ({
  rover,
  sun,
  camera,
  page = 1,
  earthDate,
}: IGetPhotosParams): Promise<IResponse> => {
  try {
    const dateSun = sun ? `sol=${sun}` : ''
    const dateEarth = earthDate ? `earth_date=${earthDate}` : ''
    const dateQuery = `${dateSun || dateEarth}`
    const cameraQuery = camera ? `camera=${camera}` : ''

    const response = await axios.get(
      `${env.BASE_URL}/rovers/${rover}/photos?page=${page}&${dateQuery}&${cameraQuery}&api_key=${env.API_KEY}`,
    )

    return response.data as IResponse
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 404) {
        throw new Error('Not found')
      }
    }
    throw new Error(`${error}`)
  }
}
