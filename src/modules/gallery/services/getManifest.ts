'use server'

interface IManifest {
  listYears: string[]
  lastDate: string
}

export const getManifest = async (roverName: string): Promise<IManifest> => {
  try {
    if (!roverName) {
      throw new Error('Rover name is required')
    }

    const data = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=EbGqFSsvmlrHSg6jDlefDJcYeNUTfPyZpvlTGCEX`,
    )
    const posts = await data.json()

    const maxSol = posts.photo_manifest.max_sol || 1
    const list = Array.from({ length: maxSol }, (_, index) =>
      (index + 1).toString(),
    )
    const lastDate = posts.photo_manifest.max_date

    return { listYears: list, lastDate }
  } catch (error) {
    throw new Error(`${error}`)
  }
}
