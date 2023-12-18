import type { MicroAppStateActions } from 'qiankun'
class Actions {
  actions?: MicroAppStateActions
  constructor () {
    this.actions = undefined
  }

  setActions (actions?: MicroAppStateActions) {
    this.actions = actions
  }


  onGlobalStateChange(callback: any, fireImmediately?: boolean | undefined) {
    return this.actions?.onGlobalStateChange(callback, fireImmediately);
  }

  setGlobalState(state: any) {
    return this.actions?.setGlobalState(state);
  }
}

const actions = new Actions();
export default actions;