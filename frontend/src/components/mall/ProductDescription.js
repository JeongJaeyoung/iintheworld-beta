import React from 'react'
import './ProductDescription.css'
import { QuestionOutlined } from '@ant-design/icons';


export default function ProductDescription({ productName }) {
    let content = null;
    console.log(productName)

    switch (productName) {
        case 'money-control-world-theory-level0': // 돈이 굴리는 세상 - 이론편 - 입문편
            content = (
                <>
                    <div className='lecture-target'>
                        <div className='product-description-subtitle'>💁‍♂️ 수강대상</div>
                        복잡해보이기만 하는 돈, 경제가 궁금한 분<br />
                    </div>
                    <div className='lecture-features'>
                        <div className='product-description-subtitle'>✏️ 강의 특징</div>
                        한국 데이터를 활용하여 보여줌
                        <div>실시간 한국 데이터를 통한 개념 확인</div>
                    </div>
                    <div className='lecture-questions'>
                    <div className='product-description-subtitle'>❔ 시원하게 해소되는 궁금증들</div>
                        <div>- 왜 경제지표들은 'GDP대비'로 보여줄까?</div>
                        <div>- 채권금리와 채권가격은 반대로 움직일까?</div>
                        <div>- 경제지표에 '실질'이 왜 중요할까?</div>
                    </div>
                    <div className='lecture-description'>
                    <div className='product-description-subtitle'>📚 스토리라인</div>
                    step1. 금리, GDP,
                    </div>
                </>
            )
            break;
        case 'money-control-world-reality-level0': // 돈이 굴리는 세상 - 현실편 - 입문편
            content = (
                <>
                    <div className='lecture-target'>
                        <div className='product-description-subtitle'>💁‍♂️수강대상</div>
                        복잡해보이기만 하는 돈, 경제가 궁금한 분<br/>
                    </div>
                </>
            )
            break;
        case 'money-control-world-theory-level1':  // 돈이 굴리는 세상 - 이론편 - 초급편 #거시경제학
            content = (
                <>
                    <div className='lecture-target'>
                        <div className='product-description-subtitle'>수강대상</div>
                        경제에 흥미가 생겼는데, 어디서부터 시작해야할지 고민이신 분<br />
                        학부수준의 거시경제학이 궁금하신 분<br />
                        단순한 수식이 아닌 그 수식이 가지고 있는 뒷배경 이야기 알려드림<br />
                        복잡한 상황을 그림으로 보여줘요
                    </div>
                    <div className='lecture-questions'>
                        <div className='product-description-subtitle'>❔ 시원하게 해소되는 궁금증들</div>
                        - 재정정책과 통화정책이 반대 방향으로 이루어지는 이유<br/>
                        - 우리는 계속 열심히 일하는 것 같은데, 왜 저성장 시대 늪에 빠져드는지<br/>
                        - 한국은행 총재가 “통화정책이 단기적으로 장기적 해결책이 될 수 없다”고 한 이유
                        {/* 자극적인 사례로 이해 쏙쏙 : 크리스마스 100일 전 */}
                    </div>
                </>
            )
            break;
        case 'money-control-world-reality-level1':  // 돈이 굴리는 세상 - 현실편 - 초급편 #계량경제학
            content = (
                <>

                </>
            )
            break;
        default:
            break;
    }

    return content;
}