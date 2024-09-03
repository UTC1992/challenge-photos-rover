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

}

module.exports = nextConfig
