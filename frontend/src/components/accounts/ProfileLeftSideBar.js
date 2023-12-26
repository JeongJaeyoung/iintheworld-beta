import React, { useState } from 'react'
import './ProfileLeftSideBar.css'
import { ConfigProvider, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { IdcardOutlined, FundProjectionScreenOutlined, ShoppingCartOutlined, CreditCardOutlined, ShoppingOutlined, SettingOutlined } from '@ant-design/icons';


export default function ProfileLeftSideBar({ onTypeChange }) {

    const items = [
        {
            label: '계정 정보',
            key: '11',
            // icon: <IdcardOutlined />,
        },
        {
            label: '강의',
            key: '2',
            // icon: <FundProjectionScreenOutlined />,
            children: [
                {
                    label: '강의실',
                    key: '21',
                    icon: <FundProjectionScreenOutlined />,
                },
                {
                    label: '수강 바구니',
                    key: '22',
                    icon: <ShoppingCartOutlined />,
                },
                {
                    label: '쿠폰함',
                    key: '23',
                    icon: <CreditCardOutlined />,
                },
                {
                    label: '결제 내역',
                    key: '24',
                    icon: <ShoppingOutlined />,
                },
            ],
        },
        {
            label: '설정',
            key: '3',
            icon: <SettingOutlined />,
            children: [
                {
                    label: '비밀번호 변경',
                    key: '31',
                    // icon: <ShoppingCartOutlined />,
                },
                {
                    label: '회원탈퇴',
                    key: '32',
                    // icon: <CreditCardOutlined />,
                },
            ],
        }
    ];

    const onClick = (e) => {
        onTypeChange(e.key);
    };

    return (
        <ConfigProvider theme={{ token: { colorPrimary: '#999', }, }}>
            <Menu 
                onClick={onClick} 
                mode="inline" 
                items={items} 
                defaultOpenKeys={['2', '3']}
            />
        </ConfigProvider>
    )
};