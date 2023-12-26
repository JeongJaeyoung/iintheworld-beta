import React from 'react';
import { useState, useEffect } from 'react';
import './LectureList.css'
import RowsOrCards from '../common/RowsOrCards';
import ProductListRows from './ProductListRows';
import ProductListCards from './ProductListCards';


export default function LectureList() {
    const [displayMode, setDisplayMode] = useState('rows');

    return (
        <>
            <RowsOrCards displayMode={displayMode} setDisplayMode={setDisplayMode} />

            {displayMode === 'rows' ? (
                <ProductListRows />
            ) : (
                <ProductListCards />
            )}
        </>
    );
}