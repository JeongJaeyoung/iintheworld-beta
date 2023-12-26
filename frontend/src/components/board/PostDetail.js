import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';
import CommentsList from './CommentsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncRetrievePost, getPost, asyncDeletePost } from './postsSlice';
import { useNavigate } from 'react-router-dom';


export default function PostDetail() {
  const { postId } = useParams();
  console.log(postId)
  const dispatch = useDispatch();
  const post = useSelector(getPost);
  const userEmail = useSelector(state => state.auth.email);
  const navigate = useNavigate()
  const access_token = useSelector((state) => state.auth.django_access_token);
  

  useEffect(() => {
    dispatch(asyncRetrievePost(postId));
  }, [dispatch])

  const handleClickUpdate = () => {
    navigate(`/board/posts/${postId}/update`)
  }

  const handleClickDelete = () => {
    const header = { Authorization: `Bearer ${access_token}` };
    dispatch(asyncDeletePost({ postId, header }))
    navigate('/board/posts/')
  };


  return (
    <>
      <div id='post-detail-wrapper'>
        <div id='post-detail-card'>
          <div id='post-detail-header'>
            <div id='post-detail-title'>
              {/* 제목 */}
              {post && post.title}
            </div>
            <div>
              {post && post?.author?.email === userEmail ? (
                <>
                  <button className='post-detail-button' onClick={handleClickUpdate}>
                    수정하기
                  </button>
                  <button className='post-detail-button' onClick={handleClickDelete}>
                    삭제하기
                  </button>
                </>
              ) : (
                null
              )
              }
            </div>
          </div>
          <div id='post-detail-content'>
            {/* 내용 */}
            {post && post.content}
          </div>
          <div>
            <CommentsList postId={postId} />
          </div>
        </div>
      </div>
    </>
  );
} 