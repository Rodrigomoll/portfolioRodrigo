/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    basePath: isProduction ? '/portfolioRodrigo' : '',
    assetPrefix: isProduction ? '/portfolioRodrigo' : '',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
