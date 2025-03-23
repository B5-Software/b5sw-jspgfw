const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/framework.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'ProgressiveUI',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // 确保这个文件名正确
      ignoreOrder: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 替换原来的style-loader
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader' // 需要PostCSS配置
        ]
      }
    ]
  }
};