import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.js';

const ProductDetail = () => {
    const { id } = useParams(); // 🔹 URL에서 id 가져오기
    const product = data.find(item => item.id.toString() === id); // 🔹 해당 ID의 상품 찾기

    if (!product) {
        return <p>해당 상품을 찾을 수 없습니다.</p>;
    }

    return (
        <div className="product-detail-container">
            <h2>{product.official_name} - {product.sale_name}</h2>
            <p>디자이너 {product.designer}:</p>
            <p>{product.designer_explanation}</p>
            <p>제품 설명:</p>
            <p>{product.product_explanation}</p>
            <p>사이즈 정보:</p>
            <p>{product.size}</p>
        </div>
    );
};

export default ProductDetail;
