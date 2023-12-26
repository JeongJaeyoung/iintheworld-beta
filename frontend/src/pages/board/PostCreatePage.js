import React from 'react'
import AppLayoutStep1 from '../../components/layout/AppLayoutStep1'
import PostNew from '../../components/board/PostNew'

export default function PostCreatePage() {
  return (
    <>
        <AppLayoutStep1>
          <PostNew/>
        </AppLayoutStep1>
    </>
  )
}