// ex) 로그인 밑줄 버튼
import React from 'react'
import './BasicButton4.css'

export default function BasicButton4({text, onClick}) {


    return (
        <button onClick={onClick} className="cta">
            <span className="hover-underline-animation">
                {text}
            </span>
        </button>
    )
}