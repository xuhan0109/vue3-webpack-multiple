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
