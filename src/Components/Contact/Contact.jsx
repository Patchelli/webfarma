import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Contact.css'

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="contact-form" id="Contact">
            <div className="w-lef">
                <div className="awesome">
                    <span style={{ color: darkMode ? "white" : "" }}>Entre em contato</span>
                    <span>Contate-me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} >
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form action="">
                    <input type="text" name="user_name" className="user" placeholder="nome" />
                    <input type="email" name="user_email" className="user" placeholder="email" />
                    <textarea type="text" name="message" className="user" placeholder="Mensagem" />
                    <input type="submit" value="Enviar" className="button" />
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>

    )
}

export default Contact;