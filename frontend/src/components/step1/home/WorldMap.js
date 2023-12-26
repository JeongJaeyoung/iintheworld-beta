import React from 'react'
import { Link } from 'react-router-dom'
import './WorldMap.css'

export default function WorldMap() {
    return (
        <>
            <div id='world-map-wrapper'>
                <div id='world-map-box'>
                    <img id='world-map' src='/image/step1/part1/common/world-map-base.svg' />
                    <Link to='/econ-data/japan'>
                        <div className='world-map_japan_image' style={{ backgroundImage: 'url(/image/step1/part1/common/japan.svg)' }} ></div>
                    </Link>

                    <Link to='/econ-data/europe'>
                        <div className='world-map_europe_image' style={{ backgroundImage: 'url(/image/step1/part1/common/europe.svg)' }} ></div>
                    </Link>

                    <Link to='/econ-data/china'>
                        <div className='world-map_china_image' style={{ backgroundImage: 'url(/image/step1/part1/common/china.svg)' }} ></div>
                    </Link>

                    <Link to='/econ-data/usa'>
                        <div className='world-map_usa_image' style={{ backgroundImage: 'url(/image/step1/part1/common/usa.svg)' }} ></div>
                    </Link>

                    <Link to='/econ-data/korea'>
                        <div className='world-map_korea_image' style={{ backgroundImage: 'url(/image/step1/part1/common/korea.svg)' }} ></div>
                    </Link>
                </div>
            </div>
        </>
    )
}