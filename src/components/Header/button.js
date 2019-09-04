import React from "react"
import classnames from "classnames";

const Button = (props) => {
    return(
        <button className={classnames("btn", "btn-small", "black", props.classes)} style={props.styles} onClick={(e)=> props.startOver(e)}>{props.children}</button>
    )
}

export default Button