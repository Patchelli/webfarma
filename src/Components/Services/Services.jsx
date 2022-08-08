import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Card from "../Card/Card";
import './Services.css';
import Motoboy from '../../img/entregador.png'
import Seringa from '../../img/syringe.png'
import Celular from '../../img/online-store.png'
import { motion } from 'framer-motion';
const Services = () => {

    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id="Services">
            {/* Left */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Qualidade</span>
                <span>Serviços</span>
                <span style={{ color: darkMode ? "white" : "" }}>
                    Lorem ipsum dolor sit amet consectetur anihil voluptas rem corrupti laborum expedita, ab hic ipsa facere quos?
                    <br />
                    Lorem ipsum dolor sit amet
                </span>
                <button className="button s-button">Download</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} ></div>
            </div>
            {/* right */}
            <div className="cards">
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25%' }}
                    transition={transition}
                >
                    <Card
                        imagem={Motoboy}
                        heading={"Entrega"}
                        detail={"Entrega Rápida,Qualidade e Empatia"}

                    />
                </motion.div>

                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        imagem={Seringa}
                        heading={"Medicamentos"}
                        detail={"Genéricos,Tarjas e Maniupulação"}

                    />
                </motion.div>

                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        imagem={Celular}
                        heading={"Loja Online"}
                        detail={"Aceitamos Cartões,Parcelamos e Convenio"}

                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

            </div>
        </div >
    )
}

export default Services;