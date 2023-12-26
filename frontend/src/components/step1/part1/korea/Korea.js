import React from 'react'
import BodyWrapper from '../../../../layout/BodyWrapper'
import BodyLeft from '../../../../layout/BodyLeft'
import BodyCenter from '../../../../layout/BodyCenter'
import EconModel from '../common/EconModel'
import EconDataLeftSidebar from '../common/EconDataLeftSidebar'
import '../common/WorldDataCommonDesign.css'

export default function Korea() {

  return (
    <>
      <BodyWrapper>
        <BodyLeft>
          <EconDataLeftSidebar country='korea' />
        </BodyLeft>
        <BodyCenter>
          <EconModel country={'korea'} />
        </BodyCenter>
      </BodyWrapper>
    </>
  )
}