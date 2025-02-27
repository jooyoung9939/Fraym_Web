import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import data from '../data.js';
import prevButton from '../assets/images/button_prev.png'
import nextButton from '../assets/images/button_next.png'

const Main = () => {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <div className="main-text-container">
                <p className="main-text">
                    세상에 <span className="font-bold">하나</span>뿐인 디자이너 의류,</p>
                <p className="main-text">특별한 순간 당신만을 위한 선택.</p>
                <p className="main-text-2">Fashion Rises As You Move.</p>
                <p className="main-text-3">대여 | 보관 | 구매</p>
            </div>
            <div className="swiper-container">
                <p className="swiper-header">FRAYM THREADS.</p>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{clickable: true}}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="slide-item" onClick={() => navigate(`/product/${item.id}`)}>
                                <img src={item.main_img} alt={item.sale_name}/>
                                <p className="slide-text">[{item.official_name}] -</p>
                                <p className="slide-text">{item.sale_name}</p>
                                <div className="button-container">
                                    <p className="detail-button">상품 구매</p>
                                    <p className="detail-button">대여 요청</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img src={prevButton} alt={prevButton} className="custom-prev"/>
                <img src={nextButton} alt={nextButton} className="custom-next"/>
            </div>
            <div className="main-text-container-2">
                <div className="main-text-container-3">
                    <p className="main-text-6">FRAYM의</p>
                    <p className="main-text-6">모든 제품은 -</p>
                    <div className="main-text-container-4">
                        <p className="main-text-7">디자이너라면?</p>
                        <p className="main-text-7">작품 등록 및 보관 신청:</p>
                        <p className="main-text-7"><span className="font-bold">010-5045-1523</span></p>
                    </div>
                </div>
                <div className="main-text-container-5">
                    <p className="main-text-4">FRAYM의 모든 제품은 세상에 하나뿐인, 신진 디자이너들의 창의적이고 희소성 있는 작품입니다.</p>
                    <p className="main-text-4">이제, 당신의 방식대로 선택하세요.</p>
                    <p className="main-text-5">
                        필요한 순간만 즐기고 싶다면 <span className="font-bold">대여,</span></p>
                    <p className="main-text-5">
                        직접 소장하고 싶다면 <span className="font-bold">제작</span> 요청을 통해 주문할 수 있습니다.</p>
                    <p className="main-text-4"><span className="font-bold">단순한 옷이 아닌, 하나뿐인 작품.</span></p>
                    <p className="main-text-5">FRAYM의 제품은 대량 생산된 패스트패션이 아닙니다.</p>
                    <p className="main-text-5">디자이너의 ONE OF A KIND 시제품, 또는 한정 제작된 디자인 의류로 구성되어 있습니다.</p>
                    <p className="main-text-5">평범함을 벗어나 자신만의 스타일을 찾는 여러분에게 최고의 선택이 될 것입니다.</p>
                    <p className="main-text-4"><span className="font-bold">지속 가능한 패션, 새로운 소비 방식.</span></p>
                    <p className="main-text-5">여러 디자이너 시제품이나 샘플 의류는 종종 사용되지 못한 채 폐기됩니다.</p>
                    <p className="main-text-5">FRAYM은 이러한 제품을 필요로 하는 고객과 연결하며,</p>
                    <p className="main-text-5">대여 및 제작 요청을 통해 환경적으로 지속 가능한 패션 소비를 제안합니다.</p>
                    <p className="main-text-4">FRAYM 제품은 단순한 옷이 아닙니다. 특별한 스토리와 가치를 담은 작품입니다.</p>
                    <p className="main-text-4"><span
                        className="font-bold">지금, 패션을 통해 디자이너와 연결되고, 세상에 하나뿐인 특별함을 경험해보세요.</span></p>
                </div>
            </div>

        </div>
    )
}

export default Main