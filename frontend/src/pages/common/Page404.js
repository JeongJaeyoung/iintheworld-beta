import React from 'react';
import './Page404.css'


export default function Page404() {

    return (
        <>
            <div id='page404-wrapper'>
                <div>
                    <div id='page404-title'>
                        페이지가 존재하지 않습니다.
                    </div>
                    <div id='page404-content'>
                        <img id='page404-image' src='/image/common/page-not-found.png' />
                    </div>
                </div>
            </div>
        </>
    )
}