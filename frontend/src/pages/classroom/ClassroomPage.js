import React from 'react'
import AppLayoutStep1 from '../../components/layout/AppLayoutStep1'
import Classroom from '../../components/classroom/Classroom'
import BodyWrapper from '../../components/layout/BodyWrapper'
import BodyLeft from '../../components/layout/BodyLeft'
import BodyCenter from '../../components/layout/BodyCenter'
import Step1LeftBar from '../../components/step1/home/Step1LeftBar'
import ClassroomFloatButton from '../../components/classroom/ClassroomFloatButton'
import { useParams } from 'react-router-dom';

export default function ClassroomPage() {
    const { productName, courseNum } = useParams();

    return (
        <>
            <AppLayoutStep1>
                <BodyWrapper>
                    <BodyLeft>
                        <Step1LeftBar productName={productName} />
                    </BodyLeft>
                    <BodyCenter>
                        <Classroom productName={productName} courseNum={courseNum} />
                    </BodyCenter>
                    <ClassroomFloatButton lectureName={productName} />
                </BodyWrapper>
            </AppLayoutStep1>
        </>
    )
}