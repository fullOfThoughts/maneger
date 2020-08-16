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
    pathname: '/admin/dashboaed',
    component: Dashboard,
  },
  {
    pathname: '/admin/settings',
    component: Settings,
  },
  {
    pathname: '/admin/article',
    component: Articlelist,
    exact: true,
  },
  {
    pathname: '/admin/article/edit/:id',
    component: Articleedit,
  },
]
