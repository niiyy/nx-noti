const path = require('path')
const buildPath = path.resolve(__dirname, '../dist')

const client = () => {
  return {
    entry: './client/client.ts',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: ['ts-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      minimize: true,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'client.min.js',
      path: path.resolve(buildPath, 'client'),
    },
  }
}

module.exports = [client]
