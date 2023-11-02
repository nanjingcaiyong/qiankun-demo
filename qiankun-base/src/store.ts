import { initGlobalState, MicroAppStateActions } from 'qiankun'
import { createContext, useContext } from 'react'

const state: any = {
  count: 1
}

const actions = initGlobalState(state);

actions.onGlobalStateChange((newState, prev) => {

  for (const key in newState) {
    state[key] = newState[key]
  }
  console.log(state)
});

// 定义一个获取state的方法下发到子应用
(actions as any).getGlobalState = (key: string) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部

  return key ? state[key] : state
}

export {
  state
}

export default actions