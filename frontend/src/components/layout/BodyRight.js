import React from 'react';
import "./BodyRight.css";


export default function BodyRight({children}) {
    return(
        <>
            <div  id='layout_right_sidebar'>
                {children}
            </div>
        </>
    );
}