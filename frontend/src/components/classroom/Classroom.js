// 강의실 본문 내용 - 영상

import React from 'react';
import './Classroom.css'

export default function Classroom({ productName, courseNum }) {
    let contents;

    const iframeStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
    };

    switch (`${productName}/${courseNum}`) {
        case 'money-control-world-theory-level0/0':
            // 1-1 돈이 굴리는 세상 - 입문편
            contents = (
                <div>
                    <div id='video-wrapper'>
                        <div style={{ padding: '52.97% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/894764390?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullcreen; picture-in-picture"
                                style={iframeStyle}
                                title="돈이 굴리는 세상 - 이론편 - 입문편 - 0"
                            >
                            </iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                </div>
            )
            break;

        case 'money-control-world-theory-level0/11':
            // 1-1 돈이 굴리는 세상 - 입문편 - 금융경제
            contents = (
                <div>
                    <div id='video-wrapper'>
                        <div style={{ padding: '52.97% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/895408046?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture"
                                style={iframeStyle}
                                title="1교시 - 금융경제 #금리">
                            </iframe>
                        </div>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>

            )
            break;

        case 'money-control-world-theory-level0/12':
            // 1-1 돈이 굴리는 세상 - 입문편 - 실물경제
            contents = (
                <div>
                    <div id='video-wrapper'>
                        <div style={{ padding: '52.97% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/895408180?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture"
                                style={iframeStyle}
                                title="2교시 - 실물경제 #GDP #경제성장률">
                            </iframe>
                        </div>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            )
            break;

        case 'money-control-world-theory-level0/13':
            // 1-1 돈이 굴리는 세상 - 입문편 - 종합경제
            contents = (
                <div>
                    <div id='video-wrapper'>
                        <div style={{ padding: '52.97% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/895429700?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture"
                                style={iframeStyle}
                                title="3교시 - 종합경제 #물가">
                            </iframe>
                        </div>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            )
            break;

        case 'money-control-world-theory-level0/14':
            // 1-1 돈이 굴리는 세상 - 입문편
            contents = (
                <div>
                    <div id='video-wrapper'>
                        <div style={{ padding: '52.97% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/895418354?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture"
                                style={iframeStyle}
                                title="4교시 - 국제경제 #환율">
                            </iframe>
                        </div>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            )
            break;

        case 'money-control-world-theory-level0/21':
            // 1-1 돈이 굴리는 세상 - 입문편
            contents = (
                <div>
                    <div id='video-wrapper'>
                        <div style={{ padding: '52.97% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/895418301?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture"
                                style={iframeStyle}
                                title="5교시 - 개인 STEP 1_1 _ 드디어 취.뽀.하다ㅎ">
                            </iframe>
                        </div>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            )
            break;

        case 'money-control-world-reality-level0/0':
            // 1-2 돈이 굴리는 세상 - 현실편 - 입문편
            contents = (
                <div>돈이 굴리는 세상 - 현실편 - 입문편</div>
            )
            break;

        case 'money-control-world-theory-level1/0':
            // 1-3 돈이 굴리는 세상 - 이론편 - 초급편 #거시경제학
            contents = (
                <div>돈이 굴리는 세상 - 이론편 - 초급편 #거시경제학</div>
            )
            break;

        case 'money-control-world-reality-level1/0':
            // 1-4 돈이 굴리는 세상 - 현실편 - 초급편 #계량경제학
            contents = (
                <div>돈이 굴리는 세상 - 현실편 - 초급편 #계량경제학</div>
            )
            break;

        default:
            contents = (
                <div>
                    {productName}
                </div>
            )
    }
    return contents
}
