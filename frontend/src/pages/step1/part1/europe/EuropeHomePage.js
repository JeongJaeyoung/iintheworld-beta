import React from 'react'
import AppLayoutEconData from '../../../../components/layout/AppLayoutEconData'
import EconModel from '../../../../components/step1/part1/common/EconModel'
import EconDataIntroText from '../../../../components/step1/part1/common/EconDataIntroText'

export default function EuropeHomePage() {
  return (
    <>
      <AppLayoutEconData country={'europe'}>
        <EconDataIntroText/>
        <EconModel country={'europe'} />
      </AppLayoutEconData>
    </>
  )
}