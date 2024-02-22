const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/exps/' : '/',
  
})

module.exports = {
  pwa: {
      workboxOptions: {
          skipWaiting: true
      }
  }
}
