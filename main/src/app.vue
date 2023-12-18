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
      >
        <template  v-for="menu in menus" :key="`${menu.parentId}_${menu.id}`">
          <a-menu-item 
            v-if="menu.childrens.length === 0" 
            :key="`${menu.parentId}_${menu.id}`"
            @click="onClickMenuItem(menu)"
          >
            <IconHome />
            {{ menu.menuName }}
          </a-menu-item>
          <a-sub-item 
            :key="`sub_${menu.parentId}_${menu.id}`" 
            v-else
          >
            {{ menu.menuName }}
            <a-menu-item 
              :key="`${menu.parentId}_${menu.id}_${subMenu.id}`" 
              v-for="subMenu in menu.childrens"
              @click="onClickMenuItem(subMenu)"
            >
              {{ subMenu.menuName }}
            </a-menu-item>
          </a-sub-item>
        </template>
   
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
    const menus = [{
      id: 1,
      menuName: '项目1',
      parentId: 0,
      childrens: [{
        id: 11,
        menuName: '页面1',
        menuPath: '/project1/page1',
        parentId: 1
      },{
        id: 12,
        menuName: '页面2',
        menuPath: '/project1/page2',
        parentId: 1
      }]
    }, {
      id: 2,
      menuName: '项目2',
      parentId: 0,
      childrens: [{
        id: 21,
        menuName: '页面1',
        parentId: 2
      },{
        id: 22,
        menuName: '页面2',
        parentId: 2
      }]
    }]

    const onClickMenuItem = (menuItem) => {
      history.pushState({}, '', menuItem.menuPath)
    }

    return {
      onClickMenuItem,
      menus
    }
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