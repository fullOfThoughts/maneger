import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { adminRoutes } from '../../routes'
import { getnotification } from '../../requests'
import { getData } from '../../actions'
import { UserOutlined, SettingOutlined } from '@ant-design/icons'
import Logo from './logo.png'
import { Layout, Menu, ConfigProvider, Dropdown, Button, Badge } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
const { Header, Content, Sider } = Layout

@withRouter
class Frame extends React.Component {
  state = {
    count: 0,
  }
  componentDidMount() {
    getnotification().then((res) => {
      this.props.getData(res.data.list)
    })
  }

  menu = ({ key }) => {
    this.props.history.push(key)
  }
  set = ({ key }) => {
    if (key === '/login') {
      window.localStorage.removeItem('authToken') ||
        window.sessionStorage.removeItem('authToken')

      window.localStorage.removeItem('users') ||
        window.sessionStorage.removeItem('users')
    }
    this.props.history.push(key)
  }
  render() {
    const menu = (
      <Menu onClick={this.set}>
        <Menu.Item key="/admin/settings" icon={<SettingOutlined />}>
          设置
        </Menu.Item>

        <Menu.Item key="/admin/notification" icon={<UserOutlined />}>
          <Badge dot={this.props.count === 0 ? false : true}>通知中心</Badge>
        </Menu.Item>

        <Menu.Item key="/login" icon={<UserOutlined />}>
          退出登录
        </Menu.Item>
      </Menu>
    )

    let arr = this.props.location.pathname.split('/')
    arr.length = 3

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
            <div>
              <Dropdown overlay={menu} placement="topLeft" trigger={['click']}>
                <Button style={{ float: 'right', marginTop: 10 }}>
                  <Badge count={this.props.count}>
                    欢迎您! {this.props.user.displayname}
                  </Badge>
                </Button>
              </Dropdown>
            </div>
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
                  height: '100%',
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
export default connect(
  (state) => ({
    count: state.nodification.list.filter((item) => item.hasRead === false)
      .length,
    user: state.user,
  }),
  { getData }
)(Frame)
