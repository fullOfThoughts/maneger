import React from 'react'
import { connect } from 'react-redux'
import { NormalLoginForm } from './From'
import { Card, Button } from 'antd'

class Articleedit extends React.Component {
  state = {
    editContent: {},
  }

  render() {
    return (
      <>
        <Card
          title={this.props.state.title}
          bordered={false}
          style={{ width: '100%', height: '100%' }}
          extra={<Button>取消</Button>}
        >
          <NormalLoginForm />
        </Card>
      </>
    )
  }
}
export default connect((state) => ({ state }))(Articleedit)
