<template>
  <div>
    <router-view></router-view>
  </div>
  <p>
    <label>姓名:</label>
    <span>{{ user?.name }}</span>
  </p>
  <p>
    <label>年龄：</label>
    <span>{{ user?.age }}</span>
  </p>
  <button @click="add">加1岁</button>
</template>

<script lang="ts" setup>
import type { MicroAppStateActions } from 'qiankun'
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  actions: MicroAppStateActions,
  setGlobalState: any,
  data: Record<string, any>
}>(), {})


const user = computed({
  get () {
    return props.data?.value?.user
  },
  set (user) {
  props.setGlobalState({
    user: {
      name: 'zhangsan',
      age: 48
    },
    localtion: {
      id: 1,
      station: '南京'
    }
  });
  }
})

const add = () => {
  user.value = {name:'sa', age: 47}
}
</script>

<style>
p {
  background-color: red;
}
</style>