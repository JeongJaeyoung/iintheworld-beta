// 전체 store : slice 집합소
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import { authSlice } from '../components/accounts/authSlice';
import { postsSlice } from '../components/board/postsSlice'
import { commentsSlice } from '../components/board/commentsSlice';
import { announcementsSlice } from "../components/board/announcementsSlice";

export const store = configureStore({
    reducer: {
        // Redux Toolkit
        // 1. Redux
        // 1.1. auth(계정)
        auth: authSlice.reducer,
        // 1.2. board(게시판) - 자유게시판
        postsStore: postsSlice.reducer,
        commentsStore: commentsSlice.reducer,
        // 1.3. board(게시판) - 공지사항
        announcementsStore: announcementsSlice.reducer,

        // 2. RTK Query
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false, // FIXME : 그냥 예외처리 한 것에 불과한듯. 권장사항은 아님.
        }).concat(apiSlice.middleware),
    devTools: true
})