import React from 'react'
import AppLayoutEconData from '../../../../components/layout/AppLayoutEconData'
import EconModel from '../../../../components/step1/part1/common/EconModel'
import EconMetaTable from '../../../../components/step1/part1/common/EconMetaTable'
import EconDataFloatButton from '../../../../components/step1/part1/common/EconDataFloatButton'
import EconDataIntroText from '../../../../components/step1/part1/common/EconDataIntroText'

export default function KoreaHomePage() {
  return (
    <>
      <AppLayoutEconData country={'korea'}>
        <EconDataIntroText />
        <EconModel country={'korea'} />
        {/* <EconMetaTable/> */}
        <EconDataFloatButton country={'korea'} />
      </AppLayoutEconData>
    </>
  )
}