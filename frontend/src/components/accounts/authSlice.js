// 스토어의 상태 및 액션 관리
import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
   name: 'auth',
   initialState: { 
      email: null, 
      django_access_token: null, 
      social_access_token: null,
      avatar_url: null,
      username: null,
      name_from_email: null,
      auth_provider: null,
   },
   reducers: {
      // 동기 작업 처리
      setCredentials: (state, action) => {
         const { 
            email, 
            data: { 
               social_access_token, 
               django_access_token, 
               auth_provider, 
               avatar_url,
               name_from_email,
               username
            } 
         } = action.payload

         state.email = email
         state.django_access_token = django_access_token
         state.social_access_token = social_access_token
         state.auth_provider = auth_provider
         state.avatar_url = avatar_url
         state.username = username
         state.name_from_email = name_from_email
      },

      setCredentialsWithoutSocialAccessToken: (state, action) => {
         const { 
            email, 
            data: { 
               django_access_token, 
               auth_provider, 
               avatar_url,
               name_from_email,
               username
            } 
         } = action.payload

         state.email = email
         state.django_access_token = django_access_token
         state.auth_provider = auth_provider
         state.avatar_url = avatar_url
         state.username = username
         state.name_from_email = name_from_email
      },

      setCredentialsSocialAccessToken: (state, action) => {
         const { 
            data: { 
               social_access_token
            } 
         } = action.payload

         state.social_access_token = social_access_token
      }
   },
})

export const { setCredentials, setCredentialsWithoutSocialAccessToken, setCredentialsSocialAccessToken } = authSlice.actions


export const selectCurrentEmail = (state) => state.auth.email
export const selectCurrentToken = (state) => state.auth.django_access_token
export const selectAvatarUrl = (state) => state.auth.avatar_url
export const selectNameFromEmail = (state) => state.auth.name_from_email
export const selectUsername = (state) => state.auth.username