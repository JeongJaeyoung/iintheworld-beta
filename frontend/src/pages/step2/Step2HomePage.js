import React from 'react'
import { Link } from 'react-router-dom'
import AppLayoutStep1 from '../../components/layout/AppLayoutStep1'
import Step2Home from '../../components/step2/Step2Home'

export default function Step2HomePage(){

    return (
        <>
            <AppLayoutStep1>
                <Step2Home/>
            </AppLayoutStep1>
        </>
    )
}