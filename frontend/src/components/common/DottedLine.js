import React, { useRef, useEffect, useState } from 'react';
import './DottedLine.css'

export default function DottedLine({ length = '100%', width = '10px' }) {
    const wrapperRef = useRef(null);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        if (wrapperRef.current) {
            const wrapperWidth = wrapperRef.current.offsetWidth;
            console.log(wrapperWidth);
            const convertedLength = (parseInt(length) / 100) * wrapperWidth + 'px';
            wrapperRef.current.style.width = convertedLength;
            const numDots = Math.floor(parseInt(convertedLength) / parseInt(width));
            const dots = [];
        
            for (let i = 0; i < numDots; i++) {
                dots.push(<div className='dot' key={i}></div>);
            }
            setDots(dots)
        }
    }, []);

    return (
        <div className='dotted-line-wrapper' ref={wrapperRef}>
            {dots}
        </div>
    );
}
