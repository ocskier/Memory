import React from "react";

import Button from "./button";
import MyContext from "../Context"

import "./Header.css";

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

const Header = () => (
    <MyContext.Consumer>
        {context => 
            <nav style={{height: "160px"}}>
                <div className="nav-wrapper" style={StyleSheet.header}>
                    <ul className="left">
                        <li style={{display: "grid",paddingRight:"10px"}}>Low Score<button className="btn-floating btn-large black">{context.myGameState.lowScore}</button></li>
                    </ul>
                    <p className="brand-logo center" style={{fontSize: "4rem"}}>Memory<br></br><Button startOver={context.startOver}>Start Again</Button></p>
                    <ul className="right">
                        <li style={{display: "grid",paddingRight:"10px"}}>Score<button className="btn-floating btn-large blue">{context.myGameState.score}</button></li>
                        <li style={{display: "grid",paddingLeft:"10px"}}>Wrong<button className="btn-floating btn-large red">{context.myGameState.wrong}</button></li>
                    </ul>
                </div>
            </nav>
        }
    </MyContext.Consumer>
)


export default Header;