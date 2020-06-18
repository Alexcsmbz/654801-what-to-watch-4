/* eslint-disable no-undef */
const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.jsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, `./src/components`),
      mock: path.resolve(__dirname, `./src/mock`),
      utils: path.resolve(__dirname, `./src/utils`),
    },
    extensions: [`.js`, `.jsx`, `ts`, `tsx`],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: `react`,
      propTypes: `prop-types`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },
  devtool: `source-map`,
};
