// 회원 관련 api 설정
import { apiSlice } from "../../app/api/apiSlice";
import { useSelector } from 'react-redux';


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/accounts/login/',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        profile: builder.query({
            query: () => '/accounts/profile/',
        }),
        passwordForget: builder.mutation({
            query: (email) => ({
                url: '/accounts/password-forget/',
                method: 'POST',
                body: { ...email }
            })
        }),
        // 비밀번호 변경 CASE1 : 비밀번호를 아는 경우
        passwordChange: builder.mutation({
            query: (data) => ({
                url: '/accounts/password-change/',
                method: 'PATCH',
                body: { ...data }
            })
        }),
        // 비밀번호 변경 CASE2 : 비밀번호를 모르는 경우 : 이메일, 토큰 활용
        passwordChangeEmailRequest: builder.query({
            query: () => '/accounts/password-change-email-request',
        }),
        passwordChangeUsingEmail: builder.mutation({
            query: (credentials) => ({
                url: 'accounts/password-change-finish/',
                method: 'PATCH',
                body: { ...credentials }
            })
        }),
        logout: builder.mutation({
            query: ({authProvider, accessToken, socialAccessToken}) => {
                if (authProvider === 'google' && socialAccessToken) {
                    return {
                        url: '/accounts/google/logout/',
                        method: 'POST',
                        body: { 'social_access_token': socialAccessToken },
                        headers: { Authorization: `Bearer ${accessToken}` },
                        withCredentials: true
                    };
                } else if (authProvider === 'kakao' && socialAccessToken) {
                    return {
                        url: '/accounts/kakao/logout/',
                        method: 'POST',
                        body: { 'social_access_token': socialAccessToken },
                        headers: { Authorization: `Bearer ${accessToken}` },
                        withCredentials: true
                    };
                    // } else if (state.auth.auth_provider === 'naver') {}
                    // Naver 로그아웃에 필요한 코드 추가
                } else if (authProvider === 'email') {
                    return {
                        url: '/accounts/logout/',
                        method: 'POST',
                        body: {},
                        headers: { Authorization: `Bearer ${accessToken}` },
                        withCredentials: true
                    };
                }
            }
        }),
        signout: builder.mutation({
            query: (credentials) => ({
                url: '/accounts/signout/',
                method: 'DELETE',
                body: { ...credentials }
            })
        })
    })
})


export const {
    useLoginMutation,
    useProfileQuery,
    usePasswordForgetMutation,
    usePasswordChangeMutation,
    usePasswordChangeEmailRequestQuery,
    usePasswordChangeUsingEmailMutation,
    useLogoutMutation,
    useSignoutMutation,
} = apiSlice
