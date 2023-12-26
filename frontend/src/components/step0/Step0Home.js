import React from 'react'
import { Button, Carousel, ConfigProvider, Tabs, Steps } from 'antd';
// import './Step0Home.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Step0Home.css'
import './Step0Home2.css'


const CarouselWrapper = styled(Carousel)`
> .slick-dots li button {
 border-radius: 5px;
 background: #323232;
}
> .slick-dots li.slick-active button {
 border-radius: 5px;
 background: #323232;
}`;

export default function Step0Home() {
    return (
        <>
            <div className='page0_content_container'>
                {/* primary */}
                <section className='page0_main_content'>
                    <div className='page0_chapter0'>
                        <CarouselWrapper autoplay autoplaySpeed={5000}>
                            <div>
                                <div className='carousel_common_style'>
                                    <div id='step0-home-carousel1-wrapper'>
                                        <div id='step0-home-carousel1-title'>이젠 행복해질 때가 됐다.</div>
                                        <img src={'image/step0/step0-home-carousel1-image.svg'} id='step0-home-carousel1-image' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='carousel_common_style' style={{ backgroundColor: '#fff', objectFit: 'cover' }} >
                                    <div style={{ margin: '-30px' }}>
                                        <img src={'image/step0/page0_carousel_image1.png'} id='page0_carousel1_image' />
                                    </div>
                                </div>
                            </div>

                            {/* <div>
                                <div className='carousel_common_style' id='page0_image0_flex_center' style={{ backgroundColor: '#FFEEC3', objectFit: 'cover', position: 'relative' }}>
                                    {window.innerWidth < 500
                                        ?
                                        <div>
                                            <div style={{ position: 'absolute', top: '190px', width: '100vw', left: '0vw', zIndex: '1', fontSize: '25px', fontWeight: '700', textShadow: '3px 3px 5px #fff, 0px 1px 5px #fff' }}>
                                                <div>저물어가는 성장의 시대</div>
                                                <div >다가올 성숙의 시대?</div>
                                            </div>
                                            <img src={'image/step0/carousel_image000_mobile.png'} className='page0_carousel0_image' />
                                        </div>
                                        :
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', bottom: '55vh', width: '80vw', left: '5vw', zIndex: '1', fontSize: '30px', fontWeight: '700', textShadow: '3px 3px 5px #fff, 0px 1px 5px #fff' }}>
                                                <div>저물어가는 성장의 시대</div>
                                                <div >다가올 성숙의 시대?</div>
                                            </div>
                                            <img src={'image/step0/carousel_image000.png'} className='page0_carousel0_image' />
                                        </div>
                                    }
                                </div>
                            </div> */}

                            {/* <div>
                                <div className='carousel_common_style'>
                                    <img src={'image/step0/page0_carousel_image2.png'} id='page0_carousel2_image' />
                                </div>
                            </div> */}

                        </CarouselWrapper>
                    </div>
                    <div id='page0_chapter1x_wrapper'>
                        <div className='page0_chapter1' >
                            <div id='page0_chapter1_message'>
                                교과서에서만 나오던 자아실현<br />
                                이제 현실 속에서 이뤄낼 때입니다.<br />
                                다음의 과정을 통해서 말이죠.
                            </div>
                        </div>
                        <div className='page0_chapter1_5'>
                            <div id='page0_chapter1_5_image0_wrapper'>
                                <img className='page0_chapter1_5_image' id='page0_chapter1_5_image0' src={'image/step0/page0_overview_image0.png'} />
                                <div className='page0_chapter1_5_image_message'>
                                    '돈에 대한 지식'으로<br />
                                    삶의 불확실성을 줄여낸<br />안정된 상태에서
                                </div>
                            </div>
                            <div id='page0_chapter1_5_image1_wrapper'>
                                <img className='page0_chapter1_5_image' id='page0_chapter1_5_image1' src={'image/step0/page0_overview_image1.png'} />
                                <div className='page0_chapter1_5_image_message'>
                                    원하는 분야의 기초지식을<br />
                                    잘 짜여진 커리큘럼으로<br />
                                    준비한 뒤

                                </div>
                            </div>
                            <div id='page0_chapter1_5_image2_wrapper'>
                                <img className='page0_chapter1_5_image' id='page0_chapter1_5_image2' src={'image/step0/page0_overview_image2.png'} />
                                <div className='page0_chapter1_5_image_message'>
                                    해당 분야에서<br />
                                    위풍당당하게<br />
                                    자아실현
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page0_chapter2'>
                        <span className='step0-home-content-title' >STEP1. 돈으로부터의 독립</span>
                        <div id='page0_chapter2_message1'>
                            <div>
                                <div id='page0_chapter2_big_message'>
                                    {window.innerWidth < 500
                                        ?
                                        <div>
                                            '돈에 대한 지식'이<br />
                                            삶의 안정성을 높혀줄 꺼예요!
                                        </div>
                                        :
                                        <div>'돈에 대한 지식'이 삶의 안정성을 높혀줄 꺼예요!</div>
                                    }
                                </div>
                                <div id='page0_chapter2_small_message'>
                                    {window.innerWidth < 500
                                        ?
                                        <div>
                                            <span style={{ color: '#323232' }}>'세상에서 벌어지는 돈의 흐름'</span>은<br />
                                            <span style={{ color: '#323232' }}>'돈이 굴리는 세상'</span>에서<br /><br />
                                        </div>
                                        :
                                        <div>
                                            <span style={{ color: '#323232' }}>'세상에서 벌어지는 돈의 흐름'</span>은 <span style={{ color: '#323232' }}>'돈이 굴리는 세상'</span>에서
                                        </div>
                                    }

                                    {window.innerWidth < 500
                                        ?
                                        <div>
                                            <span style={{ color: '#323232' }}>'나한테서 벌어지는 돈의 흐름'</span>은<br />
                                            <span style={{ color: '#323232' }}>'내가 굴리는 돈'</span>에서<br />
                                            배울 수 있어요.
                                        </div>
                                        :
                                        <div>
                                            <span style={{ color: '#323232' }}>'나한테서 벌어지는 돈의 흐름'</span>은 <span style={{ color: '#323232' }}>'내가 굴리는 돈'</span>에서 배울 수 있어요.
                                        </div>
                                    }
                                </div>
                            </div>
                            <div id='page0_chapter2_door_image1_wrapper'>
                                <img id='page0_chapter2_door_image1' src={'/image/step0/page0_chapter2_image1.png'} />
                            </div>
                        </div>
                    </div>
                    <div className='page0_chapter4'>
                        <span className='step0-home-content-title' >STEP2. 하고 싶은 일 배우기</span>
                        <div id='page0_chapter4_message1'>
                            <div>
                                <div id='page0_chapter2_big_message'>원하는 분야의 '기초지식'이 있다면&nbsp;
                                    {window.innerWidth < 500 ? <br /> : <br />}
                                    하고 싶은 일을 할 수 있을 거예요!
                                </div>
                            </div>
                            <div id='page0_chapter4_door_image1_wrapper'>
                                <img id='page0_chapter4_door_image1' src={'/image/step0/step2_image1.png'} />
                            </div>
                        </div>
                    </div>
                    <Link to='/step1/home'>
                        <div id='step0-home-final-comment-wrapper'>
                            <div id='step0-home-final-comment'>
                                준비되셨나요? 출발해봅시다!
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
        </>
    );
}