const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: isProd ? 'https://bosssup.dev' : 'http://localhost:3000',
  }
}

module.exports = nextConfig
