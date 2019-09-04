import React from "react";

import Button from "./button";
import MyContext from "../Context"

import "./Header.css";

const StyleSheet = {
    header: {
        padding: "1rem 6rem 0",
        background:"silver",
        textAlign: "center",
        margin: "0 10px",
        display: "flex",
        flexDirection: "column",
        // display: "-webkit-inline-box",
        // width: "100%"
    }
}

const Header = () => (
    <MyContext.Consumer>
        {context => 
            <nav style={{height: "160px", backgroundColor:"silver"}}>
                <div className="nav-wrapper" style={StyleSheet.header}>
                    <div style={{display: "flex",justifyContent: "space-between"}}>
                        <ul className="left">
                            <li style={{display: "grid",paddingRight:"10px"}}>Low Score
                                <button className="btn-floating btn-large black scoreBtn">
                                    {context.myGameState.lowScore}
                                </button>
                            </li>
                        </ul>
                        <p className="brand-logo center" style={{fontSize: "4rem"}}>Memory</p>
                        <ul className="right">
                            <li style={{display: "grid",paddingRight:"10px"}}>Score
                                <button className="btn-floating btn-large blue scoreBtn">
                                    {context.myGameState.score}
                                </button>
                            </li>
                            <li style={{display: "grid",paddingLeft:"10px"}}>Wrong
                                <button className="btn-floating btn-large red scoreBtn">
                                    {context.myGameState.wrong}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <Button classes="resetBtn" startOver={context.startOver}>Start Again</Button>
                </div>
            </nav>
        }
    </MyContext.Consumer>
)


export default Header;