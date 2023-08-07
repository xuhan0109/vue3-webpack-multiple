const { defineConfig } = require('@vue/cli-service')
const { resolve } = require("path");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false, //关闭eslint检查
  devServer: {
    port: 4500, // 设置服务启动端口号
    // 设置代理
    proxy: {
      // "/api": {
      //   target: "http://xxxx", // 访问数据的计算机域名
      //   changOrigin: true, //开启代理
      // },
    },
  },
  pages: {
    member: {
      entry: 'src/member/main.js',
      template: 'public/member/index.html',
      filename: 'member/index.html',
      title: 'Index Page',
      publicPath: '../', // 为 app1 入口配置的 publicPath
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
