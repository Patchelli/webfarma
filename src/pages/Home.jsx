import React from "react";
import Intro from "../Components/Intro/Intro";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Products/Product";
import Services from "../Components/Services/Services";
import Work from "../Components/Work/Work";


const Home = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Services />
            <Work />
            <Product />
        </>
    )
}

export default Home;