module.exports = {
  configureWebpack: {
    resolve: {
      //@ 是 src 的别名
      alias: {
        'assets': '@/assets',
        // 'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

