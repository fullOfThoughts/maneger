import React from 'react'
import { withRouter } from 'react-router-dom'

import { adminRoutes } from '../../routes'

import Logo from './logo.png'
import { Layout, Menu, ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
const { Header, Content, Sider } = Layout

@withRouter
class Frame extends React.Component {
  state = {}
  menu = ({ key }) => {
    this.props.history.push(key)
  }
  render() {
    let arr = this.props.location.pathname.split('/')
    arr.length = 3
    arr.join('/')

    return (
      <ConfigProvider locale={zhCN}>
        <Layout style={{ height: '100%' }}>
          <Header
            className="header"
            style={{
              background: 'rgba(0, 0, 0, 0.65)',
              height: '50px',
            }}
          >
            <div className="logo">
              <img
                src={Logo}
                alt="123"
                width="180px"
                height="50px"
                style={{ position: 'absolute', top: '0' }}
              />
            </div>
          </Header>
          <Content style={{ padding: '0 50px', height: '100%' }}>
            <Layout
              className="site-layout-background"
              style={{ padding: '24px 0', height: '100%' }}
            >
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  selectedKeys={[arr.join('/')]}
                  style={{ height: '100%' }}
                  onClick={({ key }) => this.menu({ key })}
                >
                  {adminRoutes.map((item, i) => {
                    if (!item.title) {
                      return null
                    }
                    return (
                      <Menu.Item key={item.pathname} icon={<item.icon />}>
                        {item.title}
                      </Menu.Item>
                    )
                  })}
                </Menu>
              </Sider>
              <Content
                style={{
                  paddingLeft: '16px',
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Content>
        </Layout>
      </ConfigProvider>
    )
  }
}
export default Frame
