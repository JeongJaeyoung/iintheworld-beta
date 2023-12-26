import React from 'react'
import Part1ProductTable from '../../mall/Part1ProductTable';
// import DottedLine from '../../../components/common/DottedLine';
// import BasicButton3 from '../../../components/common/BasicButton3';
import BasicButton3 from '../../common/BasicButton3'
import DottedLine from '../../common/DottedLine'
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import './Step1Part1.css'

export default function Step1Part1() {
    return (
        <>
            <div id='step1-part1-wrapper'>
                <div id='step1-part1-text-wrapper'>
                    <div id='step1-part1-text'>
                        <br />
                        강의는 이론편과 현실편으로 이루어져 있어요.<br />
                        <span className='step1-part1-font-bold'>이론편</span>에선 경제를 바라보는 사고의 틀, 모형을 배우고<br />
                        <span className='step1-part1-font-bold'>현실편</span>에선 그것들로 현실 속 사건, 데이터들을 해석해봐요.<br />
                        <br />
                        <br />
                        하지만 그 과정이 녹록치 않아 단계별로 구분했어요.<br />
                        입문편과 초급편으로 구성되어 있는데, 다음의 순서로 배울 것을 추천드려요.<br />
                        <br /><br />
                        <div id='step1-part1-curriculum-flow'>
                            1-1. 돈이 굴리는 세상 - 이론편 - 입문편<br />
                            1-2. 돈이 굴리는 세상 - 현실편 - 입문편<br />
                            <br />
                            2-1. 내가 굴리는 돈 - 이론편 - 초급편<br />
                            2-2. 내가 굴리는 돈 - 현실편 - 초급편
                        </div>
                        <br />
                    </div>
                </div>

                <Part1ProductTable />

                <div id='level0-theory-wrapper'>
                    <div className='step1-part1-main-title'>입문편 <span className='step1-part1-main-title-description'>&nbsp;직관적 이해와 재미</span></div>
                    <div className='step1-part1-sub-title'>이론편</div>
                    <div className='step1-part1-content-wrapper'>
                        <div className='step1-part1-content-text'>
                            경제를 바라볼 수 있는 기본적인 사고의 틀을 배워요.<br />
                            그러면 세상을 좀 더 선명하게 바라볼 수 있게 될 거예요.
                        </div>
                        <div className='step1-part1-image-wrapper'>
                            <img style={{ width: '200px' }} src='/image/step1/part1/common/econ-model.png' />
                        </div>
                    </div>
                </div>
                <DottedLine length='100%' />
                <div id='level0-reality-wrapper'>
                    <div className='step1-part1-sub-title'>현실편</div>
                    <div className='step1-part1-content-wrapper'>
                        <div className='step1-part1-content-text'>
                            이론편에서 배운 내용을 토대로<br />
                            각 나라들에서 일어난 굵직한 사건들을 살펴봐요.<br />
                            경제 주인공들이 살아가는 모습을 사진으로 보여주는 것이지요.<br />
                        </div>
                        <div className='step1-part1-image-wrapper'>
                            <img id='level0-reality-image' src='/image/step1/part1/common/econ-usa-japan.png' />
                        </div>
                    </div>
                </div>
                <div id='level1-theory-wrapper'>
                    <div className='step1-part1-main-title'>초급편<span className='step1-part1-main-title-description'>&nbsp;세상의 작동원리</span></div>
                    <div className='step1-part1-sub-title'>이론편</div>
                    <div className='step1-part1-content-wrapper'>
                        <div className='step1-part1-content-text'>
                            경제가 이제 막 재밌어졌는데, 여기서 멈출 수 없어요.<br />
                            탄탄한 논리를 가진 좀 더 복잡한 모델을 통해 세상의 작동원리를 이해해요.<br />
                            <br /><br /><br /><br />
                            <Tag color="#323232">#거시경제학</Tag>
                        </div>
                        <div className='step1-part1-image-wrapper'>
                            <img id='level1-theory-image' src='/image/step1/part1/common/level1-theory.png' />
                        </div>
                    </div>
                </div>
                <DottedLine length='100%' />
                <div id='level1-reality-wrapper'>
                    <div className='step1-part1-sub-title'>현실편</div>
                    <div className='step1-part1-content-wrapper'>
                        <div className='step1-part1-content-text'>
                            세상의 작동원리를 이론으로 배웠으니,<br />
                            현실 데이터로 분석, 검증할 수 있는 방법을 배워요.<br />
                            실제 한국은행, IMF, FED의 데이터를 활용한데요.
                            <br /><br /><br />
                            <Tag color="#323232">#계량경제학</Tag>

                            <Tag color="#323232">
                                <Link to='/econ-data/korea'>
                                    데이터 구경하기
                                </Link>
                            </Tag>
                        </div>
                        <div className='step1-part1-image-wrapper'>
                            <img style={{ width: '200px' }} src='/image/step1/part1/common/level0-reality.png' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}