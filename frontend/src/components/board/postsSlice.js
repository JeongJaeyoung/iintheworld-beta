// POST 저장소
import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../services/api'


export const asyncCreatePosts = createAsyncThunk(
    'post/create',
    async (requestContent) => {
        const { header, title, content } = requestContent;
        const response = await axiosInstance.post(
            '/board/posts/',
            { title, content },
            { headers: header }
        );
        return response.data;
    }
);


export const asyncListPosts = createAsyncThunk(
    'posts/get', // type
    async (page) => {
        if (page == undefined) {
            // 처음으로 고객이 board를 들어왔을 때(pagination 번호 없음)
            const response = await axiosInstance.get(`/board/posts`);
            return response.data
        } else if (page != undefined) {
            // 고객이 pagination을 선택하여 해당 번호가 입력되었을 때
            const response = await axiosInstance.get(`/board/posts/?page=${page}`);
            return response.data
        }
    }
);


export const asyncRetrievePost = createAsyncThunk(
    'post/get', // type
    async (postId) => {
        const response = await axiosInstance.get(`/board/posts/${postId}`);
        return response.data
    }
);


export const asyncUpdatePost = createAsyncThunk(
    'post/update',
    async (requestContent) => {
        const { postId, header, title, content } = requestContent;  // postId를 추가
        const response = await axiosInstance.patch(
            `/board/posts/${postId}/`,  // 게시물의 ID를 포함한 URL을 사용
            { title, content },
            { headers: header }
        );
        return response.data;
    }
);


export const asyncDeletePost = createAsyncThunk(
    'posts/delete',
    async (requestContent) => {
        const { postId, header } = requestContent;
        console.log(postId)
        const response = await axiosInstance.delete(
            `/board/posts/${postId}/`,
            { headers: header }
            );
        return response.data;
    }
);


export const postsSlice = createSlice({
    name: 'postsStore',
    initialState: {
        posts: [],
        post: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // 1. CREATE POST
            .addCase(asyncCreatePosts.pending, (state, action) => {
                state.status = 'loading'
                // action.payload
            })
            .addCase(asyncCreatePosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
            .addCase(asyncCreatePosts.rejected, (state, action) => {
                state.status = 'failed'
            })

            // 2-1. READ POSTS - 전체 조회
            .addCase(asyncListPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(asyncListPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.posts = action.payload;
            })
            .addCase(asyncListPosts.rejected, (state, action) => {
                state.status = 'failed'
            })

            // 2-2. READ POSTS - 한개 조회
            .addCase(asyncRetrievePost.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(asyncRetrievePost.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.post = action.payload;
            })
            .addCase(asyncRetrievePost.rejected, (state, action) => {
                state.status = 'failed'
            })

            // 3. UPDATE POST
            .addCase(asyncUpdatePost.fulfilled, (state, action) => {

            })

            // 4. DELETE POST
            .addCase(asyncDeletePost.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(asyncDeletePost.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.post = action.payload;
            })
    }
})


// 액션 함수들 내보내기 for 다른 컴포넌트에서 사용
export const { } = postsSlice.actions;

// state 조회 함수들
// 포스팅 전체 조회
export const getPosts = (state) => state.postsStore.posts
export const getPost = (state) => state.postsStore.post
export const getPostsStatus = (state) => state.postsStore.status
export const getPostsError = (state) => state.postsStore.error

// 포스팅 1개 조회
export const selectPostById = (state, postId) => state.postsStore.posts.find((post) => post.id == postId)