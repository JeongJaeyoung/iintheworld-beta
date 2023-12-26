import React, { useState } from 'react';
import { FloatButton, ConfigProvider, Drawer, Space, Button, Menu } from 'antd';
import { ArrowUpOutlined, FileTextOutlined, ToTopOutlined } from '@ant-design/icons';
import './EconDataFloatButton.css'
import { Link } from 'react-router-dom';
import EconDataLeftSidebarMap from './EconDataLeftSidebarMap';

export default function EconDataFloatButton({country}) {
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
            label: '경제라는 무대',
            children: [
                {
                    label: (
                        <Link to={`/econ-data/${country}/financial-econ`} >
                            금융경제
                        </Link>
                    ),
                    key: '11',
                    icon: null,
                },
                {
                    label: (
                        <Link to={`/econ-data/${country}/real-econ`} >
                            실물경제
                        </Link>
                    ),
                    key: '12',
                    icon: null,
                },
                {
                    label: (
                        <Link to={`/econ-data/${country}/total-econ`} >
                            종합경제
                        </Link>
                    ),
                    key: '13',
                },

                {
                    label: (
                        <Link to={`/econ-data/${country}/international-econ`} >
                            국제경제
                        </Link>
                    ),
                    key: '14',
                },
            ]
        },
        {
            label: '무대 위 주인공들',
            children: [
                {
                    label: (
                        <Link to={`/econ-data/${country}/individual`} >
                            개인
                        </Link>
                    ),
                    key: '21',
                },
                {
                    label: (
                        <Link to={`/econ-data/${country}/firm`} >
                            기업
                        </Link>
                    ),
                    key: '22',
                },
                {
                    label: (
                        <Link to={`/econ-data/${country}/commercial-bank`} >
                            시중은행
                        </Link>
                    ),
                    key: '23',
                },

                {
                    label: (
                        <Link to={`/econ-data/${country}/central-bank`} >
                            중앙은행
                        </Link>
                    ),
                    key: '24',
                },

                {
                    label: (
                        <Link to={`/econ-data/${country}/government`} >
                            정부
                        </Link>
                    ),
                    key: '25',
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
                            title="데이터 목차"
                            placement={placement}
                            closable={true}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            width={300}
                        >
                            <EconDataLeftSidebarMap selectCountry={country}/>
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