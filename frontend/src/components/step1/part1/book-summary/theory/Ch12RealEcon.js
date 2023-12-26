

import { Anchor, ConfigProvider } from 'antd';
import BookAnnouncement from '../BookAnnouncement';
import BookFloatButton from '../BookFloatButton';

export default function Ch12RealEcon() {

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
                                            title: '실물경제 살펴보기',

                                        },
                                        {
                                            key: 'part-3',
                                            href: '#part-3',
                                            title: '실물경제의 구조',

                                        },
                                        {
                                            key: 'part-4',
                                            href: '#part-4',
                                            title: 'GDP 자기소개',
                                            children: [
                                                {
                                                    key: 'part-4_1',
                                                    href: '#part-4_1',
                                                    title: 'GDP 자기소개 1 : 이름',
                                                },
                                                {
                                                    key: 'part4_2',
                                                    href: '#part-4_2',
                                                    title: 'GDP 자기소개 2 : 별명',
                                                },
                                                {
                                                    key: 'part4_3',
                                                    href: '#part-4_3',
                                                    title: 'GDP 자기소개 3 : 쌩얼',
                                                },
                                            ],
                                        },
                                        {
                                            key: 'part-5',
                                            href: '#part-5',
                                            title: 'GDP 오르내림',
                                            children: [
                                                {
                                                    key: 'part-5_1',
                                                    href: '#part-5_1',
                                                    title: 'GDP 오르내림 효과 1',
                                                },
                                                {
                                                    key: 'part5_2',
                                                    href: '#part-5_2',
                                                    title: 'GDP 오르내림 효과 2',
                                                },
                                            ],
                                        },
                                        {
                                            key: 'part-6',
                                            href: '#part-6',
                                            title: 'GDP가 높은 게 좋은거야? 낮은 게 좋은거야?',
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
                        <div id="part-1">
                            <BookAnnouncement />
                            <p className='ebook_main_content_ptag'>
                                우리는 많은 국가의 첫 번째 실천 지침인 물가안정의 의미를 이해하기 위해,
                                물가의 구성요소인 물건의 양을 살펴보는 여정 속에 있다.
                                지금부턴 물건의 양 결정 원리가 녹아있는 실물경제를 들여다볼 것이다.
                                그런데 <b>실물경제에 대해 알아가다 보면 소가 뒷걸음치다 쥐를 잡아버리듯,
                                    두 번째 실천 지침인 경제성장의 의미가 무엇인지 먼저 알게 될 것</b>이다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image1.png' className='ebook_main_content_image_80vw_500px' />
                        </div>

                        <div id="part-2">
                            <h1 className='ebook_h1_design'>실물경제 살펴보기</h1>
                            <p className='ebook_main_content_ptag'>
                                <b>물건은 다양한 상품과 서비스를 의미</b>한다.
                                이들은 모두 실물경제에서 뿜어져 나온다.
                                그래서 물건의 양이 결정되는 과정을 살펴본다는 것은 실물경제가 어떻게 돌아가는지 알아본다는 것과 같은 말이다.
                            </p>
                            <p className='ebook_main_content_ptag'>
                                실물경제의 주인공은 개인과 기업이다.
                                개인은 기업에 출근해서 열심히 일한다.
                                그 결과 기업에선 가치 있는 물건들이 쏟아져 나온다.
                                농업에서 쌀이, 제조업에서 반도체가, 운송업에서 여객 서비스가 만들어지듯 말이다.
                                실물경제는 우리의 삶을 윤택하게 만들어주는 물건들을 만들어준다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image2.png' className='ebook_main_content_image_80vw_500px' />
                        </div>

                        <div id="part-3">
                            <h1 className='ebook_h1_design'>실물경제의 구조</h1>
                            <p className='ebook_main_content_ptag'>
                                실물경제 속에는 다양한 산업들이 존재한다.
                                제조업, 목축업, 여가산업, 가구산업, 화학산업, 항공산업, 법률서비스업 등 셀 수 없이 많다.
                                오늘날 한국의 실물경제는 다음과 같이 다양한 산업들이 있다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image3.png' className='ebook_main_content_image_80vw_500px' />
                            <p className='ebook_main_content_ptag'>
                                이러한 실물경제 속 각각의 산업들은 제 역할을 다하면서 경제를 빠르게 성장시킨다.
                                생김새도 복잡스러운 실물경제가 제각기 다른 속도로 성장하니,
                                그 속에 사는 우리는 이러한 변화 속에서 현기증을 느낀다.
                            </p>
                            <p className='ebook_main_content_ptag'>
                                이 어지러움을 덜기 위해 실물경제의 구조를 살펴볼 것이다.
                                실물경제의 모습을 선명하게 볼 수 있어야 어느 산업에서 어느 정도의 경제성장이 일어나는지 파악할 수 있기 때문이다.&nbsp;
                                <b>실물경제의 구조는 우리에게 경제성장의 원천을 알려준다.</b>
                            </p>
                            <p className='ebook_main_content_ptag'>
                                실물경제는 둘로 쪼개볼 수 있다.
                                인간세계와 그 외의 세계로.
                                그 외의 세계는 인간이 정한 규칙대로 작동되지 않기에, 자연세계라고 부른다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image4.png' className='ebook_main_content_image_80vw_500px' />
                            <p className='ebook_main_content_ptag'>
                                우리는 어릴 때부터 각 세상의 작동원리를 열심히 배운다. 인간세계의
                                작동원리를 배우면 문과생, 자연세계의 원리를 배우면 이과생이다.
                            </p>
                            <p className='ebook_main_content_ptag'>
                                인간세계에 대해 배우는 문과의 순수기초학문은 인간 그 자체를 탐구한다.
                                철학, 심리학, 역사학, 고고학, 언어학 같은 것들이 대표적이다.
                                그리고 이보다 더 현실적인 응용학문에는 법학, 정치학, 경영학 같은 것들이 있다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image5.png' className='ebook_main_content_image_80vw_500px' />
                            <p className='ebook_main_content_ptag'>
                                자연세계에 대해 배우는 이과의 순수기초학문은 자연 그 자체를 탐구한다.
                                이들은 수학이라는 언어로 쓰여있는데, 대표적으로 물리학, 화학, 생명과학이 있다.
                                이를 바탕으로 현실 속에서 직접적인 영향을 주는 응용학문에는
                                전자공학, 건축공학, 화학생명공학, 기계공학, 컴퓨터공학, 의학, 약학 등이 있다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image6.png' className='ebook_main_content_image_80vw_500px' />
                            <p className='ebook_main_content_ptag'>
                                이 <b>모든 분야가 실물경제에 포함되며,
                                    각각의 분야는 전부 경제성장의 재료</b>가 된다.
                                오늘날 우리는 과학기술이 만들어낸 산업기반 위에서 좀 더 인간다운 삶을 살기 위해 고민하면서 살아간다.
                                자연세계에서 이과생들이 만들어낸 역동적인 기술력으로 상품과 서비스의 생산력을 갖춰 풍요로움을 만들어내고,
                                거기에 문과생들이 사법 제도를 개선하고 금융제도를 발전시키는 등 인간다움을 듬뿍 묻혀 더 나은 세상을 만들어가는 것이다.
                            </p>
                        </div>

                        <div id="part-4">
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image7.png' className='ebook_main_content_image_80vw_500px' />
                            <h1 className='ebook_h1_design'>GDP 자기소개</h1>
                            <div id="part-4_1">
                                <h2 className='ebook_h2_design'>GDP 자기소개 1 : 이름 뜻</h2>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image8.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    이런 경제성장의 소스를 잘 활용해서 가치 있는 물건(상품, 서비스)들이 쏟아져나오면 살기 좋은 세상에 가까워진다.
                                    그래서 얼마나 발전된 세상에서 사는지 감을 잡아보기 위해 <b>한 국가 내에서 물건들이 얼마나 뿜어져 나오는지 아는 것</b>이 중요하다.&nbsp;
                                    <b>이를 측정한 지표가 국내총생산(GDP : Gross Domestic Product)이다.</b>&nbsp;
                                    국내에서 총 만들어진 생산물의 양을 확인 해봄으로써 한 국가의 경제 파이 크기를 재보는 것이다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image9.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    그럼 실제로 실물경제에서 만들어진 물건의 양(GDP)을 어떻게 측정할까?
                                    GDP는 한국은행에서 측정하므로 한국은행 팀장님의 생각에 귀 기울여 보자.
                                    처음에는 가장 원초적인 방법을 생각해낸다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    팀장 : 자자. GDP는 모든 기업이 만들어낸 물건의 총합이니, 실제 실사를 가서 측정합시다.
                                    그것만큼 정확한 게 없을 테니까요.
                                    김대리는 스마트폰을 만드는 기업 ㄱ에,
                                    박대리는 전기자동차를 만드는 기업 ㄴ에 가서 사장님한테 올해 얼마나 생산했는지 물어보고 오세요.
                                    내일은 김대리가 기업 ㄷ에, 박대리가 기업 ㄹ에 갔다 오세요.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    김대리는 스마트폰 제조 기업 ㄱ에, 박대리는 전기자동차 제조 기업 ㄴ에 나가서 조사를 해왔다.
                                    한 국가에는 더 많은 기업과 다양한 물건들이 있으니,
                                    특정 해(2021년)의 GDP를 다음과 같이 써볼 수 있다.
                                    이들은 GDP를 생각해 볼 때 가장 먼저 떠올릴 수 있는 식이라 명목 GDP라고도 부른다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image10.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    한국도 산업 분야별로 생산된 물건의 양을 측정한다.
                                    그리고 각 분야가 차지하는 비중을 살펴보면 다음과 같다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image11.png' className='ebook_main_content_image_80vw_500px' />
                            </div>


                            <div id="part-4_2">
                                <h2 className='ebook_h2_design'>GDP 자기소개 2 : 별명 #GDP = C + I + G + NX</h2>
                                <p className='ebook_main_content_ptag'>
                                    대리들은 며칠 동안의 실사에서 땀을 뻘뻘 흘리면서 돌아와 이야기한다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    김대리, 박대리 : 우리나라에 기업이 수백만 개가 있습니다.
                                    기업을 전부 돌아다니면서 측정하는 건 너무 힘듭니다.<br />
                                    팀장님 : 아, 그런가?
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    팀장은 초췌해진 직원들을 보면서 고민한다.
                                    잠시 후, 기막힌 아이디어가 떠오른 팀장님은 무릎을 탁 친다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    팀장 : 역시 내가 괜히 팀장을 단 게 아니지. 자자.
                                    기업들이 만들어낸 물 건의 양을 잴 수 있는 또 다른 방법이 생각났어요.
                                    우리나라의 설탕 제조 기업이 \1000어치 설탕을 생산해냈다고 해봅시다.
                                    기업들의 물건을 누가 사지요?
                                    경제주체 중 개인, 기업, 정부가 사지요.
                                    우리나라처럼 수출입이 활발한 나라에선 외국인들도 물건을 많이들 사 갈 겁니다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    개인이 집에서 달고나를 먹으려고 \100,
                                    기업이 마카롱을 만들기 위해 \200,
                                    정부가 무상급식을 위해 \300,
                                    외국인이 빼빼로를 만들려고 \400 을 사 갔다고 해보죠.
                                    그러면 설탕 제조기업이 만들어낸 설탕(\1000) = 개인(\100) + 기업(\200) + 정부(\300) + 외국인(\400)이 됩니다.&nbsp;
                                    <b>개인, 기업, 정부, 외국인들이 얼마나 지출했는지만 파악하면 GDP를 구해낼 수 있을 거예요.</b>
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    앞으로 개인이 돈 쓰는 것은 소비(Consumption)의 약자 C,
                                    기업이 돈 쓰는 것은 투자(Investment)의 약자 I,
                                    정부가 돈 쓰는 것은 정부지출(Government expenditure)의 약자 G,
                                    외국인이 돈 쓰는 것은 순수출(Net Export)의 약자 NX라고 합시다.
                                    외국인이 우리나라에 와서 물건을 사는 것(수출)에서 우리나라 사람이 외국에 나가서 물건을 사오는 것(수입)을 빼면
                                    외국에서 최종적으로 물건을 사들인 양(순수출)이 나올 겁니다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image12.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    김대리, 박대리 : !!
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image13.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    한 국가에서 만들어진 물건의 총량(GDP)은 C + I + G + NX로도 측정된다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image14.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    그래서 GDP의 별명은 C + I + G + NX이다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image15.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    한국은행에선 GDP를 경제주체가 지출한 양으로 구분 지어서도 발표한다.
                                    한 국가의 경제 파이를 누가 먹는지에 따라서도 분류해보는 것이다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image16.png' className='ebook_main_content_image_80vw_500px' />
                            </div>

                            <div id="part-4_3">
                                <h2 className='ebook_h2_design'>GDP 자기소개 3 : 쌩얼 #실질GDP #경제성장률</h2>
                                <p className='ebook_main_content_ptag'>
                                    한 국가에서 만들어진 물건의 총량을 나타내는 GDP는 매년 측정된다.
                                    가령 GDP가 2020년에 \2000조, 2021년에 \2200조로 늘어난 나라가 있다고 해보자.
                                    이는 해당 국가의 경제 파이가  대략 10%정도 커진 것(\2200조 = \2000조 X (1+10%))으로 볼 수 있다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image17.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    그런데 좀만 더 생각해보자.
                                    뭔가 이상하다.
                                    우리의 관심사는 <b>물건의 양이 얼마나 더 생산되었는지</b>, 즉 <b>Q가 얼마나 늘어났는지</b>이다.
                                    그런데 명목 GDP의 증가분(\200조 = \2200조 - \2000조)에는 Q의 증가분과 P의 증 가분이 모두 녹아있다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    명목 GDP가 늘어난 이유가 스마트폰 개수가 1개에서 2개로 늘어난 것이라면
                                    통신 서비스를 누리는 사용자가 늘어나 사회의 효용이 증가한 것 이다.
                                    하지만 그 원인이 스마트폰 가격 상승 때문이라면 실질적으로 변한 것은 없다.
                                    한 사람이 들고 있는 스마트폰의 가격이 비싸진 것일 뿐이다.
                                    이는 한 국가 안에서의 효용을 증가시키지 않는다. 이걸 가지고 경제 파이가 커졌다고 하긴 애매하다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image18.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    실질적으로 경제를 성장시키는 것은 Q의 증가분이므로, 명목 GDP 증가분에서 P의 증가분은 걸러 줘야 한다.
                                    P의 증가분은 경제 파이가 얼마나 커가는지가 궁금한 우리를 헷갈리게 할 뿐이기 때문이다.
                                    이는 <b>기준년도를 설정하고 GDP를 측정함으로써 해결</b>한다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    2021년의 GDP를 구할 때, 2020년도의 물가수준을 사용하는 것이다.
                                    2021년 스마트폰 가격 대신 2020년 스마트폰 가격을, 2021년 전기자동차 가격 대신 2020년 전기자동차 가격을,
                                    다른 물건들도 이와 마찬가지로 2020년의 가격을 각각 적용한다.
                                    그렇게 측정된 GDP에는 물가상승 효과가 포함되지 않는다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image19.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    기준년도를 잡아주니, GDP가 \2150조로 새롭게 측정되었다.
                                    물가 상승분 \50조(\2200조 - \2150조)만큼이 걸러진 것이다.
                                    이렇게 명목 GDP에서 <b>물가 요소를 걸러내 준 GDP가 실질적인 경제 파이의 크기를 제대로 보여준다고 해서 실질 GDP</b>라고 부른다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image20.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    명목금리의 쌩얼이 실질금리였듯, 명목 GDP의 쌩얼은 실질 GDP이다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image21.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    실질 GDP는 한 국가의 경제 파이 크기를 나타내기에 많은 경제지표의 기준이 된다.
                                    그래서 <b>경제지표 중 GDP를 기준으로 측정</b>되는 모습을 쉽게 찾아볼 수 있다.
                                    예를 들어 'GDP 대비 정부 부채'는 한 국가의 경제 파이 크기에 비해, 정부가 짊어지고 있는 부채의 양을 나타낸다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    한국의 실질 GDP는 다음과 같다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image22.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    지금까지의 실물경제 속에서 뽑아낸 키워드 GDP의 자기소개를 정리해보면 다음과 같다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image23.png' className='ebook_main_content_image_80vw_500px' />
                            </div>
                        </div>

                        <div id="part-5">
                            <h1 className='ebook_h1_design'>GDP 오르내림</h1>
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image24.png' className='ebook_main_content_image_50vw_300px' />
                            <div id="part-5_1">
                                <h2 className='ebook_h1_design'>GDP의 오르내림 효과 1 : 경제성장의 의미 #경제성장률</h2>
                                <p className='ebook_main_content_ptag'>
                                    이제 우리는 경제성장의 의미를 정확히 이해할 준비를 마쳤다. 경제성장은 실질 GDP가 늘어난다는 것과 똑같은 말이다.
                                    실질 GDP의 증가는 <b>한 국가 안에서 가치 있는 물건의 양이 늘어나 사람들의 삶을 윤택하게 만들기</b> 때문이다.
                                    그래서 <b>경제성장률은 '경제 파이의 크기가 얼마나 빠르게 커지는지'를 나타내며, 이는 '실질 GDP의 변화율'로 측정</b>된다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image25.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    한국의 경제성장률은 다음과 같다.
                                    이를 통해 1900년대 후반 고성장 시대에서 2000년대를 들어서면서 저성장 시대가 찾아왔음을 알 수 있다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image26.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    많은 국가가 경제성장을 원한다는 말은 실질 GDP를 빠르게 증가시켜 경제성장률을 높이고자 하는 것이다.
                                    이를 위한 구체적인 방법에는 2가지가 있다.&nbsp;
                                    <b>실물경제는 양적성장과 질적성장 2가지 방식으로 성장</b>한다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    양적성장은 생산요소(노동과 자본)를 늘리면서 이루어진다.
                                    이는 질적성장에 비해 난이도가 낮다.
                                    공장을 차리고 단순노동을 통한 성장은 고도로 숙련된 노동자와 자본을 필요로 하지 않기 때문이다.
                                    많은 개발도상국, 신흥국들이 처음 경제개발을 시작할 때 양적성장으로 빠르게 성장한다.
                                    우리나라도 1900년대 중후반에 수출주도성장을 일궈낼 때, 가발, 철강 산업 등으로 양적성장을 할 수 있♘다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    그래서 신흥국은 선진국을 따라잡을 가능성이 있다.
                                    신흥국은 양적성장, 질적성장을 둘 다 하면 되지만,
                                    선진국은 이미 양적성장이 상당히 이루어진 상태라 질적성장만 할 수 있기 때문이다.
                                    하지만 신흥국이 선진국을 역전하는 것은 그리 만만하지 않다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    질적성장이 난이도가 높기 때문이다.
                                    질적성장은 다양한 지식을 조합해서 삐까뻔쩍한 레시피를 개발하는 과정을 통해 이루어진다.
                                    대규모 R&D 투자를 통해 첨단산업을 발전시키는 것이 대표적인 질적성장이다.
                                    이는 단순히 생산요소(노동, 자본)를 늘린다고 되는 것이 아니며, 교육시스템, 사회적 문화 등
                                    건강한 제도와 분위기가 탄탄히 뒷받침되어 있을 때 가능하다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    2가지 방식으로 만든 물건을 팔아서 돈을 벌어들이면서 경제성장이라는 일련의 과정이 마무리된다.
                                    이때 한 국가의 경제성장 방식이 '물건을 어디에 팔 것인지'에 따라서도 2가지로 구분된다.
                                    자국 내에서 물건을 팔면 내수라고, 외국에다 물건을 팔면 수출이라고 부른다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image27.png' className='ebook_main_content_image_80vw_500px' />
                            </div>

                            <div id="part-5_2">
                                <h2 className='ebook_h2_design'>GDP 오르내림 효과 2 : 돈의 가치에 영향</h2>
                                <p className='ebook_main_content_ptag'>
                                    어느 특정 국가가 위의 방식으로 성장을 일으켜 돈을 많이 벌면,
                                    GDP가 크게 오르면서 경제성장률이 높게 나오면, 그 국가로 돈이 빨려 들어간다.
                                    그 국가의 상장된 기업들이 성장을 일으키면서 들썩거리는 주식시장,
                                    부동산 기업들이 성장을 일으키면 들썩거리는 부동산 시장에서 수익을 짭짤히 얻을 수 있기 때문이다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image28.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    특정 국가의 주식시장과 부동산 시장에 투자하기 위해선 그 나라의 돈이 필요하다.
                                    한국의 주식, 부동산을 원화로 거래되기 때문에 이에 투자하려면 원화가 필요한 것처럼 말이다.
                                    그렇게 실물경제에서 경제성장이 크게 나타나는 국가의 돈의 가치는 올라간다.
                                    그래서 <b>돈의 가치는 경제성장률하고 비례</b>한다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image29.png' className='ebook_main_content_image_50vw_300px' />
                                <p className='ebook_main_content_ptag'>
                                    우리는 이제 <b>돈이 어디로 흐를지 맥을 잡아낼 수 있게 되었다.</b>&nbsp;
                                    돈은 매력적인 곳을 찾아다닌다.
                                    금리를 높게 주는 곳과 경제성장률이 세게 나오 는 곳으로 흘러 다니는 것이다.
                                    금융경제에서 살펴봤듯 금리를 높게 주는 곳에 돈을 빌려주어 많은 이자수익을 얻을 수 있었다.
                                    실물경제에선 경제 성장률이 높게 나오는 곳에서는 주식, 부동산 수익을 벌어들일 수 있기에 그곳으로 돈이 흘러 들어간다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    이러한 돈의 흐름은 돈의 가치를 결정한다. 한국이 매력적인 투자처로 꼽히면 자금이 몰려들면서 원화의 가치가 높아진다.
                                    반대로, 한국에 금리도 낮고 성장률도 낮아 수익을 보기 어려울 것 같으면
                                    돈은 순식간에 한국을 빠져나간다.
                                    원화를 팔고 도망가기에 원화 가치는 떨어지기 마련이다.
                                    <b>'금융경제의 금리'와 '실물경제의 경제성장률'이 돈의 흐름을 좌지우지하면서,
                                        돈의 가치를 결정하는 양대 산맥</b>이다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image30.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    모든 국가는 자국의 돈의 가치가 안정적이길 원한다.
                                    금리, 성장률이 어느 정도 높아 가치가 보존되길 바라는 것이다.
                                    하지만 이를 달성하는 것은 어렵다.
                                    왜냐하면 <b>금리와 성장률은 서로 반대로 움직이기 때문</b>이다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    금리가 높다는 말은 무엇일까? 다시 처음으로 돌아가서 생각을 해보자.
                                    금리는 이자율이다.
                                    그리고 이자율은 대출이 이루어질 때 생긴다.
                                    금리가 높으면 이자율이 높아 사람들이 대출을 잘 받지 않는다.
                                    갚아야 할 이자가 너무 많아지기 때문이다.
                                    돈을 잘 빌리지 않는다는 것은 기업이 사업을 늘려가지 않는 것이기에,
                                    경제 파이가 커질 가능성이 줄어든다.
                                </p>
                                <p className='ebook_main_content_ptag'>
                                    그래서 중앙은행은 경기가 어려울 때 금리를 내린다.
                                    그래야 기업들이 낮은 이자율에 부담 없이 돈을 빌린 뒤 경제 파이를 키울 수 있을 테니까.
                                    그렇게 기업이 성장을 해내면 <b>금리는 약간 낮아져도 성장률이 크게 오르면서 결국 돈의 가치를 높인다.</b>&nbsp;
                                    금융경제에서 1보 후퇴를 해주면 실물경제에서의 2보 전진을 할 수 있는 것이다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image31.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    반대로 경기가 과열되어 있을 때 중앙은행은 금리를 올려서 찬물을 끼얹는다.
                                    기업들의 이자 부담을 확 높여서 대출받기 어렵게 만들어 더 이상 버블이 끼지 않도록 한다.
                                    경제안정을 우선시하면서 성장률을 일정부분 포기하는 것이다.
                                </p>
                                <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image32.png' className='ebook_main_content_image_80vw_500px' />
                                <p className='ebook_main_content_ptag'>
                                    그리고 <b>금리와 (경제)성장률 사이에는 시차가 존재</b>한다.
                                    금융경제에서 금리를 올리고 내리는 것은 단기적으로 빠르게 이루어질 수 있다.
                                    하지만 그 효과가 실물경제의 경제성장률을 끌어올리고 내리는 데에는 오랜 시간이 필요하다.
                                    기업이 실제로 성장할 땐 공장을 짓고 기계 돌려 물건을 생산하는데,
                                    침체할 땐 해고가 이루어지는 데 긴 시간이 필요하기 때문이다.
                                    밥을 먹는 것은 20분도 안 걸리지만, 이를 소화 시키고 영양소가 흡수되려면 오랜 시간이 필요한 것과 비슷하다.
                                </p>
                            </div>
                        </div>

                        <div id="part-6">
                            <h1 className='ebook_h1_design'>GDP가 높은 게 좋은 거야? 낮은 게 좋은 거야?</h1>
                            <p className='ebook_main_content_ptag'>
                                이렇게 돈의 가치를 결정할 만큼 큰 영향력을 가진 GDP와 경제성장률은 높으면 높을수록 좋은 것일까?
                                맞다. <b>GDP와 경제성장률은 높은 게 좋다.</b>&nbsp;
                                GDP가 높다는 것은 생산 측면에선 실물경제에 가치 있는 물건들이 쏟아 지고 있음을 나타내고,
                                지출 측면에선 개인, 기업, 정부, 외국인이 많은 물 건을 사들이면서 실물경제에서 거래가 활발히 일어나고 있음을 나타내기 때문이다.
                                GDP가 높다는 것은 실물경제가 원활히 돌아가고 있다는 증거 이다.
                            </p>
                            <p className='ebook_main_content_ptag'>
                                다만, 실물경제가 지나친 속도로 빠르게 증가하는 것을 경계할 필요는 있다.
                                기업들이 실물경제의 성장에 대한 기대로 사업자금을 대출받아 사업을 확장 시키면서 빠르게 성장한다.
                                하지만 빌려낸 모든 돈이 사업확장을 성공으로 만들진 못한다.
                                투자된 여러 사업 중 상당수는 실패한다.
                                사업이 실패하면 빚을 갚아내긴 어려워진다.
                                이렇게 쌓여가는 부채는 나중에 결국 문제를 일으킨다.
                                GDP와 경제성장률이 높아질 땐 부채 폭탄도 같이 커지고 있다는 사실을 잊어버리면 안 된다.
                            </p>
                        </div>

                        <div id="part-7">
                            <h1 className='ebook_h1_design'>정리</h1>
                            <p className='ebook_main_content_ptag'>
                                우리는 모든 국가의 목표가 금융경제를 활용하여, 실물경제를 안정적으로 성장시키는 것이라고 배웠다.
                                그리고 이 목표의 구체적인 실천 지침은 물가안정과 경제성장이었다.
                                첫 번째 실천 지침인 물가안정의 의미를 이해하기 위해 물가를 이해할 필요성을 느꼈다.
                                그리고 물가는 돈의 양을 물건의 양으로 나눈 것이고, 물건의 양이 어디서 어떻게 결정되는지 알아본 것이다.
                                그렇게 <b>물건의 양이 실물경제에서 GDP라는 키워드를 중심으로 결정되는 과정</b>을 살펴보았다.
                                다음의 과정을 거치면서 말이다.
                            </p>
                            <img src='/image/step1/part1/book/theory/ch1_2_real_econ/ch1_2_real_econ_image33.png' className='ebook_main_content_image_80vw_500px' />
                            <p className='ebook_main_content_ptag'>
                                STEP1. 실물경제의 구조를 살펴봄으로써 경제성장의 뿌리(여러 학문, 산업 분야들)를 살폈다.<br />
                                STEP2. 실물경제 속 키워드 GDP의 자기소개(이름 뜻, 별명, 쌩얼)를 알아보았다.<br />
                                STEP3. GDP의 오르내림이 <b>경제성장의 의미</b>를 알려주고, 돈의 가치에 영향을 준다.
                            </p>
                            <p className='ebook_main_content_ptag'>
                                이제 '금융경제에서 만들어진 돈의 양'과 '실물경제에서 만들어진 물건의 양'이 어떻게 결정되는지 알았다.
                                첫 번째 실천 지침인 물가안정을 이해할 모든 준비가 끝났다.
                            </p>
                        </div>
                    </div>
                    <BookFloatButton/>
                </div>
            </div>
        </>
    );
}

