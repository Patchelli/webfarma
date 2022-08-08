import React, { useContext } from "react";
import './Intro.css'
import Remedio from '../../img/remedio.png'
import Saude from '../../img/saude.png'
import Doctor from '../../img/doctor.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Estetoscopio from '../../img/este.png'
import RemedioFloating from '../../img/medicine.png'
import { themeContext } from "../../Context";
import { motion } from 'framer-motion';
const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Bem Vindo a
                    </span>
                    <span style={{ color: darkMode ? "white" : "" }}>WebFarma!</span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nesciunt accusantium amet molestiae explicabo in porro laboriosam hic, itaque blanditiis, non ipsa distinctio vitae quidem sed possimus qui tempore tempora!
                    </span>
                </div>
                <button className="button i-button">
                    Produtos
                </button>
                <div className="i-icons">
                    <img height={200} src={Remedio} alt="" />
                    <img height={200} src={Saude} alt="" />
                </div>
            </div>
            <div className="i-right" >
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Doctor} alt="" />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}
                    className='floating-dv'
                >
                    <FloatingDiv image={Estetoscopio} text1='Saude' text2='Vida' />
                </motion.div>
                <motion.div
                    initial={{ top: '18rem', left: '9rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }}
                    className='floating-dv'
                >
                    <FloatingDiv image={RemedioFloating} text1='Melhores' text2='Preços' />
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem" }}></div>
            </div>
        </div>
    )
}

export default Intro;