import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../services/api';
import { setCredentials } from './authSlice';
import { useDispatch } from 'react-redux';

export default function SocialLoginCallbackNaver(){
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');

    const requestData = {
        code,
        state,
      };
    
      const [{ data, loading, error }, refetch] = useAxios({
        url: '/accounts/naver/login/data',
        method: 'POST',
        data: requestData,
        withCredentials: true,
      });

      useEffect(() => {
        if (data) {
          console.log('Data received:', data);
          dispatch(setCredentials(data))
          navigate('/')

        } else if (error) {
          console.error('Error:', error);
        }
      }, [data]);
    
    

    return(
        <>
            네이버 소셜 로그인 중입니다...
        </>
    )
}