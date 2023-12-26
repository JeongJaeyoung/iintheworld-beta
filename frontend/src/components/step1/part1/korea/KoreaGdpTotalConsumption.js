// 명목GDP 총지출 관점 구성비율 : C + I + G + NX 
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { GetEconDataBokOnlyValueFunc } from '../common/GetEconDataBok';
import { Slider, ConfigProvider } from 'antd';
import Spinner from '../../../common/Spinner';
import EconDataLoadingCard from '../common/EconDataLoadingCard';
import CardForEconData from '../../../common/CardForEconData';

export default function KoreaGdpTotalConsumption() {
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
                text: `한국 ${year} GDP 총소비 관점`, // 제목 텍스트를 이 부분에 넣어주세요
                fontSize: 16,
            },
        },
    };

    const setBokEconDataFunc = async () => {
        setLoading(true);

        // code0, cycle, periodStart, periodEnd, code1, code2
        const minganPlusG = await GetEconDataBokOnlyValueFunc('200Y001', 'A', year, year, '60101')          
        const cMingan = await GetEconDataBokOnlyValueFunc('200Y001', 'A', year, year, '6010101')  // 민간       
        const g = await GetEconDataBokOnlyValueFunc('200Y001', 'A', year, year, '6010102')  // 정부        
        const iTotalFixedCapital = await GetEconDataBokOnlyValueFunc('200Y001', 'A', year, year, '60102')  // 총고정자본형성  
        const exExport = await GetEconDataBokOnlyValueFunc('200Y001', 'A', year, year, '60103')  // 수출   
        const imImport = await GetEconDataBokOnlyValueFunc('200Y001', 'A', year, year, '60104')  // 수입
        const nx = exExport - imImport  // 순수출

        const updateData = {
            labels: ['개인', '기업', '정부', '순수출'],
            datasets: [{
                label: "한국 노동시장",
                data: [cMingan, iTotalFixedCapital, g, nx],
                backgroundColor: [
                    '#c5e1a5',
                    '#43a047',
                    '#e774fb',
                    '#00aaff',
                ],
                borderColor: [
                    '#009000',
                    '#134f2c',
                    '#800080',
                    '#0000ff',
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
                        <EconDataLoadingCard/>
                    </>
                ) : error ? (
                    <>
                        {error.message}
                    </>
                ) : (
                    <>
                        <CardForEconData source={'한국은행'}>
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

                        </CardForEconData>
                    </>
                )
            }
        </>
    )
}