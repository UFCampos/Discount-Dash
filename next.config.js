/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['i.postimg.cc'],
	},
	eslint: {
		ignoreDuringBuilds: true,
	}
};

module.exports = nextConfig;
