/* eslint-disable no-undef */
const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.tsx`,
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
      utils: path.resolve(__dirname, `./src/utils`),
      config: path.resolve(__dirname, `./src/config.ts`),
      store: path.resolve(__dirname, `./src/store`),
      hocs: path.resolve(__dirname, `./src/hocs`),
      middleware: path.resolve(__dirname, `./src/middleware`),
      ducks: path.resolve(__dirname, `./src/ducks`),
    },
    extensions: [`.js`, `.jsx`, `ts`, `tsx`, `json`, `.d.ts`],
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
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ],
  },
  devtool: `inline-source-map`,
};
