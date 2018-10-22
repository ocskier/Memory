import React from "react";

import Button from "./button";

const StyleSheet = {
    header: {
        padding: "1rem 6rem 0",
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
                <p className="brand-logo center" style={{fontSize: "4rem"}}>{props.children}<br></br><Button startOver={props.startOver}>Start Again</Button></p>
                <ul className="right">
                    <li style={{display: "grid",paddingRight:"10px"}}>Score<button className="btn-floating btn-large blue">{props.score}</button></li>
                    <li style={{display: "grid",paddingLeft:"10px"}}>Wrong<button className="btn-floating btn-large red">{props.wrong}</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Jumbotron