import {
  createRouter,
  createWebHashHistory,createWebHistory
} from 'vue-router'
import { routes } from './routes'
import { moduleName } from '../setting'

const router = createRouter({
  history: createWebHashHistory(`/${moduleName}`),
  routes,
})

export default router
