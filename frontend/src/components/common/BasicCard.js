import React from 'react'
import './BasicCard.css'

export default function BasicCard({width, height, title, content, footer}) {
    const cardStyle = {
        width: width,
        height: height,
    };

    return (
        <>
            <div className="basic-card" style={cardStyle}>
                <div className='basic-card-title'>
                    {title}
                </div>
                <div className='basic-card-content'>
                    {content}
                </div>
                <div className='basic-card-footer'>
                    {footer}
                </div>
            </div>
        </>
    )
}