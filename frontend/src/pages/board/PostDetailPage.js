import React from 'react'
import AppLayoutStep1 from '../../components/layout/AppLayoutStep1'
import PostDetail from '../../components/board/PostDetail'


export default function PostDetailPage() {
  return (
    <>
        <AppLayoutStep1>
          <PostDetail/>
        </AppLayoutStep1>
    </>
  )
}