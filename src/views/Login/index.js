import React from 'react'
import './index.less'
import { connect } from 'react-redux'
import { userLogin, userLoading, userSuccess, userFaild } from '../../actions'
import { Form, Input, Button, Checkbox, Spin, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '../../requests'

@connect((state) => ({ user: state.user }), {
  userLogin,
  userLoading,
  userSuccess,
  userFaild,
})
class Login extends React.Component {
  state = {}
  onFinish = (values) => {
    this.props.userLoading()
    login(values.username, values.password).then((res) => {
      if (res.code * 1 === 200) {
        const { authToken, ...data } = res.data
        if (values.remember) {
          window.localStorage.setItem('authToken', authToken)
          window.localStorage.setItem('users', JSON.stringify(data))
        }
        window.sessionStorage.setItem('authToken', authToken)
        window.sessionStorage.setItem('users', JSON.stringify(data))
        this.props.userLogin(res.data)
        message.success({
          content: '登录成功',
          duration: 1,
          onClose: () => {
            this.props.history.push('/')
            this.props.userSuccess()
          },
        })
      } else {
        message.error({
          content: '登录失败',
          duration: 1,
          onClose: () => {
            this.props.userFaild()
          },
        })
      }
    })
  }
  render() {
    return (
      <div className="login-kaka">
        <Spin spinning={this.props.user.isLoading}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 9,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    )
  }
}
export default Login
