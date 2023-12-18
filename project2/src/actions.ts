import type { MicroAppStateActions } from 'qiankun'
class Actions {
  actions?: MicroAppStateActions
  constructor () {
    this.actions = undefined
  }

  setActions (actions?: MicroAppStateActions) {
    this.actions = actions
  }
}

const actions = new Actions();
export default actions;