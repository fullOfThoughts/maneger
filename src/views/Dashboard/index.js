import React from 'react'
import { Card, Row, Col } from 'antd'

const echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default class Dashboard extends React.Component {
  chart = React.createRef()
  state = {}

  articleChart = () => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(this.chart.current)
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        boundaryGap: false,
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20],
          areaStyle: {},
        },
      ],
    })
  }

  componentDidMount() {
    this.articleChart()
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
