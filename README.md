# node-server-generator

## 简介
nodejs 服务器构造器、脚手架，快速搭建服务器框架

## 快速搭建
+ 全局安装 node-server-generator

```bash
npm install -g node-server-generator
```

+ 创建项目

```bash
server init app
```
+ 选择模板
Koa2、Express、Http原生服务（目前只支持Koa2，其他模板待更新...）

+ 进入项目目录按照提示开发

```bash
cd app
npm install
npm run dev 或 npm start #以开发环境启动
```

## 目录
```txt
    |-- bin
    |   |-- www       // 服务
    |-- config
    |   |-- index.js  // 配置
    |-- DAL           // 数据实体层(增删改查等基本操作)
    |-- DB            // 数据库管理(接入、初始化)
    |-- public        
    |   |-- dist        // 前端打包后的静态资源
    |   |-- images      
    |   |-- javascripts 
    |-- routes
    |   |-- index.js  // 路由api中间件
    |-- service
    |   |-- index.js  // 业务层(可根据业务具体划分)
    |-- utils
        |-- errorlist.js // api对外错误模板列表
        |-- getReq.js    // 获取客户端IP
        |-- load.js      // 动态加载js文件,减少代码量
        |-- logger.js    // 日志
        |-- token.js     // token
        |-- upload.js    // 上传文件
    |-- app.js           
    |-- package.json
    |-- pm2.json         // pm2 管理
```
