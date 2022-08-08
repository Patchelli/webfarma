import React from "react";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Experience from "../Components/Experience/Experience";
import Intro from "../Components/Intro/Intro";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Products/Product";
import Services from "../Components/Services/Services";
import Testimonial from "../Components/Testimonial/Testimonial";
import Work from "../Components/Work/Work";



const Home = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            <Work />
            <Product />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;