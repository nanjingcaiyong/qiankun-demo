<template>
   <a-layout>
    <a-layout-sider
      hide-trigger
      collapsible
    >
      <a-menu
        :defaultOpenKeys="['1']"
        :defaultSelectedKeys="['0_2']"
        :style="{ width: '100%' }"
        @menuItemClick="onClickMenuItem"
      >
        <a-menu-item key="0_1">
          <IconHome />
          项目1
        </a-menu-item>
        <a-menu-item key="0_2">
          <IconHome />
          项目2
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="padding-left: 20px;">
        <a-button shape="round" @click="onCollapse">
          <IconCaretRight v-if="collapsed" />
          <IconCaretLeft v-else />
        </a-button>
      </a-layout-header>
      <a-layout style="padding: 0 24px;">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content><div id="app1"></div></a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>

   </a-layout>
  <div class="flex flex-col bg-[red]">
    <header class="flex justify-center">前端管理系统</header>
    <main class="flex">
      <nav class="flex flex-col min-w-[200px]">
        <a href="/project1/page1">项目1</a>
        <a href="/project1/page2">项目1-页面2</a>
      </nav>
      <div>
        <div id="app1"></div>
        <div id="app2"></div>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import actions from './store.ts'
import { loadMicroApp } from 'qiankun'
export default defineComponent({
  setup () {
    // loadMicroApp({
    //   name: 'app2',
    //   entry: '//localhost:8082',
    //   container: '#app2',
    //   props: {
    //     actions
    //   }
    // })
  }
})

</script>