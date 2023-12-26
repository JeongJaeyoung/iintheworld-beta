import React, { useState } from 'react';
import './PostNew.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreatePosts } from './postsSlice';
import { useNavigate } from 'react-router-dom';

export default function PostNew() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState(''); // title을 상태로 관리
    const [content, setContent] = useState(''); // content를 상태로 관리
    const access_token = useSelector((state) => state.auth.django_access_token);

    const handleSubmit = (e) => {
        e.preventDefault();
        const header = { Authorization: `Bearer ${access_token}` };
        dispatch(asyncCreatePosts({ title, content, header }));
        navigate('/board/posts');
    };

    return (
        <div id='post-create-form-wrapper'>
            <div id='post-create-form-card'>
                <form id='post-create-form' onSubmit={handleSubmit}>
                    <div className='post-create-input-textarea'>
                        <input
                            type='text'
                            placeholder='제목을 입력하세요'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} // title 상태 업데이트
                        />
                    </div>
                    <div className='post-create-input-textarea'>
                        <textarea
                            id='postContent'
                            name='postContent'
                            placeholder='내용을 입력하세요'
                            rows='15'
                            value={content}
                            onChange={(e) => setContent(e.target.value)} // content 상태 업데이트
                        />
                    </div>
                    <div id='post-create-button-wrapper'>
                        <button type='submit'>
                            작성하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}