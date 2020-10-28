const path = require('path');
const glob = require('glob');

entries = {};

// js
glob.sync('./src/pages/**/*.js').map(file => {
  const key = file.split('./')[1].split('.js')[0].split('/').slice(-1)[0];
  entries[key] = file;
});

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './assets/js/pages')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // CSS取り込み設定
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ],
      }
    ]
  }
};