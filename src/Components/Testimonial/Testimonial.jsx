import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Thom from '../../img/thom.jpg'
import Kassi from '../../img/kassi.jpg'
import Inara from '../../img/inara.jpg'

const Testimonial = () => {
    const clients = [
        {
            img: Thom,
            review:
                "Entrega super rapida",
            name: "Thom"
        },
        {
            img: Kassi,
            review:
                "Peço doralgina todos os dias, após programar em JAVA!",
            name: "Kassi"
        },
        {
            img: Inara,
            review:
                "Comprei um sedativo para o baby Inara, dorme 3 dias seguidos agora. Obrigado WebFarma",
            name: "Inara"
        }

    ];

    return (
        <div className="t-wrapper" id="Testimonial">
            <div className="t-heading">
                <span>Depoimentos dos nossos </span>
                <span>Clientes</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <span>{client.name}</span>
                                <img width={300} height={300} src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Testimonial;