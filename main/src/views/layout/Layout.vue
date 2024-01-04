<template>
  <a-layout class="layout-demo">
   <a-layout-sider
     hide-trigger  
     collapsible
     :collapsed="collapsed"
     collapsed-width="0"
   >
   <div class="logo flex justify-center items-center">
     前端管理系统
   </div>
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
     <a-layout-header class="flex items-center" style="padding-left: 20px;">
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
       <a-layout-content>
         <div id="app1"></div>
         <div id="app2"></div>
       </a-layout-content>
       <a-layout-footer>Footer</a-layout-footer>
     </a-layout>
   </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import actions from '../../store.ts'
import { loadMicroApp } from 'qiankun'
import {
 IconCaretRight,
 IconCaretLeft,
 IconHome,
 IconCalendar,
} from '@arco-design/web-vue/es/icon';
export default defineComponent({
 components: {
   IconCaretRight,
   IconCaretLeft,
   IconHome,
   IconCalendar,
 },
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
       menuPath: '/project2/page1',
       parentId: 2
     },{
       id: 22,
       menuName: '页面2',
       menuPath: '/project2/page2',
       parentId: 2
     }]
   }]

   const collapsed = ref(false);
   const onClickMenuItem = (menuItem) => {
     history.pushState({}, '', menuItem.menuPath)
   }
   const onCollapse = () => {
     collapsed.value = !collapsed.value;
   }

   return {
     onClickMenuItem,
     collapsed,
     onCollapse,
     menus
   }

 }
})

</script>

<style scoped>
.layout-demo {
 height: 100vh;
 background: var(--color-fill-2);
 border: 1px solid var(--color-border);
}
.layout-demo :deep(.arco-layout-sider) .logo {
 height: 32px;
 margin: 12px 8px;
 background: rgba(255, 255, 255, 0.2);
}
.layout-demo :deep(.arco-layout-sider-light) .logo{
 background: var(--color-fill-2);
}
.layout-demo :deep(.arco-layout-header)  {
 height: 64px;
 line-height: 64px;
 background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer) {
 height: 48px;
 /* color: var(--color-text-2); */
 font-weight: 400;
 font-size: 14px;
 line-height: 48px;
}
.layout-demo :deep(.arco-layout-content) {
 /* color: var(--color-text-2); */
 font-weight: 400;
 font-size: 14px;
 background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content)  {
 display: flex;
 flex-direction: column;
 justify-content: center;
 /* color: var(--color-white); */
 font-size: 16px;
 font-stretch: condensed;
 text-align: center;
}
</style>