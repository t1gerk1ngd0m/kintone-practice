const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      "my-customization": './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].min.js'
    },
    watch: env.watch
  }
}
