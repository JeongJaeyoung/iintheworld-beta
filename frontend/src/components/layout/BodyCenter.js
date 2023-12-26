import React from 'react';
import "./BodyCenter.css";
import EconDataFloatButton from '../step1/part1/common/EconDataFloatButton';


export default function BodyCenter({children, country}) {
    return(
        <>
            <div id='layout_main_content'>
                {children}
            </div>
            <EconDataFloatButton country={country} />
        </>
    );
}