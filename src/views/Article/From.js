import React from 'react'
import { getArticleById } from '../../requests'
import { Form, Input, Button, AutoComplete, DatePicker } from 'antd'
import './index.less'
const moment = require('moment')

const E = require('wangeditor')

export class NormalLoginForm extends React.Component {
  formRef = React.createRef()
  state = {
    data: {},
  }
  onFinish = (values) => {
    values.createAt = moment(values.createAt).valueOf()

    console.log('Received values of form: ', values)
  }

  componentDidMount() {
    const editor = new E('#editor')
    editor.customConfig.zIndex = 0

    editor.customConfig.onchange = (html) => {
      this.formRef.current.setFieldsValue({
        content: html,
      })
    }
    editor.create()

    getArticleById(this.props.id).then((res) => {
      this.setState({ data: res.data.article[0] }, () => {
        const { id, content, ...data } = this.state.data
        data.createAt = moment(this.state.data.createAt)
        this.formRef.current.setFieldsValue(data)
        editor.txt.html(this.state.data.content)
      })
    })
  }

  render() {
    return (
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 21,
        }}
        ref={this.formRef}
        name="normal_login"
        className="login-form"
        onFinish={this.onFinish}
      >
        <Form.Item
          ref={this.formRef}
          name="title"
          label="文章标题"
          hasFeedback
          rules={[
            { required: true, message: 'Please input your article title!' },
            {
              min: 6,
              message: '长度必须大于6',
            },
          ]}
        >
          <AutoComplete placeholder="文章标题">
            <Input />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          label="author"
          name="author"
          hasFeedback
          rules={[{ required: true, message: 'Please input your author!' }]}
        >
          <AutoComplete placeholder="admin">
            <Input />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          label="阅读量"
          name="amount"
          hasFeedback
          validateFirst="true"
          rules={[
            {
              validator: (rules, value) => {
                if (value * 1) {
                  return Promise.resolve()
                }
                return Promise.reject('please enter Number')
              },
            },
            {
              required: true,
              message: 'please enter your amount',
            },
          ]}
        >
          <AutoComplete placeholder="0">
            <Input />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          label="content"
          name="content"

          // hasFeedback
          // rules={[{ required: true, message: 'Please input your content!' }]}
        >
          <div id="editor" style={{ overflow: 'hidden' }}></div>
        </Form.Item>

        <Form.Item name="createAt" label="创建日期">
          <DatePicker showTime />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 11,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
