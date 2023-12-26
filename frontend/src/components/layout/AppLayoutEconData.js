import React from 'react'
import Header1 from "./Header1";
import Header2 from "./Header2";
import Body from './Body'
import BodyWrapper from './BodyWrapper'
import BodyLeft from './BodyLeft'
import BodyCenter from './BodyCenter'
import EconDataLeftSidebar from '../step1/part1/common/EconDataLeftSidebar'
import Footer from './Footer'


export default function AppLayoutEconData({country, children}) {
  return (
    <>
      <div className="applayout-header">
        <Header1 subtitle={'돈으로부터의 독립'} />
        <Header2 type={'step1'} />
      </div>
      <Body>
        <BodyWrapper>
          <BodyLeft>
            <EconDataLeftSidebar country={`${country}`} />
          </BodyLeft>
          <BodyCenter country={`${country}`}>
            {children}
          </BodyCenter>
        </BodyWrapper>
      </Body>
      <Footer />
    </>
  )
}