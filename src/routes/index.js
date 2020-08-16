import {
  Dashboard,
  Login,
  Notfound,
  Settings,
  Articlelist,
  Articleedit,
} from '../views'

export const mainRouter = [
  {
    pathname: '/login',
    component: Login,
  },
  {
    pathname: '/404',
    component: Notfound,
  },
]

export const adminRouter = [
  {
    pathname: '/admin/dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    pathname: '/admin/settings',
    component: Settings,
    exact: true,
  },
  {
    pathname: '/admin/article',
    component: Articlelist,

    exact: true,
  },
  {
    pathname: '/admin/article/edit/:id',
    component: Articleedit,
    exact: true,
  },
]
