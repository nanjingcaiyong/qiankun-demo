import './public-path.ts'
import { createApp, ref } from 'vue'
import Store from './actions'
import { createRouter, createWebHistory } from 'vue-router'
import App from './app.vue'
import type { MicroAppStateActions } from 'qiankun'

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
  },
  actions: MicroAppStateActions & {getGlobalState: (key?: string) => any}
}

function render (container?: HTMLElement, props?: Record<string, any>) {
  const router = createRouter({
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? props?.route : '/'
    ),
    routes: []
  })
  instance = createApp(App, props).use(router)
  
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
  let { container, actions } = props
  Store.setActions(actions)
  const state = ref(actions.getGlobalState())

  Store.actions?.onGlobalStateChange((val) => {
    state.value = val
  })

  render(container, {
    actions,
    data: state
  })
}

export async function unmount(props: EntityProps) {
  console.log('unmount');
}