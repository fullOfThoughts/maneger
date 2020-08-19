import React from 'react'
import { getArticle } from '../../requests'
import { Card, Button, Table, Tag } from 'antd'
var moment = require('moment')
const columnMap = {
  //  定义一些映射关系
  title: '标题',
  author: '作者',
  amount: '阅读量',
  createAt: '创建时间',
  id: 'id',
  action: '编辑',
  loading: false,
}

export default class Articlelist extends React.Component {
  state = {
    dataSource: [],
    total: 0,
    columns: [],
  }
  componentDidMount() {
    this.setState({ loading: true })
    getArticle().then((res) => {
      this.setState({ dataSource: res.data.list, total: res.data.total })
      const columnkey = Object.keys(res.data.list[0])
      columnkey[columnkey.length] = 'action'
      console.log(columnkey)
      const columns = columnkey.map((item) => {
        //  直接抽离出对象的属性，在加工成列
        if (item === 'amount') {
          return {
            title: columnMap[item],
            key: item,
            render: (record) => {
              //  对于后端返回的不同数据做不同的处理
              return (
                <Tag color={record.amount > 270 ? 'red' : 'green'}>
                  {record.amount}
                </Tag>
              ) //  生成阅读量的tag
            },
          }
        } else if (item === 'createAt') {
          return {
            title: columnMap[item],
            key: item,
            render: (record) => {
              return <Tag>{moment(record.createAt).format('L')} </Tag>
            },
          }
        } else if (item === 'action') {
          return {
            title: columnMap[item],
            key: item,
            render: () => {
              return (
                <>
                  <Tag color="cyan">编辑</Tag>
                  <Tag color="red">删除</Tag>
                </>
              )
            },
          }
        } else {
          return {
            title: columnMap[item],
            dataIndex: item,
            key: item,
          }
        }
      })
      this.setState({ columns }, () => {
        this.setState({ loading: false })
      })
    })
  }
  render() {
    return (
      <Card
        title="文章列表"
        bordered={false}
        extra={<Button>导出文章</Button>}
        style={{ width: '100%', height: '100%' }}
      >
        <Table
          loading={this.state.loading}
          rowKey={(record) => record.id}
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          // pagination={{ hideOnSinglePage: true }}
          pagination={{ pageSize: 5, total: this.state.total }}
        />
      </Card>
    )
  }
}
