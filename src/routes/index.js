import {
  Dashboard,
  Login,
  Notfound,
  Settings,
  Articlelist,
  Articleedit,
  Notification,
  Noauthority,
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
    role: ['001'],
  },
  {
    pathname: '/admin/article',
    component: Articlelist,

    exact: true,
    title: '文章管理',
    isNav: true,
    icon: UnorderedListOutlined,
    role: ['001', '002', '003'],
  },
  {
    pathname: '/admin/settings',
    component: Settings,
    exact: true,
    title: '设置',
    isNav: true,
    icon: SettingOutlined,
    role: ['001', '002'],
  },
  {
    pathname: '/admin/article/edit/:id',
    component: Articleedit,
    exact: true,
    isNav: true,
    role: ['001', '002'],
  },
  {
    pathname: '/admin/notification',
    component: Notification,
    exact: true,
    isNav: true,
    role: ['001', '002', '003'],
  },
  {
    pathname: '/admin/noauthority',
    component: Noauthority,
    exact: true,
    isNav: false,
    role: ['001', '002', '003'],
  },
]
