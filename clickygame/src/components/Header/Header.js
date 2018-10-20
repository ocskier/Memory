import React from "react";

import Button from "./button";

const StyleSheet = {
    header: {
        padding: "1.2rem 2rem",
        background:"silver",
        textAlign: "center",
        marginBottom: 0,
        // display: "-webkit-inline-box",
        // width: "100%"
    }
}

const Jumbotron = (props) => {
    return (
        <nav style={{height: "160px"}}>
            <div className="nav-wrapper" style={StyleSheet.header}>
                <p className="brand-logo center">{props.children}<br></br><Button startOver={props.startOver}>Start Again</Button></p>
                <ul className="right" style={{display: "grid"}}>
                    <li>Score</li>
                    <li><button className="btn-floating btn-large blue">{props.score}</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Jumbotron