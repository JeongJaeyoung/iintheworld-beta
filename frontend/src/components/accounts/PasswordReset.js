// 이메일로 토큰을 발급받은 후, 해당 토큰을 활용해 비밀번호 변경
import React, { useState } from 'react'
import { usePasswordChangeUsingEmailMutation } from './authApiSlice'
import { Link } from 'react-router-dom'
import './PasswordChange.css'
import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';


export default function PasswordReset() {
    const navigate = useNavigate()
    const [password, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordChangeUsingEmail, { isLoading }] = usePasswordChangeUsingEmailMutation()

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'password':
                setNewPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    }

    // 쿼리 파라미터 가져오기
    const queryParams = new URLSearchParams(window.location.search);
    const uid64 = queryParams.get('uid64');
    const token = queryParams.get('token');

    const handleSubmit = async (values) => {
        const { password } = values;
        try{
            await passwordChangeUsingEmail({ password, uid64, token }).unwrap();
            notification.open({
                message: '비밀번호가 변경되었습니다.',
                icon: <SmileOutlined style={{ color: 'green' }} />,
                placement: 'top',
            })
            setNewPassword('');
            setConfirmPassword('');
            navigate('/')
        } catch (error) {
            notification.open({
                message: error?.data?.msg || '비밀번호 변경에 실패했습니다.',
                icon: <FrownOutlined style={{ color: 'red' }} />,
                placement: 'top',
            })
        }
    }


    return (
        <>
            <div id='password-reset-wrapper'>
                <div id='password-reset-card'>
                    <div id='password-reset-card-title'>
                        <Link to='/'>
                            내가 사는 세상
                        </Link>
                    </div>
                    {/* <form id='password-reset-form' onSubmit={handleSubmit}>
                        <input
                            className='password-reset-input'
                            type='password'
                            name='password'
                            placeholder='새 비밀번호'
                            value={password}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className='password-reset-input'
                            type='password'
                            name='confirmPassword'
                            placeholder='새 비밀번호 확인'
                            value={confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <button id='password-reset-button' type='submit'>
                            비밀번호 변경
                        </button>
                    </form> */}

                    <Form
                        name="basic"
                        onFinish={handleSubmit}
                        // onFinishFailed={onFinishFailed}
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
                                rules={[{ required: true, message: '새로운 비밀번호를 입력해주세요' }]}
                            >
                                <Input.Password placeholder="새 비밀번호" />
                            </Form.Item>
                            <Form.Item
                                name="confirmPassword"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    { required: true, message: '새로운 비밀번호를 적어주세요.' },
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
                                <Input.Password placeholder="새 비밀번호 확인" />
                            </Form.Item>
                        </ConfigProvider>
                        <button id='signup-button' type="submit">
                            비밀번호 변경
                        </button>
                    </Form>
                </div>
            </div>

        </>
    )
}