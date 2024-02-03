/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["avatars.githubusercontent.com", "www.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
