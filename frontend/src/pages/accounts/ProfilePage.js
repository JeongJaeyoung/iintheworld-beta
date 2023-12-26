import React, { useState, useEffect } from 'react';
import AppLayoutStep1 from '../../components/layout/AppLayoutStep1'
import BodyWrapper from '../../components/layout/BodyWrapper';
import BodyLeft from '../../components/layout/BodyLeft';
import BodyCenter from '../../components/layout/BodyCenter';
import ProfileLeftSideBar from '../../components/accounts/ProfileLeftSideBar';
import ProfileContent from '../../components/accounts/ProfileContent';
import { useParams } from 'react-router-dom';


export default function ProfilePage() {
    const { parameter } = useParams();
    const [type, setType] = useState('1'); // 초기 값

    useEffect(()=>{
        if (parameter===undefined){  // url : /accounts/profile
            if(window.innerWidth < 500){
                setType('1');  // 모바일
            } else {
                setType('11'); // 데스크탑
            }
        } else if(parameter==='auth'){
            if(window.innerWidth < 500){
                setType('1');  // 모바일
            } else {
                setType('11');  // 데스크탑
            }
        } else if(parameter==='lecture'){
            if(window.innerWidth < 500){
                setType('2');  // 모바일
            } else {
                setType('21');  // 데스크탑
            }
        } else if(parameter==='config'){
            if(window.innerWidth < 500){
                setType('3');  // 모바일
            } else {
                setType('31');  // 데스크탑
            }
        } 
    }, [])


    const handleTypeChange = (newType) => {
      setType(newType);
    };

    return (
        <>
            <AppLayoutStep1>
                <BodyWrapper>
                    <BodyLeft>
                        {/* 모바일(display X) */}
                        {/* 데스크탑(display O, width 20%) */}
                        <ProfileLeftSideBar onTypeChange={handleTypeChange} />
                    </BodyLeft>
                    <BodyCenter>
                        {/* 모바일(display O, width 100%) */}
                        {/* 데스크탑(display O, width 80%) */}
                        <ProfileContent type={type} onTypeChange={handleTypeChange} />
                    </BodyCenter>
                </BodyWrapper>
            </AppLayoutStep1>
        </>
    )
}