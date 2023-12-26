import React from 'react'
import { Menu, ConfigProvider } from 'antd'
import { Link } from 'react-router-dom';
import EconDataLeftSidebarMap from './EconDataLeftSidebarMap';

export default function EconDataLeftSidebar({ country }) {
    const leftSideBar = [
        {
            label: '경제라는 무대',
            children: [
                {
                    label: country && country === 'japan' ? (
                        <Link to={`/econ-data/${country}/financial-econ`} >
                            금융경제
                        </Link>
                    ) : (
                        <>
                            금융경제
                        </>
                    ),
                    key: '11',
                    icon: null,
                    disabled: country && country === 'japan' ? false : true
                },
                {
                    label: country && country === 'korea' ? (
                        <Link to={`/econ-data/${country}/real-econ`} >
                            실물경제
                        </Link>
                    ) : (
                        <>

                            실물경제
                        </>
                    ),
                    key: '12',
                    icon: null,
                    disabled: country && country === 'korea' ? false : true
                },
                {
                    label: (
                        <>
                            {/* <Link to={`/econ-data/${country}/total-econ`} > */}
                            종합경제
                            {/* </Link> */}
                        </>
                    ),
                    key: '13',
                    disabled: true,
                },

                {
                    label: (
                        <>
                            {/* <Link to={`/econ-data/${country}/international-econ`} > */}
                            국제경제
                            {/* </Link> */}
                        </>
                    ),
                    key: '14',
                    disabled: true,
                },
            ]
        },
        {
            label: '무대 위 주인공들',
            children: [
                {
                    label: (
                        <>
                            {/* <Link to={`/econ-data/${country}/individual`} > */}
                            개인
                            {/* </Link> */}
                        </>
                    ),
                    key: '21',
                    disabled: true,
                },
                {
                    label: (
                        <>
                            {/* <Link to={`/econ-data/${country}/firm`} > */}
                            기업
                            {/* </Link> */}
                        </>
                    ),
                    key: '22',
                    disabled: true,
                },
                {
                    label: (
                        <>
                            {/* <Link to={`/econ-data/${country}/commercial-bank`} > */}
                            시중은행
                            {/* </Link> */}
                        </>
                    ),
                    key: '23',
                    disabled: true,
                },

                {
                    label: (
                        <>
                            {/* <Link to={`/econ-data/${country}/central-bank`} > */}
                            중앙은행
                            {/* </Link> */}
                        </>
                    ),
                    key: '24',
                    disabled: true,
                },

                {
                    label: (
                        <>
                            {/* <Link to={`/econ-data/${country}/government`} > */}
                            정부
                            {/* </Link> */}
                        </>
                    ),
                    key: '25',
                    disabled: true,
                },
            ]
        },

    ];


    return (
        <>
            <EconDataLeftSidebarMap selectCountry={country} />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#666',
                    },
                }}
            >
                <Menu mode="inline" items={leftSideBar} />
            </ConfigProvider>
        </>
    )
}