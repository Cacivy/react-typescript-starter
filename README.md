# 基于React+Typescript构建的脚手架

> 🚀本项目基于[TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter)

### 技术栈

- [x] react@16.2
- [x] typescript@2.7.2
- [x] **mobx** 新一代状态管理库
- [ ] **react-router4** 组件即路由
- [ ] **ant-design**  阿里出品的组件库
- [x] **styled-components** css in js
- [x] **perttie** 文件格式化
- [x] **lint-staged** precommit
- [x] **tslint** lint for typescript
- [x] **styleline** lint css/scss
- [x] **typedoc** 生成ts文档
- [x] **Jest Enzyme** & sinon
- [x] **mock** json-server & faker.js
- [x] **PWA**
- [x] **HMR**

### webpack

- [ ] **Future** 升级4.0,实现零配置
- [x] **postcss** 不支持styled-component💔
- [x] **IgnorePlugin** 忽略语言包等
- [x] **ExtractTextPlugin** 提取css样式文件
- [x] **DllReferencePlugin** 抽离公共库

### 开发环境

+ ide 推荐vscode, 安装prettier插件
+ 命令行工具 cmder + ubuntu bash
+ 部署 webhook/docker

> 后端推荐配合[nestjs](https://github.com/Cacivy/nest-graphql)使用，可以方便的搭建REST/GarphQL API Server

### DEV

```
// 启动项目
yarn start 

// 打包
yarn build

// 查看包分析工具
yarn build:analyzer

//打包第三方库dll
yarn build:dll

// 测试
yarn test

// 测试覆盖率
yarn test:coverage

// 启动mock服务
yarn mock

// 生成typedoc并打开
yarn typedoc

```
