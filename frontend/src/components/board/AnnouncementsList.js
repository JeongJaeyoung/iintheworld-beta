import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncListAnnouncements } from './announcementsSlice'


export default function AnnouncementsList() {
  const dispatch = useDispatch()
  const announcements = useSelector(state => state.announcementsStore.announcements);

  useEffect(() => {
    dispatch(asyncListAnnouncements());
  }, [dispatch])

  console.log('aa',announcements)

  // django에서 pagination 사용시 results로 한 단계 깊어짐
  const announcementArray = announcements.results ? announcements.results.map((announcement) => ({
    key: announcement.id,
    title: (
      <Link className='announcementslist-cursor-pointer' to={`/board/announcements/${announcement && announcement.id}`}>
        {announcement && announcement.title}
      </Link>
    ),
    author: announcement && (announcement.author || announcement.author.name_from_email),
    // author: announcement && (announcement.author.username || announcement.author.name_from_email),
    time: announcement && announcement.created_at.substring(0, 10)
  })) : [];

  console.log('k', announcementArray)

  const columns = [
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '글쓴이',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '작성일',
      dataIndex: 'time',
      key: 'time',
    },
  ];

  const pagination = {
    total: announcements.count,
    current: announcements.current_page,
    pageSize: announcements.pageSize, // 한 페이지 속 게시물 갯수
    pageCnt: announcements.pageCnt,
    curPage: announcements.curPage,
    onChange: (page) => {
        dispatch(asyncListAnnouncements(page));
    },
    position: ['bottomCenter'], // Set the position to bottom center
  };

  return (
    <>
      <Table columns={columns} dataSource={announcementArray} pagination={pagination} />
    </>
  )
}