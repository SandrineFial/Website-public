/** @type {import('webpack').Config} */
module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
    rules: [
      {
        parser: {
          amd: false
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts"],
    preferRelative: true
  },
}