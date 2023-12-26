import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import './PasswordForget.css'
import { usePasswordForgetMutation } from './authApiSlice';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons'


export default function PasswordForget() {
  const [passwordForget, setPasswordForget] = usePasswordForgetMutation()
  const navigate = useNavigate()

  const onFinish = async (values) => {
    const { email } = values
    try {
      await passwordForget({ email }).unwrap();
      notification.open({
        message: '비밀번호 변경을 위한 메일을 보내드렸습니다.',
        icon: <SmileOutlined style={{ color: 'green' }} />,
        placement: 'top',
      })
      navigate('/')
    } catch (error) {
      console.log(error);
      notification.open({
        message: error?.data?.non_field_errors,
        icon: <FrownOutlined style={{ color: 'red' }} />,
        placement: 'top',
      })
    }

  }


  return (
    <>
      <div id='password-forget-viewport'>
        <div id='password-forget-card'>
          <div id='password-forget-card-title'>
            비밀번호 찾기
          </div>
          <Form
            name="basic"
            // wrapperCol={{ span: 16, offset: 4 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#323232',
                }
              }}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: '이메일을 입력해주세요' }]}
              >
                <Input placeholder="이메일" />
              </Form.Item>
            </ConfigProvider>
            <Form.Item>
              <button id='password-forget-button' type="submit">
                인증 메일 보내기
              </button>
            </Form.Item>
          </Form>
        </div>
      </div >
    </>
  )
}