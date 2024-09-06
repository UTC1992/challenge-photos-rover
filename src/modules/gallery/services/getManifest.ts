'use server'

export const getManifest = async (
  roverName: string,
): Promise<{ maxSol: number }> => {
  try {
    const data = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=EbGqFSsvmlrHSg6jDlefDJcYeNUTfPyZpvlTGCEX`,
    )
    const posts = await data.json()

    return { maxSol: posts.photo_manifest.max_sol }
  } catch (error) {
    throw new Error(`${error}`)
  }
}
