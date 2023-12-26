import React, { useState, useEffect } from 'react'
import './Step0About.css'
import { Timeline } from 'antd'
import { Link } from 'react-router-dom'


export default function Step0About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 화면 크기에 따라 모바일 여부를 판단하는 함수
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // 페이지 로드 시 및 화면 크기 변경 시 이벤트 리스너 등록
    handleResize();
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div id='step0-about-wrapper'>
        <div id='step0-about-title-first' className='step0-about-title'>
          소개
        </div>
        <div id='step0-about-text-wrapper'>

          <div id='step0-about-text'>
            안녕하세요.<br />
            인문학(경제)이란 지도를 가지고<br />
            공학이란 배에 올라타<br />
            세상을 더 따뜻하게 만드려는<br />
            정제영입니다.
          </div>
        </div>
        <div id='step0-character-image-wrapper'>
          <img id='step0-about-character-image' src='/image/step0/about/character.svg' />
        </div>

        <div id='about-timeline-wrapper'>
          <Timeline
            mode={isMobile ? 'left' : 'alternate'}
            items={[
              {
                children: (
                  <div>
                    👨🏻‍💻 홈페이지 1차 개발 - 2020.01.-02.(23)
                  </div>
                ),
                color: '#323232',
                position: 'left',
              },
              {
                children: (
                  <div>
                    👨🏻‍💻 홈페이지 2차 개발 - 2020.07.-08.(24)
                  </div>
                ),
                color: '#323232',
                position: 'left',
              },
              {
                children: window.innerWidth < 500 ? (
                  // 모바일
                  <>
                    📖 <span className='about-font-bold'><Link to='https://www.yes24.com/Product/Goods/98135790'>내가 사는 세상 0</Link></span> 출판 - 2021.02.(24)
                  </>
                ) : (
                  // 데스크탑
                  <>
                    2021.02.(24) - <span className='about-font-bold'><Link to='https://www.yes24.com/Product/Goods/98135790'>내가 사는 세상 0</Link></span> 출판 📖&nbsp;&nbsp;
                  </>
                ),
                color: '#323232',
                position: isMobile ? 'left' : 'right',
              },
              {
                children: (
                  <div>
                    2022.11.(26) - <span className='about-font-bold'><Link to='https://www.yes24.com/Product/Goods/115796274'>내가 사는 세상 1</Link></span> 출판 📖&nbsp;&nbsp;
                  </div>
                ),
                children: window.innerWidth < 500 ? (
                  // 모바일
                  <>
                    📖 <span className='about-font-bold'><Link to='https://www.yes24.com/Product/Goods/115796274'>내가 사는 세상 1</Link></span> 출판 - 2022.11.(26)
                  </>
                ) : (
                  // 데스크탑
                  <>
                    2022.11.(26) - <span className='about-font-bold'><Link to='https://www.yes24.com/Product/Goods/115796274'>내가 사는 세상 1</Link></span> 출판 📖&nbsp;&nbsp;
                  </>
                ),
                color: '#323232',
                position: isMobile ? 'left' : 'right',
              },
              {
                children: (
                  <div>
                    👨🏻‍💻 <span className='about-font-bold'><Link to='https://www.youtube.com/watch?v=1eUp-aNlCVE'>홈페이지 1차 완성</Link></span> - 2023.04.(26)
                  </div>
                ),
                color: '#323232',
                position: 'left',
              },
            ]}
          />
        </div>

        <div className='step0-about-title'>
          Contact Me
        </div>
        <div>
            &nbsp;&nbsp;<Link className='step0-about-sns-link' to='https://www.linkedin.com/in/jeongjaeyoung/'>LinkedIn</Link>  | 
            &nbsp;&nbsp;<Link className='step0-about-sns-link' to='https://www.instagram.com/i_intheworld/'>Instagram</Link>  |  
            &nbsp;&nbsp;<Link className='step0-about-sns-link' to='https://www.youtube.com/@i_intheworld/'>Youtube</Link>   |  
            &nbsp;&nbsp;<Link className='step0-about-sns-link' to='https://brunch.co.kr/@i-intheworld'>brunch</Link>
        </div>
      </div>
    </>
  )
}