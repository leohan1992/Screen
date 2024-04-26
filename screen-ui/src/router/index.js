import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [

    {
      path: "/first",
      name: 'first',
      component: ()=>import('../views/First.vue')
    }
  ]
})

export default router
