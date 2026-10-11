/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: { bodySizeLimit: '6mb' }, // product image uploads
  },
};
export default nextConfig;
