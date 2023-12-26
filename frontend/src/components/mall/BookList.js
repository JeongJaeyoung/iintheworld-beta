import React from 'react';
import './BookList.css'
import { List } from 'antd'
import { Link } from 'react-router-dom';
import ProductListFormat from './ProductListFormat';


export default function BookList() {
    const data = [
        {
            name: '내가 사는 세상 1',
            description: '모두를 위한 경제 입문서',
            description2: '직관적인 경제 모델을 \'이론편\'에서',
            description3: '이를 활용해 실제 사건들을 \'현실편\'에서 살펴봐요',
            price: 5000,
            photo: '/image/step1/home/book_iintheworld_front.png',
            photoAlt: 'iintheworld1 image',
            tag_names: [
                {
                    provider: '살짝 들춰보기',
                    providerLink: '/step1/part1/book/summary',
                },
                {
                    provider: 'YES24',
                    providerLink: 'https://www.yes24.com/Product/Goods/115796274',
                },
                {
                    provider: '교보문고',
                    providerLink: 'https://product.kyobobook.co.kr/detail/S000200396527',
                }
            ],
        },
        // {
            
        // }
    ];

    return (
        <>
            <div id='list-wrapper'>
                <ProductListFormat originProductList={data} />
            </div>
        </>
    );
}