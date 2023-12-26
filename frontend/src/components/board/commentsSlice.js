// COMMENT 저장소
import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../services/api'


export const asyncCreateComment = createAsyncThunk(
    'comment/create',
    async (payload) => {
        const { postId, message, header } = payload;        
        const response = await axiosInstance.post(
            `/board/posts/${postId}/comments/`, 
            { message },
            { headers:header }
        );
        return response.data;
    }
);

export const asyncListComments = createAsyncThunk(
    'comments/get', // type
    async (postId) => {
        const response = await axiosInstance.get(`/board/posts/${postId}/comments/`);
        return response.data
    }
);


export const updateComment = createAsyncThunk(
    'comment/update',
    async (initialComment) => {
        const { id } = initialComment; 
        const response = await axiosInstance.put(`posts/${id}`);
        return response.data
    }
);

export const deleteComment = createAsyncThunk(
    'comment/delete',
    async (initialComment) => {
        const { id } = initialComment; 
        const response = await axiosInstance.delete(`posts/${id}`);
        return response.data
    }
)


export const commentsSlice = createSlice({
    name: 'commentsStore',
    initialState: {
        comments:[],
        comment:[],
        status: 'idle',
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // 1. CREATE POST
            .addCase(asyncCreateComment.pending, (state, action) => {
                state.status = 'loading'
                // action.payload
            })
            .addCase(asyncCreateComment.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
            .addCase(asyncCreateComment.rejected, (state, action) => {
                state.status = 'failed'
            })

            // 2-1. READ POSTS - 전체 조회
            .addCase(asyncListComments.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(asyncListComments.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.comments = action.payload;
            })
            .addCase(asyncListComments.rejected, (state, action) => {
                state.status = 'failed'
            })


            // 3. UPDATE POST
            .addCase(updateComment.fulfilled, (state, action) => {
                const updatedComment = action.payload;
                const updatedComments = state.posts.map(comment => {
                    if (comment.id === updatedComment.id) {
                        return updatedComment;
                    }
                    return comment;
                });
                state.comments = updatedComments;
            })

            // 4. DELETE POST
            .addCase(deleteComment.fulfilled, (state, action) => {
                const deletedCommentId = action.payload.id;
                state.comments = state.comments.filter(comment => comment.id !== deletedCommentId);
            })
    }
})

// 액션 함수들 내보내기 for 다른 컴포넌트에서 사용
export const {} = commentsSlice.actions;

// state 조회 함수들
// 포스팅 전체 조회
export const getComments = (state) => state.commentsStore.comments
export const getCommentsStatus = (state) => state.commentsStore.status
export const getCommentsError = (state) => state.commentsStore.error

// 포스팅 1개 조회
export const selectCommentById = (state, commentId) => state.commentsStore.comments.find((comment) => comment.id == commentId)