// 상점 관련 api 설정
import { apiSlice } from "../../app/api/apiSlice";

export const mallApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        cartProducts: builder.query({
            query: () => '/mall/cart',
            providesTags:(result, error, arg)=>{
                return [{type:'Mall'}]
            },
        }),
        cartProductsCreate: builder.mutation({
            query: (id) => ({
                url: `/mall/cart-products/${id}/`,
                method: 'POST',
                body: {'id':id}
            }),
            invalidatesTags:['Mall'],
        }),
        cartProductsDelete: builder.mutation({
            // 수강바구니 전체 삭제(when 결제 성공 후)
            query: () => ({
                url: 'mall/cartproducts/delete/',
                method:'DELETE',
                credentials: 'include',
            }),
            invalidatesTags:['Mall']
        }),
        cartProductDelete: builder.mutation({
            // 수강바구니 한 줄 삭제
            query: (id) => ({
                url: `/mall/cart/${id}`,
                method: 'DELETE',
                credentials:'include',
            }),
            invalidatesTags:['Mall']
        }),
        orderNew: builder.query({
            // 수강바구니에 담긴 것들 결제하기
            query: () => '/mall/orders/new',
            providesTags:(result, error, arg)=>{
                return [{type:'Mall'}]
            },
        }),
        ordersPaymentList: builder.query({
            // 결제 내역 조회(Order 단위 : 한 시점의 Order 속 세부내역은 보여주지 않고, 전기간 Order들을 보여줌 )
            // cf) 세부내역은 orderPaymentDetail에서 조회가능
            query: () => '/mall/orders',
            providesTags:(result, error, arg)=>{
                return [{type:'Mall'}]
            },
        })
    }),
})


export const { 
    useCartProductsQuery, 
    useCartProductsCreateMutation, 
    useCartProductDeleteMutation,
    useCartProductsDeleteMutation,
    useOrderNewQuery,
    useOrdersPaymentListQuery,
} = mallApiSlice