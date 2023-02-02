/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	images:{
		domains:['images.microcms-assets.io'],
	},
	/*images:{
		remotePatterns:[
		{
			protocol: 'https',
			hostname: 'images.microcms-assets.io',
			port: '',
			pathname: '/assets/',
		}
		]
	},*/
}

module.exports = nextConfig
