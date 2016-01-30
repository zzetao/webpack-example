var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'src');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
	// 入口文件  默认会去找index.js
	entry: APP_PATH,

	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},

	// 添加插件，自动生成html文件
	plugins: [
		new HtmlwebpackPlugin({
			title: 'hello webpack'
		})
	],

	// webpack-dev-server
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	},

	module: {
		loaders :[
			// 处理css 
	      	{
	      		test: /\.scss$/,
	      		loaders:['style','css','autoprefixer?browsers=last 2 versions','sass'],
	      		include: APP_PATH
	      	},
	      	// 处理js
			{
		        test: /\.jsx?$/,
		        loader: 'babel',
		        include: APP_PATH,
		        query: {
		          presets: ['es2015']
		        }
	      	},
	      	// 处理图片
	      	{
	      		// 图片小于20kb转base64
	      		test: /\.(png|jpg)$/,
	      		loader: 'url?limit=20000'
	      	},
		]
	},
}