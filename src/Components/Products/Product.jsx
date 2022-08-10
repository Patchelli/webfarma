import React, { useEffect, useState, useContext } from "react";
import { themeContext } from "../../Context";
import './Product.css';
import { getProducts } from "../../Api/getAll";
import Doctor from '../../img/remedio.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const Product = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [produtos, setProducts] = useState([]);

    async function req() {
        const resp = await getProducts()
        setProducts(resp)
    }

    useEffect(() => {
        req()
    }, [])

    return (

        <div className="products" id="Product">
            <span style={{ color: darkMode ? "white" : "" }}>Produtos Recentes</span>
            <span>Produtos</span>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                className="products-slider"
                slidesPerView={3}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}

            >
                {produtos.map((post) => {
                    return (
                        <SwiperSlide key={post.id}>
                            <img width={100} src={Doctor} alt="" />
                            <h4>{post.name}</h4>
                            <h5>R$ {post.value}</h5>
                            <h5>Quantidade : {post.quantity}</h5>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    )


}

export default Product;