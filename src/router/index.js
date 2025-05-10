import { createRouter, createWebHistory } from 'vue-router'

// Static import for homepage (improves first paint performance)
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About DANG' }
  },
  {
    path: '/dang',
    name: 'dang',
    component: () => import('@/views/DangView.vue'),
    meta: { title: 'Start DANG' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact Us' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Optional: Auto-update document title based on route meta
router.afterEach((to) => {
  document.title = to.meta?.title || 'Tooling Hero'
})

export default router
