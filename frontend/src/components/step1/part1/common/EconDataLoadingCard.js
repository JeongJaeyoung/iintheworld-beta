import React from 'react'
import Spinner from '../../../common/Spinner'
import './EconDataLoadingCard.css'

export default function EconDataLoadingCard() {
  return (
    <>
        <div className='econ-data-loading-card-wrapper'>
            <Spinner/>
        </div>
    </>
  )
}