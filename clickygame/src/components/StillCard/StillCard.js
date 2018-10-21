import React from "react";
import "./StillCard.css";

const winner = "./check-mark-1292787_1280.png"

const StillCard = props => (
  <div className={props.hidden ? "card small hidden" : "card small"}>
    <div className="card-image" style={{maxHeight: "100%"}}>
      <img style={{width: "auto", backgroundSize: "cover",backgroundPosition: "50%",backgroundClip: "content-box",height: "210px"}} alt={props.name} src={props.hidden ? winner : props.image} />
    </div>
    <button onClick={(e) => props.cardClickHandler(e,props.id)} className={props.hidden ? "btn-small remove disabled" : "btn-small remove"}>
      𝘅
    </button>
  </div>
);

export default StillCard;
