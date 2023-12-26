import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../services/api';
import { setCredentials } from './authSlice';
import { useDispatch } from 'react-redux';
import Spinner from '../common/Spinner';

export default function SocialLoginCallbackKakao() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fn() {
    const codeParam = new URL(document.location.toString()).searchParams.get('code');

    if (codeParam) {
      const code = { 'code': codeParam };

      try {
        const userData = await axiosInstance.post('/accounts/kakao/login/code', code, {
          withCredentials: true,
        });
        dispatch(setCredentials(userData.data))
        navigate('/')
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error('Code parameter not found in the URL');
    }
  }

  useEffect(() => {
    fn();
  }, []);

  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Spinner/>
    </div>
  )
};