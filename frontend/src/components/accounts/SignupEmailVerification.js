import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../../services/api'
import Spinner from '../../components/common/Spinner';
import SignupWelcome from '../../components/accounts/SignupWelcome'
import { useNavigate } from 'react-router-dom';

export default function SignupEmailVerification() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    async function fn() {
        const emailVerificationTokenParam = new URL(window.location.href).searchParams.get('refresh_token');
        const emailVerificationToken = { 'refreshToken': emailVerificationTokenParam }

        try {
            setLoading(true);
            await axiosInstance.post('/accounts/email-verification/', emailVerificationToken)
            setLoading(false);
        } catch (e) {
            console.log(e);
            if (e.response.data.error == "알 수 없는 오류: Token is blacklisted")
                alert('이미 만료된 토큰입니다. 홈페이지로 이동합니다.')
            navigate('/')
        }
    }

    // 컴포넌트 처음 실행(마운트)시에 실행
    useEffect(() => {
        fn();
    }, [])

    return (
        <>
            {loading ? (
                <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner />
                </div>
            )
                : (
                    <SignupWelcome />
                )}
        </>
    )
}