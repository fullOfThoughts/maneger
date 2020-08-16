import React from 'react'
import { Button } from 'antd'
import withCopyRight from './gao.jsx'

@withCopyRight
class App extends React.Component {
  state = {}
  render() {
    return (
      <div>
        123
        <Button type="danger">123</Button>
      </div>
    )
  }
}
export default App
