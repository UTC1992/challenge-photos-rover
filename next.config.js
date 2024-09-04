/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ hostname: 'mars.jpl.nasa.gov' }, { hostname: 'mars.nasa.gov' }],
  },
  redirects: () => {
    return [
      {
        source: '/',
        destination: '/gallery/rover',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
