import React from "react";
import './Intro.css'
import Remedio from '../../img/remedio.png'
import Saude from '../../img/saude.png'
import Doctor from '../../img/doctor.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Estetoscopio from '../../img/este.png'
import RemedioFloating from '../../img/medicine.png'
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
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Doctor} alt="" />
                <div style={{top : '-4%',left : '68%'}}>
                    <FloatingDiv image={Estetoscopio} text1='Saude' text2='Vida'/>
                </div>
                <div style={{top :'18rem' ,left : '0rem'}}>
                    <FloatingDiv image={RemedioFloating} text1='Melhores' text2='Preços'/>
                </div>
                <div className="blur" style={{background : "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background:"#C1F5FF",top :"17rem",width:"21rem",height:"11rem"}}></div>
            </div>
        </div>
    )
}

export default Intro;