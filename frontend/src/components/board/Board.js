// Tab 설정과 Announcements(공지사항), Posts(고객 포스팅)

import { Button, Card, ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Board.css';
import { useSelector, useDispatch } from 'react-redux';
import PostsList from './PostsList';
import AnnouncementsList from './AnnouncementsList';


export default function Board({ type, post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/board/posts/new')
  }

  const tabList = [
    {
      key: 'posts',
      tab: '자유게시판',
    },
    {
      key: 'announcements',
      tab: '공지사항',
    },
  ];

  const [activeTabKey1, setActiveTabKey1] = useState(type);
  const onTab1Change = (key) => {
    console.log(key)
    setActiveTabKey1(key);
  };

  const contentList = {
    posts: (
      <PostsList />
    ),

    announcements: (
      <AnnouncementsList />
    ),
  };


  return (
    <>
      <div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#666',
            },
          }}
        >
          <Card
            id='board_page_card_design'
            tabBarExtraContent={
              activeTabKey1 === 'posts' ? (
                <button id='board-post-button' onClick={handleClick} >
                  글쓰기
                </button>
              ) : null
            }
          style={{
            width: '100%',
            marginTop: '0vh',
            borderRadius: "0px",
            overflow: "hidden"
          }}

          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={(key) => {
            onTab1Change(key);
          }}
          >
          {contentList[activeTabKey1]}
        </Card>
      </ConfigProvider>
    </div >
    </>
  );
}