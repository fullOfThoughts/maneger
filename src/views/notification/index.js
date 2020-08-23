import React from 'react'
import { Card, List, Avatar, Pagination, Button, Badge } from 'antd'
import { markArticle, makAll, btnLoading } from '../../actions'
import { connect } from 'react-redux'
import './index.less'
class Notification extends React.Component {
  state = {}

  render() {
    return (
      <>
        <Card
          title="通知中心"
          bordered={false}
          style={{ width: '100%', minHeight: '100%' }}
          extra={
            <Button
              disabled={
                this.props.nodification.list.every((item) => {
                  return item.hasRead === true
                }) === true
                  ? true
                  : false
              }
              onClick={this.props.makAll}
            >
              取消通知
            </Button>
          }
        >
          <List
            itemLayout="horizontal"
            dataSource={this.props.nodification.list}
            renderItem={(item) => (
              <List.Item
                extra={
                  item.hasRead ? null : (
                    <Button
                      loading={item.isLoading}
                      onClick={() => {
                        this.props.markArticle(item.id)
                        this.props.btnLoading(item.id)
                      }}
                      type="dashed"
                    >
                      标记为已读
                    </Button>
                  )
                }
              >
                <List.Item.Meta
                  avatar={
                    <Badge dot={!item.hasRead}>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Badge>
                  }
                  title={item.title}
                  description={item.desc}
                />
              </List.Item>
            )}
          />
          <div className="paginationEdit">
            <Pagination style={{}} size="small" total={50} />
          </div>
        </Card>
      </>
    )
  }
}
export default connect((state) => state, { markArticle, makAll, btnLoading })(
  Notification
)
