export interface IPhoto {
  id: number
  sol: number
  camera: IPhotoCamera
  img_src: string
  earth_date: Date
  rover: IRover
}

export interface IPhotoCamera {
  id: number
  name: string
  rover_id: number
  full_name: string
}

export interface IRover {
  id: number
  name: string
  landing_date: Date
  launch_date: Date
  status: string
  max_sol: number
  max_date: Date
  total_photos: number
  cameras: ICameraElement[]
}

export interface ICameraElement {
  name: string
  full_name: string
}

export interface IGetPhotosResponse {
  photos: IPhoto[]
}

export interface IInfoAlert {
  open?: boolean
  message?: string
  severity?: 'success' | 'error' | 'info' | 'warning'
}
