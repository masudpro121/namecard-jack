/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.midjourney.com"],
  },
  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = nextConfig;
