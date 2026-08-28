module.exports = nextConfig;

/** @type {import('next').NextConfig} */ 
const nextConfig = { 
	output: 'export', trailingSlash: true, images: { remotePatterns: [ { protocol: 'https', hostname: 'static.wixstatic.com' }, ], }, }; module.exports = nextConfig;