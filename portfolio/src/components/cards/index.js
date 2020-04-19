import React from "react";
import Button from "../button/hrefBtn";
import "./style.css";

function Card(props) {
    console.log(props);
    return (
        <div className="col-lg-4 mb-5 text-center">
            <div className="card bg-dark ">
                <img src={props.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-light">{props.name}</h5>
                    <Button
                        name="Live"
                        link={props.live}
                    />
                    <Button
                        name="Source"
                        link={props.source}
                    />
                </div>
            </div>
        </div>
    )

}

export default Card;