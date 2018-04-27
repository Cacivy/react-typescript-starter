const webpack = require('webpack')
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const paths = require('./paths')
const getClientEnvironment = require('./env')
const publicPath = paths.servedPath
const publicUrl = publicPath.slice(0, -1)
const env = getClientEnvironment(publicUrl)

const vendors = ['react', 'react-dom', 'mobx', 'mobx-react'];
module.exports = {
  output: {
    path: paths.appPublic,
    filename: '[name].[chunkhash:8].js',
    library: '[name]_[chunkhash:8]',
  },
  entry: {
    'vendor': vendors,
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
    new CompressionWebpackPlugin({ //gzip 压缩
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(js|css)$' //压缩 js 与 css
      ),
      threshold: 10240,
      minRatio: 0
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '[name]-manifest.json'),
      name: '[name]_[chunkhash:8]',
      context: __dirname,
    })
  ],
};