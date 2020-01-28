const path = require("path");

module.exports = {
	entry: path.join(__dirname,"/src/index.js"),
	output: {
		path: path.join(__dirname,"/build"),
		filename: "bundle.js",
	},
	devServer: {
		publicPath: "/build/",
		contentBase: path.resolve(__dirname, "public"),
		proxy: {
			"/api": "http://localhost:3000/build/bundle.js"
		},
		port:9000
	},
	//this environmental variable will either be assigned value of 'production' or 'development' based on which script we run in the package.json
	mode: process.env.NODE_ENV,
	module: {
		//rules is an array that lets me specifiy each case in which a new file type needs to be understood by webpack  
		rules:[
			//rule1 for javascript files that use es6 and jsx
			{
				//regex to check for any files with the extension js or jsx
				test: /\.jsx?/,
				//exclude the unessecary node modules folder upon bundling
				exclude:/(node_modules)/,
				use: {
					//specify that we are using babel loader for this rule
					loader:"babel-loader",
					//specify the presets for this specific loader in options
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}   
			},
			{
				test:/\.scss$/,
				exclude: /(node_modules)/,
				use:[
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader"},
				]
			},
			{
				test:/\.css$/,
				exclude: /(node_modules)/,
				use:[ "style-loader", "css-loader"]
			},
			{ 
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{ loader: "file-loader",
						options:{
							outputPath: "assets",

						}
					},
					{ loader: "url-loader",
						options:{
							outputPath: "assets",

						}
					},
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true, 
							disable: true, 
						}
					},
				]
			},
			{ test: /\.(jpe?g|png|gif|svg)$/i,
				include : path.join(__dirname, "assets"), },
		]   
	}
};