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
        <div className="product-detail-main-container">
            <div
                style={{
                    width: "90vw",
                    height: "0.1vw",
                    backgroundColor: "#E6E6E6",
                    marginTop: "5vh",
                    marginBottom: "2vh",
                }}
            ></div>
            <div className="product-detail-container">
                <div className="product-detail-img-container">
                    <img src={product.main_img} alt={product.sale_name}/>
                </div>
                <div className="product-detail-explanation-container">
                    <p className="product-detail-text-title">[{product.official_name}] - {product.sale_name}</p>
                    <div className="product-detail-explanation-sub-container">
                        <div className="product-detail-explanation-sub-container-1">
                            <p className="product-detail-sub-text-1"><span className="font-bold">즉시 대여가</span></p>
                            <p className="product-detail-sub-text-2">{product.rental_price}</p>
                        </div>
                        <div
                            style={{
                                width: "0.1vw",
                                backgroundColor: "black",
                            }}
                        ></div>
                        <div className="product-detail-explanation-sub-container-1">
                            <p className="product-detail-sub-text-1"><span className="font-bold">즉시 구매가</span></p>
                            <p className="product-detail-sub-text-2">{product.sale_price}</p>
                        </div>
                        <div
                            style={{
                                width: "0.1vw",
                                backgroundColor: "black",
                            }}
                        ></div>
                        <div className="product-detail-explanation-sub-container-1">
                            <p className="product-detail-sub-text-1"><span className="font-bold">색상</span></p>
                            <p className="product-detail-sub-text-2">{product.color}</p>
                        </div>
                        <div
                            style={{
                                width: "0.1vw",
                                backgroundColor: "black",
                            }}
                        ></div>
                        <div className="product-detail-explanation-sub-container-1">
                            <p className="product-detail-sub-text-1"><span className="font-bold">디자이너</span></p>
                            <p className="product-detail-sub-text-2">{product.designer}</p>
                        </div>
                    </div>
                    <p className="product-detail-text-1"><span className="font-bold">디자이너 KKI:</span></p>
                    <p className="product-detail-text-2">{product.designer_explanation}</p>
                    <p className="product-detail-text-1"><span className="font-bold">제품 설명:</span></p>
                    <p className="product-detail-text-2">{product.product_explanation}</p>
                    <p className="product-detail-text-1"><span className="font-bold">사이즈 정보:</span></p>
                    <p className="product-detail-text-2">{product.size}</p>
                    <div className="product-detail-button">
                        <p className="product-detail-button-text">즉시 대여</p>
                        <div
                            style={{
                                width: "0.05vw",
                                height: "4vw",
                                backgroundColor: "white",
                                marginLeft: "2vw"
                            }}
                        ></div>
                        <div className="product-detail-button-sub">
                            <p className="product-detail-button-text">즉시 대여가:</p>
                            <p className="product-detail-button-text">{product.rental_price}</p>
                        </div>
                    </div>
                    <div className="product-detail-button">
                        <p className="product-detail-button-text">즉시 구매</p>
                        <div
                            style={{
                                width: "0.05vw",
                                height: "4vw",
                                backgroundColor: "white",
                                marginLeft: "2vw"
                            }}
                        ></div>
                        <div className="product-detail-button-sub">
                            <p className="product-detail-button-text">즉시 구매가:</p>
                            <p className="product-detail-button-text">{product.sale_price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
