import React, { useState } from 'react';
import { ConfigProvider, Steps } from 'antd';

export default function StepsCustom() {
    const [current, setCurrent] = useState(-1);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const descriptions = [
        <div>This is a description.</div>,
        <div>This is another description.</div>,
        <div>Yet another description.</div>,
        <div>One more description.</div>,
    ];

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        fontSize: 10,
                        colorPrimary: '#000',
                    },
                    components: {
                        Steps: {
                            iconSize: 20,
                            iconTop:0.5,
                            titleLineHeight:20,
                            colorSplit:'#323232', // 줄 색깔
                            colorTextDescription: '#323232', // 글자 색깔
                            colorFillContent: 'f1f1f1' // 원 색깔
                        },
                    },
                }}
            >
                <Steps
                    current={current}
                    onChange={onChange}
                    items={[
                        {
                            title: '돈이 굴리는 세상 - 이론편',
                            content: descriptions[0],
                        },
                        {
                            title: '돈이 굴리는 세상 - 현실편',
                            descriptions,
                        },
                        {
                            title: '내가 굴리는 돈 - 이론편',
                            descriptions,
                        },
                        {
                            title: '내가 굴리는 돈 - 현실편',
                            descriptions,
                        },
                    ]}
                />
            </ConfigProvider>
        </>
    )
}
