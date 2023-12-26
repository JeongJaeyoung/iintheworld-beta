import React from 'react';
import Header1 from "../../components/layout/Header1";
import Header2 from "../../components/layout/Header2";
import LectureList from '../../components/mall/LectureList';
import Body from '../../components/layout/Body';
import AppLayoutStep1 from '../../components/layout/AppLayoutStep1'

export default function LectureListPage() {


    return (
        <>
            <AppLayoutStep1>
                <LectureList />
            </AppLayoutStep1>
        </>
    )
}