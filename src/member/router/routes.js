import Home from '../views/Home'

export const routes = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: Home,
  },
  {
    path: '/Content',
    name: 'Content',
    meta: {
      title: '页面1',
    },
    component: () => import('../views/Content'),
  }
]
