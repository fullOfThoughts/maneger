import React from 'react'
// import { Button } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRouter } from './routes'
class App extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <h1>这里是公共部分</h1>
        <Switch>
          {adminRouter.map((item, i) => {
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
          <Redirect to={adminRouter[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </div>
    )
  }
}
export default App
