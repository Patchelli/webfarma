import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css';
import { Link } from 'react-scroll'
import Experience from "../Experience/Experience";
import Product from "../Products/Product";
import { Link as Links } from 'react-router-dom';
const Navbar = () => {

    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    WebFarma
                </div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to={'Navbar'} smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to={'Services'} smooth={true} activeClass='activeClass'>
                            <li>Serviços</li>
                        </Link>
                        <Link spy={true} to={'Experience'} smooth={true} activeClass='activeClass'>
                            <li>Experiencias</li>
                        </Link>
                        <Link spy={true} to={'Product'} smooth={true} activeClass='activeClass'>
                            <li>Produtos</li>
                        </Link>
                        <Link spy={true} to={'Testimonial'} smooth={true} activeClass='activeClass'>
                            <li>Testemunhos</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    <Link spy={true} to={'Contact'} smooth={true} activeClass='activeClass'>Contato</Link>
                </button>
            </div>
        </div >
    )
}


export default Navbar;

