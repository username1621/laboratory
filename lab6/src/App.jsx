import "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './index.css'
// eslint-disable-next-line react/prop-types
const ProductSlider = ({ products }) => {
    return (<Swiper spaceBetween={5} slidesPerView={4}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}>
            {/* eslint-disable-next-line react/prop-types */}
            {products.map((product, index) => (
                <SwiperSlide key={index}>
                    <div className="card">
                        <div className="card__top">
                            <a href={product.link} className="card__image">
                                <img src={product.image} alt={product.title}/>
                            </a>
                            <div className="card__label">{product.discount}</div>
                        </div>
                        <div className="card__bottom">
                            <div className="card__prices">
                                <p className="cardprice cardprice--discount">Со
                                    скидкой: {product.discountedPrice} р.</p>
                                <p className="cardprice cardprice--common">Без скидки: {product.originalPrice} р.</p>
                            </div>
                            <a href={product.link} className="card__title">{product.title}</a>
                            <button className="card__add">В корзину</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    )
};
export default ProductSlider;
