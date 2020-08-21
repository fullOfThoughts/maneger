import React from 'react'
import { Form, Input, Button, AutoComplete, DatePicker } from 'antd'
const { TextArea } = Input

export class NormalLoginForm extends React.Component {
  onFinish = (values) => {
    values.createAt = values.createAt.format('YYYY-MM-DD HH:mm:ss')
    console.log('Received values of form: ', values)
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
        name="normal_login"
        className="login-form"
        onFinish={this.onFinish}
      >
        <Form.Item
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
          hasFeedback
          rules={[{ required: true, message: 'Please input your content!' }]}
        >
          <AutoComplete placeholder="ontent">
            <TextArea rows={4} />
          </AutoComplete>
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
