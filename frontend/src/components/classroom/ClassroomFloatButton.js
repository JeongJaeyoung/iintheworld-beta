import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FloatButton, ConfigProvider, Drawer, Space, Button, Menu } from 'antd';
import { ArrowUpOutlined, FileTextOutlined, ToTopOutlined } from '@ant-design/icons';
import './Classroom'

export default function ClassroomFloatButton({ lectureName }) {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const [defaultOpenKeys, setDefaultOpenKeys] = useState(['1', '2', '3']);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // antd MENU
    let leftSideBar = []
    console.log(lectureName)
    switch (lectureName) {
        // 1. 돈이 굴리는 세상 - 이론편 - 입문편
        case 'money-control-world-theory-level0':
            leftSideBar = [
                {
                    label: (
                        <Link to={`/classroom/money-control-world-theory-level0/0`} >
                            시작하며
                        </Link>
                    ),
                    key: '0',
                },
                {
                    label: 'STEP1. 경제라는 무대',
                    key: '1',
                    children: [
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/11`} >
                                    금융경제
                                </Link>
                            ),
                            key: '11',
                            icon: null,
                        },
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/12`} >
                                    실물경제
                                </Link>
                            ),
                            key: '12',
                            icon: null,
                        },
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/13`} >
                                    종합경제
                                </Link>
                            ),
                            key: '13',
                        },

                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/14`} >
                                    국제경제
                                </Link>
                            ),
                            key: '14',
                        },
                    ]
                },
                {
                    label: 'STEP2. 무대 위 주인공들',
                    key: '2',
                    children: [
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/21`} >
                                    개인
                                </Link>
                            ),
                            key: '21',
                        },
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/22`} >
                                    기업
                                </Link>
                            ),
                            key: '22',
                        },
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/23`} >
                                    시중은행
                                </Link>
                            ),
                            key: '23',
                        },

                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/24`} >
                                    중앙은행
                                </Link>
                            ),
                            key: '24',
                        },

                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/25`} >
                                    정부
                                </Link>
                            ),
                            key: '25',
                        },
                    ]
                },
                {
                    label: 'STEP3. 이들이 벌이는 한편의 연극',
                    key: '3',
                    children: [
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/31`} >
                                    일반 CYCLE
                                </Link>
                            ),
                            key: '31',
                        },
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/32`} >
                                    선진국 CYCLE
                                </Link>
                            ),
                            key: '32',
                        },
                        {
                            label: (
                                <Link to={`/classroom/money-control-world-theory-level0/33`} >
                                    신흥국 CYCLE
                                </Link>
                            ),
                            key: '33',
                        },
                    ]
                },
            ];
            break;

        // 2. 돈이 굴리는 세상 - 현실편 - 입문편
        case 'money-control-world-reality-level0':
            leftSideBar = [
                {
                    label: '일본',
                    key: '1',
                },
                {
                    label: '유럽',
                    key: '2',
                },
                {
                    label: '중국',
                    key: '3',
                },
                {
                    label: '미국',
                    key: '4',
                },
                {
                    label: '한국',
                    key: '5',
                },
            ];
            break;
    }


    return (
        <>
            {window.innerWidth < 500
                ? (
                    <ConfigProvider theme={{ token: { colorPrimary: '#rc0057', }, }}>
                        <Drawer
                            title="강의 목차"
                            placement={placement}
                            closable={true}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            width={320}
                        >
                            <Menu mode="inline" items={leftSideBar} defaultOpenKeys={defaultOpenKeys} />
                        </Drawer>
                        <FloatButton.Group
                            // id='display-true-at-mobile'
                            trigger="click"
                            type="primary"
                            style={{
                                right: 30,
                                bottom: 30,
                            }}
                            icon={<ArrowUpOutlined />}
                        >
                            <FloatButton
                                onClick={showDrawer}
                                icon={<FileTextOutlined />}
                            />
                            <FloatButton.BackTop
                                visibilityHeight={0}
                                icon={<ToTopOutlined />}
                            />
                        </FloatButton.Group>
                    </ConfigProvider>
                )
                : (
                    null
                )}
        </>
    )
}