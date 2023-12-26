import { Alert, Anchor, ConfigProvider, FloatButton, Space } from 'antd';
import './Ch11FinancialEcon.css';
import BookFooter from '../BookFooter';
import YoutubeBottomRightButton from '../YoutubeBottomRightButton';
import BookAnnouncement from '../BookAnnouncement';
import BookFloatButton from '../BookFloatButton';


export default function Ch11FinancialEcon() {

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
                                            title: 'INTRO',
                                        },
                                        {
                                            key: 'part-2',
                                            href: '#part-2',
                                            title: '금융경제 살펴보기',

                                        },
                                        {
                                            key: 'part-3',
                                            href: '#part-3',
                                            title: '돈의 양 = M0 + CREDIT',
                                            children: [
                                                {
                                                    key: 'part-3_1',
                                                    href: '#part-3_1',
                                                    title: '돈의 원천 #M0',
                                                },
                                                {
                                                    key: 'part3_2',
                                                    href: '#part-3_2',
                                                    title: '늘어나는 돈 #CREDIT',
                                                },
                                            ],
                                        },
                                        {
                                            key: 'part-4',
                                            href: '#part-4',
                                            title: 'M0 << CREDIT',
                                        },
                                        {
                                            key: 'part-5',
                                            href: '#part-5',
                                            title: '금리 자기소개 #CREDIT에 집중',
                                            children: [
                                                {
                                                    key: 'part-5_1',
                                                    href: '#part-5_1',
                                                    title: '금리 자기소개 1 : 이름',
                                                },
                                                {
                                                    key: 'part5_2',
                                                    href: '#part-5_2',
                                                    title: '금리 자기소개 2 : 별명',
                                                },
                                                {
                                                    key: 'part5_3',
                                                    href: '#part-5_3',
                                                    title: '금리 자기소개 3 : 쌩얼',
                                                },
                                            ],
                                        },
                                        {
                                            key: 'part-6',
                                            href: '#part-6',
                                            title: '금리 오르내림',
                                            children: [
                                                {
                                                    key: 'part-6_1',
                                                    href: '#part-6_1',
                                                    title: '금리 오르내림 효과 1',
                                                },
                                                {
                                                    key: 'part6_2',
                                                    href: '#part-6_2',
                                                    title: '금리 오르내림 효과 2',
                                                },
                                            ],
                                        },
                                        {
                                            key: 'part-6_5',
                                            href: '#part-6_5',
                                            title: '금리가 높은 게 좋은거야? 낮은 게 좋은거야?',
                                        },
                                        {
                                            key: 'part-7',
                                            href: '#part-7',
                                            title: '정리',
                                        },
                                    ]}
                                />
                            </div>
                        </ConfigProvider>
                    </div>
                </div>

                <div className='main_content'>
                    <div>
                        <BookAnnouncement />
                        <div id="part-1">

                            <p className='ebook_main_content_ptag'>
                                물가안정이 구체적으로 무슨 의미를 가지는지 이해하려면,
                                일단 <b>물가</b>가 무엇인지 알아야 한다.
                                물가는 '<b>물</b>건의 <b>가</b>격'의 줄임말이다.
                                그리고 한 국가의 <b>물가는 '모든 돈의 양'을 '모든 물건의 양'으로 나누어서 구한다.</b>
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image1.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                볼펜 시장이 있다고 해보자.
                                이 시장 안에서 거래되는 돈의 양이 총 \4000이다.
                                볼펜을 사고자 하는 사람들의 손에 \4000이 쥐어져 있는 것이다.
                                그리고 생산된 볼펜의 개수는 8개다.
                                그러면 볼펜 하나의 가격은 \500(=\4000/8개)에 거래될 것이다.
                                볼펜 시장을 한 국가에서의 모든 시장으로 확대해도 물가를 구하는 방법이 크게 달라지진 않는다.
                                그래서 물가를 제대로 이해하려면 <b>한 국가 내에서의 돈의 양</b>과 <b>한 국가 내에서의 물건의 양</b>이 어느 정도인지 각각 알아야 한다.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                우선 한 국가 내에서의 돈의 양이 어디서 어떻게 결정되는지 살펴보자.
                                결론부터 이야기하면 <b>한 국가의 돈의 양은 금융경제에서 결정</b>된다.
                                이게 무슨 말일까.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image2.png' className='ebook_main_content_image_80vw_500px' />

                        </div>




                        <div id="part-2">
                            <h1 className='ebook_h1_design'>금융경제 살펴보기</h1>
                            <p className='ebook_main_content_ptag'>
                                금융경제는 실물경제를 도와주기 위해 존재한다고 했다.
                                그럼 구체적으로 어떻게 도와준다는 것일까? <b>금융경제는
                                    '잠들어 있는 돈'을 '일하는 돈'으로 흔들어 깨우면서</b> 실물경제를 도와준다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image3.png' className='ebook_main_content_image_50vw_300px' />

                            <p className='ebook_main_content_ptag'>
                                여기서 잠들어 있는 돈은 우리의 주머니와 예금통장에 들어있는 돈을 말한다.
                                금융경제는 '돈을 가만히 들고 있는 사람(저축자)'에서 '가장 열정적으로
                                경제 파이를 키우려 하는 사람(사업 꿈나무, 기업가)'에게 전달한다.
                                그 돈을 받아낸 사업 꿈나무는 공장을 짓고, 설비를 돌리면서 실물경제 속에서 경제 파이를 키워낸다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image4.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                이러한 금융경제의 종류는 2가지다.<br />
                                1. 주식시장 : 증권회사를 통하여 사업 꿈나무 기업에 돈을 전달<br />
                                2. 대출시장 : 시중은행을 통하여 사업 꿈나무 기업에 돈을 전달
                            </p>

                            <p className='ebook_main_content_ptag'>
                                첫 번째 금융경제는 주식시장이다.
                                주식시장에서 우리는 가지고 있는 돈을 증권회사를 통해 성공할 것 같은 기업에 투자한다.
                                주식을 사는 과정에서 저축자들의 돈이 열정 넘치는 기업들로 이동한다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image5.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                두 번째 금융시장은 대출시장이다.
                                시중은행이 예금자로부터 받아낸 돈을 성공할 것 같은 기업에 대출을 통해 전달한다.
                                이 과정에서 저축자들의 돈이 열정 넘치는 기업들로 이동한다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image6.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>

                                대출시장의 작동원리는 주식시장보다 훨씬 더 복잡하다.
                                이는 <b>대출시장 속에 돈의 양을 결정짓는 원리</b>가 숨어있기 때문이다.
                                지금부턴 돈의 양이 결정되는 과정을 살펴보면서 대출시장에 대한 이해도를 높힐 것이다.
                                '돈의 양'에 대해 이해하려면 일단 돈의 구성부터 알아야 한다.
                            </p>
                        </div>




                        <div id="part-3">

                            <div id="part-3_1">
                                <h1 className='ebook_h1_design'>돈의 양 = M0 + CREDIT</h1>
                                <h2 className='ebook_h2_design'>돈의 원천 #중앙은행이 찍어낸 돈 #M0</h2>

                                <p className='ebook_main_content_ptag'>
                                    돈은 기본적으로 은행들의 대장이라고 불리는 중앙은행에서 찍어낸다.
                                    중앙은행은 이론상으로는 무한대로 돈을 찍어낼 수 있지만 지나치게 많이 찍어내면
                                    돈의 양이 갑자기 많아져 물가가 폭등하기 때문에 적정량을 찍어내는 것이 중요하다.
                                    우리는 이 돈이 돈의 원천이기에, M0라고 부를 것이다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image7.png' className='ebook_main_content_image_80vw_500px' />
                            </div>


                            <div id="part-3_2">
                                <h2 className='ebook_h2_design'>늘어나는 돈 #시중은행이 부풀린 돈 #CREDIT</h2>




                                <p className='ebook_main_content_ptag'>
                                    중앙은행이 M0라는 돈을 찍어내면, 시중은행은 이것을 재료 삼아 사업 꿈나무에게 대출을 해준다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    A, B, 시중은행 X만 있는 간단한 사회를 상상해보자.
                                    이 사회에 돈이라고는 중앙은행이 찍어낸 M0 \1000이 전부이다.
                                    눈치가 빠른 A는 \1000을 낚아챈 뒤, 시중은행 X에 간다.
                                    은행원이 세상 상냥한 미소로 물어봐 준다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    은행원 X : 무슨 일로 오셨나요?<br />
                                    A : \1000 예금하려구요.<br />
                                    A의 순수한 눈빛에 은행원은 미소를 지으며 대답한다.<br />
                                    은행원 X : 알겠습니다. \1000 주세요. (-잠시 후-) 예금 다 되었습니다.<br />
                                    은행원이 A에게 통장을 건넨다. A의 통장에는 \1000이 찍혀있다.<br />
                                    A : 호오~ 감사합니다.<br />
                                    A는 기분이 좋다. 이젠 \1000을 도둑맞을 일이 없을 테니까.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image8.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    잠시 후 B가 시중은행에 들어간다.
                                    슬리퍼에 추리닝을 입었지만 왠지 모를 날카로운 눈빛에 은행 창구가 엄숙해진다.
                                    띵동.
                                    B가 대출 창구에 가서 앉는다.
                                    은행원은 또다시 세상 상냥한 미소로 물어봐 준다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    은행원 X : 무슨 일로 오셨나요?<br />
                                    B : 사업하려는데 돈이 필요해서요. 대출받으려고요.<br />
                                    B의 날카로운 눈빛에 믿음이 간 은행원은 대답한다.<br />
                                    은행원 X : 알겠습니다. 저희 은행에 돈이 \1000 밖에 없으니, \900 빌려드리겠습니다. 나중에 이자랑 같이 갚으시면 돼요.<br /><br />

                                    은행원이 B에게 통장을 건넨다. B의 통장에는 \900이 찍혀있다.<br />
                                    B : 호오~ 감사합니다.<br />
                                    B도 기분이 좋다. 이젠 사업을 위해 마음껏 돈을 쓸 수 있을 테니까.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image9.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    서로 친구 사이였던 A와 B가 카페에서 만나 아메리카노를 한 잔씩 마시면서 이야기한다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    A : 나 오늘 예금했다. 내 돈 \1000은 시중은행에 보관 중이야.<br />
                                    B : 난 오늘 대출했다. \900만큼 사업자금을 얻어냈어<br />
                                    A, B : 그러면 너랑 나랑 가진 돈을 합치면 \1900(\1000 + \900)이네!
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image10.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    <b>사회의 돈의 양이 \1000에서 \1900으로 늘어났다.</b>&nbsp;
                                    M0라는 돈(\1000)을 기반으로 \900이 새롭게 만들어진 것이다.
                                    \900은 시중은행 X가 B의 사업이 성공할 것이라 믿으면서 돈을 빌려준 것이기에, CREDIT(신용)이라고 불린다.
                                    CREDIT(신용)이라는 돈이 만들어진 것을 신용 창출이 일어났다고 한다.
                                    그렇게 <b>돈의 양은 '중앙은행이 찍어낸 M0'와 '시중은행이 이를 재료 삼아 추가적으로 만든 CREDIT'으로 구성</b>된다.
                                </p>


                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image11.png' className='ebook_main_content_image_80vw_500px' />
                            </div>
                        </div>

                        <div id="part-4">
                            <h1 className='ebook_h1_design'>M0 &lt;&lt; CREDIT</h1>
                            <p className='ebook_main_content_ptag'>
                                이렇게 시중은행 X는 예금액의 일정 부분(\100 = \1000 X 10%)만을 A를 위해 남겨 두고,
                                나머지 돈은 대출을 원하는 사람에게 빌려줄 수 있다.
                                이와 같은 방식은 무한정 반복될 수 있다.
                                B가 \900을 Y라는 시중은행에 넣으면 Y은행은 \900의 10%인 \90만 남겨두고, \810을 C에게 빌려줄 수 있다.
                                \810을 대출받은 C가 Z라는 시중은행에 예금하면, Z은행은 \81을 남겨두고 \719을 D에게 대출해줄 수 있다.
                                이렇게 사회에 돈이 \1000 + \900 + \810 + \719 + ··· 으로 계속 늘어난다.
                                어릴 때 배운 간단한 수학으로 계산해보면 다음과 같다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image12.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                이런 방식으로 사회 전체 돈의 양이 \1000에서 최대 \10000까지 10배로 늘어날 수 있다.
                                중앙은행이 \1000의 M0라는 돈을 찍어내면, 시중은행들이 대출을 통해 \9000만큼의 CREDIT이라는 돈을 추가로 만들어,
                                사회의 전체에 \10000의 돈이 돌아다니게 된 것이다.
                                이때 M0의 양(\1000) 보다 CREDIT의 양(\9000) 이 훨씬 많다.
                                현실에서도 이와 비슷하게 돈의 양의 대부분은 CREDIT으로 이루어져 있다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image13.png' className='ebook_main_content_image_50vw_300px' />

                            <p className='ebook_main_content_ptag'>

                                그래서 <b>돈의 양을 볼 땐 CREDIT의 양에 초점을 맞추는 게 중요</b>하다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image14.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                지도를 통해 어떤 일이 벌어진 것인지 다시 한번 되짚어보자.
                                중앙은행에서 돈의 씨앗인 M0를 뿌리면,
                                이 돈은 금융경제에 사는 시중은행에 예금의 형태로 들어가게 된다.
                                그리고 이 돈을 재료 삼아 실물경제 속 사업 꿈나무, 기업에 대출해주면서 CREDIT이란 새로운 돈이 만들어진다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image15.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                정리해보자.
                                지금까지 우리는 돈의 양을 구성하는 요소를 알아보았다.
                                <b>돈의 양은 '중앙은행이 찍어낸 M0'와 '시중은행이 이를 재료 삼아 만든 CREDIT'으로 구성</b>된다.
                                그리고 M0보다 CREDIT의 양이 훨씬 많기에 돈의 양을 살펴볼 때, <b>CREDIT에 초점을 맞출 필요</b>가 있다.
                            </p>
                        </div>

                        <div id="part-5">
                            <h1 className='ebook_h1_design'>금리 자기소개 #CREDIT에 집중</h1>
                            <p className='ebook_main_content_ptag'>
                                CREDIT은 시중은행이 돈을 대출해줄 때 만들어진다.
                                그 상황을 조금 더 자세히 들여다보자.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image16.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                사업 꿈나무는 시중은행에서 \900을 빌릴 때,
                                원금에 이자를 얹어서 돈을 갚을 것을 약속했다.
                                대출에서 가장 중요한 것은 이자율 즉, 금리이다.
                                왜냐하면 <b>금리가 사람들이 대출받을지 안 받을지의 판단기준이 되고,
                                    그러한 판단이 CREDIT이라는 돈을 얼마나 만들어낼지를 결정</b>하기 때문이다.
                                지금부턴 금융경제의 핵심 키워드 금리에 대해 자세히 살펴볼 것이다.
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image17.png' className='ebook_main_content_image_50vw_300px' />

                            <div id="part-5_1">
                                <h2 className='ebook_h2_design'>금리 자기소개 1 : 이름 #이자율</h2>
                                <p className='ebook_main_content_ptag'>
                                    우선 이자율과 금리는 뭐가 다를까?
                                    글자 수가 다르고, 스펠링이 다르니 뭔가 미묘한 차이가 있지 않을까?
                                    아니다.
                                    이자율과 금리는 완전히 똑같다.
                                    인간과 사람이 똑같은 단어인 것처럼 말이다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image18.png' className='ebook_main_content_image_30vw_100px' />
                            </div>
                            <div id="part-5_2">
                                <h2 className='ebook_h2_design'>금리 자기소개 2 : 별명 #돈의 가격</h2>
                                <p className='ebook_main_content_ptag'>
                                    그리고 금리의 별명은 '돈의 가격'이다.
                                    경제 자료들을 보면 '돈의 가격인 금리가 어쩌고 저쩌고~' 하는 말을 쉽게 찾을 수 있다.
                                    그런데 돈의 가격?
                                    돈이 돈이지, 돈에 무슨 가격이 있나?
                                    언뜻 들으면 쉽게 받아들여지지 않는다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image19.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    이는 다음과 같은 방식으로 생각하면 쉽게 이해된다.
                                    우리는 가게에서 어떤 물건을 살 때, 가격을 보고 그 물건을 살지 말지 판단한다.
                                    우리가 돈을 빌리는 것을 <b>시중은행에 가서 돈이라는 물건을 사는 것</b>으로 생각해보자.
                                    시중은행의 매대에 놓여있는 돈(원화)을 살 때, 사업 꿈나무는 금리를 보고 돈을 살지 말지 결정한다.
                                    금리가 높으면(돈의 가격이 비싸면) 높은 이자 부담에 대출을 꺼리고,
                                    금리가 낮으면(돈의 가격이 싸면) 쉽사리 대출에 손이 가는 것이다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image20.png' className='ebook_main_content_image_80vw_500px' />
                            </div>
                            <div id="part-5_3">
                                <h2 className='ebook_h2_design'>금리의 자기소개 3 : 본모습 #실질금리</h2>

                                <p className='ebook_main_content_ptag'>
                                    사업 꿈나무 B는 금리와 관련해서 고민한다.
                                    사업을 위해 돈을 빌릴지, 말지.
                                    돈을 빌리려 했더니 금리가 6%라고 한다.
                                    2% 저금리면 바로 빌리고, 10% 고금리이면 안 빌릴텐데, 애매하게 6%란다.
                                    빌릴까 말까.
                                    고민이 이만저만이 아니다.
                                    도저히 안 되겠어서 자신을 사업 세계로 이끈 멘토를 찾아간다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    B : 잽스 형. 금리 6%라던데. 이거 빌려서 공장 차려볼까?<br />
                                    혹시나 했는데 역시나 잽스 형은 통찰력 있는 조언을 해준다.<br />
                                    잽스 : 물가가 오를 것 같아? 그러면 빌리고, 아님 말고.<br />
                                    B : ??? 돈 빌리는데 물가를 왜 생각해?<br />
                                    잽스 : 물가가 오르면 이자 부담이 줄어들고, 늘어나니까 그렇지.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    사업 꿈나무가 6% 금리에 100억을 빌렸다고 해보자.
                                    이렇게 사업 꿈나무가 시중은행에 가서 눈으로 직접 마주하는 금리를 명목금리라고 한다.
                                    이제 B는 매년 6억의 이자를 내야 한다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    이 상황에서 물가가 오를 것 같으면 어떻게 될까.
                                    물가가 오르면 돈의 가치가 떨어진다.
                                    사과 1개가 \1000에서 \2000으로 가격이 뛰었다는 것은 그만큼 돈이 휴지조각화 된 것이다.
                                    \1000만 줘도 사과 1개를 구할 수 있는 상황이었는데,
                                    이젠 돈이 휴지조각화 되어 \2000씩이나 줘야 간신히 사과 1개를 살 수 있는 상황이 되었기 때문이다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    물가가 오를 것 같으면(기대물가상승률이 오르면) 사업 꿈나무는 기쁠 것이다.
                                    상황이 어찌 되든 시중은행에는 매년 6억만을 갚아내면 되는데,
                                    물가상승으로 휴지조각이 된 돈으로 갚아도 된다면,
                                    B가 체감하는 실질적 인 금리 부담이 줄어들기 때문이다.&nbsp;
                                    <b>기대물가상승률이 오르면 실질금리는 떨어진다.</b>
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    반대로 물가가 떨어질 것 같으면(기대물가상승률이 떨어지면) 사업 꿈나무가 짊어진 빚의 무게가 더 무거워진다.
                                    훨씬 더 비싼 대접을 받게 된 돈을 6억씩이나 구해서 갚아 줘야 하기 때문이다.&nbsp;
                                    <b>기대물가상승률이 떨어 지면 실질금리는 오른다.</b>&nbsp;
                                    이를 한 줄로 정리하면 <b>실질금리는 명목금리에서 기대물가상승률을 걸러내 준 것</b>이라 할 수 있고, 다음과 같다.

                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image21.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    이렇듯 <b>금리를 볼 땐 물가 요소를 걸러내 준 실질금리를 봐야 한다.</b>&nbsp;
                                    기업 입장에서 명목금리가 오르면 이들의 부채부담이 늘어난다.
                                    하지만 물가도 같이 올라 돈의 가치를 떨어뜨리면,
                                    빚을 수월하게 갚을 수 있게 되어 그 부담이 생각보다 크지 않다.
                                    그래서 모든 경제주체는 금리를 볼 때 실질금리에 집중한다.
                                    <b>실질금리가 금리의 진짜 모습, 쌩얼</b>이다.

                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image22.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    그런데 왜 물가상승률이 아니라 '기대'물가상승률일까?
                                    이는 우리가 <b>투자적 관점으로 금리를 바라보기 때문</b>이다.
                                    무언가에 투자할 땐, 현재 상황보 다 앞으로 펼쳐질 미래의 모습에 대해 고민해야 한다.
                                    현재까지의 모습은 바꿀 수 없기에 덜 중요하다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    물론 사후적 관점으로 다음도 성립한다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image23.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    오히려 이것이 더 정확하다.
                                    하지만 이는 투자적 관점에선 별로 중요하지 않다.
                                    데이터를 분석하는 사람, 경제학자에겐 중요할지 몰라도,
                                    산업을 이끄는 기업에겐 이미 지나간 일들에 대한 측정치일 뿐이다.
                                    소 잃고 외양간을 고치는 느낌을 줄 뿐이다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    지금까지의 금융경제 속에서 뽑아낸 키워드 금리의 자기소개를 정리해보면 다음과 같다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image24.png' className='ebook_main_content_image_80vw_500px' />
                            </div>
                        </div>


                        <div id="part-6">


                            <h1 className='ebook_h1_design'>금리 오르내림</h1>



                            <p className='ebook_main_content_ptag'>
                                이런 금리가 오르내리면 어떻게 될까?
                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image25.png' className='ebook_main_content_image_50vw_300px' />



                            <div id="part-6_1">
                                <h2 className='ebook_h2_design'>
                                    금리 오르내림 효과 1 : 돈의 양 결정
                                </h2>

                                <p className='ebook_main_content_ptag'>
                                    금리가 높아진 상황을 생각해보자.
                                    사업자금이 더 필요해진 B가 다시 시중은행 X에 간다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    은행원 X : 무슨 일로 오셨나요?<br />
                                    B : 대출을 조금 더 받으려고요. 요즘 금리가 어떻게 되나요?<br />
                                    은행원 : 요새 금리가 많이 올라서 이자를 많이 내셔야 해요. 10%에 가능 한데 괜찮으시겠어요?<br />
                                    B : 나중에 다시 올게요.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    <b>금리가 오르면 대출은 줄어든다.</b>
                                    사업 꿈나무, 기업들이 지나치게 높은 이자 부담을 버틸 자신이 없는 것이다.
                                    그렇게 신용 창출이 잘 이루어지지 못하면서 CREDIT의 양이 잘 늘어나지 않는다.
                                    돈이 메말라 버리는 것이다.
                                    이는 돈의 가격(금리)이 높아져서 돈 구하기가 힘들어진 상황을 말한다.



                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image26.png' className='ebook_main_content_image_80vw_500px' />
                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image27.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    그러던 어느 날 금리가 많이 내렸다는 소식이 들려온다.
                                    사업자금이 여전히 부족한 B가 혹시나 하는 마음으로 다시 은행에 찾아간다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    은행원 X : 무슨 일로 오셨나요?<br />
                                    B : 대출받으려고요. 요즘 금리가 어떻게 되나요?<br />
                                    은행원 : 요즘 저금리 시대가 이자율이 바닥에 붙어있어요. 1%에 가 능한데 괜찮으시겠어요?<br />
                                    B : 지금 당장 대출받을게요.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    <b>금리가 내리면 대출은 늘어난다.</b>&nbsp;
                                    사업 꿈나무, 기업들이 낮은 이자 부담을 버틸 자신이 생겨나는 것이다.
                                    이렇게 돈 구하기가 쉬운 상황에서는 신용 창출이 많이 이루어져 CREDIT이라는 돈이 많아지고,
                                    결국 돈의 양이 늘어난다.

                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image28.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    이렇게 금리(돈의 가격)가 내려가면 개인과 기업들이 돈 구하기가 쉬워져 한 국가의 경제에 돈이 출렁거린다.
                                    시중에 돈이 많은 상태를 돈을 물에 비유하여 <b>유동성이 많다</b>고 표현한다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image29.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    <b>금리가 오르내림에 따라 돈의 양이 조절</b>된다.
                                    금리가 오르면 돈의 양이 줄어들고,
                                    금리가 내리면 돈의 양은 늘어난다. <b>금리와 돈의 양은 반대로 움직인다.</b>
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image30.png' className='ebook_main_content_image_50vw_300px' />

                                <p className='ebook_main_content_ptag'>
                                    금리의 변화에 따라 돈의 양이 변화한다.
                                    그러면 돈의 양이 정확히 얼마나 늘어나고 줄어들까?
                                    돈의 양이 정확히 어느 수준에서 결정된다는 것일까?
                                    <b>CREDIT이라는 돈이 얼마나 창출되는지는 시중은행과 사업 꿈나무 간의 자유로운 대출거래에서 결정</b>된다.
                                    이는 대출'시장'에서 결정되는 것이기 때문에 수요와 공급의 법칙을 따른다.
                                    여기서 잠깐. 돈, 경제와 관련해서 빼놓을 수 없는 수요, 공급의 법칙을 짚고 넘어가자.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    <b>『 ※ 수요 공급의 법칙</b><br />
                                    모든 시장에는 수요·공급 법칙이 적용된다.
                                    이게 무슨 말일까.
                                    자동차 시장을 생각해보자.
                                    매년 사람들이 북적거리는 자동차 포럼이 이번 해에도 성대하게 열렸다.
                                    포럼에는 자동차를 사고 싶은 사람(ㄱ, ㄴ,ㄷ)과
                                    팔고 싶은 사람들(A, B, C)로 웅성거린다.
                                    행사 시간이 찾아오고 연사가 연단에서 소리친다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    연사 : 자동차를 \1.1억에 사고 싶은 사람 손 드세요.<br />
                                    가격이 너무 비싸다고 한탄하는 사람들의 속에서 매니아 ㄱ이 손을 든다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    연사 : \1억에 사고 싶은 사람 손 드세요.<br />
                                    눈치를 보던 ㄴ이 ㄱ을 뒤이어 손을 든다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    연사 : \9천만에 사고 싶은 사람 손 드세요.<br />
                                    모두가 싸다고 느끼고 ㄱ, ㄴ, ㄷ가 전부 손을 든다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    이렇게 자동차의 가격에 따라 사람들의 수요가 달라지며, 다음과 같이 수요곡선이 그어진다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image31.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    연사는 자동차에 대한 수요를 어느 정도 파악했다고 생각했다.
                                    이제 고개를 돌려 이제 자동차 판매자들에게 소리친다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    연사 : 자동차를 \9천만에 팔고 싶은 사람 손 드세요.<br />
                                    싼 가격에 팔면 수익이 적기 때문에 A만 손을 든다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    연사 : \1억에 팔고 싶은 사람 손 드세요.<br />
                                    1억 정도면 괜찮다고 생각한 B가 A를 뒤이어 손을 든다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    연사 : \1.1억에 팔고 싶은 사람 손 드세요.<br />
                                    비싸게 팔아 높은 수익을 얻을 기대감에 A, B, C가 모두 손을 든다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    이렇게 자동차의 가격에 따라 판매자의 공급이 달라지기에, 다음과 같은 공급곡선이 그어진다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image32.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    연사가 파악한 시장의 상황을 정리해보자.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    자동차를 사고 싶은 욕구 : ㄱ &gt; ㄴ &gt; ㄷ<br />
                                    자동차를 팔고 싶은 욕구 : A &gt; B &gt; C
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    상황1 : 자동차 가격이 \1.1억에선
                                    사고 싶은 사람 1명(ㄱ), 팔고 싶은 3명(A, B, C)이다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    상황2 : 자동차 가격이 \1억에선
                                    사고 싶은 사람 2명(ㄱ, ㄴ), 팔고 싶은 2명(A, B)이다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    상황3 : 자동차 가격이 \0.9억에선
                                    사고 싶은 사람 3명(ㄱ, ㄴ, ㄷ), 팔고 싶은 1명(A)이다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    상황1(자동차 가격 = \1.1억)에선 ㄱ의 입김이 강하다.

                                </p>

                                <p className='ebook_main_content_ptag'>
                                    ㄱ : 아니.. A, B, C야. 지금 사려는 사람이 나 혼자 밖에 없는데. \1.1억은
                                    너무 비싼 거 아니야? 셋 중 더 싸게 가져오는 사람의 제품 살게.
                                    10분 정도 있다가 다시 이야기하자.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    ㄱ이 잠시 자리를 뜨자 A, B, C는 서로 눈치를 보기 시작했다.
                                    몇 분이흐르자, A, B, C는 각자 자기 기업의 재무팀에 전화해서 가격을 낮출 것을 상의한다.
                                    상황1에선 가격이 하락 압력을 받는다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image33.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    상황3(자동차 가격 = \0.9억)에선 A의 입김이 강하다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    A : 아니.. ㄱ, ㄴ, ㄷ아.
                                    지금 팔려는 사람이 나 혼자밖에 없는데. \0.9억에 사겠다는 건 도둑놈 심보 아냐?
                                    더 높은 가격을 부르는 사람한테 팔게. 10분 정도 있다가 다시 이야기하자.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    A가 자리를 뜨자 ㄱ, ㄴ, ㄷ은 서로 눈치를 보기 시작했다.
                                    얼마나 돈을 더 써야할 지 모두 지갑을 만지작거린다.
                                    상황3에선 가격이 상승 압력을 받는다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image34.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    상황2(자동차 가격 = \1억)에선 분위기가 좋다.
                                    사고자 하는 사람이 ㄱ과 ㄴ 2명,
                                    팔고자 하는 사람이 A와 B 2명으로 딱 맞아떨어지기 때문이다.
                                    그래서 <b>수요와 공급곡선이 만나는 지점에서 물건의 가격이 결정된다.</b>

                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image35.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    상황을 다시 한번 돌이켜보자.
                                    시장에서 거래가 이루어지니 가장 사고 싶어 하는 사람(ㄱ, ㄴ)과
                                    가장 팔고 싶어 하는 사람(A, B)끼리 거래가 이루어졌다.
                                    이게 <b>시장의 효율성</b>이다.
                                    <b>시장에선 누가 억지로 규제하지 않더라도 가장 사고 싶어 하는 사람과 가장 팔고 싶어 하는 사람이
                                        서로 만나 거래</b>한다.
                                    이는 시장이 효율적으로 작동되는 상황의 기저에서 <b>수요공급법칙이 작동</b>하고 있기 때문이다.
                                    거래를 \1억에 성사시키고 흐뭇해하던 연사가 느닷없이 소리친다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    연사 : 제 소개가 늦었군요. 제 이름은 보이지 않는 손입니다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image36.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    시장에서 아무런 통제가 없음에도 판매자와 구매자가 서로 원하는 거래를 이루어내는 것은 어찌 보면 신기하다.
                                    이를 보이지 않는 손이 가격으로
                                    시장 속 주인공들의 행동을 조절해서,
                                    모두에게 합리적인 거래를 만들 어준다고 비유적으로 표현하기도 한다.	<b>』</b>

                                </p>

                                <p className='ebook_main_content_ptag'>
                                    본론으로 돌아와 보자.
                                    우리는 대출시장을 이야기하고 있었다.
                                    이곳에선 <b>금리가 조절됨에 따라 돈이 얼마나 늘어나는지가 결정</b>된다.
                                    금리는 돈의 가격이다.
                                    자동차 시장에서 자동차 가격이 조절되면서 판매자와 구매자를 이어주었듯,
                                    대출 시장에선 돈의 가격(금리)이 조절되면서 돈을 빌려주는 채권자와 돈을 빌리는 채무자를 이어준다.
                                    이는 대출 시장에서도 수요, 공급 법칙이 적용되기 때문이다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image37.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    상황을 구체적으로 살펴보면 다음과 같다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image38.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    돈의 관점에서 상황을 바라보면 돈을 공급해주는 시중은행이 공급곡선을 그려낸다.
                                    기업은 시중은행에 가서 돈을 빌리길 원하기에 수요곡선을 그려낸다.
                                    이 두 곡선이 만나는 지점에서 돈의 가격인 금리가 결정된다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    우리가 궁금한 <b>돈의 양은 수요곡선과 공급곡선이 만나는 지점의 거래량</b>이다.
                                    자동차 수요곡선과 공급곡선이 만나 2대의 자동차가 거래되었듯,
                                    대출 시장에서의 수요곡선과 공급곡선이 만나는 지점을 보면 얼만큼의 돈이 만들어졌는지 알 수 있다.
                                    대출이 거래되는 만큼 CREDIT이라는 돈이 새롭게 만들어지면서 최종적으로 돈의 양을 결정하는 것이다.
                                    금융경제에서 이런 방식으로 돈의 양이 결정된다.
                                    우리는 <b>금융경제서 돈의 양이 결정</b>된다는 정성적인 이해에,
                                    수요공급 법칙이란 원리를 얹어 돈의 양을 정량적으로 구해냈다.
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    그럼 실제로 한국의 돈의 양은 어느 정도일까.
                                    이렇게 만들어진 돈은 예금, 적금 같은 여러 금융자산에 들어가 있다.
                                    한국의 가장 대표되는 돈의 양은 M2라고 불리는데,
                                    이는 여러 금융자산에 들어있는 돈까지 포함해서 측정해낸다.
                                    그래서 오늘날 한국 돈의 양은 다음과 같다.

                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image39.png' className='ebook_main_content_image_80vw_500px' />
                            </div>
                            <div id="part-6_2">
                                <h2 className='ebook_h2_design'>
                                    금리 오르내림 효과 2 : 돈의 가치에 영향
                                </h2>
                                <p className='ebook_main_content_ptag'>
                                    금리의 오르내림은 돈의 양을 결정하는 데 영향을 미치는 것뿐만 아니라
                                    돈의 가치에도 영향을 끼친다.
                                    우선 직관적으론 이렇게 이해할 수 있다.
                                    이 세상의 모든 것들은 양이 늘어나면, 그것의 가치가 떨어진다.
                                    구하기 쉬운 것의 가치는 떨어지기 마련이기 때문이다.
                                    돈도 마찬가지다.
                                    돈의 양 이 늘어나면 돈의 가치는 떨어진다.&nbsp;
                                    <b>돈의 가치는 돈의 양과 반대로 움직인다.</b>
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image40.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    이 관계식에서 돈의 양을 빼버리고 더 간단하게 살펴보자.
                                    그렇게 <b>돈의 가치는 금리와 비례</b>한다.
                                </p>


                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image41.png' className='ebook_main_content_image_50vw_300px' />

                                <p className='ebook_main_content_ptag'>
                                    돈의 가치가 금리와 비례한다는 사실은 다음과 같은 관점으로도 이해할 수 있다.
                                    세계의 각 나라들은 자기만의 고유한 금리를 가지고 있다.
                                    그래서 어느 나라의 금리는 높고, 다른 나라의 금리는 낮다.
                                    이때 <b>금리가 높은 국가로 돈이 흘러 들어간다.</b>
                                </p>

                                <p className='ebook_main_content_ptag'>
                                    한국의 금리가 높고, 일본의 금리가 낮다고 해보자.
                                    그러면 투자자들이 일본보단 한국에 돈을 빌려주면서 투자를 할 것이다.
                                    왜냐하면 한국에서 일본보다 높은 수준의 이자수익을 얻어낼 수 있기 때문이다.
                                    금리가 높아지면 돈은 그곳의 냄새를 기가 막히게 알아차린 뒤, 흘러 들어간다.
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image42.png' className='ebook_main_content_image_80vw_500px' />

                                <p className='ebook_main_content_ptag'>
                                    <b>이러한 돈의 흐름은 각국의 돈의 가치에 영향</b>을 준다.
                                    특정 국가에 투자 하고 싶으면 그 나라의 돈이 필요하기 때문이다.
                                    한국에 투자하고 싶다면 원화가 필요하다.
                                    한국의 달달한 금리 수익을 맛보기 위해 많은 사람이 원화를 사려고 하니 한국 돈의 가치는 올라간다.
                                    이렇게 <b>금리가 높은 국가의 돈의 가치는 오른다.</b>
                                </p>

                                <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image43png' className='ebook_main_content_image_50vw_300px' />
                            </div>
                        </div>

                        <div id="part-6_5">
                            <h1 className='ebook_h1_design'>
                                금리가 높은 게 좋은 거야? 낮은 게 좋은 거야?
                            </h1>

                            <p className='ebook_main_content_ptag'>
                                금리가 오르내리면 어떤 일이 일어나는지 알았다.
                                이제 이와 관련된 가치판단을 한 번 해보자.
                                금리는 높은 게 좋을까? 낮은 게 좋을까?&nbsp;
                                <b>이에 대한 답은 실물경제의 상태에 따라 다르다.</b>&nbsp;
                                실물경제가 기준이 되는 이유는 실물경제의 발전이 우리들의 최종 목표라 가장 중요하기 때문이다.

                            </p>

                            <p className='ebook_main_content_ptag'>
                                <b>실물경제가 빠르게 굴러갈 땐, 성장이 잘 나올 땐 금리가 높은 것이 좋다.</b>&nbsp;
                                실물경제 시장이 과열되면, 과잉투자가 이루어져 부채가 쌓이는 등 문제가 많다.
                                이때 금리가 높아야 기업이 쉽사리 대출받지 못하여 경기가 더 빠른 속도로 뜨거워지는 것을 막아준다.
                                자동차가 지나치게 빨리 달릴 때, 중간중간 방지턱이 있어야 사고를 줄일 수 있는 것처럼 말이다.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                반대로 <b>실물경제가 침체하면 금리가 낮은 게 좋다.</b>&nbsp;
                                그래야 기업이 낮은 이자율로 쉽게 돈을 빌려 사업을 확장 시킬 수 있을 것이기 때문이다.
                                사업이 확장되면 경제 파이가 커지면서 일자리도 늘어나고, 사람들의 소득이 늘어나 경제가 살아난다.
                            </p>
                        </div>

                        <div id="part-7">
                            <h1 className='ebook_h1_design'>정리</h1>
                            <p className='ebook_main_content_ptag'>
                                우리는 모든 국가의 목표가 금융경제를 활용하여, 실물경제를 안정적으로 성장시키는 것이라고 배웠다.
                                그리고 이에 구체적인 실천 지침은 물가안정과 경제성장이었다.
                                첫 번째 실천 지침인 물가안정의 의미를 이해하기 위해 물가를 살펴볼 필요성을 느꼈다.
                                그리고 물가는 돈의 양을 물건의 양으로 나눈 것이니,
                                돈의 양이 어디서 어떻게 결정되는지를 우선적으로 알아본 것이다.
                                그렇게 <b>돈의 양이 금융경제에서 금리라는 키워드를 중심으로 결정</b>된다.
                            </p>

                            <p className='ebook_main_content_ptag'>
                                그 결정 과정은 다음과 같았다.<br />
                                STEP1. 돈의 양은 M0 와 CREDIT으로 구성된다.<br />
                                STEP2. 그 중 M0 &lt;&lt; CREDIT 이므로, CREDIT의 양이 중요하다.<br />
                                STEP3. CREDIT의 양을 결정하는 가장 중요한 요인은 금리였다.<br />
                                STEP4. 금리의 자기소개(이름, 별명, 쌩얼)를 살펴보았다.<br />
                                STEP5. 금리가 움직이면 <b>돈의 양이 결정</b>되고, 돈의 가치에도 영향을 준다.

                            </p>

                            <img src='/image/step1/part1/book/theory/ch1_1_financial_econ/ch1_1_financial_econ_image44.png' className='ebook_main_content_image_80vw_500px' />

                            <p className='ebook_main_content_ptag'>
                                금융경제에서 돈의 양이 결정되는 과정에 대해 알았으니,
                                이제 물건의 양이 결정되는 과정을 살펴보자.
                                물건의 양은 실물경제에서 결정이 된다.
                                물가안정의 진정한 의미를 알아내기 위한 마지막 단계인 '실물경제 이야기'를 시작해보자.
                            </p>
                        </div>
                    </div>

                    <BookFooter leftLink={'/step1/part1/book/ch1/financial-econ'} leftText={'금융경제'} rightLink={'/step1/part1/book/ch1/real-econ'} rightText={'실물경제'} />
                    <BookFloatButton />
                </div>
            </div>
        </>
    );
}

