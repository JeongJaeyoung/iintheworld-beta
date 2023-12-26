import React from 'react'
import Header1 from "../../components/layout/Header1";
import Header2 from "../../components/layout/Header2";
import Body from '../../components/layout/Body';
import Board from '../../components/board/Board'

export default function BoardPage({type}) {
    return (
        <>
            <div className="applayout-header">
                <Header1 subtitle={'돈으로부터의 독립'} />
                <Header2 type={'step1'} />
            </div>
            <Body>
                <Board type={type}/>
            </Body>
        </>
    )
}