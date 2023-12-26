import React from 'react'
import './ProfileContentPurchasedProducts.css'
import { Link } from 'react-router-dom'

export default function ProfileContentPurchasedProducts({profile, hasCourse}) {
    return (
        <div>
            {hasCourse ? (
                <>
                    <div id='profile-purhcased-product-wrapper'>
                        {profile && profile.purchased_products.map((purchased_product) => (
                            purchased_product.ordered_products.map((product, index) => (
                                <>
                                    <Link to={`/classroom/${product.product_name_en}/0`}>
                                        <div className='purchased-product-div' key={index}>
                                            <div>
                                                {product.product_name}
                                            </div>
                                            <div>
                                                {/* <img src={product.product_photo} alt='product-photo' /> */}
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            ))
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div id='profile-classroom-empty-lecture'>
                        보유 중인 강좌가 없습니다.
                    </div>
                </>
            )}
        </div>
    )
}
