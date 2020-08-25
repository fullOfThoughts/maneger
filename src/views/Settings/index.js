import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import { Card, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
export default class Settings extends React.Component {
  state = {
    flag: false,
  }
  upload = (arg) => {
    this.setState({ flag: true })
    const data = new FormData()
    data.append(
      'Token',
      '6d472ff6e921b117ca2eb84d494a236015c37f51:kg_0j1X7sMwg9xw6Cn_aNloTKt4=:eyJkZWFkbGluZSI6MTU5ODI1ODM4MiwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzI1NzU0IiwiYWlkIjoiMTcxMjUwMCIsImZyb20iOiJmaWxlIn0'
    )
    data.append('file', arg.file)
    axios.post('http://up.imgapi.com/', data).then((res) => {
      console.log(res)
      this.setState({ flag: false })
    })
  }
  render() {
    const aee = [1, 2, 3]
    const ae = _.cloneDeep(aee)
    console.log(aee === ae)

    return (
      <Card title="上传文件" style={{ height: '100%' }}>
        <Upload customRequest={this.upload} progress listType="picture">
          <Button disabled={this.state.flag}>
            <UploadOutlined />
            点击上传
          </Button>
        </Upload>
      </Card>
    )
  }
}
