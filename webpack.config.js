/* eslint-disable no-undef */
module.exports = {
  // https://webpack.js.org/concepts/mode/
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /(\.js$|\.jsx$)/,
      exclude: /(node_modules|bower_components)/,

      use: [{
        loader: 'babel-loader',

        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }]
    }]
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ]
  },
  optimization: {
    minimize: false
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
/* eslint-enable no-undef */
