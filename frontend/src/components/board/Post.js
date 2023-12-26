import React, { useState } from 'react';
import { axiosInstance, useAxios} from 'api';
import { useNavigate } from 'react-router-dom';

export default function Post({post}) {
    const navigate = useNavigate();
    // const [{data, loading, error}, refetch] = useAxios({
    //     url: '/api/posts/'
    //   });

    return (
        <div className='post_list'>
            <div><a onClick={()=>{navigate(`detail/${post.id}`)}}>제목 : {post.title}</a></div>
            <div>작성자 : {post.author.username}</div>
        </div>
    );
    
} 