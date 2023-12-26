
import React from 'react'
import { Link } from 'react-router-dom'
import './EconDataLeftSidebarMap.css'

export default function EconDataLeftSidebarMap({selectCountry}) {
    const countryEffect = (country) => {
        if(country == selectCountry){
            return 'map_now'
        } else {
            return ''
        }
    }

    return (
        <>
            <div id='map-wrapper'>
                <img id='map' src='/image/step1/part1/common/world_map_default_image.png' />
                <div className='map_japan_image_back'></div>
                <Link to='/econ-data/japan'>
                    <div className='map_japan_image' style={{backgroundImage:'url(/image/step1/part1/common/japan.svg)'}} id={countryEffect('japan')}></div>
                </Link>

                <div className='map_europe_image_back'></div>
                <Link to='/econ-data/europe'>
                    <div className='map_europe_image' style={{backgroundImage:'url(/image/step1/part1/common/europe.svg)'}} id={countryEffect('europe')}></div>
                </Link>

                <div className='map_china_image_back'></div>
                <Link to='/econ-data/china'>
                    <div className='map_china_image' style={{backgroundImage:'url(/image/step1/part1/common/china.svg)'}} id={countryEffect('china')}></div>
                </Link>

                <div className='map_usa_image_back'></div>
                <Link to='/econ-data/usa'>
                    <div className='map_usa_image' style={{backgroundImage:'url(/image/step1/part1/common/usa.svg)'}} id={countryEffect('usa')}></div>
                </Link>

                <div className='map_korea_image_back'></div>
                <Link to='/econ-data/korea'>
                    <div className='map_korea_image' style={{backgroundImage:'url(/image/step1/part1/common/korea.svg)'}} id={countryEffect('korea')}></div>
                </Link>
            </div>
        </>
    )
}