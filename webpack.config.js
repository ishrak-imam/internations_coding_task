
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {

  devtool: 'sourcemap',

  devServer: {
    host: '127.0.0.1',
    port: '8080'
  },

  entry: {
    app: './src/index'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }

          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      inject: 'dody',
      hash: true
    })
  ]

}
