const path = require('path');
const webpack = require('webpack')


console.log(
	`
	####### ##         ##       #####  ##   ##
	##      ##        ####     ##      ##   ##
	#####   ##       ##  ##     ####   ####### ` +process.env.NODE_ENV+ `
	##      ##      ########       ##  ##   ##
	##      ###### ##      ##  #####   ##   ##
	`
);

module.exports = {
	mode: process.env.NODE_ENV, //development or production mode, set in package.json
	devtool: 'source-map',
	entry: 'scripts/script.jsx',
	output:{
		path: path.join(__dirname, 'public'),
		filename: 'build/build.js'
	},
	resolve: {
		extensions: ['.js','.jsx', '.json', '.css'],
		modules: [path.join(__dirname, 'public'), 'node_modules']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [['env', {'modules': false}]]
				}
			}
		]
	}
}