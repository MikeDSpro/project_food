export default {
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
      },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: "babel-loader",
      //   query:
      //     {
      //       presets:['react',"env",'stage-0'],
      //       plugins:['transform-regenerator',
      //         ["transform-runtime", {
      //           "helpers": false,
      //           "polyfill": false,
      //           "regenerator": true,
      //           "moduleName": "babel-runtime"
      //         }],
      //         "transform-object-rest-spread",]
      //     }
      // },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader?cacheDirectory',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true, // default is false
      //         sourceMap: true,
      //         importLoaders: 1,
      //         localIdentName: '[name]--[local]',
      //         getLocalIdent: (context, localIdentName, localName) => {
      //           const splitted = context.context.split('/');
      //           const elName = splitted[splitted.length - 1];
      //           return `theme-${elName}--${localName}`;
      //         },
      //       },
      //     },
      //     'postcss-loader',
      //   ],
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
};