import React from 'react'
import { Anchor, ConfigProvider } from 'antd';
import BookFooter from '../BookFooter';
import './Ch10Introduction.css';
import BookAnnouncement from '../BookAnnouncement';
import BookFloatButton from '../BookFloatButton';


export default function Ch10Introduction() {

    return (
        <>
            <div id='book-content-layout-wrapper'>
                <div className='left_sidebar_data_page'>
                    <div className='ebook_mapleftsidebar_wrapper'>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#666',
                                },
                            }}
                        >
                            <div style={{ margin: '0 auto' }}>
                                <Anchor
                                    items={[
                                        {
                                            key: 'part-1',
                                            href: '#part-1',
                                            title: '세계지도 펼치기',
                                        },
                                        {
                                            key: 'part-1_5',
                                            href: '#part-1_5',
                                            title: '금융, 실물경제로 구성된 나라들',
                                        },
                                        {
                                            key: 'part-2',
                                            href: '#part-2',
                                            title: '금융경제의 탄생배경',
                                        },
                                        {
                                            key: 'part-3',
                                            href: '#part-3',
                                            title: '금융경제와 실물경제의 콜라보',
                                        },
                                        {
                                            key: 'part-4',
                                            href: '#part-4',
                                            title: '모든 국가의 목표',
                                        },
                                    ]}
                                />
                            </div>
                        </ConfigProvider>
                    </div>
                </div>
                <div className='main_content'>
                    <div>
                        <div id="part-1" >
                            <BookAnnouncement/>  {/* 이렇게 넣어야 margin-top 이슈 안 생김 */}
                            <p className='ebook_main_content_ptag'>
                                세계여행을 떠나기 위해선 세계지도가 필요하다.
                                우리에게 익숙한 세계지도는 다음과 같다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image1.png' className='ebook_main_content_image_80vw_500px' />
                            <p className='ebook_main_content_ptag'>
                                하지만 이렇게 간단하게 세상을 바라보면 각 국가에서 벌어지는 일을 제대로 이해하기 어렵다.
                                뉴스 기사에 나오는 사건들이 조각난 퍼즐들로 보일 뿐이다.
                                각각의 사건들이 아무런 연관이 없어 보이니 세상은 복잡하고 어지럽기만 하다.
                            </p>
                            <p className='ebook_main_content_ptag'>
                                그래서 세상을 볼 수 있는 기초적인 안목, 관점이 필요하다.
                                돈이 이에 대한 좋은 출발점일 것이다.
                                X-ray 로 우리 몸을 찍어서 살펴보면 인간의 기본구조를 파악할 수 있듯,
                                돈의 관점으로 세상을 찍어보면 경제라는 뼈대를 볼 수 있기 때문이다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image2.png' className='ebook_main_content_image_80vw_500px' />
                            <p className='ebook_main_content_ptag'>
                                'PART1. 돈이 굴리는 세상 - 이론편'에선 돈, 경제라는 측면에서 세계지도를 살펴본다.
                                이 파트가 끝날 즈음에는 밋밋했던 지도가 다음처럼 입체적으로 보이게 될 것이다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image3.png' className='ebook_main_content_image_80vw_500px' />
                        </div>
                        <div
                            id="part-1_5"
                            style={{
                            }}
                        >
                            <p className='ebook_main_content_ptag'>
                                위의 지도를 다시 한번 살펴보자.
                                각국의 국기 그림을 걷어내면 모든 국가가 다음과 같은 구조를 띤다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image4.png' className='ebook_main_content_image_80vw_500px' />
                            <p className='ebook_main_content_ptag'>
                                이는 오늘날 대부분 국가가 비슷한 경제 시스템을 갖추고 있음을 뜻한다.
                                세계여행을 위한 준비운동, 세계지도를 이해하는 과정은 여기서부터 시작한다.
                            </p>
                            <p className='ebook_main_content_ptag'>
                                <b>한 국가의 경제 시스템은 금융경제와 실물경제로 구분</b>된다.
                                금융경제와 실물경제.
                                듣기만 해도 추상적이고 별로 와닿지도 않는다.
                                하지만 우리가 현재 이러한 개의 경제 시스템 속에서 살게 된 스토리는 꽤 흥미진진하다.
                            </p>
                            <hr className='ebook_hr_design' />
                        </div>

                        <div
                            id="part-2"
                            style={{

                                background: '#fff',
                            }}
                        >

                            <p className='ebook_main_content_ptag'>
                                먼 옛날엔 경제 시스템이 이렇게 복잡하지 않았다.
                                당시에 금융경제는
                                존재하지도 않았고, 실물경제에도 농업만 존재했다.
                                쌀, 옥수수, 감자를 만들어내는 농업이라는 산업만이 경제 시스템의 전부였던 것이다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image5.png' className='ebook_main_content_image_50vw_300px' />

                            <p className='ebook_main_content_ptag'>
                                당시 농사를 짓는 농노들의 생각은 이랬다.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                농노 : 어제도 농사, 오늘도 농사, 내일도 농사. 세상은 바뀌지(성장하지) 않을 거야. 재미없어.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                하지만 시간이 흐르고 1700년대부터 경제는 산업혁명이라는 파도에 올라타 변화(성장)하기 시작한다.
                                배달을 해주던 옆집 아저씨의 소일거리가 운송산업으로 커졌고,
                                건넛마을의 빵집 아주머니의 자그마한 사업은 제빵산업으로 발전했다.
                                실물경제에서 농업뿐만 아니라 운송업 요식업 중공업, 통신업, 의료서비스업 등 여러 산업이 등장한 것이다.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                실물경제에서 만들어진 다양한 산업들은 다양한 물건들은 뿜어내면서 우리들의 삶을 편리하게 만들었다.
                                화학산업이 치약을 만들어내니 시원하게 이를 닦을 수 있었고, 제철산업이 만든 철도로 여행을 갈 수 있었다.
                                이에 따라 사람들은 실물경제에서 다양한 산업들이 좀 더 빠르게 커지길 원했다.
                                이런 변화를 지켜보던 농노에게 다음과 같은 생각이 스멀스멀 올라왔다.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                농노 : 내가 빵집 아주머니보다 더 기깔나는 음식들을 만들 수 있을 것 같은데..
                                기똥찬 레시피는 있지만 돈(사업 초기자금)이 없어서 사업을 시작하지 못하네. 아오.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                사람들의 머릿속에 성공한 사업가에 대한 부러움과 함께 사업 아이디어들이 속속들이 생겨났다.
                                그리고 이런 사회적 갈망에 발맞춰 상상 속의 <b>사업 아이디어를
                                    현실에서 수월하게 구현할 수 있게 도와주는 경제 시스템이 등장한다.
                                    금융경제가 등장한 것</b>이다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image6.png' className='ebook_main_content_image_50vw_300px' />

                            <p className='ebook_main_content_ptag'>
                                금융경제는 농노와 같은 사업 꿈나무들에게 다음과 같이 속삭인다.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                금융경제 : 내가 사업을 위한 돈을 지원해줄게 상상 속의 사업 아이디어를 현실화시켜봐!
                            </p>

                            <p className='ebook_main_content_ptag'>
                                <b>금융경제는 투자와 대출이라는 구체적인 방법으로 돈을 사업 꿈나무들에게 지원</b>한다.
                                돈이 부족해 입맛만 다시던 농노는 금융경제의 지원사격을 받아 사업가로 진화했다.
                                사업을 시작할 수 있게 된 이들 중 몇몇은 큰 성공을 일궈내면서, 경제 파이의 크기를 더 빠르게 키워냈다.
                                그렇게 세상은 더 풍요로워졌다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image7.png' className='ebook_main_content_image_80vw_500px' />
                        </div>
                        <div id="part-3">
                            <p className='ebook_main_content_ptag'>
                                정리해보자. 한 국가의 경제구조는 금융경제와 실물경제로 이루어진다.
                                그리고 금융경제는 실물경제의 성장을 도와주기 위해 존재한다.
                                금융경제는 수단이고 실물경제가 목적이다.
                                <b>우리가 최종적으로 원하는 것은 실물경제의 커다란 성장이다.</b>
                                &nbsp;그것이 우리들의 삶을 실질적으로 발전시키기 때문이다.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                이는 축구 경기에서 코치와 선수들과의 관계와 비슷하다.
                                금융경제라는 능력이 좋은 코치의 관리하에서,
                                실물경제라는 선수들이 경제성장이라는 골을 더 잘 넣는 것과 비슷하다.
                                탄탄한 금융경제 시스템이 있을 때 실물경제는 가장 효율적으로 성장한다.
                                그렇게 금융경제와 실물경제의 콜라보가 살기 좋은 세상을 만들어낸다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image8.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                이 사실은 전 세계로 퍼져나갔다.
                                소문을 들은 여러 나라들은 앞다투어 해당 경제 시스템을 채택한다.
                                요즘 대부분 국가는 금융경제와 실물경제로 구성된 경제 시스템 속에서 살아가고 있다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image9.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                그리고 이 국가들은 최종 목표를 다음과 같이 선포한다.
                            </p>

                            <p className='ebook_main_content_ptag' style={{ textAlign: 'center' }}>
                                <b>금융경제를 활용해서, 실물경제를 안정적으로 성장시키자!</b>
                            </p>

                            <p className='ebook_main_content_ptag'>
                                해당 목표에서 '안정적' '성장'은 각각 '물가안정'과 '경제성장'으로 구체화된다.
                                '물가가 안정된 상태에서 경제성장을 일구어 보자'는 슬로건은 '몸이 건강한 상태에서 공부 한번 잘 해보자'는 것과 비슷하다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image10.png' className='ebook_main_content_image_50vw_300px' />

                            <p className='ebook_main_content_ptag'>
                                많은 국가가 이 실천 지침을 항상 염두에 두면서 살아가기에, 우리는 이 실천 지침을 제대로 이해하는 것이 중요하다.
                                그래야 각국의 경제적 판단과 행동들이 이해되며, 돈, 경제라는 관점으로 세상을 보다 선명히 바라볼 수 있기 때문이다.
                            </p>
                        </div>
                        <div id="part-4">
                            <p className='ebook_main_content_ptag'>
                                세계지도를 이해하기 위한 방향성이 잡혔다.
                                지금부터 물가안정과 경제 성장이라는 가지 실천 지침을 이해하기 위한 여정을 떠날 것이다.
                                이는 한 국가의 경제 시스템의 구조를 자세히 살펴봄으로써 이루어진다.
                                <b>산 정상에 꽂혀있는 실천 지침이라는 개의 깃발을 발견하기 위해,
                                    한 국가의 경제구조를 파악하면서 산을 올라가 보는 것</b>이다.
                                첫 번째 깃발인 물가안정부터 찾으러 떠나보자.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_0_introduction/ch1_0_introduction_image11.png' className='ebook_main_content_image_80vw_500px' />
                        </div>
                    </div>
                    <BookFooter leftLink={'/step1/part1/book/summary'} leftText={'요약'} rightLink={'/step1/part1/book/ch1/financial-econ'} rightText={'금융경제'} />
                    <BookFloatButton/>
                </div>
            </div>
        </>
    );
}

