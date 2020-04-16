import React from "react";
import "./style.css"

function Button(props) {
    return (
        <a target="_blank" href={props.link} rel="noopener noreferrer">
            <button type="button" className="btn">
                {props.name}
            </button>
        </a>
    );
}

export default Button;