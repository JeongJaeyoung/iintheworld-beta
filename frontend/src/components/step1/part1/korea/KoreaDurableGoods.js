import React, { useState, useEffect } from 'react'
import { GetEconDataBokFunc } from '../common/GetEconDataBok';
import CardForEconData from '../../../common/CardForEconData';
import LineZoomable from '../../../chart/LineZoomable'
import EconDataLoadingCard from '../common/EconDataLoadingCard';

export default function KoreaDurableGoods() {
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
    const updateData = await GetEconDataBokFunc('200Y045', 'Q', '1900Q1', '2023Q4', '10101', null, '내구재 소비')
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
            <EconDataLoadingCard />
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