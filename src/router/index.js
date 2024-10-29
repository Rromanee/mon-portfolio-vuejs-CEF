import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound  // Catch-all 404 route
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router