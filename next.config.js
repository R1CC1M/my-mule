/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.stickermule.com',
        port: '',
        pathname: '/image/fetch/**'
      }
    ]
  }
}

module.exports = nextConfig
