import React, { useEffect } from 'react'
import { axiosInstance } from '../../services/api'
import { useParams } from 'react-router-dom'
import { asyncRetrieveAnnouncement } from './announcementsSlice'
import { useDispatch, useSelector } from 'react-redux';
import { getAnnouncement } from './announcementsSlice'
import './AnnouncementDetail.css'


export default function AnnouncementDetail() {
    const { announcementId } = useParams()
    const dispatch = useDispatch()
    const announcement = useSelector(getAnnouncement);

    useEffect(() => {
        dispatch(asyncRetrieveAnnouncement(announcementId));
    }, [dispatch])

    return (
        <>
            <div id='announcement-detail-wrapper'>
                <div id='announcement-detail-card'>
                    <div id='announcement-detail-header'>
                        <div id='announcement-detail-title'>
                            {/* 제목 */}
                            {announcement && announcement.title}
                        </div>
                    </div>
                    <div id='announcement-detail-content'>
                        {/* 내용 */}
                        {announcement && announcement.content}
                    </div>
                </div>
            </div>
        </>
    )
}