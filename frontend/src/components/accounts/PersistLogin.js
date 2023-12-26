import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { axiosInstance } from '../../services/api';
import { setCredentials, setCredentialsWithoutSocialAccessToken } from './authSlice';
import { useDispatch } from 'react-redux';
import Spinner from '../common/Spinner';


export default function PersistLogin() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const django_access_token = useSelector((state) => state.auth.django_access_token);

    useEffect(() => {
        let isMounted = true;
        const persistValueString = localStorage.getItem('persist');
        const persistValueBoolean =  (persistValueString==='true');

        const verifyRefreshToken = async () => {
            try {
                const response = await axiosInstance.get(
                    'accounts/token/refresh/',
                    { withCredentials: true }
                )
                const { django_access_token, email, avatar_url, auth_provider } = response.data;
                if(auth_provider === 'google'){
                    const headers = { Authorization: `Bearer ${django_access_token}` };
                    const responseSocial = await axiosInstance.get(
                        'accounts/token/refresh/google',
                        { headers, withCredentials: true }
                    )
                    const { social_access_token } = responseSocial.data;
                    dispatch(setCredentials({ data: { social_access_token, django_access_token, avatar_url, auth_provider }, email }))
                } else if(auth_provider === 'kakao'){
                    const headers = { Authorization: `Bearer ${django_access_token}` };
                    const responseSocial = await axiosInstance.get(
                        'accounts/token/refresh/kakao',
                        { headers, withCredentials: true }
                    )
                    const { social_access_token } = responseSocial.data;
                    dispatch(setCredentials({ data: { social_access_token, django_access_token, avatar_url, auth_provider }, email }))
                } else if(auth_provider === 'email'){
                    const { django_access_token, email, avatar_url, auth_provider } = response.data;
                    dispatch(setCredentialsWithoutSocialAccessToken({ data: { django_access_token, avatar_url, auth_provider }, email }))
                }

                // access token 재발급 성공 후 해당 토큰으로 원래 요청 보내기
                // result = await baseQuery(args, api, extraOptions)
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }
        // access_token이 null(false)라면 refresh token을 활용하여 access token 재발급 받기
        // persistValue가 false라면, 새로고침시 로그인 상태 유지 X
        !django_access_token && persistValueBoolean ? verifyRefreshToken() : setIsLoading(false);
        return () => isMounted = false;
    }, [])

    // useEffect(() => {
    //     console.log(`isLoading: ${isLoading}`)
    // }, [isLoading])

    return (
        <>
            {isLoading ? (
                <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner />
                </div>
            ) : (
                <>
                    <Outlet />
                </>
            )}
        </>
    )
}