/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dummyimage.com', 'images.unsplash.com', 'placehold.jp'],
  },
  target: 'serverless',
};

export default nextConfig;
