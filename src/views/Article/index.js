import React from 'react'
import XLSX from 'xlsx'

import { getArticle } from '../../requests'
import { Card, Button, Table, Tag, Popconfirm, message, Tooltip } from 'antd'
const moment = require('moment')

const columnMap = {
  //  定义一些映射关系
  title: '标题',
  author: '作者',
  amount: '阅读量',
  createAt: '创建时间',
  id: 'id',
  action: '编辑',
  loading: false,
  total: 0,
}

class Articlelist extends React.Component {
  state = {
    dataSource: [],
    total: 0,
    columns: [],
  }
  //  初始化获取数据
  componentDidMount() {
    this.getData()
  }
  //  删除数据
  deleteArticle = (i) => {
    const dataSource = this.state.dataSource.filter((item) => {
      return item !== i
    })
    //  更新数据
    const dataUp = () => {
      const key = 'updatable'
      window.setTimeout(
        () => {
          message.success({
            content: '删除成功',
            key,
            duration: 1,
            onClose: () => this.setState({ dataSource }),
          })
        },
        1000
        // back()
      )
      message.loading({ content: '删除中', key, duration: 1 })
    }
    dataUp()
  }
  cancle = () => {
    message.success('取消成功')
  }
  //  跳转至edit
  toEdit = (index, record) => {
    this.props.history.push(`/admin/article/edit/${index}`)
  }
  //  获取数据
  getData = () => {
    this.setState({ loading: true })
    getArticle().then((res) => {
      this.setState({ dataSource: res.data.list, total: res.data.total })
      const columnkey = Object.keys(res.data.list[0])
      columnkey[columnkey.length] = 'action'
      const columns = columnkey.map((item) => {
        //  直接抽离出对象的属性，在加工成列
        if (item === 'amount') {
          return {
            title: columnMap[item],
            key: item,
            render: (record) => {
              //  对于后端返回的不同数据做不同的处理
              return (
                <Tooltip
                  title={record.amount > 270 ? '大于270' : '小于270'}
                  color={record.amount > 270 ? 'red' : 'green'}
                  key="red"
                >
                  <Tag color={record.amount > 270 ? 'red' : 'green'}>
                    {record.amount}
                  </Tag>
                </Tooltip>
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
            render: (text, record, index) => {
              const i = record
              return (
                <>
                  <Button
                    type="primary"
                    success="true"
                    size="small"
                    onClick={() => this.toEdit(index, record)}
                  >
                    编辑
                  </Button>
                  <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={() => this.deleteArticle(i)}
                    onCancel={() => this.cancle()}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="primary" danger size="small">
                      删除
                    </Button>
                  </Popconfirm>
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
  //  页面变化会触发
  changePage = () => {
    //  设置页数变化时更新内容
    this.getData()
  }
  //  导出文件
  exportFile() {
    const data = this.state.dataSource
    const head = Object.keys(data[0])

    const contents = data.map((item) => {
      item = Object.assign({}, item, {
        createAt: moment(item.createAt).format('L'), //  将时间戳转换为时间在存进去
      })
      return Object.values(item)
    })
    // console.log(head, ...contents)
    // /* convert state to workbook */
    const ws = XLSX.utils.aoa_to_sheet([head, ...contents])
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
    // // /* generate XLSX file and send to client */
    XLSX.writeFile(wb, `sheetjs-${moment().format('L')}.xlsx`)
  }
  render() {
    return (
      <Card
        title="文章列表"
        bordered={false}
        extra={<Button onClick={() => this.exportFile()}>导出文章</Button>}
        style={{ width: '100%', height: '100%' }}
      >
        <Table
          loading={this.state.loading}
          rowKey={(record) => record.id}
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          pagination={{
            pageSize: 5,
            total: this.state.total,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
          onChange={() => this.changePage()}
        />
      </Card>
    )
  }
}
export default Articlelist
