import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // Lazy-loaded when visited
    component: () => import('@/views/AboutView.vue'),
  },
  // Future route examples for Tooling Hero
  // {
  //   path: '/dang',
  //   name: 'DANG',
  //   component: () => import('@/views/DangView.vue'),
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import('@/views/ContactView.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
