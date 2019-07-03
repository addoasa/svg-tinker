module.exports = {
  entry: './src/index.js',
  devServer: {
    publicPath: '/build/',
    proxy: {
        '/api': 'http://localhost:3000'
    }
  },
  output: {
    path: '/Users/Lazarus-Kwadwo/Desktop/devStuff/codesmith/svg-tinker/build',
    filename: 'bundle.js',
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
          loader:'babel-loader',
          //specify the presets for this specific loader in options
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
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
      }
    ]   
  }
}