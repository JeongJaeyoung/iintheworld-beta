import React, { useState, useEffect } from 'react'
import './Signup.css'
import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../services/api'
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import BasicButton3 from '../common/BasicButton3';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons'

export default function Signup() {
    const navigate = useNavigate()

    const [agreement, setAggrement] = useState(JSON.parse(localStorage.getItem("agreement")) || false);

    const toggle = () => {
        setAggrement(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("agreement", agreement);
    }, [agreement])


    const onFinish = (values) => {
        console.log(localStorage.getItem("agreement"));
        if (localStorage.getItem("agreement")==='false') {
            notification.open({
                message: '이용약관, 개인정보처리방침을 동의해주세요',
                description: '',
                icon: <FrownOutlined style={{ color: 'red' }} />,
                placement: 'top',
            })
        } else if(localStorage.getItem("agreement")==='true'){
            async function fn() {
                const { email, password } = values
                const data = { email, password }
    
                try {
                    await axiosInstance.post('/accounts/signup/', data)
                    notification.open({
                        message: '회원가입 성공',
                        description: '이메일 인증을 완료해주세요',
                        icon: <SmileOutlined style={{ color: 'green' }} />,
                        placement: 'top',
                    })
                    navigate('/accounts/signup/temporary')
                } catch (error) {
                    if (error.response) {
                        notification.open({
                            message: '회원가입 실패',
                            description: '이미 존재하는 아이디입니다.',
                            icon: <FrownOutlined style={{ color: '#ff3333' }} />,
                            placement: 'top',
                        })
                    }
                }
            }
            fn();
        }

    };

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div id='signup-viewport'>
                <div id='signup-card'>
                    <div id='signup-card-title'>
                        <Link to='/'>
                            내가 사는 세상
                        </Link>
                    </div>

                    <Form
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
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
                                rules={[
                                    { required: true, message: '이메일을 입력해주세요' },
                                    { type: 'email', message: '이메일 양식을 지켜주세요.' },
                                ]}
                            >
                                <Input placeholder="이메일" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
                            >
                                <Input.Password placeholder="비밀번호" />
                            </Form.Item>
                            <Form.Item
                                name="password_confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    { required: true, message: '비밀번호를 적어주세요.' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('비밀번호가 일치하지 않아요.'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="비밀번호 확인" />
                            </Form.Item>
                        </ConfigProvider>
                        <button id='signup-button' type="submit">
                            회원가입
                        </button>
                    </Form>
                    <div id='signup-service-term'>
                        <input
                            className='signup-agreement-checkbox'
                            type="checkbox"
                            id="agreement"
                            onChange={toggle}
                            checked={agreement}
                        />
                        <div>
                            &nbsp;가입 시, 서비스 <Link to='/policy/terms-of-service'><span className='singup-bold'>이용약관</span></Link>, <Link to='/policy/privacy-information-process'><span className='singup-bold'>개인정보처리방침</span></Link>에 동의합니다. 이후 내가 사는 세상이 제공하는 서비스를 모두 이용하실 수 있습니다.
                        </div>
                    </div>
                    {/* <div id='link-to-login'>
                        <Link to='/accounts/login'>로그인</Link>
                    </div> */}
                    <SocialLogin />
                </div>
            </div>
        </>
    )
}