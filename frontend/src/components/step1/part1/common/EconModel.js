import React from 'react'
import './EconModel.css'

export default function EconModel({ country }) {
    return (
        <>
            <div>
                <div id="map_wrapper">
                    <img src={`/image/step1/part1/${country}/country_layout_${country}.png`} className='' id='map_country_layout' />
                    <img src='/image/step1/part1/common/total_economy.png' className='hover' id='map_total_economy' />
                    <img src='/image/step1/part1/common/financial_economy.png' className='hover' id='map_financial_economy' />
                    <img src='/image/step1/part1/common/real_economy.png' className='hover' id='map_real_economy' />

                    <img src='/image/step1/part1/common/international_economy.png' className='hover' id='map_international_economy' />

                    <img src='/image/step1/part1/common/government.png' className='hover' id='map_government' />
                    <img src='/image/step1/part1/common/central_bank.png' className='hover' id='map_central_bank' />
                    <img src='/image/step1/part1/common/commercial_bank.png' className='hover' id='map_commercial_bank' />
                    <img src='/image/step1/part1/common/firm.png' className='hover' id='map_firm' />
                    <img src='/image/step1/part1/common/individual.png' className='hover' id='map_individual' />
                </div>
            </div>
        </>
    )
}