import React from "react";

const Footer = (props) => {
    return (
        <div className="footer-copyright">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Footer