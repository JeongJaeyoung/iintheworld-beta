import React from 'react';
import './Header2.css'
import { InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

export default function Header2({ type }) {
    const menu_for_mobile_toggle_step1 = [
        {
            label: (
                <a href="/">
                    HOME
                </a>
            ),
            key: 'home',
        },
        {
            label: (
                <Link to={'/step1/home'}>
                    STEP1. 돈으로부터의 독립
                </Link>
            ),
            key: 'step1',
        },
        {
            disabled:true,
            label: (
                <a href="/" >
                    STEP2. 원하는 분야 배우기
                </a>
            ),
            key: 'step2'
        },
        {
            label: (
                <a href="/about" >
                    About
                </a>
            ),
            key: 'about'
        },
    ];

    const menu_for_mobile_toggle_step2 = [
        {
            label: (
                <Link to="/step1/home">
                    시작하며
                </Link>
            ),
            key: 'step1-home',
        },
        {
            label: (
                <Link to={'/step1/part1'}>
                    PART1. 돈이 굴리는 세상
                </Link>
            ),
            key: 'step1-part1',
        },
        {
            label: (
                <>
                    {/* <Link to href="/" > */}
                        PART2. 내가 굴리는 돈
                    {/* </Link> */}
                </>
            ),
            disabled:true,
            key: 'step1-part2'
        },
        {
            label: (
                <>
                    <Link to="/mall/books" >책</Link>
                </>
            ),
            key: 'step1-book'
        },
        {
            label: (
                <>
                    <Link to="/mall/lectures" >강의</Link>
                </>
            ),
            key: 'step1-lecture'
        },
        {
            label: (
                <Link to="/board/posts" >
                    게시판
                </Link>
            ),
            key: 'step1-board'
        },
    ];

    return (
        <>
            <menu className='menu-wrapper'>
                <div className='inner2 toggle_off'  >
                    <ul className='menu'>
                        {window.innerWidth <= 500 ? (
                            // 모바일
                            type === 'step0' ? (
                                <div style={{ backgroundColor: '#ffffff' }}>
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#666',
                                            },
                                        }}
                                    >
                                        <Menu mode="inline" items={menu_for_mobile_toggle_step1} id='menu_wrapper_for_mobile1' />
                                        {/* <div id='menu_wrapper_for_mobile2' >
                                            <a href='https://www.linkedin.com/in/jeongjaeyoung/'>
                                                <LinkedinOutlined style={{ fontSize: "18px", marginRight: '10px', href: 'https://www.linkedin.com/in/jeongjaeyoung/' }} />
                                            </a>
                                            <a href='https://www.instagram.com/i_intheworld/'>
                                                <InstagramOutlined style={{ fontSize: "20px", marginRight: '10px' }} />
                                            </a>
                                            <a href='https://www.youtube.com/@i_intheworld'>
                                                <YoutubeOutlined style={{ fontSize: "20px" }} />
                                            </a>
                                        </div> */}
                                    </ConfigProvider>
                                </div>
                            ) : (
                                <div style={{ backgroundColor: '#ffffff' }}>
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#666',
                                            },
                                        }}
                                    >
                                        <Menu mode="inline" items={menu_for_mobile_toggle_step2} id='menu_wrapper_for_mobile1' />
                                        {/* <div id='menu_wrapper_for_mobile2' >
                                            <a href='https://www.linkedin.com/in/jeongjaeyoung/'>
                                                <LinkedinOutlined style={{ fontSize: "18px", marginRight: '10px', href: 'https://www.linkedin.com/in/jeongjaeyoung/' }} />
                                            </a>
                                            <a href='https://www.instagram.com/i_intheworld/'>
                                                <InstagramOutlined style={{ fontSize: "20px", marginRight: '10px' }} />
                                            </a>
                                            <a href='https://www.youtube.com/@i_intheworld'>
                                                <YoutubeOutlined style={{ fontSize: "20px" }} />
                                            </a>
                                        </div> */}
                                    </ConfigProvider>
                                </div>
                            )
                        ) : (
                            // 데스크탑
                            type === 'step0' ? (
                                <div className='menu-item-wrapper'>
                                    <li className='menu-item-step0'>
                                        <Link to='/'>HOME</Link>
                                    </li>
                                    <li className='menu-item-step0'>
                                        <Link to='/step1/home'>STEP1. 돈으로부터의 독립</Link>
                                    </li>
                                    <li className='menu-item-step0'>
                                        {/* <Link to='/step2/home'> */}
                                        <Tooltip placement="top" title='준비중입니다!'>
                                            STEP2. 하고 싶은 일 배우기
                                        </Tooltip>
                                        {/* </Link> */}
                                    </li>
                                    <li className='menu-item-step0'>
                                        <Link to='/about'>About</Link>
                                    </li>
                                </div>
                            ) : (
                                <div className='menu-item-wrapper'>
                                    <li className='menu-item-step1'>
                                        <Link to='/step1/home'>시작하며</Link>
                                    </li>
                                    <li className='menu-item-step1'>
                                        <Link to='/step1/part1'>PART1. 돈이 굴리는 세상</Link>
                                    </li>
                                    <li className='menu-item-step1'>
                                        {/* <Link to='/step1/part2'> */}
                                        <Tooltip placement="top" title='준비중입니다!'>
                                            PART2. 내가 굴리는 돈
                                        </Tooltip>
                                        {/* </Link> */}
                                    </li>
                                    <li className='menu-item-step1'>
                                        <Link to='/mall/books'>책&nbsp;</Link>/<Link to='/mall/lectures'>&nbsp;강의</Link>
                                    </li>
                                    <li className='menu-item-step1'>
                                        <Link to='/board/posts'>게시판</Link>
                                    </li>
                                </div>
                            )
                        )}
                    </ul >
                </div >
            </menu >
        </>
    )
}