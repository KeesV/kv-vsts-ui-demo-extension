const path = require('path');

module.exports = {
  entry: {
    app: "./src/app.ts"
  },
  output: {
    filename: "./src/app.js",
    libraryTarget: "amd"
  },
  externals: [
    /^VSS\/.*/, /^TFS\/.*/, /^q$/
  ],
  module: {
    rules: [
    {
      test: /\.tsx?$/,
      loader: "ts-loader"
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.css', '.ts']
  }
};