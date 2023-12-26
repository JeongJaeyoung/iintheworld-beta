import React, { useState, useEffect } from 'react'
import PasswordChange from './PasswordChange';
import { useSelector } from 'react-redux';
import { selectCurrentEmail } from './authSlice';
import BasicCard from '../common/BasicCard';
import CartPayment from '../mall/CartPayment';
import Card1 from '../common/Card1';
import './ProfileContent.css'
import { useProfileQuery } from './authApiSlice';
import { Tag, Tabs, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
import OrdersPaymentList from '../mall/OrdersPaymentList';
import ProfileContentAvatar from './ProfileContentAvatar';
import ProfileContentPurchasedProducts from './ProfileContentPurchasedProducts';
import ProfileContentSignout from './ProfileContentSignout';


export default function ProfileContent({ type, onTypeChange }) {
    let content;
    const [hasCourse, setHasCourse] = useState(false)
    const {
        data: profile,
        isLoading: isProfileLoading,
        isSuccess: isProfileSuccess,
        refetch,
    } = useProfileQuery()

    const onChange = (key) => {
        onTypeChange(key);
    };

    useEffect(() => {
        if (!isProfileLoading && isProfileSuccess && profile.purchased_products && profile.purchased_products.length > 0) {
            setHasCourse(true);
        } else {
            setHasCourse(false);
        }
    }, [isProfileSuccess, isProfileLoading, profile]);

    // 모바일
    const mobileTabs = [
        {
            key: '1',
            label: '계정',
            children: (
                <>
                    <ProfileContentAvatar profile={profile}/>
                </>
            )
        },
        {
            key: '2',
            label: '강의',
            children: (
                <>
                    <ProfileContentPurchasedProducts profile={profile} hasCourse={hasCourse} />
                    <hr />
                    <div>
                        <div className='profile-mobile-title'>
                            수강바구니
                        </div>
                        <CartPayment />
                    </div>
                    <hr />
                    <div>
                        <div className='profile-mobile-title'>
                            쿠폰함
                        </div>
                        <div>

                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='profile-mobile-title'>
                            결제내역
                        </div>
                        <OrdersPaymentList/>
                        <div>
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: '3',
            label: '설정',
            children: (
                <>  
                    <div className='profile-mobile-title'>
                        비밀번호 변경
                    </div>
                    <PasswordChange />
                    <div className='profile-mobile-title'>
                        회원탈퇴
                    </div>
                    <div className='profile-mobile-title'>
                        <ProfileContentSignout />
                    </div>
                </>
            ),
        },
    ];

    // 데스크탑
    switch (type) {
        case '11':
            content = (
                <>
                    <ProfileContentAvatar profile={profile}/>
                </>
            );
            break;

        case '21':
            content = (
                // 강의실 = 구매목록
                <ProfileContentPurchasedProducts profile={profile} hasCourse={hasCourse} />
            );
            break;

        case '22':
            content = (
                // 수강바구니
                <CartPayment />
            );
            break;

        case '23':
            content = (
                // 쿠폰함
                <div>
                </div>
            );
            break;

        case '24':
            content = (
                // 결제내역
                <div>
                    <OrdersPaymentList/>
                </div>
            );
            break;

        case '31':
            content = (
                <PasswordChange />
            );
            break;

        case '32':
            content = (
                <ProfileContentSignout />
            );
            break;

        default:
            content = (
                <>
                </>
            );
    }

    return (
        <>
            <div id='display-true-at-mobile'>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#666',
                        },
                    }}
                >
                    <Tabs defaultActiveKey='1' activeKey={type} items={mobileTabs} onChange={onChange} />
                </ConfigProvider>
            </div>
            <div id='display-true-at-desktop'>
                {content}
            </div>
        </>
    )
}