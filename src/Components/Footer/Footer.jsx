import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Settings from "@iconscout/react-unicons/icons/uil-setting";
import { Link as Links } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>webfarma@gmail.com</span>
                <div className="f-icons">
                    <Insta color="white" size={"3rem"} />
                    <Facebook color="white" size={"3rem"} />
                    <Links target="_blank" to='/Login'><Settings color="white" size={"3rem"} /></Links>

                </div>
            </div>
        </div>
    );
};

export default Footer;