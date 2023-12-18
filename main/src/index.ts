import App from './app.vue'
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import './index.css';
import { 
    registerMicroApps, 
    start, 
    setDefaultMountApp, 
    loadMicroApp 
} from 'qiankun'
import actions from './store.ts'

createApp(App)
  .use(ArcoVue)
  .mount('#base')

const apps = [{
  name: 'vue app1', // 必选，微应用的名称，微应用之间必须确保唯一。
  entry: '//localhost:8081', // 微应用的入口
  container: '#app1', // 必选，微应用的容器节点的选择器或者 Element 实例
  activeRule: '/project1', // 必选，微应用的激活规则
  props: {
    route: '/',
    getGlobalState: actions.getGlobalState
  }
}]


registerMicroApps(apps)

setDefaultMountApp('/project1/page1')


start({ prefetch: true })