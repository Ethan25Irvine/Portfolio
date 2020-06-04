import React from "react";
import Button from "../../components/button/button"
import "./style.css"

const Home = () => {
    return (
        <div>
        <div className="container text-light mt-5 pt-5">
            <div className="text-center mb-5">
                <h1>Hello I'm <span className="name">Ethan Irvine</span></h1>
                <h1>I'm a Fullstack Web Developer</h1>
                <h2>who focuses on <span className="name">Mobile First Design</span></h2>
            </div>
            <div className="text-center">
                <Button 
                    name = "Portfolio"
                    link = "/portfolio"
                />  
            </div>
            
        </div>
        </div>
        

    )
}

export default Home;