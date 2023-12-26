import React from 'react'
import AppLayoutEconData from '../../../../components/layout/AppLayoutEconData'
import EconModel from '../../../../components/step1/part1/common/EconModel'
import EconDataIntroText from '../../../../components/step1/part1/common/EconDataIntroText'

export default function UsaHomePage() {
  return (
    <>
      <AppLayoutEconData country={'usa'}>
        <EconDataIntroText/>
        <EconModel country={'usa'} />
      </AppLayoutEconData>
    </>
  )
}