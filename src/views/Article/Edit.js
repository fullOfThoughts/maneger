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
          title="编辑文章"
          bordered={false}
          style={{ width: '100%', minHeight: '100%' }}
          extra={<Button>取消</Button>}
        >
          <NormalLoginForm id={this.props.match.params.id} />
        </Card>
      </>
    )
  }
}
export default connect((state) => ({ state }))(Articleedit)
