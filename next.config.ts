/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/nakliyat',
  assetPrefix: '/nakliyat/',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;