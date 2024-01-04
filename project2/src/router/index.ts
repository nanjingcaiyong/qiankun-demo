const routes = [
  {
    path: '/project2/page1',
    name: 'page1',
    component: () => import('../components/page1.vue')
  },
  {
    path: '/project2/page2',
    name: 'page2',
    component: () => import('../components/page2.vue')
  },
]

export default routes