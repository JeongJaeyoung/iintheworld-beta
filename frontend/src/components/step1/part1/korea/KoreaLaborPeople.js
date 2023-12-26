// 한국 실물경제 - 노동시장 - 인구 구분(총인구, 생산가능인구, 경제활동인구, 취업자, 실업자) + 시간 설정 slider
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { GetEconDataBokOnlyValueFunc } from '../common/GetEconDataBok';
import { Slider, ConfigProvider } from 'antd';
import EconDataLoadingCard from '../common/EconDataLoadingCard';
import CardForEconData from '../../../common/CardForEconData';

export default function KoreaLaborPeople() {
    const [year, setYear] = useState(2022)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: "",
            data: []
        }],
    });

    const options = {
        plugins: {
            title: {
                display: true,
                text: `한국 ${year} 노동시장`, // 제목 텍스트를 이 부분에 넣어주세요
                fontSize: 16,
            },
        },
    };

    const setBokEconDataFunc = async () => {
        setLoading(true);

        // code0, cycle, periodStart, periodEnd, code1, code2
        const employeeValue = await GetEconDataBokOnlyValueFunc('901Y027', 'A', year, year, 'I61BA')           // 취업자(1)
        const unemployeeValue = await GetEconDataBokOnlyValueFunc('901Y027', 'A', year, year, 'I61BB')         // 실업자(2)
        const laborForceValue = await GetEconDataBokOnlyValueFunc('901Y027', 'A', year, year, 'I61B')          // 경제활동인구(1+2)
        const nonLaborForceValue = await GetEconDataBokOnlyValueFunc('901Y027', 'A', year, year, 'I61C')       // 비경제활동인구(3)
        const adultPopulationValue = await GetEconDataBokOnlyValueFunc('901Y027', 'A', year, year, 'I61A')     // 생산가능인구(15세 이상 인구)(1+2+3)
        const totalPopolationValueRaw = await GetEconDataBokOnlyValueFunc('901Y028', 'A', year, year, 'I35A')  // 총인구(1+2+3+4)
        const totalPopulationValue = Math.floor(totalPopolationValueRaw / 1000); // 단위(천명) 맞추기
        const nonAdultPopulationValue = totalPopulationValue - adultPopulationValue                            // 비생산가능인구(4)

        const updateData = {
            labels: ['취업자', '실업자', '비경제활동인구', '비생산가능인구'],
            datasets: [{
                label: "한국 노동시장",
                data: [employeeValue, unemployeeValue, nonLaborForceValue, nonAdultPopulationValue],
                backgroundColor: [
                    '#c5e1a5',
                    '#43a047',
                    '#2e8b57',
                    '#006400',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            }],
        }
        setData(updateData);
        setLoading(false);
    }

    useEffect(() => {
        setBokEconDataFunc();
    }, [year])

    const onAfterChange = (newValue) => {
        setYear(newValue);
    };

    return (
        <>
            {
                loading ? (
                    <>
                        <EconDataLoadingCard />
                    </>
                ) : error ? (
                    <>
                        {error.message}
                    </>
                ) : (
                    <>
                        <CardForEconData source={'한국은행'}>
                            <div>
                                <ConfigProvider theme={{ token: { colorPrimary: '#43a047' }, }}>
                                    <Slider
                                        defaultValue={year}
                                        min={2000}
                                        max={2022}
                                        onAfterChange={onAfterChange}
                                    />
                                </ConfigProvider>

                                <div style={{ width: '300px', height: '300px' }}>
                                    <Doughnut data={data} options={options} />
                                </div>
                            </div>
                        </CardForEconData>
                    </>
                )
            }
        </>
    )
}