import './public-path.ts'
import { createApp, reactive,  toRefs, ref } from 'vue'
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

function render (container?: HTMLElement, props?: Record<string, any>) {
  const router = createRouter({
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? props?.route : '/'
    ),
    routes: []
  })
  console.log('propps', props)
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
  let { container, store } = props
  const state = ref(store.getGlobalState())

  props.onGlobalStateChange((val) => {
    state.value = val
    console.log('state.data', state.data)
  })

  render(container, {
    ...store,
    data: state
  })
}

export async function unmount(props: EntityProps) {
  console.log('unmount');
}