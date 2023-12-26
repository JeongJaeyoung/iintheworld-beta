import React, { useState } from 'react'
import { selectAvatarUrl, selectNameFromEmail, selectUsername } from '../accounts/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateComment } from './commentsSlice';
import { selectCurrentToken } from '../accounts/authSlice';
import './CommentNew.css'
import { useNavigate } from 'react-router-dom';



export default function CommentNew({postId}) {
    const dispatch = useDispatch();
    const access_token = useSelector(selectCurrentToken);
    const login_user_avatar_url = useSelector(selectAvatarUrl);
    const username = useSelector(selectUsername);
    const name_from_email = useSelector(selectNameFromEmail);
    const [message, setMessage] = useState('');
    const navigate = useNavigate()


    console.log('as', postId)

    const handleCommentSave = async () => {
        const header = { Authorization: `Bearer ${access_token}` };
        dispatch(asyncCreateComment({ postId, message, header }));
        navigate(`/board/posts/${postId}`);
    };


    return (
        <>
            <div>
                <div id='comment-new-header'>
                    {username || name_from_email}님의 댓글을 남겨주세요
                </div>
                <div id='my-commnet-wrapper'>
                    <div>
                        <img id='my-comment-image' src={login_user_avatar_url} />
                    </div>
                    <textarea
                        id='comments-list-textarea'
                        name='commentContent'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows='5'
                    />
                </div>

                <button
                    id='comments-list-button'
                    disabled={message.length === 0}
                    onClick={handleCommentSave}
                >
                    댓글 작성
                </button>
            </div>
        </>
    )
}