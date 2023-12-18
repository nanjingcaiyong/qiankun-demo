# 乾坤演示demo

## 项目结构

## 项目配置

### 主应用
加载子模块的两种方式
- MicroAppStateActions：自动加载相应的微应用
- loadMicroApp：手动加载一个微应用

### 子应用

1、通过`public-path.ts` 动态设置微应用 `webpack` 的 `publicPath` 配置
2、通过 window.__POWERED_BY_QIANKUN__ 判断微应用是否运行在 `乾坤` 的主应用中
3、`main.ts` 主入口文件需声明 `乾坤` 生命周期，并在 mount 钩子中注册微应用

### 状态管理

乾坤提供了 `initGlobalState` 方法，可以创建一个对象，该对象提供两个方法 `onGlobalStateChange`、 `getGlobalState`
- onGlobalStateChange: 用于监听数据变化，从而更改数据状态
- getGlobalState: 获取对应数据
- setGlobalState: 设置新状态

