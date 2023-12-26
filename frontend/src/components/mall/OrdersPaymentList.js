import React from 'react'
import { useOrdersPaymentListQuery } from './mallApiSlice'
import './OrdersPaymentList.css'

export default function OrdersPaymentList() {
    const {
        data,
        isLoading,
        isSuccess,
        refetch,
    } = useOrdersPaymentListQuery()

    console.log('ordersList', data);

    return (
        <>
            <div id='orders-wrapper'>
                {data?.orders_list && data.orders_list.map((order) => (
                    <div className='order-wrapper'>
                        <div>
                            주문일시 : {order.created_at.substring(0, 10)}
                        </div>
                        <div>
                            주문 일련번호 : {order.uid}
                        </div>
                        <div>
                            주문 상태 : {order.status}
                        </div>
                        <hr/>
                        <div>
                            <div>
                                주문 세부내역 조회
                            </div>
                            <div>
                                {order.product_set && order.product_set.map((product) => (
                                    <div>
                                        <div>
                                            상품명 : {product.name}, 상품가격 : {product.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}