import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../../services/api';
import { setCredentials } from './authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../common/Spinner'

export default function SocialLoginCallbackGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fn() {
    const codeParam = new URL(document.location.toString()).searchParams.get('code');

    if (codeParam) {
      const code = { 'code': codeParam };
      console.log(code)

      try {
        const userData = await axiosInstance.post('/accounts/google/login/code/', code, {
          withCredentials: true,
        });
        dispatch(setCredentials(userData.data))
        if (userData.data.alert_message) {
          alert(userData.data.alert_message)
        }
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
    <>
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spinner />
      </div>
    </>
  )
}