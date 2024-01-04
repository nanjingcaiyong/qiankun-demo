<template>
  <div>
    <router-view></router-view>
  </div>
  <h2>this is project2</h2>
  <p>
    <label>姓名：</label>
    <span>{{ user.name }}</span>
  </p>
  <p>
    <label>年龄：</label>
    <span>{{ user.age }}</span>
  </p>
  <button @click="add">加1岁</button>
</template>

<script lang="ts" setup>
import type { MicroAppStateActions } from 'qiankun'
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  actions: MicroAppStateActions,
  data: Record<string, any>
}>(), {})


const user = computed({
  get () {
    return props.data.value.user
  },
  set (user) {
    props.actions.setGlobalState({user: {...props.data.value.user, ...user}})
  }
})

const add = () => {
  user.value = {...user.value, age: user.value.age + 1}
}
</script>