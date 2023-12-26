import React from 'react';
import "./BodyWrapper.css";


export default function BodyWrapper({children}) {
    return(
        <>
            <div  id='layout-body-wrapper'>
                {children}
            </div>
        </>
    );
}