import React from "react"

const Button = (props) => {
    return(
        <button className="btn btn-small black" onClick={(e)=> props.startOver(e)}>{props.children}</button>
    )
}

export default Button