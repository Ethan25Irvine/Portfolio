import React, { Component } from "react";
import "./style.css"

const Home = () => {
    return (
    <div className="container text-center text-light mt-5 pt-5">
            <h1>Hello I'm <span className="name">Ethan Irvine</span></h1>
            <h1>I am a Fullstack Web Developer</h1>
            <button type="button" class="btn">View Portfolio</button>       
    </div>
        
    )
}

export default Home;