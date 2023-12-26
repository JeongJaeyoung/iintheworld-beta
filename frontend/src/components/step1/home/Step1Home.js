import React, { useState, useRef } from 'react'
import { Button, Carousel, ConfigProvider, Tabs } from 'antd';
import './Step1Home.css'
// import './Step1Home2.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WorldMap from './WorldMap';


const CarouselWrapper = styled(Carousel)`
> .slick-dots li button {
 border-radius: 5px;
 background: #323232;
}
> .slick-dots li.slick-active button {
 border-radius: 5px;
 background: #323232;
}`;


export default function Step1Home() {
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);

    const handleCardClick = (ref) => {
        ref?.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <CarouselWrapper autoplay autoplaySpeed={5000}>
                <div>
                    <div id='step1-home-carousel1'>
                        <img id='step1-home-carousel1-image' src='/image/step1/home/model-with-map.svg' />
                        <div id='step1-home-carousel1-text'>
                            직관적인 모델로 배우는<br />
                            돈이 굴리는 세상 - 이론편
                        </div>
                    </div>
                </div>
                <div>
                    <div id='step1-home-carousel2'>
                        <div>
                            <WorldMap />
                            <div id='step1-home-carousel2-text'>
                                실시간 데이터로 배우는<br />
                                돈이 굴리는 세상 - 현실편
                            </div>
                            <img id='step1-home-carousel2-image' src='/image/step1/home/carrier-behold.svg' />
                        </div>
                    </div>
                </div>
            </CarouselWrapper>

            <div id='step1-home-padding'>
                <div id='step1-home-section1'>
                    <div>
                        우리는 <span className='step1-home-font-bold'>돈의 흐름</span>을 이해하기 위한<br className='step1-home-br-true-at-mobile' /> 여행을 떠날 거예요.<br />
                        준비되셨나요?
                    </div>
                </div>

                <div id='step1-home-section2'>
                    <div id='step1-home-section2-content-wrapper'>
                        <div className='step1-home-content-title'>한눈에 살펴보는 커리큘럼</div>

                        <div className='step1-home-content-subtitle'>
                            <span className='step1-home-font-bold'>세상에서의 돈의 흐름</span>은 <br className='step1-home-br-true-at-mobile' /><span className='step1-home-font-bold'>돈이 굴리는 세상</span>에서<br />
                            <span className='step1-home-font-bold'>나한테서의 돈의 흐름</span>은 <br className='step1-home-br-true-at-mobile' /><span className='step1-home-font-bold'>내가 굴리는 돈</span>에서 배울거예요.
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div id='step0-home-step1-descriptions'>  {/* Step1DescriptionCards.css */}
                                <div className='step0-home-step1-descrtiption-left-right'>
                                    <div className='step0-home-step1-description-image-wrapper'>
                                        <img style={{ zIndex: '1' }}
                                            id='step0-home-step1-section2-first-image'
                                            className='step0-home-step1-description-image'
                                            src={'/image/step1/home/start-character.png'} />
                                    </div>
                                </div>

                                <div className='step0-home-step1-description-card' onClick={() => handleCardClick(card1Ref)}>
                                    <div className='step0-home-step1-description-head'>돈이 굴리는 세상</div>
                                    <div className='step0-home-step1-description-image-wrapper'>
                                        <img
                                            className='step0-home-step1-description-image'
                                            src={'/image/step0/step0-home-step1-description1-image.svg'}
                                        />
                                    </div>
                                    <div className='step0-home-step1-description-tail'>이론편</div>
                                </div>

                                <div className='step0-home-step1-description-card' onClick={() => handleCardClick(card2Ref)}>
                                    <div className='step0-home-step1-description-head'>돈이 굴리는 세상</div>
                                    <div className='step0-home-step1-description-image-wrapper'>
                                        <img
                                            className='step0-home-step1-description-image'
                                            src={'/image/step0/step0-home-step1-description2-image.svg'}
                                        />
                                    </div>
                                    <div className='step0-home-step1-description-tail'>현실편</div>
                                </div>

                                <div className='step0-home-step1-description-card' onClick={() => handleCardClick(card3Ref)}>
                                    <div className='step0-home-step1-description-head'>내가 굴리는 돈</div>
                                    <div className='step0-home-step1-description-image-wrapper'>
                                        <img
                                            className='step0-home-step1-description-image'
                                            src={'/image/step0/step0-home-step1-description3-image.png'}
                                        />
                                    </div>
                                    <div className='step0-home-step1-description-tail'>이론편</div>
                                </div>

                                <div className='step0-home-step1-description-card' onClick={() => handleCardClick(card4Ref)}>
                                    <div className='step0-home-step1-description-head'>내가 굴리는 돈</div>
                                    <div className='step0-home-step1-description-image-wrapper'>
                                        <img
                                            className='step0-home-step1-description-image'
                                            src={'/image/step0/step0-home-step1-description4-image.svg'}
                                        />
                                    </div>
                                    <div className='step0-home-step1-description-tail'>현실편</div>
                                </div>

                                <div className='step0-home-step1-descrtiption-left-right'>
                                    <div className='step0-home-step1-description-image-wrapper'>
                                        <img style={{ zIndex: '1' }}
                                            id='step0-home-step1-section2-last-image'
                                            className='step0-home-step1-description-image'
                                            src={'/image/step1/home/finish-character.png'}
                                        />
                                    </div>
                                </div>
                            </div>

                            <img className='step1-home-display-block-true-at-desktop' style={{ position: 'absolute', bottom: '0px', left: '40px', zIndex: '0', width: '200px', }} src='/image/step1/home/road1.png' />
                            <img className='step1-home-display-block-true-at-desktop' style={{ position: 'absolute', bottom: '130px', left: '180px', zIndex: '0', width: '150px', }} src='/image/step1/home/road-top-left.png' />
                            <img className='step1-home-display-block-true-at-desktop' style={{ position: 'absolute', bottom: '20px', left: '400px', zIndex: '0', width: '200px', }} src='/image/step1/home/road1.png' />
                            <img className='step1-home-display-block-true-at-desktop' style={{ position: 'absolute', bottom: '130px', left: '550px', zIndex: '0', width: '150px', }} src='/image/step1/home/road-top-left.png' />
                            <img className='step1-home-display-block-true-at-desktop' style={{ position: 'absolute', bottom: '20px', right: '15px', zIndex: '0', width: '200px', }} src='/image/step1/home/road1.png' />

                            <img className='step1-home-display-block-true-at-mobile' id='step1-home-section2-road-image-mobile' src='/image/step1/home/road-mobile.svg' />
                        </div>

                        <div className='step1-home-content-subtitle' style={{ marginTop: '80px' }}>
                            <span className='step1-home-font-bold'>세계여행</span>을 떠나<br className='step1-home-br-true-at-mobile' /> <span className='step1-home-font-bold'>돈이 굴리는 세상</span>을 배운 뒤,<br />
                            집에 돌아와 <span className='step1-home-font-bold'><br className='step1-home-br-true-at-mobile' />내가 굴리는 돈</span>을 배우는 것이에요.
                        </div>
                    </div>
                </div>

                <div ref={card1Ref} id='step1-home-section3'>
                    <div className='step1-home-content-title'>돈이 굴리는 세상 - 이론편</div>
                    <div>
                        <div className='step1-home-content-subtitle'>
                            우선 <span className='step1-home-font-bold'>세계여행을 위한 준비운동</span>으로<br className='step1-home-br-true-at-mobile' /> <span className='step1-home-font-bold'>세계지도</span>를 배워요<br />
                            금리, 환율, 통화정책, GDP 등<br className='step1-home-br-true-at-mobile' /> 어지럽고 난잡한 경제 개념들을<br />
                            직관적으로 입체적으로 정리할거예요.<br />
                            조만간 경제기사, 뉴스가<br className='step1-home-br-true-at-mobile' /> 눈과 귀에 들어오기 시작할 거예요.<br />
                        </div>
                        <div id='step1-home-section3-images-wrapper'>
                            <div>
                                <img style={{ width: '200px' }} src='/image/step1/home/econ-words-scattered.svg' />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'end' }}>
                                <img style={{ width: '150px' }} className='step1-home-display-block-true-at-desktop' src='/image/step1/home/i-dont-know.svg' />
                                <img style={{ width: '150px', margin: '80px' }} className='step1-home-display-block-true-at-mobile' src='/image/step1/home/i-dont-know-mobile.png' />
                            </div>
                            <div>
                                <img style={{ width: '300px' }} src='/image/step1/home/econ-words-arranged.svg' />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={card2Ref} id='step1-home-section4'>
                    <div>
                        <div className='step1-home-content-title'>돈이 굴리는 세상 - 현실편</div>
                        <div>
                            <div className='step1-home-content-subtitle'>
                                그 후 세계지도를 주머니에 넣고<br className='step1-home-br-true-at-mobile' /> 실제로 <span className='step1-home-font-bold'>세계여행</span>을 떠나요.<br />
                                현실 속에서 배웠던 이론이<br className='step1-home-br-true-at-mobile' /> 어떻게 적용되는지 살펴봐요.<br /><br />
                                우리의 여행 순서는<br className='step1-home-br-true-at-mobile' /> 일본 → 유럽 → 중국 → 미국 → 한국 순이예요.<br />
                                귀국할 때 즈음이면<br className='step1-home-br-true-at-mobile' /> 경제로 세상을 바라보는 시야가<br className='step1-home-br-true-at-mobile' /> 선명해져있을 거예요.
                            </div>
                            <div id='step1-home-section4-image-wrapper'>
                                <img id='step1-home-section4-image' src='/image/step1/home/carrier-traveler.svg' />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={card3Ref} id='step1-home-section5'>
                    <div className='step1-home-content-title'>내가 굴리는 돈 - 이론편</div>
                    <div className='step1-home-content-subtitle'>
                        그리곤 집으로 돌아와<br />
                        <span className='step1-home-font-bold'>나한테서의 돈의 흐름</span>을 파악할 거예요.<br />
                        재무설계 이론을 배우신다고 생각하시면 돼요.
                    </div>
                    <div style={{ position: 'relative' }}>
                        {/* <img id='carrier-traveler-image2' style={{}} src='/image/step1/home/carrier-traveler.svg' /> */}
                        <div style={{ width: '200px', margin: '0 auto' }}>
                            <img style={{ width: '200px' }} src='/image/step1/home/house.svg' />
                        </div>
                    </div>
                </div>

                <div ref={card4Ref} id='step1-home-section6'>
                    <div className='step1-home-content-title'>내가 굴리는 돈 - 현실편</div>
                    <div className='step1-home-content-subtitle'>
                        내 돈을 굴리는 법을 배웠으니<br />
                        이젠 현실 속에서 스스로 내 돈을 잘 굴려볼 차례예요.<br />
                        이는 웹, 앱 서비스로 준비되어 있어요.<br />
                        비로소 자아실현할 준비 STEP1이 끝난 것이지요.
                    </div>
                    <div style={{ width: '200px', margin: '0 auto' }}>
                        <img style={{ width: '200px' }} src={'/image/step0/step0-home-step1-description4-image.svg'} />
                    </div>
                </div>

                <div id='page0_chapter3'>
                    <div id='page0_chapter3_inner'>
                        <div id='page0_chapter3_message'>
                            군말 말고 바로 시작하지요.<br />
                            '돈으로부터의 독립'을 위한 여행의 문턱을<br />
                            지금 당장 넘어봅시다.
                        </div>
                        <div id='step1-home-section6-wrapper' onClick={openModal}>
                            <div>
                                <div id='step1-home-section6-image-wrapper'>
                                    <img style={{ cursor: 'pointer' }} id='page0_please_image' src={'/image/step1/home/page0_please_image.png'} />  
                                </div>
                                <div id='step1-home-final-comment-wrapper' onClick={openModal}>
                                    <div id='step1-home-final-comment' >
                                        <Link to='/step1/home'>
                                            지도 받아보기
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    {isModalOpen && (
                        <div className="modal-container">
                            <div className="modal">
                                <div id='step1-home-modal-header'>
                                    <span onClick={closeModal} id="step1-home-close-button">
                                        &times;
                                    </span>
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;여행을 떠나는 방식에는 2가지가 있어요.
                                </div>
                                <div id='step1-home-modal-content'>
                                    <Link to='/step1/part1/book/summary'>
                                        <div id='step1-home-book-image-wrapper' >
                                            <img id='step1-home-book-image' src='/image/step1/home/book.png' />
                                        </div>
                                    </Link>
                                    <Link to='/step1/part1'>
                                        <div id='step1-home-lecture-image-wrapper'>
                                            <img id='step1-home-lecture-image' src='/image/step1/home/lecture.png' />
                                        </div>
                                    </Link>
                                    <div>
                                        <img style={{ width: '300px' }} src='/image/step1/home/lecture-or-book-choice.svg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}