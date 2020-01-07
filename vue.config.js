
module.exports = {
  parallel: require('os').cpus().length > 1,
  devServer: {
    port: 3600
  }
}
