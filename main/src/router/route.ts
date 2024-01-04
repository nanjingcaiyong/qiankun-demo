export const routes = [{
  name: 'login',
  path: '/login',
  component: () => import('../views/login/Login.vue')
}, {
  path: '/home',
  component: () => import('../views/layout/Layout.vue')
}]

