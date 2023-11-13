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
};

module.exports = nextConfig;
