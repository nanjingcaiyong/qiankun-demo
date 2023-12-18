const routes = [
  {
    path: '/project1/page1',
    name: 'page1',
    component: () => import('../components/page1.vue')
  },
  {
    path: '/project1/page2',
    name: 'page2',
    component: () => import('../components/page2.vue')
  },
]

export default routes