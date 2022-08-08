import React, { useContext } from "react";
import { themeContext } from "../../Context";
import S from './Work.css'
import Thom from '../../img/thom.jpg'
import Inara from '../../img/inara.jpg'
import Resilia from '../../img/resilia.png'
import Ebanx from '../../img/ebanx.png'
import Kassi from '../../img/kassi.jpg'
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

const Work = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works" id="Experience">
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Trabalhos</span>
                <span>Clientes</span>
                <span style={{ color: darkMode ? "white" : "" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </span>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button s-button">Veja</button>
                </Link>
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
            </div>
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle"
                >
                    <div className="w-secCircle">
                        <img src={Ebanx} alt="Ebanx" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Inara} alt="Inara" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Kassi} alt="Kassi" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Thom} alt="Thom" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Resilia} alt="Resilia" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Work