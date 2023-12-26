import React from 'react'
import { Link } from 'react-router-dom'
import './SignupWelcome.css'

export default function SignupWelcome() {

    return (
        <>
            <div id='signup-welcome-wrapper'>
                <div>
                    <div id='email-verification-title'>
                        😄 회원가입을 축하드립니다
                    </div>
                    <div id='signup-welcome-content'>
                        반갑습니다. 이제 본격적으로 자아실현을 준비해봐요!
                    </div>
                    <Link to='/'>
                        <div style={{fontWeight:700}}>
                            홈페이지 제대로 구경가기
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}