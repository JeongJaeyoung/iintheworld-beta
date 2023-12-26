import React from 'react';
import "./BodyLeft.css";


export default function BodyLeft({children}) {
    return(
        <>
            <div id='layout_left_sidebar'>
                {children}
            </div>
        </>
    );
}