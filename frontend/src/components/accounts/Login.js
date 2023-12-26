import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { useLoginMutation } from './authApiSlice';
import { Link } from 'react-router-dom';
import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import './Login.css'
import SocialLogin from './SocialLogin';
import BasicButton3 from '../common/BasicButton3';
import Spinner from '../common/Spinner'
import { SmileOutlined, FrownOutlined } from '@ant-design/icons'


const Login = () => {
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || true);
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isAbsoluteLoading, setAbsoluteLoading] = useState(false);

    const [login] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        setErrorMessage('')
    }, [email, password])

    const onFinish = async (values) => {
        try {
            setAbsoluteLoading(true);
            const { email, password } = values;
            const userData = await login({ email, password }).unwrap(); // RTK Query
            dispatch(setCredentials({ ...userData, email })); // Redux : 유저 정보(email, access_token)를 전역적으로 사용하기 위해 store에 저장
            setEmail('');
            setPassword('');
            navigate('/');
            setAbsoluteLoading(false);
        } catch (err) {
            notification.open({
                message: '로그인 실패',
                description: err?.data?.non_field_errors,
                icon: <FrownOutlined style={{ color: 'red' }} />,
                placement: 'top',
            })
            setAbsoluteLoading(false)
            if (!err?.response) {
                setErrorMessage('No server response');
            } else if (err.response?.status === 400) {
                setErrorMessage('missing username or password');
            } else if (err.response?.status === 401) {
                setErrorMessage('unauthorized');
            } else {
                setErrorMessage('login failed');
            }
        }
    }

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])


    return (
        <>
            {isAbsoluteLoading ? (
                <div id='login-loading-spinner'>
                    <Spinner />
                </div>

            ) : (
                <div id='login-viewport'>
                    <div id='login-card'>
                        <div id='login-card-title'>
                            <Link to='/'>
                                내가 사는 세상
                            </Link>
                        </div>

                        <Form
                            name="basic"
                            // wrapperCol={{ span: 16, offset: 4 }}
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
                                    rules={[{ required: true, message: '이메일을 입력해주세요' }]}
                                >
                                    <Input placeholder="이메일" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
                                >
                                    <Input.Password placeholder="비밀번호" />
                                </Form.Item>
                                <div style={{ display: 'flex' }}>
                                    <input
                                        className='login-persist-checkbox'
                                        type="checkbox"
                                        id="persist"
                                        onChange={togglePersist}
                                        checked={persist}
                                    />
                                    <div>
                                        로그인 상태 유지
                                    </div>
                                </div>
                            </ConfigProvider>
                            <Form.Item>
                                <button id='login-button' type="submit">
                                    로그인
                                </button>
                            </Form.Item>
                        </Form>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div id='signup-direction'>
                                {/* 처음이시라면 &nbsp; */}
                                <Link to='/accounts/signup'>
                                    <span id='signup-direction-bold'>
                                        회원가입&nbsp;&nbsp;
                                    </span>
                                </Link>
                                |
                                {/* 해주세요.  | */}
                            </div>
                            <div id='forget-password'>
                                <Link to='/accounts/password-forget'>
                                    &nbsp;&nbsp;비밀번호 찾기
                                </Link>
                            </div>
                        </div>

                        <SocialLogin />
                    </div>
                </div >
            )}
        </>
    )
}

export default Login