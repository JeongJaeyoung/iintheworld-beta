// Announcement 저장소

import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../services/api'


export const asyncCreateAnnouncements = createAsyncThunk(
    'announcement/create',
    async (requestContent) => {
        const {header, title, content} = requestContent;
        console.log(header);

        const response = await axiosInstance.announcement(
            '/board/announcements/', 
            { title, content },
            { headers:header }
        );
        return response.data;
    }
);

export const asyncListAnnouncements = createAsyncThunk(
    'announcements/get', // type
    async (page) => {
        if (page==undefined){
            // 초기 페이지일 때
            const response = await axiosInstance.get(`/board/announcements`);
            return response.data
        } else if (page != undefined){
            // pagination 버튼 눌러서 page 입력되었을 때
            const response = await axiosInstance.get(`/board/announcements/?page=${page}`);
            return response.data
        }

    }
);

export const asyncRetrieveAnnouncement = createAsyncThunk(
    'announcement/get', // type
    async (announcementId) => {
        const response = await axiosInstance.get(`/board/announcements/${announcementId}`);
        return response.data
    }
);

export const updateAnnouncement = createAsyncThunk(
    'announcement/update',
    async (initialAnnouncement) => {
        const { id } = initialAnnouncement; 
        const response = await axiosInstance.put(`announcements/${id}`);
        return response.data
    }
);

export const deleteAnnouncement = createAsyncThunk(
    'announcement/delete',
    async (initialAnnouncement) => {
        const { id } = initialAnnouncement; 
        const response = await axiosInstance.delete(`announcements/${id}`);
        return response.data
    }
)


export const announcementsSlice = createSlice({
    name: 'announcementsStore',
    initialState: {
        announcements:[],
        announcement:[],
        status: 'idle',
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // 1. CREATE ANNOUNCEMENT
            .addCase(asyncCreateAnnouncements.pending, (state, action) => {
                state.status = 'loading'
                // action.payload
            })
            .addCase(asyncCreateAnnouncements.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
            .addCase(asyncCreateAnnouncements.rejected, (state, action) => {
                state.status = 'failed'
            })

            // 2-1. READ ANNOUNCEMENTS - 전체 조회
            .addCase(asyncListAnnouncements.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(asyncListAnnouncements.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload)
                state.announcements = action.payload;
                
            })
            .addCase(asyncListAnnouncements.rejected, (state, action) => {
                state.status = 'failed'
            })

            // 2-2. READ ANNOUNCEMENTS - 한개 조회
            .addCase(asyncRetrieveAnnouncement.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(asyncRetrieveAnnouncement.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // console.log(action.payload)
                state.announcement = action.payload;
            })
            .addCase(asyncRetrieveAnnouncement.rejected, (state, action) => {
                state.status = 'failed'
            })

            // 3. UPDATE ANNOUNCEMENT
            .addCase(updateAnnouncement.fulfilled, (state, action) => {
                const updatedAnnouncement = action.payload;
                const updatedAnnouncements = state.announcements.map(announcement => {
                    if (announcement.id === updatedAnnouncement.id) {
                        return updatedAnnouncement;
                    }
                    return announcement;
                });
                state.announcements = updatedAnnouncements;
            })

            // 4. DELETE ANNOUNCEMENT
            .addCase(deleteAnnouncement.fulfilled, (state, action) => {
                const deletedAnnouncementId = action.payload.id;
                state.announcements = state.announcements.filter(announcement => announcement.id !== deletedAnnouncementId);
            })
    }
})


// 액션 함수들 내보내기 for 다른 컴포넌트에서 사용
export const {} = announcementsSlice.actions;

// state 조회 함수들
// 포스팅 전체 조회
export const getAnnouncements = (state) => state.announcementsStore.announcements
export const getAnnouncement = (state) => state.announcementsStore.announcement
export const getAnnouncementsStatus = (state) => state.announcementsStore.status
export const getAnnouncementsError = (state) => state.announcementsStore.error

// 포스팅 1개 조회
export const selectAnnouncementById = (state, announcementId) => state.announcementsStore.announcements.find((announcement) => announcement.id == announcementId)