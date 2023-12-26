import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/common/Spinner';
import { setCredentials } from '../../components/accounts/authSlice';
import { useDispatch } from 'react-redux';

export default function SocialLogoutKakaoCallback() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(setCredentials({
        data: {
          social_access_token: null,
          django_access_token: null,
          auth_provider: null,
          avatar_url: null,
          name_from_email: null,
          username: null
        },
        email: null
      }));
      navigate('/');
    }, [navigate]);

    return (
        <>
          <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spinner />
          </div>
        </>
    )
}