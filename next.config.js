/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    // Fix for @fortawesome/react-fontawesome ESM build issue
    config.resolve = {
      ...config.resolve,
      fullySpecified: false,
    };
    return config;
  },
};

module.exports = nextConfig;

