import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './app.js'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRoutes } from './routes'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route
          path="/admin"
          // render={(routerProps) => {
          //   //  以后会用来进行权限限制
          //   return <App {...routerProps} />
          // }}
          component={App}
        />
        {/*对于不需要权限的组件直接用map 生成 */}
        {mainRoutes.map((item, i) => {
          return (
            <Route key={i} path={item.pathname} component={item.component} />
          )
        })}
        <Redirect from="/" to="/admin" exact />
        <Redirect to="/404" />
      </Switch>
    </Provider>
  </Router>,
  document.querySelector('#root')
)
