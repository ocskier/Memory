import React from "react";
import classnames from "classnames";
import "./Title.css";

const Title = props => <h1 className={classnames("title",props.className)}>{props.children}</h1>;

export default Title;
