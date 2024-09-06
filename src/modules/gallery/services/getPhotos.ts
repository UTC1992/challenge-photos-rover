'use server'

import axios, { AxiosError } from 'axios'

import { env } from '@/modules/config/env'

import { IGetPhotosResponse } from '../types/interfaces'

export interface IGetPhotosParams {
  rover: string
  sol?: number
  earthDate?: string
  camera?: string
  page?: number
}

export const getPhotos = async ({
  rover,
  sol,
  camera,
  page = 1,
  earthDate,
}: IGetPhotosParams): Promise<IGetPhotosResponse> => {
  try {
    const dateSol = sol ? `sol=${sol}` : ''
    const dateEarth = earthDate ? `earth_date=${earthDate}` : ''
    const dateQuery = `${dateSol || ''}&${dateEarth || ''}`
    const cameraQuery = camera ? `camera=${camera}` : ''

    const response = await fetch(
      `${env.BASE_URL}/rovers/${rover}/photos?page=${page}&${dateQuery}&${cameraQuery}&api_key=${env.API_KEY}`,
    )

    const data = await response.json()
    return data as IGetPhotosResponse
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 404) {
        throw new Error('Not found')
      }
    }
    throw new Error(`${error}`)
  }
}
