<template>
  <span>{{ user?.name }}</span>
  <button @click="add">++1</button>
</template>

<script>
import { ref, toRefs, reactive, computed } from 'vue'
export default {
  props: {
    getGlobalState: Function,
    setGlobalState: Function,
    store: Object
  },
  setup (props) {
    const user = props.getGlobalState().user
    const state = reactive({
      user
    })
    // console.log('data.value', props.store)
    const add = () => {
      props.setGlobalState({user: {name: '卧槽'}})
      state.user = props.getGlobalState().user
      console.log(state.user)
    }
    const comp = computed(() => props.getGlobalState())

    return {
      add,
      comp,
      ...toRefs(state)
    }

   
  }
}
</script>