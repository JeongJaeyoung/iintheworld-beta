import React from 'react';
import './RowsOrCards.css';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

export default function RowsOrCards({ displayMode, setDisplayMode }) {

    const toggleToRows = () => {
        setDisplayMode('rows');
    }

    const toggleToCards = () => {
        setDisplayMode('cards');
    }

    return (
        <div id='rows-or-cards-wrapper'>
            <div id='rows-or-cards-outline'>
                <div id='rows-or-cards-first-icon' onClick={toggleToRows}>
                    <UnorderedListOutlined />
                </div>
                <div onClick={toggleToCards}>
                    <AppstoreOutlined />
                </div>
            </div>
        </div>
    )
}