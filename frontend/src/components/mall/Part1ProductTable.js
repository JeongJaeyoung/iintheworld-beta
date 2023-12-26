import React from 'react';
import { useState, useEffect } from 'react';
import { useAxios } from "../../services/api";
import './Part1ProductTable.css'
import Card1 from '../common/Card1'


export default function Part1ProductTable() {
    const [productList, setProductList] = useState([])
    const [{ data: originProductList, loading, error }, refetch] = useAxios({
        url: "/mall/products/",
    });

    useEffect(() => {
        setProductList(originProductList);
    }, [originProductList])

    return (
        <>
            {productList && productList.length > 0 && (
                <>
                    <div id='part1-products-list-wrapper'>
                        <table id='part1-products-list'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>이론편</th>
                                    <th>현실편</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>입문편</td>
                                    <td>
                                        <Card1
                                            margin='30px auto'
                                            width='200px'
                                            height='auto'
                                            linkUrl={`/mall/lectures/${productList[0].name_en}`}
                                            imgUrl={productList[0].photo}
                                            title={
                                                <div>
                                                    경제 모형을 통한 직관적 이해
                                                </div>
                                            }
                                            tag={
                                                <>
                                                    <div style={{ textAlign: 'left', padding: '5px 7px', border: '1.5px solid #fff', backgroundColor: '#eceff1', display: 'inline', borderRadius: '3px', fontWeight: '700' }}>
                                                        #입문자
                                                    </div>
                                                </>
                                            }
                                            key={productList[0].id}
                                        />
                                    </td>
                                    <td>
                                        <Card1
                                            disabled={true}
                                            margin='30px auto'
                                            width='200px'
                                            height='auto'
                                            linkUrl={`/mall/lectures/${productList[1].name_en}`}
                                            imgUrl={productList[1].photo}
                                            title={
                                                <div>
                                                    이론편 모형을 통한 현실 설명
                                                </div>
                                            }
                                            key={productList[1].id}
                                            tag={
                                                <>
                                                    <div style={{ textAlign: 'left', padding: '5px 7px', border: '1.5px solid #fff', backgroundColor: '#eceff1', display: 'inline', borderRadius: '3px', fontWeight: '700' }}>
                                                        #입문자
                                                    </div>
                                                    <div style={{ textAlign: 'left', padding: '5px 7px', border: '1.5px solid #fff', backgroundColor: '#eceff1', display: 'inline', borderRadius: '3px', fontWeight: '700' }}>
                                                        #COMMING SOON
                                                    </div>
                                                </>
                                            }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>초급편</td>
                                    <td>
                                        <Card1
                                            disabled={true}
                                            margin='30px auto'
                                            width='200px'
                                            height='auto'
                                            linkUrl={`/mall/lectures/${productList[2].name_en}`}
                                            imgUrl={productList[2].photo}
                                            title={
                                                <div>
                                                    모형을 이용한 현실 이해
                                                </div>
                                            }
                                            tag={
                                                <>
                                                    <div style={{ textAlign: 'left', padding: '5px 7px', border: '1.5px solid #fff', backgroundColor: '#eceff1', display: 'inline', borderRadius: '3px', fontWeight: '700' }}>
                                                        #거시경제학
                                                    </div>
                                                    <div style={{ textAlign: 'left', padding: '5px 7px', border: '1.5px solid #fff', backgroundColor: '#eceff1', display: 'inline', borderRadius: '3px', fontWeight: '700' }}>
                                                        #COMMING SOON
                                                    </div>
                                                </>

                                            }
                                            key={productList[2].id}
                                        />
                                    </td>
                                    <td>
                                        <Card1
                                            disabled={true}
                                            margin='30px auto'
                                            width='200px'
                                            height='auto'
                                            linkUrl={`/mall/lectures/${productList[3].name_en}`}
                                            imgUrl={productList[3].photo}
                                            title={
                                                <div>
                                                    모형을 이용한 현실 분석
                                                </div>
                                            }
                                            tag={
                                                <>
                                                    <div style={{ textAlign: 'left', padding: '5px 7px', border: '1.5px solid #fff', backgroundColor: '#eceff1', display: 'inline', borderRadius: '3px', fontWeight: '700' }}>
                                                        #계량경제학
                                                    </div>
                                                    <div style={{ textAlign: 'left', padding: '5px 7px', border: '1.5px solid #fff', backgroundColor: '#eceff1', display: 'inline', borderRadius: '3px', fontWeight: '700' }}>
                                                        #COMMING SOON
                                                    </div>
                                                </>
                                            }
                                            key={productList[3].id}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    );
}