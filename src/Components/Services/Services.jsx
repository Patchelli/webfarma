import React from "react";
import Card from "../Card/Card";
import './Services.css';
import Motoboy from '../../img/entregador.png'
import Seringa from '../../img/syringe.png'
import Celular from '../../img/online-store.png'

const Services = () => {
    return (
        <div className="services">
            {/* Left */}
            <div className="awesome">
                <span>Qualidade</span>
                <span>Serviços</span>
                <spane>
                    Lorem ipsum dolor sit amet consectetur anihil voluptas rem corrupti laborum expedita, ab hic ipsa facere quos?
                    <br />
                    Lorem ipsum dolor sit amet
                </spane>
                <button className="button s-button">Download</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} ></div>
            </div>
            {/* right */}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        imagem={Motoboy}
                        heading={"Entrega"}
                        detail={"Entrega Rápida,Qualidade e Empatia"}

                    />
                </div>

                <div style={{ top: "12rem", left: '-4rem' }}>
                    <Card
                        imagem={Seringa}
                        heading={"Medicamentos"}
                        detail={"Genéricos,Tarjas e Maniupulação"}

                    />
                </div>

                <div style={{ top: "19rem", left: '12rem' }}>
                    <Card
                        imagem={Celular}
                        heading={"Loja Online"}
                        detail={"Aceitamos Cartões,Parcelamos e Convenio"}

                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

            </div>
        </div>
    )
}

export default Services;