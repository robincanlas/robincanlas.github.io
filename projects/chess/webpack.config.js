const path = require('path'),
	webpack = require('webpack'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log(
	`
	####### ##         ##       #####  ##   ##
	##      ##        ####     ##      ##   ##
	#####   ##       ##  ##     ####   #######  `+"RUUUUUUUUNNNNNN"+`
	##      ##      ########       ##  ##   ##
	##      ###### ##      ##  #####   ##   ##
	`
);

module.exports = (env, option) => {
	let plugins = [
		new MiniCssExtractPlugin({
			filename: "build/[name].css",
			chunkFilename: "build/[id].css"
		})
	];

	if(option.mode === 'production'){

	}

	return{
		devtool: 'source-map',
		entry: 'scripts/main.jsx',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'build/build.js'
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.css'],
			modules: [path.join(__dirname, 'public'), 'node-modules']
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: [
							['env', {modules: false}],
							'react'
						],
						plugins: ['transform-class-properties']
					}
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader'
					]
				},
				{
					test: /\.(png|svg|jpg|jpeg)$/,
					use:[
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
								context: ''
							}
						}
					]
				}
			]
		},
		plugins: plugins,
		externals: {

		}
	}
}