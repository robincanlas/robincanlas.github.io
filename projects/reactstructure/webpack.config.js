const path = require('path'),
	webpack = require('webpack'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	desktop_mode = process.env.DESKTOP; //desktop or mobile mode, set in package.json

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

	if(desktop_mode){
		entryPath = 'desktop/scripts/main.jsx';
		outputPath = 'build/desktop/';
	}else{
		entryPath = 'mobile/scripts/main.jsx';
		outputPath = 'build/mobile/';
	}

	let plugins = [
		new MiniCssExtractPlugin({
			filename: outputPath+"[name].css",
			chunkFilename: outputPath+"[id].css"
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
		entry: entryPath,
		output:{
			path: path.join(__dirname, 'public'),
			filename: outputPath+'build.js'
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.css'],
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
				}
			]
		},
		plugins: plugins,
	};
}