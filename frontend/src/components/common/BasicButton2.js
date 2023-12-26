import React from 'react';
import './BasicButton2.css'

export default function BasicButton2({text}) {

    return (
        <button className="Btn2">
            <span>
                {text}
            </span>
        </button>
    );
}