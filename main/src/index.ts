import App from './views/layout/Layout.vue'
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import './index.css';
import router from './router'

import { 
    registerMicroApps, 
    start, 
    setDefaultMountApp, 
    loadMicroApp 
} from 'qiankun'
import actions from './store'

createApp(App)
  .use(ArcoVue)
  .use(ArcoVueIcon)
  // .use(router)
  .mount('#base')

const apps = [{
  name: 'app1', // 必选，微应用的名称，微应用之间必须确保唯一。
  entry: '//localhost:8081', // 微应用的入口
  container: '#app1', // 必选，微应用的容器节点的选择器或者 Element 实例
  activeRule: '/project1', // 必选，微应用的激活规则
  props: {
    route: '/',
    getGlobalState: actions.getGlobalState
  }
},{
  name: 'app2', // 必选，微应用的名称，微应用之间必须确保唯一。
  entry: '//localhost:8082', // 微应用的入口
  container: '#app2', // 必选，微应用的容器节点的选择器或者 Element 实例
  activeRule: '/project2', // 必选，微应用的激活规则
  props: {
    route: '/',
    getGlobalState: actions.getGlobalState
  }
}]


registerMicroApps(apps)

setDefaultMountApp('/project1/page1')


start()