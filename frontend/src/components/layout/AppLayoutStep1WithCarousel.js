/* 
데스크탑에서 header의 총 높이는 15vh이다.
대부분의 페이지는 그 아래의 여백이 필요하기에 5vh를 추가해, 총 20vh의 높이를 만든다.(<ApplayoutStep0 />, <AppLayouStep1 />이 해당)

하지만 CAROUSEL이 들어간 페이지는 5vh가 없는 상태에서 flex align-items: center를 적용해야하기 때문에
해당 5vh가 들어가지 않은 Layout을 따로 만든 것이다. 관련 설정은 <BodyWithoutMargin>에 있다.
*/

import "./AppLayout.css";
import Header1 from "./Header1";
import Header2 from "./Header2";
import BodyWithoutMargin from "./BodyWithoutMargin";
import Footer from './Footer'

export default function AppLayoutStep1WithCarousel({children}) {
    return(
        <>
            <div className="applayout-header">
                <Header1 subtitle={'STEP1. 돈으로부터의 독립'} />
                <Header2 type={'step1'} />
            </div>
            <BodyWithoutMargin>
                {children}
            </BodyWithoutMargin>
            <Footer/>
        </>
    );
}