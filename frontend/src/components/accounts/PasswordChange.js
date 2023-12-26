import React, { useState, useEffect } from 'react';
import './PasswordChange.css'
import { Card } from 'antd';
import { usePasswordChangeMutation, usePasswordChangeEmailRequestQuery } from './authApiSlice';
import './PasswordReset.css'
import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

export default function PasswordChange() {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordChange, { isLoading }] = usePasswordChangeMutation()
    const [sendingClicked, setSendingClicked] = useState(false);
    const navigate = useNavigate()

    const {
        data: passwordChangeEmailRequest,
        isLoading: isPasswordChangeEmailRequestLoading,
        isSuccess: isPasswordChangeEmailRequestSuccess,
        refetch,
    } = usePasswordChangeEmailRequestQuery(undefined, { skip: !sendingClicked });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'currentPassword':
                setCurrentPassword(value);
                break;
            case 'newPassword':
                setNewPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (values) => {
        const { password, newPassword } = values
        const response = await passwordChange({ password, newPassword }).unwrap();
        notification.open({
            message: '비밀번호 변경을 완료하였습니다.',
            // description: '이메일 인증을 완료해주세요',
            icon: <SmileOutlined style={{ color: 'green' }} />,
            placement: 'top',
        })
        navigate('/')
    }

    const handleClick = () => {
        if (sendingClicked === false) {
            setSendingClicked(true);
        } else {
            refetch()
        }
    }

    useEffect(() => {
        // refetch() 시에는 isPasswordChangeEmailRequestSuccess 변화없음. 계속 true
        if (isPasswordChangeEmailRequestSuccess) {
            notification.open({
                message: '비밀번호 변경을 위한 이메일을 보내드렸습니다.',
                icon: <SmileOutlined style={{ color: 'green' }} />,
                placement: 'top',
            })
        }
    }, [isPasswordChangeEmailRequestSuccess])


    return (
        <>
            <div id='password-change-wrapper'>
                <div id='password-change-card'>
                    <div id='password-change-card-title'>
                        비밀번호 변경
                    </div>
                    {/* <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type='password'
                                name='currentPassword'
                                placeholder='현재 비밀번호'
                                value={currentPassword}
                                onChange={handleInputChange}
                                required
                                className='password-change-input'
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                name='newPassword'
                                placeholder='새 비밀번호'
                                value={newPassword}
                                onChange={handleInputChange}
                                required
                                className='password-change-input'
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                name='confirmPassword'
                                placeholder='비밀번호 확인'
                                value={confirmPassword}
                                onChange={handleInputChange}
                                required
                                className='password-change-input'
                            />
                        </div>
                        <button id='password-change-button' type='submit'>비밀번호 변경</button>
                    </form>
                    <button id='passowrd-change-if-forget' onClick={handleClick}>
                        비밀번호를 잊어버리셨다면?
                    </button> */}

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
                                rules={[
                                    { required: true, message: '현재 비밀번호를 입력해주세요' },
                                ]}
                            >
                                <Input.Password placeholder="현재 비밀번호" />
                            </Form.Item>
                            <Form.Item
                                name="newPassword"
                                rules={[{ required: true, message: '새로운 비밀번호를 입력해주세요' }]}
                            >
                                <Input.Password placeholder="새 비밀번호" />
                            </Form.Item>
                            <Form.Item
                                name="confirmPassword"
                                dependencies={['newPassword']}
                                hasFeedback
                                rules={[
                                    { required: true, message: '새로운 비밀번호를 적어주세요.' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
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
                    {/* {isPasswordChangeEmailRequestLoading && <>로딩중입니다.</>}
                    {isPasswordChangeEmailRequestSuccess && <>완료됨</>} */}
                </div>
            </div>
        </>
    )
}