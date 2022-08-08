import React from "react";
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-form">
            <div className="w-lef">
                <div className="awesome">
                    <span>Entre em contato</span>
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