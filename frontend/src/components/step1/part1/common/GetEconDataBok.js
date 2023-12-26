import React, { useState } from 'react'
import { axiosInstance } from '../../../../services/api';


export async function GetEconDataBokFunc(code0, cycle, periodStart, periodEnd,  code1, code2=null, chartName) {
    // 각 시점, 이에 해당하는 데이터 값 불러오기 ex) 하나의 데이터만 자세히 확인
    // code0(통계표 코드), cycle(주기), periodStart(검색시작일자), periodEnd(검색종료일자), code1(통계항목코드1), code2(통계항목코드2)
    // chartName(chart.js의 그래프 제목)
    try {
        let url = `/iintheworld/econ-data/bok/?code0=${code0}&cycle=${cycle}&periodStart=${periodStart}&periodEnd=${periodEnd}&code1=${code1}`;
        if (code2 !== null && code2 !== undefined) {url += `&code2=${code2}`}
        const response = await axiosInstance.get(url);
        const arrayData = response.data.StatisticSearch.row
        const updateData = {
            labels: arrayData.map(element => (element.TIME.substr(0, 4) + '년')),
            datasets: [{
                label: chartName,
                data: arrayData.map(element => element.DATA_VALUE),
                borderColor: '#047527',
                fill: true,
                backgroundColor: '#bdfcc9',
                borderWidth: 1,
                pointRadius: 1,
            }]
        };
        return updateData;
    } catch (e) {
        console.log(e)
        return null;
    }
}

export async function GetEconDataBokOnlyValueFunc(code0, cycle, periodStart, periodEnd,  code1, code2=null) {
    // 하나의 값만 불러오기 ex) 최종적으로 여러 데이터를 종합해야할 때
    // code0(통계표 코드), cycle(주기), periodStart(검색시작일자), periodEnd(검색종료일자), code1(통계항목코드1), code2(통계항목코드2)
    try {
        let url = `/iintheworld/econ-data/bok/?code0=${code0}&cycle=${cycle}&periodStart=${periodStart}&periodEnd=${periodEnd}&code1=${code1}`;
        if (code2 !== null && code2 !== undefined) {url += `&code2=${code2}`}
        const response = await axiosInstance.get(url);
        const value = response.data.StatisticSearch.row[0].DATA_VALUE
        console.log('value', value)
        return value;
    } catch (e) {
        console.log(e)
        return null;
    }
}


// export async function getFredEconDataFunc(code, frequency){
//     try {
//         setLoading(true);
//         const response = await axiosInstance.get(`/iintheworld/econ-data/fred/?code=${code}&frequency=${frequency}`) // object 형태
//         const arrayData = response.data.observations // array 형태
//         const updateData = {
//             ...data,
//             labels: arrayData.map(element => (element.date.substr(0, 4) + '년')),
//             datasets: [{
//                 label: chartName,
//                 data: arrayData.map(element => element.value),
//                 borderColor: 'gold',
//                 fill: true,
//                 backgroundColor: 'rgba(255,223,0,0.1)',
//                 borderWidth: 1,
//                 pointRadius: 1,
//             }]
//         };
//         setData(updateData);
//         setLoading(false);
//     } catch (e) {
//         setError(e)
//         setLoading(false);
//     }
// }