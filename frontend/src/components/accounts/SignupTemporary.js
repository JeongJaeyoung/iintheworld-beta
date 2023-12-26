import React from 'react'
import { Link } from 'react-router-dom'
import './SignupTemporary.css'


export default function SignupTemporary() {
  return (
    <>
      <div id='email-verification-wrapper'>
        <div>
          <div id='email-verification-title'>
            ✉️ 인증 메일을 보내드렸어요.
          </div>
          <div id='email-verification-content'>
            이를 통해 회원가입을 완료하실 수 있습니다.<br />
            감사합니다!
          </div>
          <Link to='/'>
            <div id='signup-temporary-go-to-home-wrapper'>
              <div id='singup-temporary-go-to-home'>
                홈으로 가기
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}