import Loadable from 'react-loadable'

import { Loading } from '../components'

const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
})
const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
})
const Notfound = Loadable({
  loader: () => import('./Notfound'),
  loading: Loading,
})
const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading,
})
const Articlelist = Loadable({
  loader: () => import('./Article'),
  loading: Loading,
})
const Articleedit = Loadable({
  loader: () => import('./Article/Edit'),
  loading: Loading,
})
const Notification = Loadable({
  loader: () => import('./notification'),
  loading: Loading,
})

export {
  Dashboard,
  Login,
  Notfound,
  Settings,
  Articlelist,
  Articleedit,
  Notification,
}
