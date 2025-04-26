// filepath: d:\mMARUF Github\react-app-qa-practice\webpack.test.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Adjust this path to your app's entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080, // Ensure this matches the port in your `test:end-to-end` script
    static: path.resolve(__dirname, 'public'), // Adjust this to your static files directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};