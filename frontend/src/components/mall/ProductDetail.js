import react from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from "../../services/api";
import BodyWrapper from '../layout/BodyWrapper';
import BodyCenter from '../layout/BodyCenter'
import BodyRight from '../layout/BodyRight';
import BasicButton3 from '../common/BasicButton3';
import './ProductDetail.css';
import { useCartProductsCreateMutation } from './mallApiSlice';
import { Alert, ConfigProvider, notification, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import { SmileOutlined, ShoppingCartOutlined } from '@ant-design/icons';


export default function ProductDetail() {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [fieldErrorMessage, setFieldErrorMessage] = useState('');
  const [cartProductsCreate, { isLoading }] = useCartProductsCreateMutation();
  const [successAlert, setSuccessAlert] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [{ data: originProduct, loading, error }, refetch] = useAxios({
    url: "/mall/products/" + productName,
  });

  useEffect(() => {
    setProduct(originProduct);
  }, [originProduct]);

  const handleCartProductsCreate = async () => {
    try {
      await cartProductsCreate(product.id).unwrap();
      notification.open({
        message: '장바구니에 잘 담겼습니다.',
        icon:<ShoppingCartOutlined style={{color:'black'}} />,
        placement: 'top',
    })
      setSuccessAlert(true);
    } catch (error) {
      // FIXME: 에러 멘트 처리
      setFieldErrorMessage(error?.data?.non_field_errors[0]);
      setModalOpen(true)
    }
  };


  return (
    <>
      {successAlert && (
        <ConfigProvider
          theme={{
            token: {
              colorSuccess: '#ccc',
              colorSuccessBorder: '#d3d3d3',
              lineWidth: 2,
            }
          }}
        >
       </ConfigProvider>
      )}

      {window.innerWidth < 500 ? (
        // 모바일
        <>
          <div style={{ padding: '0px 10px' }}>
            <div id='product-image-wrapper'>
              {product && (
                <img src={product.photo} id='product-image' alt='product_image' />
              )}
            </div>
            <div id='product-detail-product-name'>
              {product && product.name}
            </div>
            <div id='product-detail-price'>
                  💳 {product && product.price}원
            </div>
            {/* FIXME: 총 수강시간 작성  */}
            <hr/>
            {product &&
              <>
                {/* <div id='product-title'>
                  {product.id}
                  {product.name}
                </div> */}
                {/* <div id='product-description'>
                  {product.description}
                </div> */}
                <div id='product-description-wrapper'>
                  <ProductDescription productName={product.name_en} />
                </div>
              </>
            }
          </div>
          <div id='step1-part1-lecture-cart-button-mobile-wrapper'>
            <div style={{ padding: '20px' }} >
              <BasicButton3 onClick={handleCartProductsCreate} text='수강바구니 담기' />
            </div>
          </div>
        </>
      ) : (
        // 데스크탑
        <BodyWrapper>
          <BodyCenter>
            <div id='product-image-wrapper'>
              {product && (
                <img src={product.photo} id='product-image' alt='product_image' />
              )}
            </div>
            <div id='product-detail-product-name'>
              {product && product.name}
            </div>
            <hr/>

            {product &&
              <>
                {/* <div id='product-title'>
                    {product.id}
                    {product.name}
                  </div> */}
                {/* <div id='product-description'>
                    {product.description}
                  </div> */}
                <div id='product-description-wrapper'>
                  <ProductDescription productName={product.name_en} />
                </div>
              </>
            }
          </BodyCenter >
          <BodyRight>
            {product &&
              <>
                <div id='product-detail-price'>
                  가격 : {product.price}원
                </div>
              </>
            }
            <BasicButton3 onClick={handleCartProductsCreate} text='수강바구니 담기' />
            {/* <BasicButton3 text='바로 구매하기' /> */}
          </BodyRight>
        </BodyWrapper >
      )}

      {/* 추가적 알림창 */}
      <Modal
        title='🚫 수강바구니에 담다가 문제가 생겼어요.'
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer='' // 취소, 확인 버튼 제거
      >
        {fieldErrorMessage}
      </Modal>
    </>
  )
}