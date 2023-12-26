import React from 'react'
import AppLayoutEconData from '../../../../components/layout/AppLayoutEconData'
import KoreaGdpGrowth from '../../../../components/step1/part1/korea/KoreaGdpGrowth';
import KoreaLaborPeople from '../../../../components/step1/part1/korea/KoreaLaborPeople';
import KoreaUnemployment from '../../../../components/step1/part1/korea/KoreaUnemployment';
import KoreaGdpTotalConsumption from '../../../../components/step1/part1/korea/KoreaGdpTotalConsumption';
import EconDataFloatButton from '../../../../components/step1/part1/common/EconDataFloatButton';

export default function KoreaRealEconPage() {
  return (
    <>
      <AppLayoutEconData country={'korea'}>
        <KoreaGdpGrowth />
        <KoreaUnemployment />
        <KoreaLaborPeople />
        <KoreaGdpTotalConsumption />
        <EconDataFloatButton country={'korea'}/>
      </AppLayoutEconData>
    </>
  )
}