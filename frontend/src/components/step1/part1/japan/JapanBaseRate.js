import React from 'react'
import GetEconDataFred from '../common/GetEconDataFred'


export default function JapanBaseRate() {
    return (
        <>
            <GetEconDataFred code={'INTDSRJPM193N'} frequency={'m'} chartName={'일본 기준금리'} />
        </>
    )
}