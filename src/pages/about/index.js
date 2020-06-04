import React from "react";
import Header from "../../components/header/header";
import "./style.css"

const About = () => {
    return (
        <div>
            <div className="container">
                <Header
                    header="About Me"
                />
                <div className="mt-5 text-light">
                    <p>
                        I'm a Fullstack Web Developer who is always trying to learn more.
                        I have recently completed the University of Arizona Coding Bootcamp with over 240 hours of coding under my belt.
                        As of right now I am looking for jobs here in Arizona but if the oportunity comes I would not be against going somewhere else.
                    </p>
                    <p>I have become proficient in the following:</p>
                    <ul className="skills">
                        <li>React.js </li>
                        <li>Node.js</li>
                        <li>Express.js </li>
                        <li>NoSQL </li>
                        <li>MySQL </li>
                        <li>Javascript </li>
                        <li>HTML5/CSS3 </li>
                        <li>Bootstrap </li>
                        <li>AJAX </li>
                        <li>Git</li>
                        <li>RESTful API’s</li>
                        <li>jQuery</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;