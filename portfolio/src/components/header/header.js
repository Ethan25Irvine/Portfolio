import React from "react";
import "./style.css"

function Header(props) {
    
    return (
        <div className="Container border-bottom text-center">
            <h1 className="text-light">{props.header}</h1>
        </div>
    );
}

export default Header;