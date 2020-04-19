import React from "react";
import "./style.css";


const footer = () => {
    return (
        <div className="footer fixed-bottom">
            <footer>
                <div className="container">
                    <div className="row">
                        <h1 className="mr-3"><a className="link" href="https://github.com/Ethan25Irvine"><i className="fa fa-github"></i></a></h1>
                        <h1><a className="link" href="https://www.linkedin.com/in/ethan-irvine-438a41194/" ><i className="fa fa-linkedin"></i></a></h1> 
                        <h1><a className="link ml-3" href="mailto:ethan25irvine@gmail.com"><i className="fa fa-envelope"></i></a></h1>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default footer;