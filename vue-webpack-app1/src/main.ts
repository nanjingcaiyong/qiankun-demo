import './public-path.ts'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './app.vue'

let instance = null

type EntityProps = {
  container: HTMLElement;
  name: string;
  mountParcel: Function;
  onGlobalStateChange: Function;
  route: string;
  setGlobalState: Function;
  singleSpa: {
    [key: string]: any
  }
}

function render (props?: EntityProps) {
  const { container } = props || {}
  const router = createRouter({
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? props?.route : '/'
    ),
    routes: []
  })
  instance = createApp(App).use(router)
  
  instance.mount(container ? container.querySelector("#app1") as Element : "#app1")
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('bootstrap');
}

export async function mount(props: EntityProps) {
  console.log(props)
  render(props)
}

export async function unmount(props: EntityProps) {
  console.log('unmount');
}