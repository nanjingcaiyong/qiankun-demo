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

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('bootstrap');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
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

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: EntityProps) {
  console.log('unmount');
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: EntityProps) {
  console.log('update props', props);
}
