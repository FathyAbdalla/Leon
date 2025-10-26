import { createRouter, createWebHistory } from 'vue-router'
import portfolioDetails from '../views/portfolioDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/#Portfolio/:id',
      name: 'portfolioDetails',
      component: portfolioDetails,
      props: true,
    },
  ],
})

export default router
