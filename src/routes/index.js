import {
  Dashboard,
  Login,
  Notfound,
  Settings,
  Articlelist,
  Articleedit,
  Notification,
} from '../views'

import {
  ConsoleSqlOutlined,
  UnorderedListOutlined,
  SettingOutlined,
} from '@ant-design/icons'

export const mainRoutes = [
  {
    pathname: '/login',
    component: Login,
  },
  {
    pathname: '/404',
    component: Notfound,
  },
]

export const adminRoutes = [
  {
    pathname: '/admin/dashboard',
    component: Dashboard,
    exact: true,
    title: '仪表盘',
    isNav: true,
    icon: ConsoleSqlOutlined,
  },

  {
    pathname: '/admin/article',
    component: Articlelist,

    exact: true,
    title: '文章管理',
    isNav: true,
    icon: UnorderedListOutlined,
  },
  {
    pathname: '/admin/settings',
    component: Settings,
    exact: true,
    title: '设置',
    isNav: true,
    icon: SettingOutlined,
  },
  {
    pathname: '/admin/article/edit/:id',
    component: Articleedit,
    exact: true,
    isNav: true,
  },
  {
    pathname: '/admin/notification',
    component: Notification,
    exact: true,
    isNav: true,
  },
]
