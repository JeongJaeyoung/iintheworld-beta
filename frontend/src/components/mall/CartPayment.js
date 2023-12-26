import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    useCartProductsQuery,
    useCartProductDeleteMutation,
    useCartProductsDeleteMutation,
    useOrderNewQuery,
} from './mallApiSlice';
import './CartPayment.css';
import Spinner from '../common/Spinner';
import { axiosInstance } from '../../services/api';
import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons'


export default function CartPayment() {
    const navigate = useNavigate();
    const [cartProductDelete, { isLoading: cartProductDeleteIsLoading }] = useCartProductDeleteMutation();
    const [cartProductsDelete, { isLoading: cartProductsDeleteIsLoading }] = useCartProductsDeleteMutation();
    const [isPaymentClicked, setIsPaymentClicked] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0)
    const django_access_token = useSelector((state) => state.auth.django_access_token)

    const {
        // 수강바구니 내역 불러오기
        data: cartProducts,
        isLoading: isCartProductsLoading,
        isSuccess: isCartSuccess,
        isError: isCartError,
        error: cartError,
        refetch: cartRefetch,
    } = useCartProductsQuery();

    useEffect(() => {
        if (cartProducts && cartProducts.length > 0) {
            // 장바구니에 제품이 있을 때만 계산 수행
            const amount = cartProducts.reduce((acc, cart) => acc + cart.product_price, 0);
            setTotalAmount(amount);
        } else {
            // 장바구니가 비어있을 때는 0으로 초기화
            setTotalAmount(0);
        }
    }, [cartProducts]);

    const removeCartItem = async (id) => {
        // 수강바구니 한줄 삭제 : 표 왼쪽의 X 버튼
        try {
            await cartProductDelete(id);
            // 삭제 요청 후 추가 작업 수행
        } catch (error) {
            console.log(error);
        }
    }

    const {
        // 수강바구니 전체를 하나의 주문으로 생성
        data: orderNew,
        isLoading: isOrderNewLoading,
        isSuccess: isOrderNewSuccess,
    } = useOrderNewQuery(undefined, { skip: !isPaymentClicked });

    const handlePayment = async () => {
        // 주문 결제 진행
        try {
            setIsPaymentClicked(true);
            // setIsPaymentClicked(false);
        } catch (error) {
            console.log(error);
        }
    };

    async function callback(response) {
        // 결제(아임포트) 콜백 함수 정의
        const {
            success,
            merchant_uid,
            error_msg,
        } = response;

        console.log('아임포트 response', response);

        if (success) {
            setIsPaymentClicked(false); // 이걸 해줘야 carProductsDelete에서 CartPayment 컴포넌트가 재랜더링되면서 useOrderNewQuery가 또 다시 날아가지 않음
            await cartProductsDelete();  // 결제가 성공적으로 완료된 후, 수강바구니 내역 전체 삭제
            await axiosInstance.get( // 결제 체크를 통해 구매내역을 업데이트
                `/mall/orders/${orderNew.payment_props.order_pk}/check/${orderNew.payment_props.payment_pk}`,
                { headers: { Authorization: `Bearer ${django_access_token}` }}
            );
            notification.open({
                message: '결제가 성공적으로 처리되었습니다.',
                icon: <SmileOutlined style={{ color: 'black' }} />,
                placement: 'top',
            })
            navigate('/');
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    }

    useEffect(() => {
        // backend로부터 주문 데이터를 받아오는 순간, 포트원으로 결제 요청
        if (isOrderNewSuccess) {
            const { IMP } = window;
            console.log(orderNew);
            const atIndex = orderNew.payment_props.buyer_email.indexOf("@"); // "@" 문자의 인덱스를 찾음
            let username;
            if (atIndex !== -1) {
                username = orderNew.payment_props.buyer_email.slice(0, atIndex); // "@" 앞까지의 문자열을 추출
            } else {
                console.log("유효한 이메일 주소가 아닙니다.");
            }

            const data = {
                pg: 'html5_inicis',
                pay_method: orderNew.payment_props.pay_method,
                merchant_uid: orderNew.payment_props.merchant_uid,
                amount: orderNew.payment_props.amount,
                name: orderNew.payment_props.name,
                buyer_name: username,
                buyer_email: orderNew.payment_props.buyer_email,
            }
            console.log(data);
            IMP.init(process.env.REACT_APP_PORTONE_SHOP_ID);
            IMP.request_pay(data, callback); // 포트원으로 결제 요청
        }
    }, [isOrderNewSuccess]);



    return (
        <>
            <div id='cart-wrapper'>
                <div id='cart-first-div'>
                    {isOrderNewLoading ? (
                        <>
                            <Spinner/>
                        </>
                    ) : orderNew ? (
                        <>
                            {orderNew.msg}
                        </>
                    ) : null}
                    <div className='cart-payment-table-wrapper'>
                        {cartProducts && cartProducts.length > 0 ? (
                            <table className="cart-payment-table">
                                <tbody id='cart-payment-table-tbody'>
                                    <tr>
                                        <th></th>
                                        <th>수강명</th>
                                        <th>가격</th>
                                    </tr>
                                    {cartProducts.map(cart =>
                                        <tr key={cart.id}>
                                            <td className='x-button-wrapper'>
                                                <button onClick={() => removeCartItem(cart.id)} className="x-button"></button>
                                            </td>
                                            <td>{cart.product_name}</td>
                                            <td>{cart.product_price}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        ) : (
                            <div id='cart-product-no-data'>
                                수강바구니가 비었습니다.
                            </div>
                        )}
                    </div>
                </div>
                <div id='cart-second-div'>
                    <div className='cart-payment-table-wrapper'>
                        <div className='cartpayment-right'>
                            총 결제 금액 : {totalAmount}
                        </div>
                        {/* <button className='cartpayment-button' onClick={refetchcart}>
                            수강 바구니 새로고침
                        </button> */}
                        <button className='cartpayment-button' onClick={handlePayment}>
                            결제하기
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
