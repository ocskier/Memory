import React from "react"

const Button = (props) => {
    return(
        <button className="btn btn-small black" onClick={props.startOver}>{props.children}</button>
    )
}

export default Button