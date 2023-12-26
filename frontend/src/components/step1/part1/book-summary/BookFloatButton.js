import React, { useState } from 'react'
import './BookFloatButton.css'
import { FloatButton, ConfigProvider, Drawer, Space, Button, Menu } from 'antd';
import { ArrowUpOutlined, FileTextOutlined, ToTopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export default function BookFloatButton() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // antd MENU
    const leftSideBar = [
        {
            label: (
                <Link to='/step1/part1/book/summary' >
                    일단 훑어보기
                </Link>
            ) ,
            key: '00',
        },

        {
            label: 'STEP1. 경제라는 무대',
            children: [
                {
                    label: (
                        <Link to='/step1/part1/book/ch1/introduction'>
                            시작하며
                        </Link>
                    ),
                    key: '10',
                },
                {
                    label: (
                        <Link to='/step1/part1/book/ch1/financial-econ'>
                            금융경제
                        </Link>
                    ),
                    key: '11',
                    icon: null,
                },
                {
                    label: (
                        <Link to='/step1/part1/book/ch1/real-econ' >
                            실물경제
                        </Link>
                    ),
                    key: '12',
                    icon: null,
                },
                {
                    label: (
                        <div>
                            종합경제
                        </div>
                    ),
                    key: '13',
                    disabled: true,
                },

                {
                    label: (
                        <div>
                            국제경제
                        </div>
                    ),
                    key: '14',
                    disabled: true,
                },
            ]
        },
        {
            label: 'STEP2. 무대 위 주인공들',
            children: [
                {
                    label: (
                        <div>
                            개인
                        </div>
                    ),
                    key: '21',
                    disabled: true,
                },
                {
                    label: (
                        <div>
                            기업
                        </div>
                    ),
                    key: '22',
                    disabled: true,
                },
                {
                    label: (
                        <div>
                            시중은행
                        </div>
                    ),
                    key: '23',
                    disabled: true,
                },

                {
                    label: (
                        <div>
                            중앙은행
                        </div>
                    ),
                    key: '24',
                    disabled: true,
                },

                {
                    label: (
                        <div>
                            정부
                        </div>
                    ),
                    key: '25',
                    disabled: true,
                },
            ]
        },
        {
            label: 'STEP3. 이들이 벌이는 연극',
            children: [
                {
                    label: (
                        <div>
                            일반 경기 CYCLE
                        </div>
                    ),
                    key: '31',
                    disabled: true,
                },
                {
                    label: (
                        <div>
                            선진국 경기 CYCLE
                        </div>
                    ),
                    key: '32',
                    disabled: true,
                },
                {
                    label: (
                        <div>
                            신흥국 경기 CYCLE
                        </div>
                    ),
                    key: '33',
                    disabled: true,
                },
            ]
        },

    ];

    return (
        <>
            {window.innerWidth < 500
                ? (
                    <ConfigProvider theme={{ token: { colorPrimary: '#rc0057', }, }}>
                        <Drawer
                            title="책 목차"
                            placement={placement}
                            closable={true}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            width={300}
                        >
                            <Menu mode="inline" items={leftSideBar} />
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