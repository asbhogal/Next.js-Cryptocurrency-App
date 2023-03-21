/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    experimental: {
      appDir: true,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
      unoptimized: false
    }
  }
  
  module.exports = nextConfig