const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  parallel: require('os').cpus().length > 1,
  devServer: {
    port: 3600
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
  }
}
