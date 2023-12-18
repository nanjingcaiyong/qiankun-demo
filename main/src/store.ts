import { initGlobalState, MicroAppStateActions } from 'qiankun'

// 初始化数据对象
const initialState ={
  user: {
    name: 'zhangsan',
    age: 23
  },
  localtion: {
    id: 1,
    station: '南京'
  }
}

const actions = initGlobalState(initialState) as MicroAppStateActions & {getGlobalState: (key: string) => any}

// 监听数据变化
actions.onGlobalStateChange((newState, prev) => {
  console.log('基座监听到数据变化', newState, prev)
  for (const key in newState) {
    initialState[key] = newState[key]
  }
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部

  return key ? initialState[key] : initialState
}

// actions.setGlobalState(initialState);
// actions.offGlobalStateChange();

export default actions
