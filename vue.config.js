module.exports = {
  publicPath: './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_vars.scss"; @import "@/styles/_mixins.scss";`
      }
    }
  }
}
