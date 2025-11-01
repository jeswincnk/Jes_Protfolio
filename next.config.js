/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: { 
    unoptimized: true, // disables Next Image optimization for static hosting
  },
  basePath: '/Jes_Protfolio', // GitHub repository name
  assetPrefix: '/Jes_Protfolio/', // GitHub repository name
}

module.exports = nextConfig
