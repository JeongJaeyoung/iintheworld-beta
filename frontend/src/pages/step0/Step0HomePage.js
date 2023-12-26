import React from 'react'
import AppLayoutStep0WithCarousel from '../../components/layout/AppLayoutStep0WithCarousel'
import Step0Home from '../../components/step0/Step0Home'


export default function Step0HomePage(){

    return (
        <>
            <AppLayoutStep0WithCarousel>
                <Step0Home/>       
            </AppLayoutStep0WithCarousel>
        </>
    )
}