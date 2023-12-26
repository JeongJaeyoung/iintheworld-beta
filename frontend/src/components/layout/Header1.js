import React from 'react';
import './Header1.css'
import { useState } from 'react';
import { setCredentials } from '../accounts/authSlice';
import { ConfigProvider, Popover } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../accounts/authApiSlice';
import { useDispatch } from 'react-redux';
import BasicButton4 from '../../components/common/BasicButton4'
import { SolutionOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


export default function Header1({ subtitle }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authProvider = useSelector(state => state.auth.auth_provider)
    const avatar_url = useSelector(state => state.auth.avatar_url)
    const accessToken = useSelector(state => state.auth.django_access_token);
    const socialAccessToken = useSelector(state => state.auth.social_access_token);
    const [open, setOpen] = useState(false);
    const [logout, { isLoading }] = useLogoutMutation()

    // 로그아웃 처리
    const onLogout = async () => {
        if (authProvider === 'kakao') {
            window.location.href = `https://kauth.kakao.com/oauth/logout?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&logout_redirect_uri=${process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI}`;
        } else if (authProvider === 'google' || authProvider === 'email') {
            const userData = await logout({ authProvider, accessToken, socialAccessToken }).unwrap();
            dispatch(setCredentials({ ...userData, email: null }));
            navigate("/");
        }
    }

    const mobileProfileImagePopoverBeforeLogin = (
        <div style={{ backgroundColor: '#fff' }}>
            <div>
                <Link to='/accounts/login'>
                    로그인
                </Link>
            </div>
            <hr/>
            <div>
                <Link to='/accounts/signup'>
                    회원가입
                </Link>
            </div>
        </div>
    );

    const mobileProfileImagePopoverAfterLogin = (
        <div style={{ backgroundColor: '#fff' }}>
            <div>
                <Link to='/accounts/profile'>
                    프로필
                </Link>
            </div>
            {/* <hr/> */}
            <div>
                <Link to='/accounts/profile/lecture'>
                    강의실
                </Link>
            </div>
            <hr/>
            <div onClick={onLogout}>로그아웃</div>
        </div>
    );

    const handleMobilePopoverOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    // 모바일 햄버거 버튼 작동원리
    const handleMobileHamburgerOnClick = () => {
        const idHeader1MobileHamburgerButton = document.querySelector('#header1-mobile-hamburger-button')
        const classInner2 = document.querySelector('.inner2');
        const classInner2ClassName = document.querySelector('.inner2').className;

        const move_left_to_right = [
            { transform: 'translate(-100vw, 0px)' },
            { transform: 'translate(0vw, 0px)' }
        ];

        const move_right_to_left = [
            { transform: 'translate(100vw, 0px)' }, // 처음 위치(-100vw)에서 100vw만큼 오른쪽으로 이동한 위치에서 움직이기 시작 
            { transform: 'translate(0vw, 0px)' }
        ];

        const timing = {
            duration: 300
        }

        if (classInner2ClassName === 'inner2 toggle_off') {
            const dom1 = document.querySelector(".inner2");
            dom1.animate(move_left_to_right, timing);
            classInner2.setAttribute('class', 'inner2 toggle_on');
            idHeader1MobileHamburgerButton.setAttribute('class', 'open');
        } else if (classInner2ClassName === 'inner2 toggle_on') {
            const dom2 = document.querySelector(".inner2");
            dom2.animate(move_right_to_left, timing);
            classInner2.setAttribute('class', 'inner2 toggle_off');
            idHeader1MobileHamburgerButton.setAttribute('class', '');
        }
    }

    const items = [
        // 데스크탑 header1 오른쪽 프로필 사진 antd dropdown : 변수명 변경시 에러남. antd 관련 문제인듯
        {
            key: '1',
            label: (
                <Link to={'/accounts/profile'}>
                    프로필
                </Link>
            ),
            icon: <SolutionOutlined />,
        },
    ];

    return (
        <>
            <header>
                <div className='inner1'>
                    {/* 모바일 */}
                    <div className='title-small'>
                        {/* 1. 모바일 왼쪽 : 햄버거 버튼 */}
                        <div onClick={handleMobileHamburgerOnClick} >
                            <div id="header1-mobile-hamburger-button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        {/* 2. 모바일 중앙 : 제목 */}
                        <div>
                            <Link to="/">
                                <h1 className='website_title'>내가 사는 세상</h1>
                            </Link>
                        </div>
                        {/* 3. 모바일 오른쪽 : 프로필 이미지 */}
                        {
                            accessToken === null // 로그인 여부로 확인
                                ? // 모바일 로그인 전
                                <Popover
                                    placement="bottomRight"
                                    content={mobileProfileImagePopoverBeforeLogin}
                                    trigger="click"
                                    open={open}
                                    onOpenChange={handleMobilePopoverOpenChange}
                                >
                                    <img src='/image/common/default_profile_image2.png' id='header1-mobile-before-profile-image' />
                                </Popover>
                                :  // 모바일 로그인 후
                                <Popover
                                    placement="bottomRight"
                                    content={mobileProfileImagePopoverAfterLogin}
                                    trigger="click"
                                    open={open}
                                    onOpenChange={handleMobilePopoverOpenChange}
                                >
                                    <img src={avatar_url} id='header1-mobile-after-profile-image' />
                                </Popover>
                        }
                    </div>

                    {/* 데스크탑 */}
                    <div className='title-large'>
                        {/* 1. 데스크탑 왼쪽 - 제목 */}
                        <div className='title-large-wrapper'>
                            <div className='logo_image'>
                                <Link to="/">
                                    <img id='header1_logo_image_for_desktop' src='/image/logo/iintheworld_logo.png' />
                                </Link>
                            </div>
                            <div>
                                <Link to='/'>
                                    <h1 id='header1_title_for_desktop'>
                                        내가 사는 세상 <span id='header1_sub_title_for_desktop'>{subtitle}</span>
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        {/* 2. 데스크탑 오른쪽 - 각종 버튼, (프로필 이미지) */}
                        <div id='header_desktop_header_line_accounts'>
                            {accessToken == undefined || accessToken == null
                                ?  // 데스크탑 로그인 전
                                <ConfigProvider theme={{ token: { colorPrimary: '#f1f1f1', }, }}>
                                    <div>
                                        <Link to='/accounts/login'>
                                            <BasicButton4 text={'로그인'} />
                                        </Link>
                                        <Link to='/accounts/signup'>
                                            <BasicButton4 text={'회원가입'} />
                                        </Link>
                                    </div>
                                </ConfigProvider>
                                :  // 데스크탑 로그인 후
                                <ConfigProvider theme={{ token: { colorPrimary: '#f1f1f1', }, }}>
                                    <div id='header1-right-buttons-wrapper'>
                                        <Link to='/accounts/profile/lecture'>
                                            <BasicButton4 text={'강의실'} />
                                        </Link>
                                        <BasicButton4 text={'로그아웃'} onClick={onLogout} />
                                        <Dropdown menu={{ items }} placement="bottomRight" arrow>
                                            <img id='header1-desktop-after-profile-image' src={avatar_url}  />
                                        </Dropdown>
                                    </div>
                                </ConfigProvider>
                            }
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}