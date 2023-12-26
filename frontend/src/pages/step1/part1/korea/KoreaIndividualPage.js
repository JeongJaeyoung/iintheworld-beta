import React from 'react'
import AppLayoutEconData from '../../../../components/layout/AppLayoutEconData'
import KoreaDurableGoods from '../../../../components/step1/part1/korea/KoreaDurableGoods'
import EconDataFloatButton from '../../../../components/step1/part1/common/EconDataFloatButton'

export default function KoreaIndividualPage() {
    return (
        <>
            <AppLayoutEconData country={'korea'}>
                <KoreaDurableGoods />
                <EconDataFloatButton country={'korea'}/>
            </AppLayoutEconData>
        </>
    )
}