import React from 'react'
import { Frame } from './components'
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'
import { connect } from 'react-redux'

@connect((state) => ({ user: state.user }))
class App extends React.Component {
  state = {}
  render() {
    return this.props.user.isLogin === true ? (
      <Frame>
        <Switch>
          {adminRoutes.map((item, i) => {
            return (
              <Route
                key={i}
                path={item.pathname}
                exact={item.exact}
                render={(routerProps) => {
                  return <item.component {...routerProps} />
                }}
              />
            )
          })}
          <Redirect to={adminRoutes[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </Frame>
    ) : (
      <Redirect to="/login" />
    )
  }
}
export default App
