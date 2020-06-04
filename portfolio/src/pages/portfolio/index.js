import React from "react";
import Card from "../../components/cards/index";
import Header from "../../components/header/header"
import API from "../../utils/github";

function Cards() {
    return (
        API.map(data => (
            <Card
                key={data.id}
                name={data.name}
                live={data.live}
                source={data.source}
                image={data.image}
            />
        ))
    )
}



const Portfolio = () => {
    return (
        <div>
            <div className="container">
                <Header
                    header="My Work"
                />
                <div className="row">
                    <Cards />
                </div>
            </div>


        </div>

    )
}

export default Portfolio;