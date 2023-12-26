import React from 'react'
import './Card1.css'
import { Link } from 'react-router-dom'

export default function Card1({ linkUrl, imgUrl, title, content, tag, width, height, margin, padding, disabled }) {
    const isDisabled = !!disabled; // 불리언 값으로 변환

    return (
        <>
            {isDisabled ? (
                // 비활성화 상태
                // <Link to={linkUrl}>
                    <div className="card1-disabled" style={{ width, height, margin, padding }}>
                        <div>
                            <img className='card1-img' src={imgUrl} />
                        </div>
                        <div className='card1-title'>
                            {title}
                        </div>
                        <div className='card1-content'>
                            {content}
                        </div>
                        <div className='card1-tag'>
                            {tag}
                        </div>
                    </div>
                // </Link>
            ) : (
                // 활성화 상태
                <Link to={linkUrl}> {/* ex) http://127.0.0.1:3000/mall/products/1 */}
                    <div className="card1" style={{ width, height, margin, padding }}>
                        <div>
                            <img className='card1-img' src={imgUrl} />
                        </div>
                        <div className='card1-title'>
                            {title}
                        </div>
                        <div className='card1-content'>
                            {content}
                        </div>
                        <div className='card1-tag'>
                            {tag}
                        </div>
                    </div>
                </Link>
            )
            }
        </>
    )
}