import React from 'react'
import S from './Work.css'
import Thom from '../../img/thom.jpg'
import Inara from '../../img/inara.jpg'
import Resilia from '../../img/resilia.png'
import Ebanx from '../../img/ebanx.png'
import Kassi from '../../img/kassi.jpg'

const Work = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Trabalhos</span>
            <span>Clientes</span>
            <spane>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </spane>
            <button className="button s-button">Veja</button>
            <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
        </div>
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img  src={Ebanx} alt="Ebanx" />
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
            </div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work