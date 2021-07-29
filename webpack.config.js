const path = require('path');

module.exports = {
  entry: './src/client/client-vc.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

//TODO: criar loader para babel e sass