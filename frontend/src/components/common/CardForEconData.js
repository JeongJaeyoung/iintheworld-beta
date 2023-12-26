import React from 'react'
import './CardForEconData.css'

export default function CardForEconData({children, source}) {
    return (
        <>
            <div className="card-for-econ">
                <div className='card-title'>
                    
                </div>
                <div className='card-content'>
                    {children}
                </div>
                <div className='card-footer'>
                    출처 : {source}
                </div>
            </div>
        </>
    )
}