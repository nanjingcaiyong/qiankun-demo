import { registerMicroApps, start, initGlobalState, MicroAppStateActions, FrameworkLifeCycles } from 'qiankun'
import { createApp } from 'vue'
import apps from './micro-app.ts'
import App from './app.vue'

// const actions = createActions(initState)

// const apps: RegistrableApp<ObjectType>[] = [{
//   name: 'vue app1', // 必选，微应用的名称，微应用之间必须确保唯一。
//   entry: '//localhost:8081', // 微应用的入口
//   container: '#app1', // 必选，微应用的容器节点的选择器或者 Element 实例
//   activeRule: '/app1', // 必选，微应用的激活规则。
//   props: {
//     path: '/app1',
//     actions,
//     ...initState
//   }
// }]

const lifeCycles: FrameworkLifeCycles<any> = {
  // afterMount: () => {
  //   actions.setGlobalState({
  //     count: 2
  //   })
  //   return Promise.resolve()
  // }
}

// registerMicroApps(apps, lifeCycles)


// start({
//   sandbox: {
//     strictStyleIsolation: true
//   }
// })


createApp(App).mount('#baseapp')