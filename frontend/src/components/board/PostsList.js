import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncListPosts } from './postsSlice';
import './PostsList.css';


export default function PostsList() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsStore.posts);

    useEffect(() => {
        // 처음 컴포넌트 마운트시에 실행
        dispatch(asyncListPosts());
    }, [dispatch]);

    // django에서 pagination 사용시 results로 한 단계 깊어짐
    const postsArray = posts.results ? posts.results.map((post) => ({
        key: post.id,
        title: (
            <Link className='postslist-cursor-pointer' to={`/board/posts/${post && post.id}`}>
                {post && post.title}
            </Link>
        ),
        author: post && (post.author.username || post.author.name_from_email),
        time: post && post.created_at.substring(0, 10)
    })) : [];


    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: (text) => text,
        },
        {
            title: '글쓴이',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: '작성일',
            dataIndex: 'time',
            key: 'time',
        },
    ];

    const pagination = {
        total: posts.count,
        current: posts.current_page,
        pageSize: posts.pageSize, // 한 페이지 속 게시물 갯수
        pageCnt: posts.pageCnt,
        curPage: posts.curPage,
        onChange: (page) => {
            dispatch(asyncListPosts(page));
        },
        position: ['bottomCenter'], // Set the position to bottom center
    };


    return (
        <>
            <Table columns={columns} dataSource={postsArray} pagination={pagination} />
        </>
    )
}