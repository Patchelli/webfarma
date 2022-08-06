import React from "react";
import './Intro.css'
import Remedio from '../../img/remedio.png'
import Saude from '../../img/saude.png'
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>
                        Bem Vindo a
                    </span>
                    <span>WebFarma!</span>
                    <span>
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
            <div className="i-right">
                A melhor farmacia Online
            </div>
        </div>
    )
}

export default Intro;