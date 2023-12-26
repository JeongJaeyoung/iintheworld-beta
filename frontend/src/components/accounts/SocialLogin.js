import React from 'react'
import BasicButton from '../common/BasicButton';
import { Link } from 'react-router-dom';
import './SocialLogin.css'


export default function SocialLogin() {
    const reactAppApiHostFrontend = process.env.REACT_APP_API_HOST_FRONTEND

    // 1. 구글
    const googleLoginUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const googleRedirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI
    const googleScope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
    const googleSocialLoginUrl = `${googleLoginUrl}?client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&response_type=code&scope=${googleScope}&access_type=offline`


    // 2. 네이버
    const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID
    const naverRedirectUri = process.env.REACT_APP_NAVER_REDIRECT_URI
    const naverState = process.env.REACT_APP_NAVER_STATE

    const naverLoginUrl = 'https://nid.naver.com/oauth2.0/authorize'
    const naverSocialLoginUrl = `${naverLoginUrl}?response_type=code&client_id=${naverClientId}&redirect_uri=${naverRedirectUri}&state=${naverState}`;


    // 3. 카카오
    const kakaoRestApiKey = process.env.REACT_APP_KAKAO_REST_API_KEY
    const kakaoCallBackUri = `${reactAppApiHostFrontend}/accounts/kakao/login/callback`
    const kakaoSocialLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoRestApiKey}&redirect_uri=${kakaoCallBackUri}`

    return (
        <div id='social-login-wrapper'>
            <Link to={googleSocialLoginUrl}>
                <BasicButton imageUrl={'/image/logo/google-logo.png'} width={20} />
            </Link>
            <Link to={kakaoSocialLoginUrl}>
                <BasicButton imageUrl={'/image/logo/kakao-logo.png'} width={30} position={'relative'} top={3} left={1} />
            </Link>
            {/* <Link to={naverSocialLoginUrl}>
                <BasicButton imageUrl={'/image/logo/naver-logo.png'} width={15} />
            </Link> */}
            {/* <Link to='/'>
                <BasicButton imageUrl={'/image/logo/apple-logo.png'} width={30} />
            </Link> */}
        </div>
    )
}