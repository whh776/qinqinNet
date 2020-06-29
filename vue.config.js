//! 对当前项目配置的添加或是覆盖 
//! 配置文件一旦修改，是必须重启
//! 修改的是  node_modules/@vue/cli-server   webpack配置
//! 当前的这个配置文件用的是Common.js模块化
//! 这个就是Node.js文件
const path = require('path')
console.log(process.env.dev)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, './src'))
      .set('comp', path.join(__dirname, './src/components'))
      .set('Page', path.join(__dirname, './src/pages'))
      .set('Assets', path.join(__dirname, './src/assets'))
      .set('Api', path.join(__dirname, './src/api'))
      .set('Utils', path.join(__dirname, './src/utils'))
  },
  devServer: {
    open: true,
    proxy: {
      // http://www.qinqin.net/index.php?r=class/category&type=1
      // 标识符选择你的目标源 的  域名  后的 第一个路径
      // 标识符: { 
      //   target  目标源  只写协议和域名
      //   changeOrigin 修改源  将目标源的协议和域名换成我们当前服务器的协议和域名 
      //   pathRewrite: {}
      // }

      // https://elm.cangdu.org/v1/pois?type=search&city_id=2&keyword=%E4%B9%9D%E5%A0%A1
      '/api': {
        target: 'http://59.110.226.77:3000',
        changeOrigin: true
      },
    }
  },
  lintOnSave: false
  // 通过代理来进行跨域
}