<template>
  <a-layout class="h-[100vh]">
    <a-layout-sider style="width: 500px;">
      <div >

      </div>
    </a-layout-sider>
    <a-layout-content class="flex flex-col h-full items-center justify-center">
      <div class="text-[30px]">登陆前端管理系统</div>
      <a-form :model="form" :rules="rules" class="max-w-[320px] mt-[32px]" @submit="onHandleSubmit">
        <a-form-item field="userName" hide-label validate-trigger="blur">
          <a-input v-model="form.userName" placeholder="用户名：admin" allow-clear>
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item field="password" hide-label validate-trigger="blur">
          <a-input-password v-model="form.password" placeholder="密码：admin">
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item hide-label>
          <div class="flex justify-between flex-1">
            <a-checkbox v-model="form.remember">记住密码</a-checkbox>
            <a-link href="link">忘记密码</a-link>
          </div>
        </a-form-item>
        <a-form-item hide-label>
          <a-button type="primary" long html-type="submit" :loading="logging">登录</a-button>
        </a-form-item>
      </a-form>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import router from '@/router'

const logging = ref(false)
const form = reactive({
  userName: '',
  password: '',
  remember: false
})

const rules = {
  userName: [{
    required: true,
    message: '用户名不能为空'
  }],
  password: [{
    required: true,
    message: '密码不能为空'
  }]
}

/**
 * @description 登陆中
 */
const onHandleSubmit = ({values, errors}) => {
  debugger
  if (errors) {
    return
  }
  logging.value = true
  setTimeout(() => {
    logging.value = false
    localStorage.setItem('USER', values.userName)
    router.push({
      path: '/home'
    })
  }, 1000);

 
}
</script>