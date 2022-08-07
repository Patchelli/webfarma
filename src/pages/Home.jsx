import React from "react";
import Intro from "../Components/Intro/Intro";
import Navbar from "../Components/Navbar/Navbar";
import Services from "../Components/Services/Services";


const Home = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Services />
        </>
    )
}

export default Home;