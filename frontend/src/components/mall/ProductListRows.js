import React, { useState, useEffect } from 'react'
import { useAxios } from '../../services/api';
import { Space, List, Avatar, Tag } from 'antd'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import './ProductListRows.css'
import ProductListFormat from './ProductListFormat';

export default function ProductListRows() {

    const [productList, setProductList] = useState([])
    const [{ data: originProductList, loading, error }, refetch] = useAxios({
        url: "/mall/products",
    });

    useEffect(() => {
        setProductList(originProductList);
    }, [originProductList])
    

    return (
        <>
            <div id='list-wrapper'>
                <ProductListFormat originProductList={originProductList}  />
            </div>
        </>
    )
}