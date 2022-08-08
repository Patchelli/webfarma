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
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            name: "Thom"
        },
        {
            img: Kassi,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            name: "Kassi"
        },
        {
            img: Inara,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            name: "Inara"
        }

    ];

    return (
        <div className="t-wrapper" id="testimonial">
            <div className="t-heading">
                <span>Testemunhos dos nossos </span>
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