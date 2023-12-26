// 미국 중앙은행(FRED) 경제 데이터 api
// #https://fred.stlouisfed.org/docs/api/fred/series_observations.html
// frequency : a, sa, q, m, bw, w, d

import React from 'react'
import AppLayoutEconData from '../../../../components/layout/AppLayoutEconData'
import GetEconDataFred from '../../../../components/step1/part1/common/GetEconDataFred'
import JapanBaseRate from '../../../../components/step1/part1/japan/JapanBaseRate'


export default function JapnaFinancialEcon() {
  return (
    <>
      <AppLayoutEconData country={'japan'}>
        <JapanBaseRate/>
      </AppLayoutEconData>
    </>
  )
}