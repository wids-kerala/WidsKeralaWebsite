module.exports = {
  chainWebpack: config=>{
    config.plugins.delete('prefetch')
  },
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  pwa: {
    name: 'wids-kerala',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#28bd17',
    msTileColor: '#28bd172',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#ffffff"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}