/* 
데스크탑에서 header의 총 높이는 15vh이다.
대부분의 페이지는 그 아래의 여백이 필요하기에 5vh를 추가해, 총 20vh의 높이를 만든다.(<ApplayoutStep0 />, <AppLayouStep1 />이 해당)

하지만 CAROUSEL이 들어간 페이지는 5vh가 없는 상태에서 flex align-items: center를 적용해야하기 때문에
해당 5vh가 들어가지 않은 Layout을 따로 만든 것이다.
*/

import React from 'react'
import './BodyWithoutMargin.css'

export default function BodyWithoutMargin({children}) {
  return (
    <>
    <div id="body-position-without-additional-margin">
        {children}
    </div>
</>
  )
}