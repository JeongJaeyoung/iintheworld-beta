import React from 'react';
import BookList from '../../components/mall/BookList';
import AppLayoutStep1 from '../../components/layout/AppLayoutStep1'

export default function MallList() {


    return (
        <>
            <AppLayoutStep1>
                <BookList />
            </AppLayoutStep1>
        </>
    )
}