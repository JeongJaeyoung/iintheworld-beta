// 회원탈퇴
import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { Link } from 'react-router-dom';
import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import { useSignoutMutation } from './authApiSlice';
import './ProfileContentSignout.css'
import { useSelector } from 'react-redux';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons'


export default function ProfileContentSignout() {
    const [signout, result] = useSignoutMutation();
    const dispatch = useDispatch();
    const email = useSelector(state=>state.auth.email);
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const { password } = values; 
        try{
            const userData = await signout({ email, password }).unwrap();
            dispatch(setCredentials({ ...userData, email: null }));
            notification.open({
                message: '회원탈퇴가 정상적으로 처리되었습니다.',
                icon: <SmileOutlined style={{ color: 'black' }} />,
                placement: 'top',
            })
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
            <div id='signout-viewport'>
                <div id='signout-card'>
                    <Form
                        name="basic"
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
                                name="password"
                                rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
                            >
                                <Input.Password placeholder="비밀번호" />
                            </Form.Item>
                        </ConfigProvider>
                        <Form.Item>
                            <button id='signout-button' type="submit">
                                탈퇴하기
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        </>
    )
}