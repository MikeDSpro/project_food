const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/public/build`,
    publicPath: "build/",
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module:{
    loaders:[
      {
        // test: /\.jsx?$/,
        // exclude: /node_modules/,
        // enforce: "pre",
        // loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
          {
            presets:['react',"env",'stage-0'],
            plugins:['transform-regenerator',
              ["transform-runtime", {
                "helpers": false,
                "polyfill": false,
                "regenerator": true,
                "moduleName": "babel-runtime"
              }],
              "transform-object-rest-spread",]
          }
      },
      // {
      //   test:/\.css$/,
      //   loader: "style-loader!css-loader!autoprefixer-loader",
      //   exclude: [/node_modules/,/public/]
      // },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },

};