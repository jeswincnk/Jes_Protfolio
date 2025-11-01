/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: { 
    unoptimized: true, // disables Next Image optimization for static hosting
  },
  // Remove basePath and assetPrefix for root deployment
  // If deploying to GitHub Pages subdirectory, uncomment and set your repo name:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
}

module.exports = nextConfig
