/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Wix-hosted photos for now, per plan; swap to local /public images later
    // and this remotePatterns entry can be removed.
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
    ],
  },
};

module.exports = nextConfig;
