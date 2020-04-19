import React from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Header
                    header="About Me"
                />
                <div className="mt-5 text-light">
                    Don't really know what to put here yet, might just list the stuff I am proficient in and call it a day.
                </div>
            </div>


        </div>

    )
}

export default About;