const { defineConfig } = require('@vue/cli-service')
const { resolve } = require("path");
const path = require("path");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false, //关闭eslint检查
  productionSourceMap: false, // 禁用生产环境的 source map
  devServer: {
    port: 4500, // 设置服务启动端口号
    // 设置代理
    proxy: {
      '/api': { //替换代理地址名称
        target: 'http://screen.subaonet.com/API_Common/screenAPI/api/', //代理地址
        changeOrigin: true, //可否跨域
        pathRewrite: {
          '^/api': '' //重写接口，去掉/api
        }
      }
    },
  },
  pages: {
    member: {
      entry: 'src/member/main.js',
      template: 'public/member/index.html',
      filename: 'member/index.html',
      title: 'Index Page',
      publicPath: '../',
    },
    admin: {
      entry: 'src/admin/main.js',
      template: 'public/admin/index.html',
      filename: 'admin/index.html',
      title: 'About Page',
      publicPath: '../',
    }
  },
})
