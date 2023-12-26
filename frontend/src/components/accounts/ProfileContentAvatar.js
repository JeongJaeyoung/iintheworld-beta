import React, { useState, useEffect, useRef } from 'react'
import './ProfileContentAvatar.css'
import { axiosInstance } from '../../services/api';
import { useSelector } from 'react-redux';
import { notification } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons'

export default function ProfileContentAvatar({ profile }) {
    const djangoAccessToken = useSelector((state) => state.auth.django_access_token);
    const [file, setFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(`${profile && profile.avatar_url}`);
    const imageInput = useRef();

    useEffect(() => {
        setImageSrc(`${profile && profile.avatar_url}`);
    }, [profile]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('profileImage', file);
            const response = await axiosInstance.patch('/accounts/profile/image-change/',
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${djangoAccessToken}`,
                        'Content-Type': 'multipart/form-data',
                    }
                },
            )
            notification.open({
                message: '프로필 사진이 잘 저장되었습니다.',
                icon: <SmileOutlined style={{ color: 'green' }} />,
                placement: 'top',
            })
        } catch (error) {
            notification.open({
                message: '프로필 사진 저장에 실패했습니다.',
                icon: <FrownOutlined style={{ color: 'red' }} />,
                placement: 'top',
            });
        }
    }

    const encodeFileToBase64 = (fileBlob, reject) => {
        if(fileBlob !== undefined){
            const reader = new FileReader();
            reader.readAsDataURL(fileBlob);
    
            return new Promise((resolve, reject) => {
                reader.onload = () => {
                    setImageSrc(reader.result);
                    resolve();
                };
                reader.onerror = (error) => {
                    console.log(error)
                    reject(error);
                };
            });
        }  
    };

    const onClickInput = () => {
        imageInput.current.click();
    }


    return (
        <>
            <div className='profile-content-avatar-card'>
                <div className='profile-content-avatar-title'>
                    프로필 이미지
                </div>
                <div >
                    <form id='profile-content-avatar-image-wrapper' onSubmit={handleSubmit}>
                        <div className="preview">
                            {imageSrc && <img id='profile-content-avatar-image' src={imageSrc} alt="preview-img" />}
                        </div>
                        <input ref={imageInput} name='file' id='file' className='profile-content-avatar-input' type="file" onChange={(e) => {
                            setFile(e.target.files[0]);
                            encodeFileToBase64(e.target.files[0]);
                        }} />
                        <button type="button" onClick={onClickInput} id='profile-content-avatar-fix-button' className='profile-content-avatar-button'>수정</button>
                        <button type='submit' className='profile-content-avatar-button'>
                            저장
                        </button>

                    </form>
                </div>
            </div>
            <div className='profile-content-avatar-card'>
                <div className='profile-content-avatar-title'>
                    이메일
                </div>
                <div className='profile-content-avatar-content'>
                    {profile && profile.email}
                </div>
            </div>
        </>
    )
}