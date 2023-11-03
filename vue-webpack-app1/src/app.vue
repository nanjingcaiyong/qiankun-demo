<template>
  <span>{{ data.value.user.name }}</span>
  <button @click="add">++1</button>
</template>

<script lang="ts" setup>
import type { MicroAppStateActions } from 'qiankun'

const props = withDefaults(defineProps<{
  actions: MicroAppStateActions,
  data: Record<string, any>
}>(), {})

const add = () => {
  props.actions.setGlobalState({user: {name: '卧槽'}})
}
</script>