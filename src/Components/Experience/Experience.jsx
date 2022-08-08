import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (

        <div className="experience" id='experience'>
            <div className="achievement">
                <div className="circle">8+</div>
                <span style={{ color: darkMode ? "white" : "" }} >Anos </span>
                <span>Experiência</span>
            </div>
            <div className="achievement">
                <div className="circle" >1000+</div>
                <span style={{ color: darkMode ? "white" : "" }} >Entregas </span>
                <span>Completas</span>
            </div>
            <div className="achievement">
                <div className="circle" >5+</div>
                <span style={{ color: darkMode ? "white" : "" }} >Empresas </span>
                <span>Parceiras</span>
            </div>
        </div>
    );
};

export default Experience;