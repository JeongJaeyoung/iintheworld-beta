// 책, 강의를 리스트 형태로 보여줄 때

import React from 'react'
import { Link } from 'react-router-dom';
import './ProductListFormat.css'

export default function ProductListFormat({ originProductList }) {
    console.log(originProductList)

    return (
        <>
            <div className='product-list-format-wrapper'>
                {originProductList && originProductList.map((product) => (
                    <div className='product-list-format-item-wrapper'>
                        <div className='product-list-format-item-wrapper-left'>
                            <div className='product-list-format-item-wrapper-top'>
                                <div className='product-list-format-item-title'>
                                    <Link to={`/mall/lectures/${product.name_en}`}>
                                        {product.name}
                                    </Link>
                                </div>
                                <div className='product-list-format-item-description'>
                                    {product.description}<br/>
                                    {product.description2}<br/>
                                    {product.description3}
                                </div>
                                {/* <div className='product-list-format-item-content'>
                                    가격 : {product.content}
                                </div>     */}
                            </div>
                            <div className='product-list-format-item-wrapper-bottom'>
                                {product.tag_names && product.tag_names.map((tag) => (
                                    // 책에는 Tag에 링크가 있음. 강의에는 Tag에 링크가 없음. 이에 따라 전자는 책으로, 후자는 강의로 분기
                                    tag.providerLink && tag.provider ? (
                                        <Link to={tag.providerLink}>
                                            <div className='product-list-format-item-tag'>
                                                {tag.provider}
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className='product-list-format-item-tag'>
                                            {tag}
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className='product-list-format-item-wrapper-right'>
                            <img className='product-list-format-item-image' src={product.photo} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}