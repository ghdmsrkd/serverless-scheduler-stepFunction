const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

const entries = {};

Object.keys(slsw.lib.entries).forEach(
  (key) => (entries[key] = ["./source-map-install.js", slsw.lib.entries[key]])
);

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: entries,
  // devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@lambda": path.resolve(__dirname, "src/lambda"),
    },
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  target: "node",
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(tsx?)$/,
        loader: "ts-loader",
        exclude: [
          [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, ".serverless"),
            path.resolve(__dirname, ".webpack"),
            path.resolve(__dirname, ".git"),
          ],
        ],
        options: {
          transpileOnly: false,
        },
      },
    ],
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
};
