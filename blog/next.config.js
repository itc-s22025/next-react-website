/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	images:{
		domains:['images.microcms-assets.io'],
	},
	/*images:{
		remotePatterns:[
		{
			loader: 'image-loader.js',
			path: 'https://images.microcms-assets.io/assets/',
		}
		]
	},*/
}

module.exports = nextConfig
