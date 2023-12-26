import React, { useState, useEffect } from 'react'
import { GetEconDataBokFunc } from '../common/GetEconDataBok';
import CardForEconData from '../../../common/CardForEconData';
import LineZoomable from '../../../chart/LineZoomable'
import Spinner from '../../../common/Spinner';
import EconDataLoadingCard from '../common/EconDataLoadingCard';

export default function KoreaCpi() {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: "",
            data: []
        }],
    });

    const setBokEconDataFunc = async () => {
        setLoading(true);
        // code0, cycle, periodStart, periodEnd,  code1, code2, chartName
        const updateData = await GetEconDataBokFunc('901Y009', 'M', '190001', '202308', '0', null, '소비자 물가지수(CPI)')
        console.log('updateData', updateData);
        setData(updateData)
        console.log(updateData);
        setLoading(false)
    }

    useEffect(() => {
        setBokEconDataFunc()
    }, [])

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
                            <LineZoomable data={data} />
                        </CardForEconData>
                    </>
                )
            }
        </>
    )
}