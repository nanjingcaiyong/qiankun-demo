import type { ObjectType, RegistrableApp } from 'qiankun'
import store, { state}  from './store'

const apps: RegistrableApp<ObjectType>[] = [{
  name: 'vue app1', // 必选，微应用的名称，微应用之间必须确保唯一。
  entry: '//localhost:8081', // 微应用的入口
  container: '#app1', // 必选，微应用的容器节点的选择器或者 Element 实例
  activeRule: '/app1', // 必选，微应用的激活规则。
  props: {
    path: '/app1',
    count: state,
    actions: store,
  }
}]

export default apps