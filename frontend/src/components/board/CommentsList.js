import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import { useDispatch } from 'react-redux';
import { asyncListComments, getComments } from './commentsSlice';
import { asyncCreateComment } from './commentsSlice';
import { useSelector } from 'react-redux';
// import CommentNew from './CommentNew';
import { selectCurrentToken } from '../accounts/authSlice';
import './CommentsList.css'
import { selectAvatarUrl, selectNameFromEmail, selectUsername } from '../accounts/authSlice';
import { useNavigate } from 'react-router-dom';


export default function CommentsList({ postId }) {
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const django_access_token = useSelector(selectCurrentToken);
    const access_token = useSelector(selectCurrentToken);
    const login_user_avatar_url = useSelector(selectAvatarUrl);
    const username = useSelector(selectUsername);
    const name_from_email = useSelector(selectNameFromEmail);
    const [message, setMessage] = useState('');
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        if (postId !== undefined) {
            dispatch(asyncListComments(postId));
        }
    }, [refresh]);

    const handleCommentSave = async () => {
        try{
            const header = { Authorization: `Bearer ${access_token}` };
            await dispatch(asyncCreateComment({ postId, message, header })).unwrap(); // 백엔드 DB에 댓글 저장을 비동기로 처리
            setRefresh(!refresh);
        } catch (error) {

        } finally{
            
        }
    };

    return (
        <>
            <div>
                {comments && comments.map(comment =>
                    <Comment key={comment.id} comment={comment} />
                )}
            </div>

            {django_access_token !== null ?  // 로그인이 되어있어서, access_token이 있다면
                (
                    <>
                        <hr id='comments-list-hr' />
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
                ) :
                null  // access_token이 없다면, 댓글은 안 보여주고, 게시글만 보여줌
            }

        </>
    );

} 