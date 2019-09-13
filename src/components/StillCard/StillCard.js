import React from "react";
import "./StillCard.css";

const winner = "./check-mark-1292787_1280.png"

const StillCard = props => (
  <div style={{background: `url(${props.hidden ? winner : props.image}) no-repeat center center fixed`}} className={props.reset ? "card z-depth-5 small animated shake" : "card z-depth-5 small"} >
    <button style={{padding: 0,backgroundColor: "transparent"}} onClick={props.hidden || props.disableAll ? () => null : (e) => props.cardClickHandler(e,props.id)}>
      <div className="card-image" style={{maxHeight: "100%"}} >
        {/* <img className="stillImg" style={{width: "100%", backgroundSize: "cover",backgroundPosition: "50%",backgroundClip: "content-box",height: "210px"}} alt={props.name} src={props.hidden ? winner : props.image} /> */}
      </div>
    </button>
  </div>
);

export default StillCard;

