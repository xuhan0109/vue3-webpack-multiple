import login from '../views/login'

export const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '首页',
    },
    component: login,
  },
  // {
  //   path: '/page1',
  //   name: 'page1',
  //   meta: {
  //     title: '页面 1',
  //   },
  //   component: () => import('../views/page1'),
  // },
  // {
  //   path: '/page2',
  //   name: 'page2',
  //   meta: {
  //     title: '页面 2',
  //   },
  //   component: () => import('../views/page2'),
  // },
]
