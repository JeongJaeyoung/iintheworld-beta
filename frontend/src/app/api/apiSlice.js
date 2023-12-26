// 비동기 작업 및 api 통합
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, setCredentialsWithoutSocialAccessToken, setCredentialsSocialAccessToken } from '../../components/accounts/authSlice'


const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const django_access_token = getState().auth.django_access_token
        if(django_access_token) {
            headers.set("authorization", `Bearer ${django_access_token}`)
        }
        return headers
    }
})


const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    // access token 만료시, refresh token 보내서 다시금 access token 받아오기
    // 401에러를 조건에 넣으면 안됨 : 다른 이유(이메일 인증X, 아이디 비번 일치X)로 인증처리가 안 될 수 도 있기 때문
    if( result?.error?.status === 401 ){
        // 쿠키 속 refresh token 서버로 전송
        console.log('resending refresh token')
        const refreshResult = await baseQuery('accounts/token/refresh/', api, extraOptions)
        if(refreshResult?.data){
            const { django_access_token, email, avatar_url, auth_provider } = refreshResult.data;
            // social_access_token을 django의 refresh_access_token에서 가져올 수 없다. 때문에 social_access_token을 null로 덮어쓰지 않기 위해 별도의 reducer 사용 
            api.dispatch(setCredentialsWithoutSocialAccessToken({ data: { django_access_token, avatar_url, auth_provider }, email }))
            // access token 재발급 성공 후 해당 토큰으로 원래 요청 보내기
            if(auth_provider === 'google') {
                const refreshResultSocial = await baseQuery('accounts/token/refresh/google', api, extraOptions)
                const { social_access_token, email, avatar_url, auth_provider } = refreshResultSocial.data;
                api.dispatch(setCredentialsSocialAccessToken({ data: { social_access_token }, email }))
            } else if(auth_provider === 'kakao'){
                const refreshResultSocial = baseQuery('accounts/token/refresh/kakao', api, extraOptions)
                const { social_access_token, email, avatar_url, auth_provider } = refreshResultSocial.data;
                api.dispatch(setCredentialsSocialAccessToken({ data: { social_access_token }, email }))
            } else if(auth_provider === 'email'){
            }
            result = await baseQuery(args, api, extraOptions)
        } else {
        }
    }
    return result
}


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Mall'],
    endpoints: builder => ({})
})