import React from 'react'
import { Link } from 'react-router-dom';
import { Alert, Space } from 'antd';
import './BookAnnouncement.css';


export default function BookAnnouncement() {
    return (
        <Space
            direction="vertical"
            id='book-announcement-space'
         >
            <Alert
                style={{ backgroundColor: '#f1f1f1', border: '2px solid #323232', lineHeight: '2' }}
                message={
                    <div style={{ fontWeight: '700' }}>공지사항</div>
                }
                description={
                    <div>
                        아래 내용은 책 <b style={{fontWeight:700}}>내가 사는 세상 1</b>을 요약, 발췌한 것입니다. 더 많은 내용을 보고 싶으시다면 <Link to='/mall/books'>🔗여기</Link>를 클릭해주세요.
                        <br/>
                        <span id='book-announcement-dispaly-true-at-mobile'><br/>또한 오른쪽 아래의 버튼(📄)을 누르시면 목차를 보실 수 있어요! </span>
                    </div>
                }
                type="error"
                closable
            />
        </Space>
    )
}