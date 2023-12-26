import React, { useState } from 'react';
import './PostUpdate.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdatePost } from './postsSlice';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function PostUpdate() {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState(''); // title을 상태로 관리
    const [content, setContent] = useState(''); // content를 상태로 관리
    const access_token = useSelector((state) => state.auth.django_access_token);
    const post = useSelector(state => state.postsStore.post)

    const handleSubmit = (e) => {
        e.preventDefault();
        const header = { Authorization: `Bearer ${access_token}` };
        dispatch(asyncUpdatePost({ postId, title, content, header }));
        navigate('/board/posts');
    };


    return (
        <>
            <div id='post-update-form-wrapper'>
                <div id='post-update-form-card'>
                    <form id='post-update-form' onSubmit={handleSubmit}>
                        <div className='post-update-input-textarea'>
                            <input
                                type='text'
                                placeholder={post.title}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} // title 상태 업데이트
                            />
                        </div>
                        <div className='post-update-input-textarea'>
                            <textarea
                                id='postContent'
                                name='postContent'
                                placeholder={post.content}
                                rows='15'
                                value={content}
                                onChange={(e) => setContent(e.target.value)} // content 상태 업데이트
                            />
                        </div>
                        <div id='post-update-button-wrapper'>
                            <button type='submit'>
                                수정하기
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}