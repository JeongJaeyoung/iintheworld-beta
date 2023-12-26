import React from 'react'
import AppLayoutStep1WithCarousel from '../../../components/layout/AppLayoutStep1WithCarousel'
import Step1Home from '../../../components/step1/home/Step1Home'

export default function Step1HomePage() {

    return (
        <>
            <AppLayoutStep1WithCarousel>
                <Step1Home/>
            </AppLayoutStep1WithCarousel>
        </>
    )
}