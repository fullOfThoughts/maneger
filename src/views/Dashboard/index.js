import React from 'react'
import { getArticle } from '../../requests'
import { Card, Row, Col } from 'antd'

const echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default class Dashboard extends React.Component {
  chart = React.createRef()
  state = {
    data: [],
  }

  articleChart = () => {
    // const data = this.state.data
    const author = []
    const amount = []
    this.state.data.forEach((item) => {
      author.push(item.author)
      amount.push(item.amount)
    })

    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(this.chart.current)
    // 绘制图表
    myChart.setOption({
      title: {
        text: '阅读量',
      },
      tooltip: {},
      xAxis: {
        data: author,
      },
      yAxis: {},
      series: [
        {
          name: '阅读量',
          type: 'bar',
          data: amount,
        },
      ],
    })
  }

  componentDidMount() {
    getArticle().then((res) =>
      this.setState({ data: res.data.list }, () => {
        this.articleChart()
      })
    )
  }

  render() {
    return (
      <>
        <Card
          title="编辑文章"
          bordered={false}
          style={{ width: '100%', minHeight: '100%' }}
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  backgroundColor: '#29B6F6',
                  height: 120,
                  borderRadius: 15,
                }}
              ></div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  backgroundColor: '#FF7043',
                  height: 120,
                  borderRadius: 15,
                }}
              ></div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  backgroundColor: '#00E676',
                  height: 120,
                  borderRadius: 15,
                }}
              ></div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  backgroundColor: '#E91E63',
                  height: 120,
                  borderRadius: 15,
                }}
              ></div>
            </Col>
          </Row>
          <Card
            title="最近浏览量"
            bordered={false}
            style={{
              width: '100%',
              minHeight: '100%',
              marginLeft: -24,
            }}
          >
            <div ref={this.chart} style={{ height: 300 }} />
          </Card>
        </Card>
      </>
    )
  }
}
