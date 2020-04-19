import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Button(props) {
    return (
        <Link to={props.link}>
            <button type="button" className="btn">
                {props.name}
            </button>
        </Link>
    );
}

export default Button;
