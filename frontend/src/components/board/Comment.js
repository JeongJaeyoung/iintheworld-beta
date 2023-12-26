import React, { useState } from 'react';
import { Avatar, List } from 'antd';


export default function Comment({comment}) {
    const data = [
        {
          title: 'Ant Design Title 1',
        },

      ];

    const {id, message, post} = comment

    return (
    <>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src={comment.author.avatar_url} />}
                title={comment.author.username || comment.author.name_from_email}
                description={message}
                />
            </List.Item>
            )}
        />
    </>
    );
} 