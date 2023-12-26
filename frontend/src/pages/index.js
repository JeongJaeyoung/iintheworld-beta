import React from "react"
import { Routes, Route } from 'react-router-dom'
import LoginRequired from '../components/accounts/LoginRequired'
import PersistLogin from "../components/accounts/PersistLogin"

import Step0HomePage from './step0/Step0HomePage'
import Step0AboutPage from './step0/Step0AboutPage'

// STEP1
import Step1HomePage from './step1/home/Step1HomePage'
import Step1Part1Page from './step1/part1/Step1Part1Page'
import Step1Part2Page from './step1/part2/Step1Part2Page'
import Step1BookPage from "./step1/home/Step1BookPage"

// STEP1 - PART1
import Step1Part1BookSummaryPage from './step1/part1/book/Step1Part1BookSummaryPage'
import Ch10IntroductionPage from './step1/part1/book/Ch10IntroductionPage';
import Ch11FinancialEconPage from './step1/part1/book/Ch11FinancialEconPage';
import Ch12RealEconPage from './step1/part1/book/Ch12RealEconPage';

import JapanHomePage from './step1/part1/japan/JapanHomePage'
import JapnaFinancialEconPage from "./step1/part1/japan/JapnaFinancialEconPage"

import EuropeHomePage from "./step1/part1/europe/EuropeHomePage"
import ChinaHomePage from "./step1/part1/china/ChinaHomePage"
import UsaHomePage from "./step1/part1/usa/UsaHomePage"

import KoreaHomePage from './step1/part1/korea/KoreaHomePage'
import KoreaRealEconPage from './step1/part1/korea/KoreaRealEconPage'
import KoreaTotalEconPage from "./step1/part1/korea/KoreaTotalEconPage"
import KoreaIndividualPage from "./step1/part1/korea/KoreaIndividualPage"

// STEP2
import Step2HomePage from './step2/Step2HomePage'

import SignupPage from './accounts/SignupPage'
import SignupTemporaryPage from './accounts/SignupTemporaryPage'
import SignupEmailVerificationPage from './accounts/SignupEmailVerificationPage'
import SignupWelcomePage from "./accounts/SignupWelcomePage"
import LoginPage from './accounts/LoginPage'
import PasswordForgetPage from "./accounts/PasswordForgetPage"

import SocialLoginCallbackGooglePage from './accounts/SocialLoginCallbackGooglePage'
import SocialLoginCallbackKakaoPage from "./accounts/SocialLoginCallbackKakaoPage"
import SocialLogoutCallbackKakaoPage from "./accounts/SocialLogoutCallbackKakaoPage"
import SocialLoginCallbackNaverPage from "./accounts/SocialLoginCallbackNaverPage"

import ProfilePage from "./accounts/ProfilePage"
import PasswordReset from "../components/accounts/PasswordReset"

import ClassroomPage from "./classroom/ClassroomPage"

// MALL : 상점
import LectureListPage from './mall/LectureListPage'
import LectureDetailPage from './mall/LectureDetailPage'
import BookListPage from './mall/BookListPage'

// BOARD : 게시판
import BoardPage from "./board/BoardPage"
import PostPage from "./board/PostPage"
import PostCreatePage from "./board/PostCreatePage"
import PostDetailPage from "./board/PostDetailPage"
import PostUpdatePage from "./board/PostUpdatePage"

import AnnouncementDetailPage from "./board/AnnouncementDetailPage"


// 기타
import TermsOfServicePage from "./policy/TermsOfServicePage" // 이용약관
import PrivacyInformationProcessPage from "./policy/PrivacyInformationProcessPage" // 개인정보처리방침

import Page404 from './common/Page404'


export default function Root() {

    return (
        <>
            <Routes>
                <Route element={<PersistLogin/>} >
                    {/* Home */}
                    <Route path="/" element={<Step0HomePage />} />
                    <Route path='/about' element={<Step0AboutPage />} />

                    {/* STEP1 */}
                    <Route path='/step1/home' element={<Step1HomePage />} />
                    <Route path='/step1/part1' element={<Step1Part1Page />} />
                    <Route path='/step1/part2' element={<Step1Part2Page />} />
                    {/* <Route path='/step1/book' element={<Step1BookPage/>} /> */}

                    {/* STEP1 - PART1 */}
                    <Route path="/step1/part1/book/summary" element={<Step1Part1BookSummaryPage />} />
                    <Route path="/step1/part1/book/ch1/introduction" element={<Ch10IntroductionPage />} />
                    <Route path="/step1/part1/book/ch1/financial-econ" element={<Ch11FinancialEconPage />} />
                    <Route path="/step1/part1/book/ch1/real-econ" element={<Ch12RealEconPage />} />

                    <Route path="/econ-data/japan" element={<JapanHomePage />} />
                    <Route path="/econ-data/japan/financial-econ" element={<JapnaFinancialEconPage />} />

                    <Route path="/econ-data/europe" element={<EuropeHomePage />} />
                    <Route path="/econ-data/china" element={<ChinaHomePage />} />
                    <Route path="/econ-data/usa" element={<UsaHomePage />} />

                    <Route path="/econ-data/korea" element={<KoreaHomePage />} />
                    <Route path="/econ-data/korea/real-econ" element={<KoreaRealEconPage />} />
                    <Route path="/econ-data/korea/total-econ" element={<KoreaTotalEconPage />} />
                    <Route path="/econ-data/korea/individual" element={<KoreaIndividualPage />} />

                    {/* STEP2 */}
                    <Route path='/step2/home' element={<Step2HomePage />} />

                    {/* ACCOUNTS  */}
                    <Route path='/accounts/signup' element={<SignupPage />} />
                    <Route path='/accounts/signup/temporary' element={<SignupTemporaryPage />} />
                    <Route path='/accounts/signup/email-verification' element={<SignupEmailVerificationPage />} />
                    <Route path='/accounts/signup/welcome' element={<SignupWelcomePage />} />
                    <Route path="/accounts/login" element={<LoginPage />} />
                    <Route path="/accounts/password-forget" element={<PasswordForgetPage />} />
                    <Route path="/accounts/password-reset" element={<PasswordReset />} />

                    <Route path='/accounts/google/login/callback' element={<SocialLoginCallbackGooglePage />} />
                    <Route path='/accounts/naver/login/callback' element={<SocialLoginCallbackNaverPage />} />
                    <Route path='/accounts/kakao/login/callback' element={<SocialLoginCallbackKakaoPage />} />
                    <Route path='/accounts/kakao/logout/callback' element={<SocialLogoutCallbackKakaoPage />} />




                    {/* MALL */}
                    <Route path="/mall/lectures/" element={<LectureListPage />} />
                    <Route path="/mall/lectures/:productName" element={<LectureDetailPage />} />
                    <Route path="/mall/books/" element={<BookListPage />} />

                    <Route element={<LoginRequired />}>
                        <Route path="/accounts/profile/" element={<ProfilePage />} />
                        <Route path="/accounts/profile/:parameter" element={<ProfilePage />} />
                        {/* <Route path="/classroom" element={<ClassroomPage />} /> */}
                        <Route path="/classroom/:productName/:courseNum" element={<ClassroomPage />} />
                    </Route>


                    {/* BOARD : 게시판 */}
                    <Route path="/board/">
                        <Route path='announcements/'>
                            {/* 공지사항 */}
                            <Route index element={<BoardPage type={'announcements'} />} />
                            <Route path=':announcementId' element={<AnnouncementDetailPage />} />
                        </Route>
                        <Route path='posts/'>
                            {/* 고객 게시물 */}
                            <Route index element={<BoardPage type={'posts'} />} />
                            <Route path=':postId' element={<PostDetailPage />} />

                            <Route element={<LoginRequired />}>
                                <Route path='new/' element={<PostCreatePage />} />
                                <Route path=':postId/update/' element={<PostUpdatePage/>} />
                            </Route>
                        </Route>
                    </Route>

                    <Route path="/policy/terms-of-service/" element={<TermsOfServicePage />} />
                    <Route path="/policy/privacy-information-process/" element={<PrivacyInformationProcessPage />} />

                    <Route path='*' element={<Page404 />} />
                </Route>
            </Routes>
        </>
    )
}