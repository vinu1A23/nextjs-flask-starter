/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:"/api/"
      },
    ]
  },
}
module.exports = nextConfig
