import App from './app.vue'
import { createApp } from 'vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import actions from './store.ts'

createApp(App).mount('#base')

const apps = [{
  name: 'vue app1', // 必选，微应用的名称，微应用之间必须确保唯一。
  entry: '//localhost:8081', // 微应用的入口
  container: '#app1', // 必选，微应用的容器节点的选择器或者 Element 实例
  activeRule: '/app1', // 必选，微应用的激活规则。
  props: {
    path: '/app1',
    actions
  }
}]

registerMicroApps(apps)
setDefaultMountApp('/app1')
start()