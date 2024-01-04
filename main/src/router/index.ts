import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './route.ts'

const router = createRouter({
  history: createWebHistory(),
  routes
})



router.beforeEach((to, from) => {
  const isAuthenticated = localStorage.getItem('USER')
  if (!isAuthenticated && to.name !== 'login') {
    return {
      name: 'login'
    }
  } 
})

export default router;