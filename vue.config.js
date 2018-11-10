module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_main.scss";`
      }
    }
  }
}