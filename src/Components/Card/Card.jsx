import React from "react";
import './Card.css';

const Card = ({ imagem, heading, detail }) => {
    return (
        <div className="card" >
            <img width={100} src={imagem} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">SAIBA MAIS</button>
        </div >
    )
}

export default Card;