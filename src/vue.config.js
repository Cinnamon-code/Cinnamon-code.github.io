// const path = require('path')
module.exports = {
  // configureWebpack: {
  //   optimization: {
  //     splitChunks: {
  //       chunks: 'all',
  //       minSize: 20000,
  //       maxSize: 50000,
  //       hidePathInfo: true,
  //       cacheGroups: {
  //         libs: {
  //           name: 'chunk-libs',
  //           test: /[\\/]node_modules[\\/](?!element-ui[\\/])/,
  //           priority: 10,
  //           chunks: 'initial'
  //         },
  //         elementUI: {
  //           name: 'chunk-elementUI',
  //           priority: 20,
  //           test: /[\\/]node_modules[\\/]_?element-ui(.*)/
  //         },
  //         commons: {
  //           name: 'chunk-commons',
  //           test: path.resolve(__dirname, './src/components'),
  //           // minChunks: 3,
  //           priority: 5,
  //           reuseExistingChunk: true
  //         }
  //       }
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({raw: true})
  }
}
