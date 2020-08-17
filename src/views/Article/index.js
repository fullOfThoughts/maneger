import React from 'react'
import { Card, Button, Table } from 'antd'
export default class Articlelist extends React.Component {
  state = {}
  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ]

    const columns = [
      //  columns 是对我们列的管理，比如这一列显示什么数据，这一列什么
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record, index) => {
          console.log(text, record, index)
          return <Button>编辑</Button>
        },
      },
    ]
    return (
      <Card
        title="文章列表"
        bordered={false}
        extra={<Button>导出文章</Button>}
        style={{ width: '100%', height: '100%' }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ hideOnSinglePage: true }}
        />
        ;
      </Card>
    )
  }
}
