const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

module.exports = function override(config, env) {
  // Add your DefinePlugin with custom environment variables here
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.REACT_APP_MAPBOX_TOKEN': JSON.stringify(process.env.REACT_APP_MAPBOX_TOKEN),
    })
  );
  return config;
};