import React from 'react'
import { Button, ConfigProvider } from 'antd'
import Book1 from './BookCube';
import Book2 from './BookCube2';
import './Step1Book.css'

export default function Step1Book() {
    return (
        <>
            <div id='page0_chapter2_book_flex'>
                <div className='book_individually_wrapper'>
                    {/* <Book1 /> */}
                    <div style={{width:'200px'}}>
                        <img style={{width:"200px", border:'1px solid #323232'}} src='/image/step1/home/book_iintheworld_front.png' />
                    </div>
                    <div className='page0_book_explanation_div'>
                        <div>
                            <div className='page0_book_explanation_title'>내가 사는 세상1</div>
                            <div className='page0_book_explanation_subtitle'>
                                돈이 굴리는 세상<br />
                            </div>
                            <div className='page0_book_explanation_content'>
                                '세상에서 벌어지는 돈의 흐름'을<br />
                                이해하기 위한<br />
                                경제 입문서
                            </div>

                            {window.innerWidth < 500 ? <br /> : <><br /><br /></>}
                            <a href='http://www.yes24.com/Product/Goods/115796274'>
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: '#fafafa',

                                        },
                                    }}
                                >
                                    <Button type='primary' style={{ color: '#323232', fontWeight: '700', fontSize: '13px', border: '1.7px solid #323232', padding: '0 6px' }}>
                                        YES24
                                    </Button>
                                </ConfigProvider>

                            </a>&nbsp;&nbsp;&nbsp;
                            {/* {window.innerWidth < 500 ? <br/> : null} */}
                            <a href='https://product.kyobobook.co.kr/detail/S000200396527'>
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: '#fafafa',
                                        },
                                    }}
                                >
                                    <Button type='primary' style={{ color: '#323232', fontWeight: '700', fontSize: '13px', border: '1.7px solid #323232', padding: '0 6px' }}>
                                        교보문고
                                    </Button>
                                </ConfigProvider>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}