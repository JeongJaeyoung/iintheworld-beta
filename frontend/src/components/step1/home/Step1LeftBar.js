import React, { useState } from 'react'
import { ConfigProvider, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Step1LeftBar({productName}){
    const navigate = useNavigate();

    const part1TheoryLevel0 = [
        // '돈이 굴리는 세상 - 이론편 - 입문편' left sidebar 목차
        {
            label: '시작하며',
            key: '0',
            // icon: <IdcardOutlined />,
        },
        {
            label: 'PART1. 경제라는 무대',
            key: '1',
            // icon: <FundProjectionScreenOutlined />,
            children: [
                {
                    label: 'CH1. 금융경제',
                    key: '11',
                    // icon: <ShoppingCartOutlined />,
                },
                {
                    label: 'CH2. 실물경제',
                    key: '12',
                    // icon: <CreditCardOutlined />,
                },
                {
                    label: 'CH3. 종합경제',
                    key: '13',
                    // icon: <ShoppingOutlined />,
                },
                {
                    label: 'CH4. 국제경제',
                    key: '14',
                    // icon: <ShoppingOutlined />,
                },
            ],
        },
        {
            label: 'PART2. 무대 위 경제 주인공들',
            key: '2',
            // icon: <SettingOutlined />,
            children: [
                {
                    label: '개인',
                    key: '21',
                    // icon: <ShoppingCartOutlined />,
                },
                {
                    label: '기업',
                    key: '22',
                    // icon: <CreditCardOutlined />,
                },
                {
                    label: '시중은행',
                    key: '23',
                    // icon: <CreditCardOutlined />,
                },
                {
                    label: '중앙은행',
                    key: '24',
                    // icon: <CreditCardOutlined />,
                },
                {
                    label: '정부',
                    key: '25',
                    // icon: <CreditCardOutlined />,
                },
            ],
        },
        {
            label: 'PART3. 이들이 벌이는 한편의 연극',
            key: '3',
            // icon: <SettingOutlined />,
            children: [
                {
                    label: '일반 경기 CYCLE',
                    key: '31',
                    // icon: <ShoppingCartOutlined />,
                },
                {
                    label: '선진국 경기 CYCLE',
                    key: '32',
                    // icon: <CreditCardOutlined />,
                },
                {
                    label: '신흥국 경기 CYCLE',
                    key: '33',
                    // icon: <CreditCardOutlined />,
                },
            ],
        }
    ];

    const [current, setCurrent] = useState('0');

    const onClick = (e) => {
        setCurrent(e.key);
        navigate(`/classroom/money-control-world-theory-level0/${e.key}`)
    };

    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#c0c0c0', }, }}>
            <Menu 
                onClick={onClick} 
                mode="inline" 
                items={part1TheoryLevel0}
                defaultOpenKeys={['1', '2', '3']}
            />
        </ConfigProvider>
    )
};