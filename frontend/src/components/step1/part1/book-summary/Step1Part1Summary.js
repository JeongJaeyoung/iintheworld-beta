import { useEffect } from 'react';
import './Step1Part1Summary.css';
import BookFooter from './BookFooter';
import BookAnnouncement from './BookAnnouncement';
import YoutubeBottomRightButton from './YoutubeBottomRightButton';
import BookFloatButton from './BookFloatButton';

// import { Anchor, Col, Row } from 'antd';
import './LeftSidebarAnchor.css';

// import footer_right_arrow_icon from '../../components/image/footer_right_arrow_icon.png';

export default function Step1Part1Summary() {
    useEffect(() => {
        let yOffset = 0;
        let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
        let currentScene = 0; // 현재 활성화된 씬
        let enterNewScene = false; // 새로운 씬이 시작된 순간 true

        const sceneInfo = [
            {
                // part1_1-chapter0
                heightNum: 3.5,
                scrollHeight: 0,
                objs: {
                    left_sidebar_part1_title: document.querySelector('#left_sidebar_part1_title'),

                    container: document.querySelector('#part1_1-chapter0'),
                    chapter0_intro_message: document.querySelector('#chapter0_intro_message'),
                    chapter0_message_span: document.querySelector('#chapter0_message_bold'),
                    worldmap_sticky: document.querySelector('#chapter0_sticky_0'),

                    japan_flag: document.querySelector('#japan_image'),
                    europe_flag: document.querySelector('#europe_image'),
                    china_flag: document.querySelector('#china_image'),
                    usa_flag: document.querySelector('#usa_image'),
                    korea_flag: document.querySelector('#korea_image'),

                    japan_model_flag: document.querySelector('#japan_model_image'),
                    europe_model_flag: document.querySelector('#europe_model_image'),
                    china_model_flag: document.querySelector('#china_model_image'),
                    usa_model_flag: document.querySelector('#usa_model_image'),
                    korea_model_flag: document.querySelector('#korea_model_image'),

                    quesiont_mark: document.querySelector('#ch0_question_mark_image'),
                    ahha_logo: document.querySelector('#ch0_ahha_image'),

                },
                values: {
                    country_flag_opacity_in: [1, 0, { start: null, end: 0.6 }],
                    country_flag_opacity_out: [0, 1, { start: null, end: 0.6 }],
                }
            },
            {
                // part1_1-chapter1
                heightNum: 10,
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#part1_1-chapter1'),

                    div_for_get_scroll_length: document.querySelector('#div_for_get_scroll_length'),

                    map_image: document.querySelector('#map_image'),

                    // 1번째 이야기 - 금리, GDP, 물가, 환율
                    ch1_hash_keyword_interest_rate: document.querySelector('#ch1_hash_keyword_interest_rate'),
                    ch1_hash_keyword_gdp: document.querySelector('#ch1_hash_keyword_gdp'),
                    ch1_hash_keyword_price_index: document.querySelector('#ch1_hash_keyword_price_index'),
                    ch1_hash_keyword_exchange_rate: document.querySelector('#ch1_hash_keyword_exchange_rate'),

                    interest_rate_hash_image: document.querySelector('#interest_hash_image'),
                    gdp_hash_image: document.querySelector('#gdp_hash_image'),
                    price_index_hash_image: document.querySelector('#price_index_hash_image'),
                    exchange_rate_hash_image: document.querySelector('#exchange_rate_hash_image'),

                    ch1_content: document.querySelector('#chapter1_content'),

                    // 2번째 이야기 - 개인, 기업, 시중은행, 중앙은행, 정부

                    left_sidebar_study_map_bold: document.querySelector('#left_sidebar_study_map_bold'),

                    left_sidebar_step1_title_bold: document.querySelector('#left_sidebar_step1_title_bold'),
                    left_sidebar_step1_1_bold: document.querySelector('#left_sidebar_step1_1_bold'),
                    left_sidebar_step1_2_bold: document.querySelector('#left_sidebar_step1_2_bold'),
                    left_sidebar_step1_3_bold: document.querySelector('#left_sidebar_step1_3_bold'),
                    left_sidebar_step1_4_bold: document.querySelector('#left_sidebar_step1_4_bold'),

                    left_sidebar_step2_title_bold: document.querySelector('#left_sidebar_step2_title_bold'),
                    left_sidebar_step2_individual_bold: document.querySelector('#left_sidebar_step2_individual_bold'),
                    left_sidebar_step2_firm_bold: document.querySelector('#left_sidebar_step2_firm_bold'),
                    left_sidebar_step2_commercial_bank_bold: document.querySelector('#left_sidebar_step2_commercial_bank_bold'),
                    left_sidebar_step2_central_bank_bold: document.querySelector('#left_sidebar_step2_central_bank_bold'),
                    left_sidebar_step2_government_bold: document.querySelector('#left_sidebar_step2_government_bold'),

                    left_sidebar_step3_title_bold: document.querySelector('#left_sidebar_step3_title_bold'),
                    left_sidebar_step3_1_bold: document.querySelector('#left_sidebar_step3_1_bold'),
                    left_sidebar_step3_2_bold: document.querySelector('#left_sidebar_step3_2_bold'),
                    left_sidebar_step3_3_bold: document.querySelector('#left_sidebar_step3_3_bold'),
                    left_sidebar_step3_4_bold: document.querySelector('#left_sidebar_step3_4_bold'),

                    ch1_content: document.querySelector('#chapter1_content'),
                    ch2_content: document.querySelector('#chapter2_content'),

                    ch2_hash_keyword_individual: document.querySelector('#ch2_hash_keyword_individual'),
                    ch2_hash_keyword_firm: document.querySelector('#ch2_hash_keyword_firm'),
                    ch2_hash_keyword_commercial_bank: document.querySelector('#ch2_hash_keyword_commercial_bank'),
                    ch2_hash_keyword_central_bank: document.querySelector('#ch2_hash_keyword_central_bank'),
                    ch2_hash_keyword_government: document.querySelector('#ch2_hash_keyword_government'),

                    ch2_individual: document.querySelector('#ch2_individual_image'),
                    ch2_firm: document.querySelector('#ch2_firm_image'),
                    ch2_commercial_bank: document.querySelector('#ch2_commercial_bank_image'),
                    ch2_central_bank: document.querySelector('#ch2_central_bank_image'),
                    ch2_government: document.querySelector('#ch2_government_image'),


                    // 3번째 이야기 - 경기 CYCLE
                    ch3_content: document.querySelector('#chapter3_content'),

                    ch3_hash_keyword_typical_cycle: document.querySelector('#ch3_hash_keyword_typical_cycle'),
                    ch3_hash_keyword_developed_cycle: document.querySelector('#ch3_hash_keyword_developed_cycle'),
                    ch3_hash_keyword_emerging_cycle: document.querySelector('#ch3_hash_keyword_emerging_cycle'),

                    ch3_cycle_svg_wrapper: document.querySelector('#ch3_cycle_svg_wrapper'),
                    ch3_cycle_svg_image_path: document.querySelector('#ch3_cycle_svg_image_path'),
                    ch3_cycle_end_triangle: document.querySelector('#ch3_cycle_end_triangle'),
                },
                values: {
                    map_image_rotate_deg: [0, 60, { start: null, end: 0.25 }], /* section1 :0.2시작 0.3끝남 */
                    map_image_move_to_up: [20, 35, { start: null, end: 0.25 }], /* 지도 돌리면서 전반적인 위치 위로 이동, 그래야 환율 나타낼 룸이 생김 */
                    map_image_position_relative_or_fixed: [null, null, { start: null, end: 0.9 }],

                    // 1번째 이야기 - 금리, GDP, 물가, 환율
                    ch1_interest_rate_opacity_in: [0, 1, { start: 0.275, end: 0.3 }], /* 0.3에서 시작해서 0.4에서 끝남*/
                    ch1_gdp_opacity_in: [0, 1, { start: 0.3, end: 0.325 }],
                    ch1_price_index_opacity_in: [0, 1, { start: 0.325, end: 0.35 }],
                    ch1_exchange_rate_opacity_in: [0, 1, { start: 0.35, end: 0.375 }],

                    ch1_content_opacity_out: [1, 0, { start: 0.38, end: 0.4 }],
                    ch1_interest_rate_opacity_out: [1, 0, { start: 0.38, end: 0.4 }], /* 0.3에서 시작해서 0.4에서 끝남*/
                    ch1_gdp_opacity_out: [1, 0, { start: 0.38, end: 0.4 }],
                    ch1_price_index_opacity_out: [1, 0, { start: 0.38, end: 0.4 }],
                    ch1_exchange_rate_opacity_out: [1, 0, { start: 0.38, end: 0.4 }],

                    // 2번째 이야기 - 개인, 기업, 시중은행, 중앙은행, 정부
                    ch2_content_opacity_in: [0, 1, { start: 0.4, end: 0.425 }],

                    ch2_individual_translateY_in: [-120, 0, { start: 0.425, end: 0.45 }],
                    ch2_individual_opacity_in: [0, 1, { start: 0.425, end: 0.4250001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경

                    ch2_firm_translateY_in: [-120, 0, { start: 0.45, end: 0.475 }],
                    ch2_firm_opacity_in: [0, 1, { start: 0.45, end: 0.4500001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경

                    ch2_commercial_bank_translateY_in: [-120, 0, { start: 0.475, end: 0.5 }],
                    ch2_commercial_bank_opacity_in: [0, 1, { start: 0.475, end: 0.4750001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경

                    ch2_central_bank_translateY_in: [-120, 0, { start: 0.5, end: 0.525 }],
                    ch2_central_bank_opacity_in: [0, 1, { start: 0.5, end: 0.5000001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경

                    ch2_government_translateY_in: [-120, 0, { start: 0.525, end: 0.55 }],
                    ch2_government_opacity_in: [0, 1, { start: 0.525, end: 0.5250001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경


                    ch2_content_opacity_out: [1, 0, { start: 0.65, end: 0.675 }],


                    // 3번째 이야기 - 경기 CYCLE
                    ch3_content_opacity_in: [0, 1, { start: 0.7, end: 0.725 }],

                    ch3_cycle_svg_wrapper: [0, 1, { start: 0.7, end: 0.725 }],
                    ch3_cycle_svg_image_path: [3000, 0, { start: 0.725, end: 0.8 }], // #strokDashoffset
                    ch3_cycle_end_triangle: [0, 1, { start: 0.8, end: 0.802 }],

                    map_image_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],

                    ch2_individual_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                    ch2_firm_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                    ch2_commercial_bank_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                    ch2_central_bank_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                    ch2_government_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],

                    ch3_cycle_svg_wrapper_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                }
            },
            {
                // part1_1-chapter2
                heightNum: 10,
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#part1_1-chapter2'),

                    div_for_check_part2_start: document.querySelector('#part1_1-chapter2'), // part2 시작지점 잡기

                    div_before_trip_content_for_check_sticky: document.querySelector('#div_before_trip_content_for_check_sticky'), //sticky 지점 잡기
                    trip_to_default_setting_image: document.querySelector('#trip_to_default_setting_image'),

                    left_sidebar_part2_title: document.querySelector('#left_sidebar_part2_title'),
                    left_sidebar_japan: document.querySelector('#left_sidebar_japan'),
                    left_sidebar_europe: document.querySelector('#left_sidebar_europe'),
                    left_sidebar_china: document.querySelector('#left_sidebar_china'),
                    left_sidebar_usa: document.querySelector('#left_sidebar_usa'),
                    left_sidebar_korea: document.querySelector('#left_sidebar_korea'),

                    chapter_trip_content_japan: document.querySelector('#chapter_trip_content_japan'),
                    chapter_trip_content_europe: document.querySelector('#chapter_trip_content_europe'),
                    chapter_trip_content_china: document.querySelector('#chapter_trip_content_china'),
                    chapter_trip_content_usa: document.querySelector('#chapter_trip_content_usa'),
                    chapter_trip_content_korea: document.querySelector('#chapter_trip_content_korea'),

                    trip_to_japan_skeleton_image: document.querySelector('#trip_to_japan_skeleton_image'),
                    trip_to_europe_skeleton_image: document.querySelector('#trip_to_europe_skeleton_image'),
                    trip_to_china_skeleton_image: document.querySelector('#trip_to_china_skeleton_image'),
                    trip_to_usa_skeleton_image: document.querySelector('#trip_to_usa_skeleton_image'),
                    trip_to_korea_skeleton_image: document.querySelector('#trip_to_korea_skeleton_image'),
                },
                values: {
                    trip_to_japan_content_opacity_out: [1, 0, { start: 0.2, end: 0.225 }],
                    trip_to_europe_content_opacity_in: [0, 1, { start: 0.225, end: 0.25 }],

                    trip_to_europe_content_opacity_out: [1, 0, { start: 0.4, end: 0.425 }],
                    trip_to_china_content_opacity_in: [0, 1, { start: 0.425, end: 0.45 }],

                    trip_to_china_content_opacity_out: [1, 0, { start: 0.6, end: 0.625 }],
                    trip_to_usa_content_opacity_in: [0, 1, { start: 0.625, end: 0.65 }],

                    trip_to_usa_content_opacity_out: [1, 0, { start: 0.8, end: 0.825 }],
                    trip_to_korea_content_opacity_in: [0, 1, { start: 0.825, end: 0.85 }],

                    trip_to_korea_content_opacity_out: [1, 0, { start: 0.9, end: 0.925 }],

                }
            },
            // {
            //     // part1_1-chapter3
            //     heightNum: 2,
            //     scrollHeight: 0,
            //     objs: {
            //         container: document.querySelector('#part1_1-chapter3')
            //     }
            // }
        ];

        function setLayout() {
            // 각 스크롤 섹션 높이 세팅
            for (let i = 0; i < sceneInfo.length; i++) {
                // sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
                // sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.outerHeight;
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.screen.height;
                sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
            }


            // 새로고침시 currentScene 바로 적용
            let totalScrollHeight = 0;
            for (let i = 0; i < sceneInfo.length; i++) {
                totalScrollHeight += sceneInfo[i].scrollHeight;
                if (totalScrollHeight >= yOffset) {
                    currentScene = i;

                    break;
                }
            }
        }

        function calcValues(values, currentYOffset) {
            let rv; // ratio value
            const scrollHeight = sceneInfo[currentScene].scrollHeight; // 현재 적용중인 하나의 씬 전체 높이
            const scrollRatio = currentYOffset / scrollHeight; // 현재 씬(스크롤 섹션)에서 스크롤된 범위를 비율로 구하기


            if (values.length === 3) { // start ~ end 구간이 있다면
                const partScrollStart = values[2].start * scrollHeight; // 한 씬의 몇 퍼센트 지점(단위 : 픽셀)부터 등장할 것인가 #시작 높이 픽셀
                const partScrollEnd = values[2].end * scrollHeight;// 한 씬의 몇 퍼센트 지점(단위 : 픽셀)에서 사라질 것인가 #끝 높이 픽셀
                const partScrollHeight = partScrollEnd - partScrollStart;

                if (currentYOffset < partScrollStart) { // 스크롤값이 start 지점에 아직 못 온 경유
                    rv = values[0];
                } else if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                    rv = (((currentYOffset - partScrollStart) / partScrollHeight) * (values[1] - values[0])) + values[0];
                } else if (currentYOffset > partScrollEnd) { // 스크롤값이 end 지점을 넘었을 경우
                    rv = values[1];
                }

            } else {
                rv = (scrollRatio * (values[1] - values[0])) + values[0] // 배열 인덱스 사용
            }

            return rv; // 배열 0번째 값과 1번째 값의 사이 값이 나옴 ex) 200~700이면 그 사이값이 나옴
        }




        function playAnimation() {
            const objs = sceneInfo[currentScene].objs;
            const values = sceneInfo[currentScene].values;
            const currentYOffset = yOffset - prevScrollHeight; // 현재 씬 안에서 스크롤된 정도(단위 : 픽셀)
            const scrollHeight = sceneInfo[currentScene].scrollHeight; // 현재 씬(1개의 씬)의 전체 높이
            const scrollRatio = currentYOffset / scrollHeight; // 현재 씬에서 스크롤된 비율




            switch (currentScene) {
                case 0:
                    //세팅 초기화
                    sceneInfo[1].objs.map_image.style.display = 'none'; 

                    sceneInfo[1].objs.exchange_rate_hash_image.style.display = 'none';
                    sceneInfo[1].objs.ch2_individual.style.display = 'none';
                    sceneInfo[1].objs.ch2_firm.style.display = 'none';

                    //leftsidebar 
                    if (currentYOffset >= 0 && currentYOffset <= (objs.container.scrollHeight)) { // part2 section으로부터 0만큼 떨어져 있으면 반응함. 즉 part2 section이 시작하면 반응.
                        // 0아니고 50이어야 currentscene이 1로 넘어갔을 때 글자 효과 사라짐
                        objs.left_sidebar_part1_title.style.fontWeight = '700';
                        objs.left_sidebar_part1_title.style.color = '#000';
                    } else {
                        objs.left_sidebar_part1_title.style.fontWeight = '400';
                        objs.left_sidebar_part1_title.style.color = '#666';
                    }



                    if (yOffset >= objs.chapter0_intro_message.scrollHeight) {
                        objs.chapter0_message_span.style.fontWeight = '700';

                    } else {
                        objs.chapter0_message_span.style.fontWeight = '400';
                    }

                    let startRatio = (objs.chapter0_intro_message.scrollHeight / scrollHeight);
                    if (scrollRatio > startRatio) {
                        let rv;
                        const partScrollStart = startRatio * scrollHeight;
                        const partScrollEnd = values.country_flag_opacity_in[2].end * scrollHeight;
                        const partScrollHeight = partScrollEnd - partScrollStart;

                        if (currentYOffset < partScrollStart) { // 스크롤값이 start 지점에 아직 못 온 경유
                            rv = values.country_flag_opacity_in[0];
                        } else if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                            rv = (((currentYOffset - partScrollStart) / partScrollHeight) * (values.country_flag_opacity_in[1] - values.country_flag_opacity_in[0])) + values.country_flag_opacity_in[0];
                        } else if (currentYOffset > partScrollEnd) { // 스크롤값이 end 지점을 넘었을 경우
                            rv = values.country_flag_opacity_in[1];
                        }
                        objs.japan_flag.style.opacity = rv;
                        objs.europe_flag.style.opacity = rv;
                        objs.china_flag.style.opacity = rv;
                        objs.usa_flag.style.opacity = rv;
                        objs.korea_flag.style.opacity = rv;
                        objs.quesiont_mark.style.opacity = rv; // country opacity 같이 사용


                        let rv2;
                        if (currentYOffset < partScrollStart) { // 스크롤값이 start 지점에 아직 못 온 경유
                            rv2 = values.country_flag_opacity_out[0];
                        } else if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                            rv2 = (((currentYOffset - partScrollStart) / partScrollHeight) * (values.country_flag_opacity_out[1] - values.country_flag_opacity_out[0])) + values.country_flag_opacity_out[0];
                        } else if (currentYOffset > partScrollEnd) { // 스크롤값이 end 지점을 넘었을 경우
                            rv2 = values.country_flag_opacity_out[1];
                        }

                        objs.japan_model_flag.style.opacity = rv2;
                        objs.europe_model_flag.style.opacity = rv2;
                        objs.china_model_flag.style.opacity = rv2;
                        objs.usa_model_flag.style.opacity = rv2;
                        objs.korea_model_flag.style.opacity = rv2;
                        objs.ahha_logo.style.opacity = rv2; // country opacity 같이 사용

                    }
                    break;


                case 1:
                    // step1, step2, step3

                    // 기존 환경 정리 setting 새로고침 
                    // leftsidebar 효과 완벽히 초기화
                    sceneInfo[1].objs.map_image.style.display = 'block'; 

                    sceneInfo[0].objs.left_sidebar_part1_title.style.fontWeight = '400';
                    sceneInfo[0].objs.left_sidebar_part1_title.style.color = '#666';

                    sceneInfo[2].objs.left_sidebar_part2_title.style.fontWeight = '400';
                    sceneInfo[2].objs.left_sidebar_part2_title.style.color = '#666';
                    // /기존 환경 정리 setting 새로고침

                    let startRatio2 = objs.div_for_get_scroll_length.scrollHeight / scrollHeight; // chapter1 sticky 걸리는 순간 포착
                    let rv_map_degree;
                    let map_image_move_to_up_position;
                    const partScrollStart = startRatio2 * scrollHeight; // chapter1 sticky 걸리는 순간 포착
                    const partScrollEnd = (values.map_image_rotate_deg[2].end) * scrollHeight;
                    const partScrollEnd_to_position_relative = (values.map_image_position_relative_or_fixed[2].end) * scrollHeight;
                    const partScrollHeight = partScrollEnd - partScrollStart;



                    // 지도 chapter1 sticky 걸리는 순간부터 fixed로 만들기
                    if (currentYOffset < partScrollStart) { // 스크롤값이 start 지점에 아직 못 온 경우
                        objs.map_image.style.position = 'absolute';
                        objs.map_image.style.margin = '0';
                        objs.map_image.classList.remove("map_position_for_desktop_when_fixed");

                    } else if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd_to_position_relative) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ

                        // 지도의 position 설정
                        if (window.outerWidth < 500) {
                            // 모바일버전 : 직전 요소 길이가 끝날 때 fixed가 걸리며/ 참고로 sticky는 div_for_map_position_sticky를 만날 때 걸림
                            // console.log('모바일 버전버전');
                            objs.map_image.style.position = 'fixed';
                        } else if (window.outerWidth >= 500) {
                            objs.map_image.classList.add("map_position_for_desktop_when_fixed");
                        }

                        // 개인, 기업, 시중은행, 중앙은행, 정부가 안착하면 position fixed로 바꿈
                        if (scrollRatio > values.ch2_individual_translateY_in[2].end) {
                            objs.ch2_individual.style.position = 'fixed';
                        }
                        if (scrollRatio > values.ch2_firm_translateY_in[2].end) {
                            objs.ch2_firm.style.position = 'fixed';
                        }
                        if (scrollRatio > values.ch2_central_bank_translateY_in[2].end) {
                            objs.ch2_commercial_bank.style.position = 'fixed';
                        }
                        if (scrollRatio > values.ch2_commercial_bank_translateY_in[2].end) {
                            objs.ch2_central_bank.style.position = 'fixed';
                        }
                        if (scrollRatio > values.ch2_government_translateY_in[2].end) {
                            objs.ch2_government.style.position = 'fixed';
                        }


                        if (scrollRatio > values.ch3_cycle_svg_wrapper[2].end) {
                            objs.ch3_cycle_svg_wrapper.style.position = 'fixed';
                        }

                    } else if (currentYOffset > partScrollEnd_to_position_relative) { // 스크롤값이 end 지점을 넘었을 경우
                        objs.map_image.style.position = 'absolute';
                        objs.map_image.classList.remove("map_position_for_desktop_when_fixed");

                        objs.ch2_individual.style.position = 'absolute';
                        objs.ch2_firm.style.position = 'absolute';
                        objs.ch2_commercial_bank.style.position = 'absolute';
                        objs.ch2_central_bank.style.position = 'absolute';
                        objs.ch2_government.style.position = 'absolute';

                        objs.ch3_cycle_svg_wrapper.style.position = 'absolute';
                    }





                    if (scrollRatio > startRatio2) {
                        sceneInfo[1].objs.ch1_content.style.display = 'block';
                        sceneInfo[1].objs.ch1_content.style.opacity = '1';

                        // 지도 회전시키는 기능
                        if (currentYOffset < partScrollStart) { // 스크롤값이 start 지점에 아직 못 온 경유
                            rv_map_degree = values.map_image_rotate_deg[0];
                            map_image_move_to_up_position = values.map_image_move_to_up[0];


                        } else if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                            rv_map_degree = (((currentYOffset - partScrollStart) / partScrollHeight) * (values.map_image_rotate_deg[1] - values.map_image_rotate_deg[0])) + values.map_image_rotate_deg[0];
                            map_image_move_to_up_position = (((currentYOffset - partScrollStart) / partScrollHeight) * (values.map_image_move_to_up[1] - values.map_image_move_to_up[0])) + values.map_image_move_to_up[0];

                        } else if (currentYOffset > partScrollEnd) { // 스크롤값이 end 지점을 넘었을 경우
                            rv_map_degree = values.map_image_rotate_deg[1];
                            map_image_move_to_up_position = values.map_image_move_to_up[1];


                        }

                        objs.map_image.style.transform = `perspective(600px) rotateX(${rv_map_degree}deg)`;

                        if (window.innerWidth < 500) {


                            objs.map_image.style.bottom = `${map_image_move_to_up_position}vw`;
                        }


                        // 해시태그 이미지(금리, GDP, 물가, 환율)은 startRatio2를 더해줘야함. 그래야 sticky 걸리고부터(축구 설명 다 지나고부터) 스크롤된 영역 계산 가능 
                        let rv1; // 금리 해시태그 이미지
                        let rv2; // GDP 해시대그 이미지
                        let rv3; // 물가 해시태그 이미지
                        let rv4; // 환율 해시태그 이미지

                        const partScrollStart1 = (values.ch1_interest_rate_opacity_in[2].start) * scrollHeight;
                        const partScrollStart2 = (values.ch1_gdp_opacity_in[2].start) * scrollHeight;
                        const partScrollStart3 = (values.ch1_price_index_opacity_in[2].start) * scrollHeight;
                        const partScrollStart4 = (values.ch1_exchange_rate_opacity_in[2].start) * scrollHeight;

                        const partScrollEnd1 = (values.ch1_interest_rate_opacity_in[2].end) * scrollHeight;
                        const partScrollEnd2 = (values.ch1_gdp_opacity_in[2].end) * scrollHeight;
                        const partScrollEnd3 = (values.ch1_price_index_opacity_in[2].end) * scrollHeight;
                        const partScrollEnd4 = (values.ch1_exchange_rate_opacity_in[2].end) * scrollHeight;

                        const partScrollHeight1 = partScrollEnd1 - partScrollStart1;
                        const partScrollHeight2 = partScrollEnd2 - partScrollStart2;
                        const partScrollHeight3 = partScrollEnd3 - partScrollStart3;
                        const partScrollHeight4 = partScrollEnd4 - partScrollStart4;

                        if (currentYOffset < partScrollStart1) { // 스크롤값이 start 지점에 아직 못 온 경유
                            rv1 = values.ch1_interest_rate_opacity_in[0];
                            objs.ch1_hash_keyword_interest_rate.style.fontWeight = '400';

                            sceneInfo[1].objs.ch2_individual.style.display = 'none';
                            sceneInfo[1].objs.ch2_firm.style.display = 'none';
                            sceneInfo[1].objs.ch2_commercial_bank.style.display = 'none';
                            sceneInfo[1].objs.ch2_central_bank.style.display = 'none';
                            sceneInfo[1].objs.ch2_government.style.display = 'none';

                        } else if (currentYOffset >= partScrollStart1 && currentYOffset <= partScrollEnd1) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                            rv1 = (((currentYOffset - partScrollStart1) / partScrollHeight1) * (values.ch1_interest_rate_opacity_in[1] - values.ch1_interest_rate_opacity_in[0])) + values.ch1_interest_rate_opacity_in[0];
                            objs.ch1_hash_keyword_interest_rate.style.fontWeight = '700';


                            sceneInfo[1].objs.ch2_individual.style.display = 'none';
                            sceneInfo[1].objs.ch2_firm.style.display = 'none';
                            sceneInfo[1].objs.ch2_commercial_bank.style.display = 'none';
                            sceneInfo[1].objs.ch2_central_bank.style.display = 'none';
                            sceneInfo[1].objs.ch2_government.style.display = 'none';

                        } else if (currentYOffset > partScrollEnd1) { // 스크롤값이 end 지점을 넘었을 경우
                            rv1 = values.ch1_interest_rate_opacity_in[1];
                            objs.ch1_hash_keyword_interest_rate.style.fontWeight = '700';


                            sceneInfo[1].objs.ch2_individual.style.display = 'none';
                            sceneInfo[1].objs.ch2_firm.style.display = 'none';
                            sceneInfo[1].objs.ch2_commercial_bank.style.display = 'none';
                            sceneInfo[1].objs.ch2_central_bank.style.display = 'none';
                            sceneInfo[1].objs.ch2_government.style.display = 'none';
                        }

                        if (currentYOffset < partScrollStart2) { // 스크롤값이 start 지점에 아직 못 온 경유
                            rv2 = values.ch1_gdp_opacity_in[0];
                            objs.ch1_hash_keyword_gdp.style.fontWeight = '400';
                        } else if (currentYOffset >= partScrollStart2 && currentYOffset <= partScrollEnd2) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                            rv2 = (((currentYOffset - partScrollStart2) / partScrollHeight2) * (values.ch1_gdp_opacity_in[1] - values.ch1_gdp_opacity_in[0])) + values.ch1_gdp_opacity_in[0];
                            objs.ch1_hash_keyword_gdp.style.fontWeight = '700';
                        } else if (currentYOffset > partScrollEnd1) { // 스크롤값이 end 지점을 넘었을 경우
                            rv2 = values.ch1_gdp_opacity_in[1];
                            objs.ch1_hash_keyword_gdp.style.fontWeight = '700';
                        }

                        if (currentYOffset < partScrollStart3) { // 스크롤값이 start 지점에 아직 못 온 경유
                            rv3 = values.ch1_price_index_opacity_in[0];
                            objs.ch1_hash_keyword_price_index.style.fontWeight = '400';
                        } else if (currentYOffset >= partScrollStart3 && currentYOffset <= partScrollEnd3) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                            rv3 = (((currentYOffset - partScrollStart3) / partScrollHeight3) * (values.ch1_price_index_opacity_in[1] - values.ch1_price_index_opacity_in[0])) + values.ch1_price_index_opacity_in[0];
                            objs.ch1_hash_keyword_price_index.style.fontWeight = '700';
                        } else if (currentYOffset > partScrollEnd3) { // 스크롤값이 end 지점을 넘었을 경우
                            rv3 = values.ch1_price_index_opacity_in[1];
                            objs.ch1_hash_keyword_price_index.style.fontWeight = '700';
                        }

                        if (currentYOffset < partScrollStart4) { // 스크map_image_wrapper롤값이 start 지점에 아직 못 온 경유
                            rv4 = values.ch1_exchange_rate_opacity_in[0];
                            objs.ch1_hash_keyword_exchange_rate.style.fontWeight = '400';
                        } else if (currentYOffset >= partScrollStart4 && currentYOffset <= partScrollEnd4) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                            rv4 = (((currentYOffset - partScrollStart4) / partScrollHeight4) * (values.ch1_exchange_rate_opacity_in[1] - values.ch1_exchange_rate_opacity_in[0])) + values.ch1_exchange_rate_opacity_in[0];
                            objs.ch1_hash_keyword_exchange_rate.style.fontWeight = '700';
                            objs.exchange_rate_hash_image.style.display = 'block';
                        } else if (currentYOffset > partScrollEnd4) { // 스크롤값이 end 지점을 넘었을 경우
                            rv4 = values.ch1_exchange_rate_opacity_in[1];
                            objs.ch1_hash_keyword_exchange_rate.style.fontWeight = '700';
                            // objs.exchange_rate_hash_image.style.display = 'none';
                        }




                        objs.interest_rate_hash_image.style.opacity = rv1;
                        objs.gdp_hash_image.style.opacity = rv2;
                        objs.price_index_hash_image.style.opacity = rv3;
                        objs.exchange_rate_hash_image.style.opacity = rv4;

                    }


                    if (scrollRatio <= 0.375) {

                    } else {
                        objs.ch1_content.style.opacity = calcValues(values.ch1_content_opacity_out, currentYOffset);

                        objs.interest_rate_hash_image.style.opacity = calcValues(values.ch1_interest_rate_opacity_out, currentYOffset);
                        objs.gdp_hash_image.style.opacity = calcValues(values.ch1_gdp_opacity_out, currentYOffset);
                        objs.price_index_hash_image.style.opacity = calcValues(values.ch1_price_index_opacity_out, currentYOffset);
                        objs.exchange_rate_hash_image.style.opacity = calcValues(values.ch1_exchange_rate_opacity_out, currentYOffset);
                    }


                    // 왼쪽 사이드바 step1 굵게, 색깔 검정 인 아웃
                    if (scrollRatio >= startRatio2 && scrollRatio <= values.ch2_individual_translateY_in[2].start) {
                        objs.left_sidebar_step1_title_bold.style.fontWeight = '700';
                        objs.left_sidebar_step1_title_bold.style.color = '#000';

                        objs.left_sidebar_step1_1_bold.style.fontWeight = '700';
                        objs.left_sidebar_step1_1_bold.style.color = '#000';

                        objs.left_sidebar_step1_2_bold.style.fontWeight = '700';
                        objs.left_sidebar_step1_2_bold.style.color = '#000';

                        objs.left_sidebar_step1_3_bold.style.fontWeight = '700';
                        objs.left_sidebar_step1_3_bold.style.color = '#000';

                        objs.left_sidebar_step1_4_bold.style.fontWeight = '700';
                        objs.left_sidebar_step1_4_bold.style.color = '#000';

                    } else {
                        objs.left_sidebar_step1_title_bold.style.fontWeight = '400';
                        objs.left_sidebar_step1_title_bold.style.color = '#666';

                        objs.left_sidebar_step1_1_bold.style.fontWeight = '400';
                        objs.left_sidebar_step1_1_bold.style.color = '#666';

                        objs.left_sidebar_step1_2_bold.style.fontWeight = '400';
                        objs.left_sidebar_step1_2_bold.style.color = '#666';

                        objs.left_sidebar_step1_3_bold.style.fontWeight = '400';
                        objs.left_sidebar_step1_3_bold.style.color = '#666';

                        objs.left_sidebar_step1_4_bold.style.fontWeight = '400';
                        objs.left_sidebar_step1_4_bold.style.color = '#666';
                    }


                    // 왼쪽 사이드바 step2 굵게, 색깔 검정 인 아웃
                    if (scrollRatio >= values.ch2_individual_translateY_in[2].start && scrollRatio <= values.ch3_content_opacity_in[2].start) {
                        objs.left_sidebar_step2_title_bold.style.fontWeight = '700';
                        objs.left_sidebar_step2_title_bold.style.color = '#000';

                        objs.left_sidebar_step2_individual_bold.style.fontWeight = '700';
                        objs.left_sidebar_step2_individual_bold.style.color = '#000';

                        objs.left_sidebar_step2_firm_bold.style.fontWeight = '700';
                        objs.left_sidebar_step2_firm_bold.style.color = '#000';

                        objs.left_sidebar_step2_commercial_bank_bold.style.fontWeight = '700';
                        objs.left_sidebar_step2_commercial_bank_bold.style.color = '#000';

                        objs.left_sidebar_step2_central_bank_bold.style.fontWeight = '700';
                        objs.left_sidebar_step2_central_bank_bold.style.color = '#000';

                        objs.left_sidebar_step2_government_bold.style.fontWeight = '700';
                        objs.left_sidebar_step2_government_bold.style.color = '#000';
                        // console.log(objs);
                        // objs.ch2_left_sidebar_bold.style.color='red';
                        // objs.left_sidebar_step2_individual_bold.style.color='red';
                    } else {
                        objs.left_sidebar_step2_title_bold.style.fontWeight = '400';
                        objs.left_sidebar_step2_title_bold.style.color = '#666';

                        objs.left_sidebar_step2_individual_bold.style.fontWeight = '400';
                        objs.left_sidebar_step2_individual_bold.style.color = '#666';

                        objs.left_sidebar_step2_firm_bold.style.fontWeight = '400';
                        objs.left_sidebar_step2_firm_bold.style.color = '#666';

                        objs.left_sidebar_step2_commercial_bank_bold.style.fontWeight = '400';
                        objs.left_sidebar_step2_commercial_bank_bold.style.color = '#666';

                        objs.left_sidebar_step2_central_bank_bold.style.fontWeight = '400';
                        objs.left_sidebar_step2_central_bank_bold.style.color = '#666';

                        objs.left_sidebar_step2_government_bold.style.fontWeight = '400';
                        objs.left_sidebar_step2_government_bold.style.color = '#666';
                    }


                    // 왼쪽 사이드바 step3 굵게, 색깔 검정 인 아웃
                    if (scrollRatio >= values.ch3_content_opacity_in[2].start && scrollRatio <= 0.999) {
                        objs.left_sidebar_step3_title_bold.style.fontWeight = '700';
                        objs.left_sidebar_step3_title_bold.style.color = '#000';

                        objs.left_sidebar_step3_1_bold.style.fontWeight = '700';
                        objs.left_sidebar_step3_1_bold.style.color = '#000';

                        objs.left_sidebar_step3_2_bold.style.fontWeight = '700';
                        objs.left_sidebar_step3_2_bold.style.color = '#000';

                        objs.left_sidebar_step3_3_bold.style.fontWeight = '700';
                        objs.left_sidebar_step3_3_bold.style.color = '#000';

                    } else {
                        objs.left_sidebar_step3_title_bold.style.fontWeight = '400';
                        objs.left_sidebar_step3_title_bold.style.color = '#666';

                        objs.left_sidebar_step3_1_bold.style.fontWeight = '400';
                        objs.left_sidebar_step3_1_bold.style.color = '#666';

                        objs.left_sidebar_step3_2_bold.style.fontWeight = '400';
                        objs.left_sidebar_step3_2_bold.style.color = '#666';

                        objs.left_sidebar_step3_3_bold.style.fontWeight = '400';
                        objs.left_sidebar_step3_3_bold.style.color = '#666';
                    }



                    if (scrollRatio <= values.ch2_individual_translateY_in[2].start) { // 개인이 내려올 때 동시에 글자 굵게
                        objs.ch2_hash_keyword_individual.style.fontWeight = '400';
                    } else {
                        objs.ch2_hash_keyword_individual.style.fontWeight = '700';
                        // objs.ch2_left_sidebar_bold.style.fontWeight='700';
                    }

                    if (scrollRatio <= values.ch2_firm_translateY_in[2].start) { // 기업이 내려올 때 동시에 글자 굵게
                        objs.ch2_hash_keyword_firm.style.fontWeight = '400';
                    } else {
                        objs.ch2_hash_keyword_firm.style.fontWeight = '700';
                    }

                    if (scrollRatio <= values.ch2_commercial_bank_translateY_in[2].start) { // 기업이 내려올 때 동시에 글자 굵게
                        objs.ch2_hash_keyword_commercial_bank.style.fontWeight = '400';
                    } else {
                        objs.ch2_hash_keyword_commercial_bank.style.fontWeight = '700';
                    }

                    if (scrollRatio <= values.ch2_central_bank_translateY_in[2].start) { // 기업이 내려올 때 동시에 글자 굵게
                        objs.ch2_hash_keyword_central_bank.style.fontWeight = '400';
                    } else {
                        objs.ch2_hash_keyword_central_bank.style.fontWeight = '700';
                    }


                    if (scrollRatio <= values.ch2_government_translateY_in[2].start) { // 기업이 내려올 때 동시에 글자 굵게
                        objs.ch2_hash_keyword_government.style.fontWeight = '400';
                    } else {
                        objs.ch2_hash_keyword_government.style.fontWeight = '700';
                    }




                    if (scrollRatio <= 0.4) {

                    } else {
                        sceneInfo[1].objs.ch2_content.style.display = 'block';
                        sceneInfo[1].objs.ch2_content.style.opacity = '1';

                        sceneInfo[1].objs.ch2_individual.style.display = 'block';
                        objs.ch2_individual.style.opacity = calcValues(values.ch2_individual_opacity_in, currentYOffset);
                        objs.ch2_individual.style.transform = `translate3d(0, ${calcValues(values.ch2_individual_translateY_in, currentYOffset)}vh, 0)`;

                        sceneInfo[1].objs.ch2_firm.style.display = 'block';
                        objs.ch2_firm.style.opacity = calcValues(values.ch2_firm_opacity_in, currentYOffset);
                        objs.ch2_firm.style.transform = `translate3d(0, ${calcValues(values.ch2_firm_translateY_in, currentYOffset)}vh, 0)`;

                        sceneInfo[1].objs.ch2_commercial_bank.style.display = 'block';
                        objs.ch2_commercial_bank.style.opacity = calcValues(values.ch2_commercial_bank_opacity_in, currentYOffset);
                        objs.ch2_commercial_bank.style.transform = `translate3d(0, ${calcValues(values.ch2_commercial_bank_translateY_in, currentYOffset)}vh, 0)`;

                        sceneInfo[1].objs.ch2_central_bank.style.display = 'block';
                        objs.ch2_central_bank.style.opacity = calcValues(values.ch2_central_bank_opacity_in, currentYOffset);
                        objs.ch2_central_bank.style.transform = `translate3d(0, ${calcValues(values.ch2_central_bank_translateY_in, currentYOffset)}vh, 0)`;

                        sceneInfo[1].objs.ch2_government.style.display = 'block';
                        objs.ch2_government.style.opacity = calcValues(values.ch2_government_opacity_in, currentYOffset);
                        objs.ch2_government.style.transform = `translate3d(0, ${calcValues(values.ch2_government_translateY_in, currentYOffset)}vh, 0)`;
                    }

                    if (scrollRatio <= 0.6) {
                        objs.ch2_content.style.opacity = calcValues(values.ch2_content_opacity_in, currentYOffset);
                    } else {
                        objs.ch2_content.style.opacity = calcValues(values.ch2_content_opacity_out, currentYOffset);
                    }

                    if (scrollRatio <= 0.85) {
                        if (scrollRatio >= 0.725) {
                            objs.ch3_hash_keyword_typical_cycle.style.fontWeight = '700';
                        } else if (scrollRatio < 0.725) {
                            objs.ch3_hash_keyword_typical_cycle.style.fontWeight = '400';
                        }
                        if (scrollRatio >= 0.75) {
                            objs.ch3_hash_keyword_developed_cycle.style.fontWeight = '700';
                        } else if (scrollRatio < 0.75) {
                            objs.ch3_hash_keyword_developed_cycle.style.fontWeight = '400';
                        }
                        if (scrollRatio >= 0.775) {
                            objs.ch3_hash_keyword_emerging_cycle.style.fontWeight = '700';
                        } else if (scrollRatio < 0.775) {
                            objs.ch3_hash_keyword_emerging_cycle.style.fontWeight = '400';
                        }
                        objs.ch3_content.style.opacity = calcValues(values.ch3_content_opacity_in, currentYOffset);
                        objs.ch3_cycle_svg_wrapper.style.opacity = calcValues(values.ch3_cycle_svg_wrapper, currentYOffset);
                        objs.ch3_cycle_svg_image_path.style.strokeDashoffset = calcValues(values.ch3_cycle_svg_image_path, currentYOffset);
                        objs.ch3_cycle_end_triangle.style.opacity = calcValues(values.ch3_cycle_end_triangle, currentYOffset);
                    }
                    break;
                case 2:
                    // 일본, 유럽, 중국, 미국, 한국

                    // 기존 환경 정리 setting 새로고침 
                    // leftsidebar 효과 완벽히 초기화
                    sceneInfo[1].objs.left_sidebar_step3_title_bold.style.fontWeight = '400';
                    sceneInfo[1].objs.left_sidebar_step3_title_bold.style.color = '#666';

                    sceneInfo[1].objs.left_sidebar_step3_1_bold.style.fontWeight = '400';
                    sceneInfo[1].objs.left_sidebar_step3_1_bold.style.color = '#666';

                    sceneInfo[1].objs.left_sidebar_step3_2_bold.style.fontWeight = '400';
                    sceneInfo[1].objs.left_sidebar_step3_2_bold.style.color = '#666';

                    sceneInfo[1].objs.left_sidebar_step3_3_bold.style.fontWeight = '400';
                    sceneInfo[1].objs.left_sidebar_step3_3_bold.style.color = '#666';

                    sceneInfo[1].objs.exchange_rate_hash_image.style.display = 'none';
                    // /기존 환경 정리 setting 새로고침

                    let startRatio2_5 = objs.div_for_check_part2_start.scrollHeight / scrollHeight;
                    const partScrollStart2_5 = startRatio2_5 * scrollHeight;

                    let startRatio3 = objs.div_before_trip_content_for_check_sticky.scrollHeight / scrollHeight; // 일본  content sticky 걸리는 순간 포착 : 캐리어 그림만큼 다 내려오면 반응하는 것임
                    const partScrollStart3 = startRatio3 * scrollHeight; // 일본 content sticky 걸리는 순간 포착
                    // 왼쪽 사이드바 일본, 유럽, 중국, 미국, 한국,  굵게, 색깔 검정 인 아웃

                    if (currentYOffset >= 0 && currentYOffset <= partScrollStart3) { // part2 section으로부터 0만큼 떨어져 있으면 반응함. 즉 part2 section이 시작하면 반응.
                        objs.left_sidebar_part2_title.style.fontWeight = '700';

                        objs.left_sidebar_part2_title.style.color = '#000';
                    } else {
                        objs.left_sidebar_part2_title.style.fontWeight = '400';
                        objs.left_sidebar_part2_title.style.color = '#666';
                    }

                    if (currentYOffset >= partScrollStart3 && scrollRatio <= 0.999) {
                        objs.left_sidebar_japan.style.fontWeight = '700';
                        objs.left_sidebar_japan.style.color = '#000';

                        objs.left_sidebar_europe.style.fontWeight = '700';
                        objs.left_sidebar_europe.style.color = '#000';

                        objs.left_sidebar_china.style.fontWeight = '700';
                        objs.left_sidebar_china.style.color = '#000';

                        objs.left_sidebar_usa.style.fontWeight = '700';
                        objs.left_sidebar_usa.style.color = '#000';

                        objs.left_sidebar_korea.style.fontWeight = '700';
                        objs.left_sidebar_korea.style.color = '#000';

                    } else {
                        objs.left_sidebar_japan.style.fontWeight = '400';
                        objs.left_sidebar_japan.style.color = '#666';

                        objs.left_sidebar_europe.style.fontWeight = '400';
                        objs.left_sidebar_europe.style.color = '#666';

                        objs.left_sidebar_china.style.fontWeight = '400';
                        objs.left_sidebar_china.style.color = '#666';

                        objs.left_sidebar_usa.style.fontWeight = '400';
                        objs.left_sidebar_usa.style.color = '#666';

                        objs.left_sidebar_korea.style.fontWeight = '400';
                        objs.left_sidebar_korea.style.color = '#666';
                    }

                    // sticky 걸리는 순간부터 fixed로 만들기
                    if (currentYOffset < partScrollStart3) { // 스크롤값이 start 지점에 아직 못 온 경우
                        objs.trip_to_default_setting_image.style.position = 'absolute';
                        objs.trip_to_japan_skeleton_image.style.position = 'absolute';

                    } else if (currentYOffset >= partScrollStart3 && scrollRatio < values.trip_to_korea_content_opacity_out[2].start) { // 스크롤값이 start 지점은 넘었지만, end 지점은 못 넘었을 때 #한창일 때ㅎ
                        objs.trip_to_default_setting_image.style.position = 'fixed';
                        objs.trip_to_japan_skeleton_image.style.position = 'fixed';
                        objs.trip_to_korea_skeleton_image.style.position = 'fixed';

                    } else if (scrollRatio > values.trip_to_korea_content_opacity_out[2].start) { // 스크롤값이 end 지점을 넘었을 경우
                        // div 끝날 때 fixed 였던 것 다시 absolute로 되돌리기
                        objs.trip_to_default_setting_image.style.position = 'absolute';
                        objs.trip_to_korea_skeleton_image.style.position = 'absolute';

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                    }

                    // objs.trip_to_japan_skeleton_image.style.display='block';
                    // objs.trip_to_europe_skeleton_image.style.display='block';
                    // objs.trip_to_china_skeleton_image.style.display='block';
                    // objs.trip_to_usa_skeleton_image.style.display='block';
                    // objs.trip_to_korea_skeleton_image.style.display='block';


                    // 일본 내용
                    if (scrollRatio < values.trip_to_japan_content_opacity_out[2].end) {


                        objs.chapter_trip_content_japan.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결


                        objs.trip_to_japan_skeleton_image.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결

                        objs.chapter_trip_content_japan.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        // objs.trip_to_japan_skeleton_image.style.position = 'fixed';
                    }

                    // 일본 빠지는 중
                    if (scrollRatio >= values.trip_to_japan_content_opacity_out[2].start && scrollRatio < values.trip_to_japan_content_opacity_out[2].end) {
                        objs.chapter_trip_content_japan.style.opacity = calcValues(values.trip_to_japan_content_opacity_out, currentYOffset);
                        objs.trip_to_japan_skeleton_image.style.opacity = calcValues(values.trip_to_japan_content_opacity_out, currentYOffset);


                        objs.chapter_trip_content_japan.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                    }
                    // 유럽 들어오는 중
                    if (scrollRatio > values.trip_to_europe_content_opacity_in[2].start && scrollRatio < values.trip_to_europe_content_opacity_in[2].end) {

                        objs.chapter_trip_content_europe.style.opacity = calcValues(values.trip_to_europe_content_opacity_in, currentYOffset);
                        objs.trip_to_europe_skeleton_image.style.opacity = calcValues(values.trip_to_europe_content_opacity_in, currentYOffset);

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결


                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    // 유럽 내용
                    if (scrollRatio > values.trip_to_europe_content_opacity_in[2].end && scrollRatio < values.trip_to_europe_content_opacity_out[2].start) {

                        objs.chapter_trip_content_japan.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결


                        objs.trip_to_japan_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }


                    // 유럽 빠지고 중국 들어옴
                    if (scrollRatio > values.trip_to_europe_content_opacity_out[2].start && scrollRatio < values.trip_to_europe_content_opacity_out[2].end) {
                        objs.chapter_trip_content_europe.style.opacity = calcValues(values.trip_to_europe_content_opacity_out, currentYOffset);
                        objs.trip_to_europe_skeleton_image.style.opacity = calcValues(values.trip_to_europe_content_opacity_out, currentYOffset);

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    if (scrollRatio > values.trip_to_china_content_opacity_in[2].start && scrollRatio < values.trip_to_china_content_opacity_in[2].end) {
                        objs.chapter_trip_content_china.style.opacity = calcValues(values.trip_to_china_content_opacity_in, currentYOffset);
                        objs.trip_to_china_skeleton_image.style.opacity = calcValues(values.trip_to_china_content_opacity_in, currentYOffset);

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    // 중국 내용
                    if (scrollRatio > values.trip_to_china_content_opacity_in[2].end && scrollRatio < values.trip_to_china_content_opacity_out[2].start) {

                        objs.chapter_trip_content_japan.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결


                        objs.trip_to_japan_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    // 중국 빠지고 미국 들어옴
                    if (scrollRatio > values.trip_to_china_content_opacity_out[2].start && scrollRatio < values.trip_to_china_content_opacity_out[2].end) {
                        objs.chapter_trip_content_china.style.opacity = calcValues(values.trip_to_china_content_opacity_out, currentYOffset);
                        objs.trip_to_china_skeleton_image.style.opacity = calcValues(values.trip_to_china_content_opacity_out, currentYOffset);

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    if (scrollRatio > values.trip_to_usa_content_opacity_in[2].start && scrollRatio < values.trip_to_usa_content_opacity_in[2].end + 0.01) {
                        objs.chapter_trip_content_usa.style.opacity = calcValues(values.trip_to_usa_content_opacity_in, currentYOffset);
                        objs.trip_to_usa_skeleton_image.style.opacity = calcValues(values.trip_to_usa_content_opacity_in, currentYOffset);


                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    // 미국 내용
                    if (scrollRatio > values.trip_to_usa_content_opacity_in[2].end && scrollRatio < values.trip_to_usa_content_opacity_out[2].start) {

                        objs.chapter_trip_content_japan.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결


                        objs.trip_to_japan_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    // 미국 빠지고 한국 들어옴
                    if (scrollRatio > values.trip_to_usa_content_opacity_out[2].start && scrollRatio < values.trip_to_usa_content_opacity_out[2].end) {
                        objs.chapter_trip_content_usa.style.opacity = calcValues(values.trip_to_usa_content_opacity_out, currentYOffset);
                        objs.trip_to_usa_skeleton_image.style.opacity = calcValues(values.trip_to_usa_content_opacity_out, currentYOffset);

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    if (scrollRatio > values.trip_to_korea_content_opacity_in[2].start && scrollRatio < values.trip_to_korea_content_opacity_in[2].end) {

                        objs.trip_to_korea_skeleton_image.style.display = 'fixed';

                        objs.chapter_trip_content_korea.style.opacity = calcValues(values.trip_to_korea_content_opacity_in, currentYOffset);
                        objs.trip_to_korea_skeleton_image.style.opacity = calcValues(values.trip_to_korea_content_opacity_in, currentYOffset);

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    // 한국 내용
                    if (scrollRatio > values.trip_to_korea_content_opacity_in[2].end && scrollRatio < values.trip_to_korea_content_opacity_out[2].start) {

                        objs.trip_to_korea_skeleton_image.style.display = 'fixed';

                        objs.chapter_trip_content_japan.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결


                        objs.trip_to_japan_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.opacity = '0'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.opacity = '1'; // 흐릿하게 잔상 남는 버그 해결

                        objs.chapter_trip_content_japan.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_europe.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_china.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_usa.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.chapter_trip_content_korea.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결

                        objs.trip_to_japan_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_europe_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_china_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_usa_skeleton_image.style.display = 'none'; // 흐릿하게 잔상 남는 버그 해결
                        objs.trip_to_korea_skeleton_image.style.display = 'block'; // 흐릿하게 잔상 남는 버그 해결
                    }

                    break;
                case 3:
                    // 세팅 초기화
                    sceneInfo[1].objs.exchange_rate_hash_image.style.display = 'none';
                    // / 세팅 초기화

                    break;
            }
        }


        function scrollLoop() {
            enterNewScene = false;

            prevScrollHeight = 0;
            for (let i = 0; i < currentScene; i++) {
                if (i === 2) { break; }  // scrollHeight가 undefined되면서 에러나는 것 방지
                prevScrollHeight += sceneInfo[i].scrollHeight;
            }
            if (currentScene < 2) { // scrollHeight가 undefined되면서 에러나는 것 방지 scene의 갯수가 늘어나

                if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
                    console.log('커런트씬', currentScene)
                    enterNewScene = true;
                    currentScene++;
                    document.body.setAttribute('id', `show-scene-${currentScene}`);
                }
            }
            if (yOffset < prevScrollHeight) {
                enterNewScene = true;
                if (currentScene === 0) return // 브라우저 마이너스 바운스 효과 방지 currentScene 음수 방지
                currentScene--;
                document.body.setAttribute('id', `show-scene-${currentScene}`);
            }


            if (enterNewScene) return; // 씬이 바뀌는 찰나의 순간 버그 잡기 : 그 순간엔 playAnimation 실행 X
            playAnimation();
        }

        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;
            scrollLoop();
        });
        window.addEventListener('load', setLayout);
        window.addEventListener('resize', setLayout);
        setLayout();
    });


    const sceneInfo = [
        {
            // part1_1-chapter0
            heightNum: 3.5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#part1_1-chapter0'),
                chapter0_intro_message: document.querySelector('#chapter0_intro_message'),
                chapter0_message_span: document.querySelector('#chapter0_message_bold'),
                worldmap_sticky: document.querySelector('#chapter0_sticky_0'),

                japan_flag: document.querySelector('#japan_image'),
                europe_flag: document.querySelector('#europe_image'),
                china_flag: document.querySelector('#china_image'),
                usa_flag: document.querySelector('#usa_image'),
                korea_flag: document.querySelector('#korea_image'),

                japan_model_flag: document.querySelector('#japan_model_image'),
                europe_model_flag: document.querySelector('#europe_model_image'),
                china_model_flag: document.querySelector('#china_model_image'),
                usa_model_flag: document.querySelector('#usa_model_image'),
                korea_model_flag: document.querySelector('#korea_model_image'),

                quesiont_mark: document.querySelector('#ch0_question_mark_image'),
                ahha_logo: document.querySelector('#ch0_ahha_image'),

            },
            values: {
                country_flag_opacity_in: [1, 0, { start: null, end: 0.6 }],
                country_flag_opacity_out: [0, 1, { start: null, end: 0.6 }],
            }
        },
        {
            // part1_1-chapter1
            heightNum: 10,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#part1_1-chapter1'),

                div_for_get_scroll_length: document.querySelector('#div_for_get_scroll_length'),

                map_image: document.querySelector('#map_image'),

                // 1번째 이야기 - 금리, GDP, 물가, 환율
                ch1_hash_keyword_interest_rate: document.querySelector('#ch1_hash_keyword_interest_rate'),
                ch1_hash_keyword_gdp: document.querySelector('#ch1_hash_keyword_gdp'),
                ch1_hash_keyword_price_index: document.querySelector('#ch1_hash_keyword_price_index'),
                ch1_hash_keyword_exchange_rate: document.querySelector('#ch1_hash_keyword_exchange_rate'),

                interest_rate_hash_image: document.querySelector('#interest_hash_image'),
                gdp_hash_image: document.querySelector('#gdp_hash_image'),
                price_index_hash_image: document.querySelector('#price_index_hash_image'),
                exchange_rate_hash_image: document.querySelector('#exchange_rate_hash_image'),

                ch1_content: document.querySelector('#chapter1_content'),

                // 2번째 이야기 - 개인, 기업, 시중은행, 중앙은행, 정부

                left_sidebar_study_map_bold: document.querySelector('#left_sidebar_study_map_bold'),

                left_sidebar_step1_title_bold: document.querySelector('#left_sidebar_step1_title_bold'),
                left_sidebar_step1_1_bold: document.querySelector('#left_sidebar_step1_1_bold'),
                left_sidebar_step1_2_bold: document.querySelector('#left_sidebar_step1_2_bold'),
                left_sidebar_step1_3_bold: document.querySelector('#left_sidebar_step1_3_bold'),
                left_sidebar_step1_4_bold: document.querySelector('#left_sidebar_step1_4_bold'),

                left_sidebar_step2_title_bold: document.querySelector('#left_sidebar_step2_title_bold'),
                left_sidebar_step2_individual_bold: document.querySelector('#left_sidebar_step2_individual_bold'),
                left_sidebar_step2_firm_bold: document.querySelector('#left_sidebar_step2_firm_bold'),
                left_sidebar_step2_commercial_bank_bold: document.querySelector('#left_sidebar_step2_commercial_bank_bold'),
                left_sidebar_step2_central_bank_bold: document.querySelector('#left_sidebar_step2_central_bank_bold'),
                left_sidebar_step2_government_bold: document.querySelector('#left_sidebar_step2_government_bold'),

                left_sidebar_step3_title_bold: document.querySelector('#left_sidebar_step3_title_bold'),
                left_sidebar_step3_1_bold: document.querySelector('#left_sidebar_step3_1_bold'),
                left_sidebar_step3_2_bold: document.querySelector('#left_sidebar_step3_2_bold'),
                left_sidebar_step3_3_bold: document.querySelector('#left_sidebar_step3_3_bold'),
                left_sidebar_step3_4_bold: document.querySelector('#left_sidebar_step3_4_bold'),


                ch2_content: document.querySelector('#chapter2_content'),

                ch2_hash_keyword_individual: document.querySelector('#ch2_hash_keyword_individual'),
                ch2_hash_keyword_firm: document.querySelector('#ch2_hash_keyword_firm'),
                ch2_hash_keyword_commercial_bank: document.querySelector('#ch2_hash_keyword_commercial_bank'),
                ch2_hash_keyword_central_bank: document.querySelector('#ch2_hash_keyword_central_bank'),
                ch2_hash_keyword_government: document.querySelector('#ch2_hash_keyword_government'),

                ch2_individual: document.querySelector('#ch2_individual_image'),
                ch2_firm: document.querySelector('#ch2_firm_image'),
                ch2_commercial_bank: document.querySelector('#ch2_commercial_bank_image'),
                ch2_central_bank: document.querySelector('#ch2_central_bank_image'),
                ch2_government: document.querySelector('#ch2_government_image'),


                // 3번째 이야기 - 경기 CYCLE
                ch3_content: document.querySelector('#chapter3_content'),

                ch3_hash_keyword_typical_cycle: document.querySelector('#ch3_hash_keyword_typical_cycle'),
                ch3_hash_keyword_developed_cycle: document.querySelector('#ch3_hash_keyword_developed_cycle'),
                ch3_hash_keyword_emerging_cycle: document.querySelector('#ch3_hash_keyword_emerging_cycle'),

                ch3_cycle_svg_wrapper: document.querySelector('#ch3_cycle_svg_wrapper'),
                ch3_cycle_svg_image_path: document.querySelector('#ch3_cycle_svg_image_path'),
                ch3_cycle_end_triangle: document.querySelector('#ch3_cycle_end_triangle'),
            },
            values: {
                map_image_rotate_deg: [0, 60, { start: null, end: 0.25 }], /* section1 :0.2시작 0.3끝남 */
                map_image_move_to_up: [20, 35, { start: null, end: 0.25 }], /* 지도 돌리면서 전반적인 위치 위로 이동, 그래야 환율 나타낼 룸이 생김 */
                map_image_position_relative_or_fixed: [null, null, { start: null, end: 0.9 }],

                // 1번째 이야기 - 금리, GDP, 물가, 환율
                ch1_interest_rate_opacity_in: [0, 1, { start: 0.275, end: 0.3 }], /* 0.3에서 시작해서 0.4에서 끝남*/
                ch1_gdp_opacity_in: [0, 1, { start: 0.3, end: 0.325 }],
                ch1_price_index_opacity_in: [0, 1, { start: 0.325, end: 0.35 }],
                ch1_exchange_rate_opacity_in: [0, 1, { start: 0.35, end: 0.375 }],

                ch1_content_opacity_out: [1, 0, { start: 0.38, end: 0.4 }],
                ch1_interest_rate_opacity_out: [1, 0, { start: 0.38, end: 0.4 }], /* 0.3에서 시작해서 0.4에서 끝남*/
                ch1_gdp_opacity_out: [1, 0, { start: 0.38, end: 0.4 }],
                ch1_price_index_opacity_out: [1, 0, { start: 0.38, end: 0.4 }],
                ch1_exchange_rate_opacity_out: [1, 0, { start: 0.38, end: 0.4 }],

                // 2번째 이야기 - 개인, 기업, 시중은행, 중앙은행, 정부
                ch2_content_opacity_in: [0, 1, { start: 0.4, end: 0.425 }],

                ch2_individual_translateY_in: [-120, 0, { start: 0.425, end: 0.45 }],
                ch2_individual_opacity_in: [0, 1, { start: 0.425, end: 0.4250001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경

                ch2_firm_translateY_in: [-120, 0, { start: 0.45, end: 0.475 }],
                ch2_firm_opacity_in: [0, 1, { start: 0.45, end: 0.4500001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경

                ch2_commercial_bank_translateY_in: [-120, 0, { start: 0.475, end: 0.5 }],
                ch2_commercial_bank_opacity_in: [0, 1, { start: 0.475, end: 0.4750001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경

                ch2_central_bank_translateY_in: [-120, 0, { start: 0.5, end: 0.525 }],
                ch2_central_bank_opacity_in: [0, 1, { start: 0.5, end: 0.5000001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경

                ch2_government_translateY_in: [-120, 0, { start: 0.525, end: 0.55 }],
                ch2_government_opacity_in: [0, 1, { start: 0.525, end: 0.5250001 }], // 위로 올라간 상태에서 안 보일 때 투명도 0->1로 변경


                ch2_content_opacity_out: [1, 0, { start: 0.65, end: 0.675 }],


                // 3번째 이야기 - 경기 CYCLE
                ch3_content_opacity_in: [0, 1, { start: 0.7, end: 0.725 }],

                ch3_cycle_svg_wrapper: [0, 1, { start: 0.7, end: 0.725 }],
                ch3_cycle_svg_image_path: [3000, 0, { start: 0.725, end: 0.8 }], // #strokDashoffset
                ch3_cycle_end_triangle: [0, 1, { start: 0.8, end: 0.802 }],

                map_image_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],

                ch2_individual_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                ch2_firm_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                ch2_commercial_bank_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                ch2_central_bank_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
                ch2_government_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],

                ch3_cycle_svg_wrapper_opacity_out: [1, 0, { start: 0.85, end: 0.87 }],
            }
        },
        {
            // part1_1-chapter2
            heightNum: 10,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#part1_1-chapter2'),

                div_for_check_part2_start: document.querySelector('#part1_1-chapter2'),

                div_before_trip_content_for_check_sticky: document.querySelector('#div_before_trip_content_for_check_sticky'),
                trip_to_default_setting_image: document.querySelector('#trip_to_default_setting_image'),

                chapter_trip_content_japan: document.querySelector('#chapter_trip_content_japan'),
                chapter_trip_content_europe: document.querySelector('#chapter_trip_content_europe'),
                chapter_trip_content_china: document.querySelector('#chapter_trip_content_china'),
                chapter_trip_content_usa: document.querySelector('#chapter_trip_content_usa'),
                chapter_trip_content_korea: document.querySelector('#chapter_trip_content_korea'),

                trip_to_japan_skeleton_image: document.querySelector('#trip_to_japan_skeleton_image'),
                trip_to_europe_skeleton_image: document.querySelector('#trip_to_europe_skeleton_image'),
                trip_to_china_skeleton_image: document.querySelector('#trip_to_china_skeleton_image'),
                trip_to_usa_skeleton_image: document.querySelector('#trip_to_usa_skeleton_image'),
                trip_to_korea_skeleton_image: document.querySelector('#trip_to_korea_skeleton_image'),



            },
            values: {
                trip_to_japan_content_opacity_out: [1, 0, { start: 0.2, end: 0.225 }],
                trip_to_europe_content_opacity_in: [0, 1, { start: 0.225, end: 0.25 }],

                trip_to_europe_content_opacity_out: [1, 0, { start: 0.4, end: 0.425 }],
                trip_to_china_content_opacity_in: [0, 1, { start: 0.425, end: 0.45 }],

                trip_to_china_content_opacity_out: [1, 0, { start: 0.6, end: 0.625 }],
                trip_to_usa_content_opacity_in: [0, 1, { start: 0.625, end: 0.65 }],

                trip_to_usa_content_opacity_out: [1, 0, { start: 0.8, end: 0.825 }],
                trip_to_korea_content_opacity_in: [0, 1, { start: 0.825, end: 0.85 }],

                trip_to_korea_content_opacity_out: [1, 0, { start: 0.9, end: 0.925 }],

            }
        },
        {
            // part1_1-chapter3
            heightNum: 2,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#part1_1-chapter3')
            }
        }
    ];



    // 스크롤 이동 효과  

    const scrollToDestination_part1_title = () => {
        // 금리
        const part1_title_scroll_yoffset = 0;
        window.scroll({
            top: part1_title_scroll_yoffset,
            behavior: "smooth"
        });
    }


    const scrollToDestination_step1_1 = () => {
        // 금리
        const part1_step1_1_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch1_interest_rate_opacity_in[2].end * (sceneInfo[1].heightNum * window.screen.height);
        window.scroll({
            top: part1_step1_1_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step1_2 = () => {
        const part1_step1_2_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch1_gdp_opacity_in[2].end * (sceneInfo[1].heightNum * window.screen.height);

        window.scroll({
            top: part1_step1_2_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step1_3 = () => {
        const part1_step1_3_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch1_price_index_opacity_in[2].end * (sceneInfo[1].heightNum * window.screen.height);

        window.scroll({
            top: part1_step1_3_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step1_4 = () => {
        const part1_step1_4_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch1_exchange_rate_opacity_in[2].end * (sceneInfo[1].heightNum * window.screen.height);

        window.scroll({
            top: part1_step1_4_scroll_yoffset,
            behavior: "smooth"
        });
    }




    const scrollToDestination_step2_1 = () => {
        // 개인
        const part1_step2_1_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch2_individual_translateY_in[2].end * (sceneInfo[1].heightNum * window.screen.height);

        window.scroll({
            top: part1_step2_1_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step2_2 = () => {
        const part1_step2_2_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch2_firm_translateY_in[2].end * (sceneInfo[1].heightNum * window.screen.height);
        window.scroll({
            top: part1_step2_2_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step2_3 = () => {
        const part1_step2_3_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch2_commercial_bank_translateY_in[2].end * (sceneInfo[1].heightNum * window.screen.height);

        window.scroll({
            top: part1_step2_3_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step2_4 = () => {
        const part1_step2_4_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch2_central_bank_translateY_in[2].end * (sceneInfo[1].heightNum * window.screen.height);

        window.scroll({
            top: part1_step2_4_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step2_5 = () => {
        const part1_step2_5_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch2_government_translateY_in[2].end * (sceneInfo[1].heightNum * window.screen.height);

        window.scroll({
            top: part1_step2_5_scroll_yoffset,
            behavior: "smooth"
        });
    }




    const scrollToDestination_step3_1 = () => {
        const part1_step3_1_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch3_cycle_svg_wrapper[2].end * (sceneInfo[1].heightNum * window.screen.height);

        window.scroll({
            top: part1_step3_1_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step3_2 = () => {
        const part1_step3_2_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + 0.76 * (sceneInfo[1].heightNum * window.screen.height);

        // 선진국 경기 CYCLE/
        window.scroll({
            top: part1_step3_2_scroll_yoffset,
            behavior: "smooth"
        });
    }

    const scrollToDestination_step3_3 = () => {
        const part1_step3_1_scroll_yoffset = (sceneInfo[0].heightNum * window.screen.height) + sceneInfo[1].values.ch3_cycle_end_triangle[2].end * (sceneInfo[1].heightNum * window.screen.height);

        // 신흥국 경기 CYCLE
        window.scroll({
            top: part1_step3_1_scroll_yoffset,
            behavior: "smooth"
        });
    }





    const scrollToDestination_part2 = () => {
        const part2_japan = (sceneInfo[0].heightNum * window.screen.height) + (sceneInfo[1].heightNum * window.screen.height);
        // part2 처음으로 스크롤
        window.scroll({
            top: part2_japan,
            behavior: "smooth"
        });
    }


    const scrollToDestination_japan = () => {
        const part2 = (sceneInfo[0].heightNum * window.screen.height) + (sceneInfo[1].heightNum * window.screen.height) + sceneInfo[2].values.trip_to_japan_content_opacity_out[2].start * (sceneInfo[2].heightNum * window.screen.height);
        // 일본으로 스크롤
        window.scroll({
            top: part2,
            behavior: "smooth"
        });
    }

    const scrollToDestination_europe = () => {
        const part2_europe = (sceneInfo[0].heightNum * window.screen.height) + (sceneInfo[1].heightNum * window.screen.height) + sceneInfo[2].values.trip_to_europe_content_opacity_out[2].start * (sceneInfo[2].heightNum * window.screen.height);
        // 유럽으로 스크롤
        window.scroll({
            top: part2_europe,
            behavior: "smooth"
        });
    }

    const scrollToDestination_china = () => {
        const part2_china = (sceneInfo[0].heightNum * window.screen.height) + (sceneInfo[1].heightNum * window.screen.height) + sceneInfo[2].values.trip_to_china_content_opacity_out[2].start * (sceneInfo[2].heightNum * window.screen.height);
        // 중국으로 스크롤
        window.scroll({
            top: part2_china,
            behavior: "smooth"
        });
    }

    const scrollToDestination_usa = () => {
        const part2_usa = (sceneInfo[0].heightNum * window.screen.height) + (sceneInfo[1].heightNum * window.screen.height) + sceneInfo[2].values.trip_to_usa_content_opacity_out[2].start * (sceneInfo[2].heightNum * window.screen.height);
        // 미국으로 스크롤
        window.scroll({
            top: part2_usa,
            behavior: "smooth"
        });
    }

    const scrollToDestination_korea = () => {
        const part2_korea = (sceneInfo[0].heightNum * window.screen.height) + (sceneInfo[1].heightNum * window.screen.height) + sceneInfo[2].values.trip_to_korea_content_opacity_out[2].start * (sceneInfo[2].heightNum * window.screen.height);
        // 한국으로 스크롤
        window.scroll({
            top: part2_korea,
            behavior: "smooth"
        });
    }

    return (
        <>
            <div className='content-container'>
                {/* left-sidebar */}
                <div className='left_sidebar_data_page'>
                    <div className='left_sidebar_anchor_design'>
                        <div style={{ margin: '0 auto' }}>
                            <div>
                                <div id='mcw_left_sidebar_first'>
                                    <div className='mcw_left_sidebar_depth1' id='left_sidebar_part1_title' onClick={scrollToDestination_part1_title} style={{cursor:'pointer'}}>세계지도 살펴보기</div>
                                    <div className='mcw_left_sidebar_block'>
                                        <div className='mcw_left_sidebar_depth2' id='left_sidebar_step1_title_bold' onClick={scrollToDestination_step1_1} style={{cursor:'pointer'}}>STEP1. 경제라는 무대</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step1_1_bold' onClick={scrollToDestination_step1_1} style={{cursor:'pointer'}}>금융경제 #금리</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step1_2_bold' onClick={scrollToDestination_step1_2} style={{cursor:'pointer'}}>실물경제 #GDP</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step1_3_bold' onClick={scrollToDestination_step1_3} style={{cursor:'pointer'}}>종합경제 #물가</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step1_4_bold' onClick={scrollToDestination_step1_4} style={{cursor:'pointer'}}>국제경제 #환율</div>
                                    </div>

                                    <div className='mcw_left_sidebar_block'>
                                        <div className='mcw_left_sidebar_depth2' id='left_sidebar_step2_title_bold' onClick={scrollToDestination_step2_1} style={{cursor:'pointer'}}>STEP2. 무대 위 5명의 주인공들</div>

                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step2_individual_bold' onClick={scrollToDestination_step2_1} style={{cursor:'pointer'}}>개인</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step2_firm_bold' onClick={scrollToDestination_step2_2} style={{cursor:'pointer'}}>기업</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step2_commercial_bank_bold' onClick={scrollToDestination_step2_3} style={{cursor:'pointer'}}>시중은행</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step2_central_bank_bold' onClick={scrollToDestination_step2_4} style={{cursor:'pointer'}}>중앙은행</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step2_government_bold' onClick={scrollToDestination_step2_5} style={{cursor:'pointer'}}>정부</div>
                                    </div>

                                    <div className='mcw_left_sidebar_block'>
                                        <div className='mcw_left_sidebar_depth2' id='left_sidebar_step3_title_bold' onClick={scrollToDestination_step3_1} style={{cursor:'pointer'}}>STEP3. 주인공들이 벌이는 연극</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step3_1_bold' onClick={scrollToDestination_step3_1} style={{cursor:'pointer'}}>일반 경기 CYCLE</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step3_2_bold' onClick={scrollToDestination_step3_2} style={{cursor:'pointer'}}>선진국 경기 CYCLE</div>
                                        <div className='mcw_left_sidebar_depth3' id='left_sidebar_step3_3_bold' onClick={scrollToDestination_step3_3} style={{cursor:'pointer'}}>신흥국 경기 CYCLE</div>
                                    </div>
                                </div>

                                <div className='mcw_left_sidebar_depth1' id='left_sidebar_part2_title' onClick={scrollToDestination_part2} style={{cursor:'pointer'}}>세계여행 떠나기</div>
                                <div className='mcw_left_sidebar_block'>
                                    <div className='mcw_left_sidebar_depth2' id='left_sidebar_japan' onClick={scrollToDestination_japan} style={{cursor:'pointer'}}>일본</div>
                                    <div className='mcw_left_sidebar_depth2' id='left_sidebar_europe' onClick={scrollToDestination_europe} style={{cursor:'pointer'}}>유럽</div>
                                    <div className='mcw_left_sidebar_depth2' id='left_sidebar_china' onClick={scrollToDestination_china} style={{cursor:'pointer'}}>중국</div>
                                    <div className='mcw_left_sidebar_depth2' id='left_sidebar_usa' onClick={scrollToDestination_usa} style={{cursor:'pointer'}}>미국</div>
                                    <div className='mcw_left_sidebar_depth2' id='left_sidebar_korea' onClick={scrollToDestination_korea} style={{cursor:'pointer'}}>한국</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* primary */}
                <div className='main-content'>
                    <BookAnnouncement />
                    <section id='part1_1-chapter0' style={{ backgroundColor: '#fff', marginTop: '5vh' }}>
                        <div id='chapter0_intro_message'>
                            <div className='p_tag_wrapper' >
                                <p style={{ lineHeight: '1.8rem' }}>
                                    세계여행을 떠나기 위해선 세계지도가 필요합니다. 그래서 제가 준비했습니다.
                                </p>
                            </div>
                            <img id='chapter0_image1' src='/image/step1/part1/book/step1-part1-summary/chapter0_image1.png' />
                            <div className='p_tag_wrapper' >
                                <p style={{ lineHeight: '1.8rem' }}>
                                    우리에게 익숙한 세계지도는 아래와 같습니다. 하지만 이렇게 간단하게 세상을 바라보면,
                                    사건들이 조각난 퍼즐들로만 보여 복잡하고 어지러울 뿐입니다.
                                </p>
                            </div>
                        </div>

                        <div id='chapter0_sticky_0'>
                            <div>
                                <div className='p_tag_wrapper' id='chapter0_sticky_1'>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        그래서 우리에겐 돈이라는 새로운 시각이 필요합니다.

                                        <span id='chapter0_message_bold'>돈의 관점으로 세상을 바라보면 경제라는 뼈대</span>를 볼 수 있기 때문이지요.
                                    </p>
                                </div>
                                <div className='p_tag_wrapper'>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        우리의 여행은 많은 국가가 비슷한 경제 구조를 가지고 있다는 사실을 이해하는 것에서 출발합니다.
                                    </p>
                                </div>

                                <div id='worldmap_wild_wrapper'>
                                    <img id='worldmap_wild' src='/image/step1/part1/book/step1-part1-summary/worldmap_wild.png' />
                                    <div id='japan_image'></div>
                                    <div id='europe_image'></div>
                                    <div id='china_image'></div>
                                    <div id='usa_image'></div>
                                    <div id='korea_image'></div>
                                    <div id='japan_model_image'></div>
                                    <div id='europe_model_image'></div>
                                    <div id='china_model_image'></div>
                                    <div id='usa_model_image'></div>
                                    <div id='korea_model_image'></div>
                                    <img id='ch0_question_mark_image' src='/image/step1/part1/book/step1-part1-summary/ch0_question_mark.png' />
                                    <img id='ch0_ahha_image' src='/image/step1/part1/book/step1-part1-summary/ch0_ahha.png' />
                                    <img id='ch0_watch_image' src='/image/step1/part1/book/step1-part1-summary/ch0_watch.png' />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='part1_1-chapter1'>
                        <div id='div_for_get_scroll_length'>
                            <div className='p_tag_wrapper' id='chapter1_sticky_1'>
                                <p style={{ lineHeight: '1.8rem' }}>
                                    그럼 이제 한 국가의 경제 구조에 대해 개략적으로 살펴보겠습니다.
                                    그 과정은 다음 3단계에 걸쳐 이루어집니다.
                                </p>
                                <div>
                                    <img id='mcw_introduction_green_board_image' src='/image/step1/part1/book/step1-part1-summary/mcw_introduction_green_board_image.png' />
                                </div>
                            </div>
                        </div>

                        <div id='div_for_map_position_sticky' style={{ backgroundColor: '' }}>
                            {/* ch1 내용 - 금리, GDP, 물가, 환율 */}
                            <div className='padding30 page1_section1_position_for_desktop' id='chapter1_content'>
                                <div className='p_tag_wrapper' style={{ position: 'relative' }}>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        첫 단계입니다.
                                        금융경제와 실물경제로 이루어진 경제 무대를 자세히 들여다보면 다음
                                        4가지 키워드가 발견됩니다. 이를 통해 한 국가 경제의 분위기를 눈치챌 수 있지요.
                                    </p>
                                </div>

                                <div>
                                    <div className='step_title'>STEP1. 경제라는 무대</div>
                                    <div className='ch1_hash_keyword' id='ch1_hash_keyword_interest_rate'>금융경제에서의 금리</div>
                                    <div className='ch1_hash_keyword' id='ch1_hash_keyword_gdp'>실물경제에서의 GDP</div>
                                    {/* <div style={{position:'absolute'}}>금융경제와 실물경제를 동시에 고려한 </div> */}
                                    <div className='ch1_hash_keyword' id='ch1_hash_keyword_price_index'>종합경제에서의 물가</div>
                                    {/* <div style={{position:'absolute'}}>다른 나라와의 관계까지 고려한</div> */}
                                    <div className='ch1_hash_keyword' id='ch1_hash_keyword_exchange_rate'>국제경제에서의 환율</div>
                                    {/* <p style={{lineHeight:'1.8rem'}}>을 이해하면 경제 무대의 분위기를 단번에 눈치챌 수 있는 것입니다.</p> */}
                                </div>
                            </div>

                            {/* ch2 내용 - 개인, 기업, 시중은행, 중앙은행, 정부 */}
                            <div className='padding30 page1_section1_position_for_desktop' id='chapter2_content'>
                                <div className='p_tag_wrapper' style={{ position: 'relative' }}>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        두 번째 단계에선 경제 무대위의 5명의 경제 주인공들을 만납니다.
                                        이들이 각각 어떤 생활을 하며 살아가는지 살펴보는 것입니다.
                                    </p>
                                </div>

                                <div>
                                    <div className='step_title'>STEP2. 무대 위 5명의 주인공들</div>
                                    <div className='ch1_hash_keyword' id='ch2_hash_keyword_individual'>개인</div>
                                    <div className='ch1_hash_keyword' id='ch2_hash_keyword_firm'>기업</div>
                                    <div className='ch1_hash_keyword' id='ch2_hash_keyword_commercial_bank'>시중은행</div>
                                    <div className='ch1_hash_keyword' id='ch2_hash_keyword_central_bank'>중앙은행</div>
                                    <div className='ch1_hash_keyword' id='ch2_hash_keyword_government'>정부</div>

                                </div>
                            </div>

                            {/* ch3 내용 - 개인, 기업, 시중은행, 중앙은행, 정부 */}
                            <div className='padding30 page1_section1_position_for_desktop' id='chapter3_content'>
                                <div className='p_tag_wrapper' style={{ position: 'relative' }}>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        그렇게 '경제라는 무대' 위에, '5명의 주인공들'이 서로 부대껴 살아가면서 <b>경기 CYCLE을 만듭니다</b>.
                                        우선 대부분 나라에 적용되는 일반 CYCLE의 모습을 살펴본 뒤,
                                        선진국과 신흥국에서의 전개양상의 차이를 확인합니다.
                                    </p>
                                </div>

                                <div>
                                    <div className='step_title'>STEP3. 주인공들이 벌이는 연극</div>
                                    <div className='ch1_hash_keyword' id='ch3_hash_keyword_typical_cycle'>일반 경기 CYCLE</div>
                                    <div className='ch1_hash_keyword' id='ch3_hash_keyword_developed_cycle'>선진국 경기 CYCLE</div>
                                    {/* <div style={{position:'absolute'}}>금융경제와 실물경제를 동시에 고려한 </div> */}
                                    <div className='ch1_hash_keyword' id='ch3_hash_keyword_emerging_cycle'>신흥국 경기 CYCLE</div>

                                </div>
                            </div>

                            {/* <div className='sticky-elem main-message a'>
                                    <p style={{lineHeight:'1.8rem'}}>금리</p>
                                </div> */}



                            <div id='map_image_wrapper'>
                                <img id='map_image' src='/image/step1/part1/book/step1-part1-summary/map_written.png' style={{ zIndex: '' }} />

                                <img id='interest_hash_image' src='/image/step1/part1/book/step1-part1-summary/ch1_interest_rate.png' style={{ zIndex: '' }} />
                                <img id='price_index_hash_image' src='/image/step1/part1/book/step1-part1-summary/ch1_price_index.png' />
                                <img id='gdp_hash_image' src='/image/step1/part1/book/step1-part1-summary/ch1_gdp.png' style={{ zIndex: '' }} />
                                <img id='exchange_rate_hash_image' src='/image/step1/part1/book/step1-part1-summary/ch1_exchange_rate.png' />

                                <img id='ch2_central_bank_image' src='/image/step1/part1/book/step1-part1-summary/central_bank.png' />
                                <img id='ch2_government_image' src='/image/step1/part1/book/step1-part1-summary/government.png' />
                                <img id='ch2_commercial_bank_image' src='/image/step1/part1/book/step1-part1-summary/commercial_bank.png' />
                                <img id='ch2_individual_image' src='/image/step1/part1/book/step1-part1-summary/individual.png' />
                                <img id='ch2_firm_image' src='/image/step1/part1/book/step1-part1-summary/firm.png' />

                                <div id='ch3_cycle_svg_wrapper'>
                                    <svg id='cycle_svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 299 168"
                                        version="1.1"
                                    >
                                        <path id='ch3_cycle_svg_image_path'
                                            // 곡선 전체
                                            style={{
                                                fill: "none",
                                                strokeWidth: "68.75",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                stroke: "rgb(10.588235%,46.666667%,27.058824%)",
                                                strokeOpacity: 1,
                                                strokeMiterlimit: 10,
                                                strokeDasharray: 3000,
                                                strokeDashoffset: 0, // 3000(안보임) -> 0(다보임) 이어야함
                                            }}
                                            d="M 393.486165 1525.506999 C 617.774809 1186.302083 842.034882 847.097168 1074.1522 792.694499 C 1306.212375 738.291829 1550.472709 1259.247233 1786.018643 1199.034017 C 2021.593149 1138.849284 2254.539049 785.174967 2487.513522 431.500651 "
                                            transform="matrix(0.136717,0,0,0.137143,-49.08139,-45.942857)"
                                        />

                                        <path
                                            id='ch3_cycle_end_triangle'
                                            // 곡선 끝 삼각형 
                                            style={{

                                                display: 'block', // none -> block 
                                                stroke: "none",
                                                fillRule: "evenodd",
                                                fill: "rgb(10.588235%,46.666667%,27.058824%)",
                                                fillOpacity: 1
                                            }}
                                            d="M 271.308594 19.5625 L 298.957031 0.0117188 L 293.027344 33.417969 Z M 271.308594 19.5625 "
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section id='part1_1-chapter2'>
                        <div id='div_before_trip_content_for_check_sticky'>
                            <div className='p_tag_wrapper'>
                                <p style={{ lineHeight: '1.8rem' }}>
                                    이론편이 끝나면, 단편적이었던 지도가 다음과 같이 좀 더 입체적으로 보일 것입니다.
                                    세계지도를 통해 경제의 이론적 이해를 끝내니, 이제 본격적으로 세계여행을 떠날 일만 남았습니다.
                                </p>
                            </div>
                            <div id='map_finish_wrapper'>
                                <img id='map_finish' src='/image/step1/part1/book/step1-part1-summary/map_finish.png' />
                            </div>
                            <div className='p_tag_wrapper'>
                                <p style={{ lineHeight: '1.8rem' }}>
                                    세계지도를 주머니에 넣고 본격적으로 떠나봅시다. 우리들의 해외여행 순서는 일본, 유럽, 중국, 미국, 한국 순입니다.
                                </p>
                            </div>
                            <div id='part1_chapter2_preparation_for_trip_image_wrapper'>
                                <img id='part1_chapter2_preparation_for_trip_image' src='/image/step1/part1/book/step1-part1-summary/part1_chapter2_preparation_for_trip.png' />
                            </div>
                        </div>

                        <div id='div_for_trip_section_stikcy'>
                            <div className='padding30 page1_section1_position_for_desktop' id='chapter_trip_content_japan'>
                                <div className='p_tag_wrapper'>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        첫 번째 여행지는 <b style={{ fontSize: '18px' }}>일본</b>입니다. 이들에게 무슨 일이 있었기에 1990년대부터 <b>잃어버린 20년</b>을 가지게 된 것인지 알아봅니다.
                                        그 후 2010년대에 들어 이를 극복하기 위해 시행된 <b>아베노믹스</b>가 어떤 결과를 가져왔는지 살펴봅니다.
                                    </p>
                                </div>
                            </div>
                            <div className='padding30 page1_section1_position_for_desktop' id='chapter_trip_content_europe'>
                                <div className='p_tag_wrapper'>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        두 번째 여행지는 <b style={{ fontSize: '18px' }}>유럽</b>입니다. 1900년대에 스멀스멀 올라오던 유럽 통합의 꿈이 유럽연합, <b>유로화</b>라는 결실을 맺게된 과정을 알아봅니다.
                                        그리고 그 통합에 어떤 문제들이 숨어 있었으며, 이것이 어떻게 2010년대 초반 <b>유럽 재정위기</b>를 더 심각하게 만들었는지 살펴봅니다.
                                    </p>
                                </div>
                            </div>
                            <div className='padding30 page1_section1_position_for_desktop' id='chapter_trip_content_china'>
                                <div className='p_tag_wrapper'>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        세 번째 여행지는 <b style={{ fontSize: '18px' }}>중국</b>입니다. 중국은 <b>2000년대 상당한 성장</b>이 있었고,
                                        이후 2010년대 중반 <b>위안화 가치의 출렁거림</b>이 있었는데, 왜 그런 일들이 벌어졌는지 살펴봅니다.
                                    </p>
                                </div>
                            </div>
                            <div className='padding30 page1_section1_position_for_desktop' id='chapter_trip_content_usa'>
                                <div className='p_tag_wrapper'>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        네 번째 여행지는 <b style={{ fontSize: '18px' }}>미국</b>입니다.
                                        1990년대에 황금기를 누리던 미국이 어쩌다 <b>2008년 금융위기</b>를 겪게 되었는지,
                                        그리고 그 이후의 <b>극복과정</b>을 살펴봅니다.
                                    </p>
                                </div>
                            </div>
                            <div className='padding30 page1_section1_position_for_desktop' id='chapter_trip_content_korea'>
                                <div className='p_tag_wrapper'>
                                    <p style={{ lineHeight: '1.8rem' }}>
                                        마지막 여행지는 <b style={{ fontSize: '18px' }}>한국</b>입니다.
                                        초고속 성장을 하던 한국이 1990년대 <b>외환위기</b>를 겪는 과정과,
                                        이후 <b>2000년대를 살아가는 모습</b>을 살펴봅니다.
                                        우리는 그렇게 집으로 돌아옵니다.
                                    </p>
                                </div>
                            </div>
                            <div id='trip_to_image_wrapper'>
                                <img id='trip_to_default_setting_image' src='/image/step1/part1/book/step1-part1-summary/trip_to_default_setting.png' />
                                <img id='trip_to_japan_skeleton_image' src='/image/step1/part1/book/step1-part1-summary/trip_to_japan_skeleton.png' />
                                <img id='trip_to_europe_skeleton_image' src='/image/step1/part1/book/step1-part1-summary/trip_to_europe_skeleton.png' />
                                <img id='trip_to_china_skeleton_image' src='/image/step1/part1/book/step1-part1-summary/trip_to_china_skeleton.png' />
                                <img id='trip_to_usa_skeleton_image' src='/image/step1/part1/book/step1-part1-summary/trip_to_usa_skeleton.png' />
                                <img id='trip_to_korea_skeleton_image' src='/image/step1/part1/book/step1-part1-summary/trip_to_korea_skeleton.png' />
                            </div>
                        </div>
                    </section>
                    <p className='p_tag_wrapper'>
                        지금까지 '돈이 굴리는 세상(내가 사는 세상 1)'의 큰 흐름을 살펴보았습니다. 이젠 본격적으로 세계지도를 배우기 시작해봅시다.
                    </p>
                </div>
            </div>

            <BookFooter leftLink='' leftText='' rightLink='/step1/part1/book/ch1/introduction' rightText='시작하며' />                                    
            {/* <YoutubeBottomRightButton/> */}
            <BookFloatButton />
        </>

    );

}

