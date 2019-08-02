import React from "react";

const Footer = (props) => {
    return (
        <div className="footer-copyright" style={{height: "80px",position: "relative",background: "silver"}}>
            <div className="container" style={{position: "absolute",bottom: 0,left: "5%"}}>
                {props.children}
            </div>
        </div>
    )
}

export default Footer