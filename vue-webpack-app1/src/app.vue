<template>
  <span>{{ data.value.user.name }}</span>
  <button @click="add">++1</button>
</template>

<script>
import { ref, toRefs, reactive, computed } from 'vue'
export default {
  props: {
    setGlobalState: Function,
    data: Object
  },
  setup (props) {
    const add = () => {
      props.setGlobalState({user: {name: '卧槽'}})
    }
    return {
      add,
      ...toRefs(props)
    }

  }
}
</script>