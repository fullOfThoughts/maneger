import React from 'react'
import { withRouter } from 'react-router-dom'

import { adminRoutes } from '../../routes'

import Logo from './logo.png'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer, Sider } = Layout

@withRouter
class Frame extends React.Component {
  state = {}
  menu = ({ key }) => {
    this.props.history.push(key)
  }
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Header
          className="header"
          style={{ background: 'rgba(0, 0, 0, 0.65)' }}
        >
          <div className="logo">
            <img src={Logo} alt="123" width="180px" height="60px" />
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
                selectedKeys={[this.props.location.pathname]}
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
                minHeight: '100%',
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}
export default Frame
