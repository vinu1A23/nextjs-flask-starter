/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'production'
            ? 'http://nextjs-flask-starter-five-blue.vercel.app/api/:path*'
            : '/api/',
      },
    ]
  },
}

module.exports = nextConfig
