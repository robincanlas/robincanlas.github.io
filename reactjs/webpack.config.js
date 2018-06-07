const path = require('path');
	webpack = require('webpack'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),



module.exports = (env, option) => {

	let entryPath = '',
		outputPath = '';

	console.log(
		`
		####### ##         ##       #####  ##   ##
		##      ##        ####     ##      ##   ##
		#####   ##       ##  ##     ####   ####### ` +option.mode+ `
		##      ##      ########       ##  ##   ##
		##      ###### ##      ##  #####   ##   ##
		`
	);

	let plugins = [
		new MiniCssExtractPlugin({
			filename: "build/[name].css",
			chunkFilename: "build/[id].css"
		})
	];

	if(option.mode === 'production'){
		plugins.push(
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: {
						warnings: false,
						drop_console: true
					},
					ecma: 6,
					mangle: true,
					output: {
						comments: false
					}
				},
				sourceMap: true
			})
		)
	}

	return {
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
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: [['env', {'modules': false}], 'react']
					}
				},
				{
					test: /\.css$/,
					use: [
					  MiniCssExtractPlugin.loader,
					  "css-loader"
					]
				},
				{
					test: /\.(ttf|woff)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'build/fonts/',
								publicPath: 'fonts/'
							}
						}
					]
				},
				{
					test: /\.(png|svg|jpg|jpeg)$/,
					use: [
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
	}
}