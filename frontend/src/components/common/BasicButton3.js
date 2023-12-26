// 배경 검정색 버튼

import React from 'react'
import './BasicButton3.css'

export default function BasicButton3({text, onClick}) {


    return (
        <button onClick={onClick} className='basebutton3'>
            {text}
        </button>
    )
}