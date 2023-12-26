// 한국 실물경제 - 경제성장률
import React, { useState, useEffect } from 'react'
import { GetEconDataBokFunc } from '../common/GetEconDataBok';
import CardForEconData from '../../../common/CardForEconData';
import LineZoomable from '../../../chart/LineZoomable'
// import Spinner from '../../../common/Spinner';
import EconDataLoadingCard from '../common/EconDataLoadingCard';
import EconDataDescription from '../common/EconDataDescription';

export default function KoreaGdpGrowth() {
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
    const updateData = await GetEconDataBokFunc('901Y027', 'Q', '1900Q1', '2023Q4', 'I61BC', null, '경제성장률')
    console.log('updateData', updateData)
    setData(updateData)
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
            <EconDataDescription/>
            <CardForEconData source={'한국은행'}>
              <LineZoomable data={data} />
            </CardForEconData>
          </>
        )
      }
    </>
  )
}