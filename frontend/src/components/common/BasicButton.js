import React from 'react';
import './BasicButton.css'

export default function BasicButton({imageUrl, width, position, top, left}) {

    const buttonImageStyle = {
        width: width + 'px',
        cursor: 'pointer',
        // 위치 조정하려면 position:relatve, top, left를 props로 넘겨주면 됨
        position: position,
        top: top + 'px',
        left: left + 'px',
    };

    return (
        <button className="Btn">
            <img className='button-image' style={buttonImageStyle} src={imageUrl} alt='social-login-button' />
        </button>
    );
}