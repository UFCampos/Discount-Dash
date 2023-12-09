/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: 'picsum.photos',
				port: '',
				pathname: '/**'
			}
		]
	},
	eslint: {
		ignoreDuringBuilds: true,
	}
};

module.exports = nextConfig;
