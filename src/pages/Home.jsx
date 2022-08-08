import React from "react";
import Experience from "../Components/Experience/Experience";
import Intro from "../Components/Intro/Intro";
import Navbar from "../Components/Navbar/Navbar";
import Services from "../Components/Services/Services";


const Home = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Services />
            <Experience />
        </>
    )
}

export default Home;