const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJS = require('uglifyjs-webpack-plugin');


const DEVELOPMENT = process.env.NODE_ENV === 'DEV';
const PRODUCTION = process.env.NODE_ENV === 'PROD';

console.log(
	`
	####### ##         ##       #####  ##   ##
	##      ##        ####     ##      ##   ##
	#####   ##       ##  ##     ####   #######  RUUUUUUUUNNNNNNNNNNNNNNNNNN
	##      ##      ########       ##  ##   ##
	##      ###### ##      ##  #####   ##   ##
	`
);

let [plugins] = [[]];

if(DEVELOPMENT && !PRODUCTION){
	plugins = [
		new UglifyJS()
	];
}else if(!DEVELOPMENT && PRODUCTION){
	plugins = [
		new webpack.optimize.OccurrenceOrderPlugin(),

		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				screw_ie8: true,
				warnings: false,
				drop_console: false,
			},
			mangle: {
				screw_ie8: true
			},
			output: {
				comments: false,
				screw_ie8: true
			}
		}),
	];
}else throw new Error('ERROR SA DEV at PROD VARIABLES');

plugins.push(
	new webpack.EnvironmentPlugin(["NODE_ENV"]),
	new ExtractTextPlugin('/build/style.css')
);

module.exports = {
	devtool: 'source-map',
	entry: 'scripts/script.jsx',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'build/build.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css'],
		modules: [path.join(__dirname, 'public'), 'node_modules']
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [['es2015', {"modules": false}], 'react']
				}
			},
			{
				exclude: /node_modules/,
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							query: {
								importLoaders: 1,
								minimize: true,
								sourceMap: true,
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: function(){
									return [
										autoprefixer({
											browsers: [
												'>1%',
												'last 4 versions',
												'Firefox ESR',
												'not ie < 9', // React doesn't support IE8 anyway
											]
										})
									];
								}
							}
						}
					]
				}),
			},
			{
				test: /\.(png|jpg|woff|mp3|ogg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
					path: path.join(__dirname, 'public'),
					publicPath: '',
					outputPath: '/build/'
				}
			}
		]
	},
	plugins: plugins,
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		// 'react-custom-scrollbars': 'Scrollbars',
	}
}