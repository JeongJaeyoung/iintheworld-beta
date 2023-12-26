import React, { useState, useEffect } from 'react'
import Card1 from '../common/Card1'
import { useAxios } from '../../services/api';
import { Divider, Space, Tag, Avatar, List } from 'antd';
import './ProductListCards.css'


export default function ProductListCards() {

  const [productList, setProductList] = useState([])
  const [{ data: originProductList, loading, error }, refetch] = useAxios({
    url: "/mall/products",
  });

  useEffect(() => {
    setProductList(originProductList);
  }, [originProductList])


  return (
    <>
      <div id='product-list-cards-wrapper'>
        {productList && productList.map((product, index) => (
          <Card1
            linkUrl={`/mall/products/${product.name_en}`}
            width={'180px'}
            height={'250px'}
            margin={'40px'}
            title={product.name}
            imgUrl={product.photo}
            tag={
              product.tag_names.map(tag => (
                <Tag color="#323232">
                  {tag}
                </Tag>
              ))
            }
          />
        ))}
      </div>
    </>
  )
}