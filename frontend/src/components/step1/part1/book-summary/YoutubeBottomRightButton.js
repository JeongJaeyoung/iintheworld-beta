import React from 'react'
import { YoutubeFilled } from '@ant-design/icons';
import { ConfigProvider, FloatButton } from 'antd';
import './YoutubeBottomRightButton.css'

export default function YoutubeBottomRightButton() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#f1f1f1',
                    },
                }}
            >
                <a href='https://www.youtube.com/watch?v=5sbarnH31BY'>
                    <FloatButton
                        shape="circle"
                        type="primary"
                        className='float_butoon_position'
                        style={{
                            border: '2px solid #323232',
                        }}
                        icon={
                            <YoutubeFilled style={{ color: 'black' }} />
                        }
                    />
                </a>
            </ConfigProvider>
        </>
    )
}