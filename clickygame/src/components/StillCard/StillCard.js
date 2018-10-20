import React from "react";
import "./StillCard.css";

const StillCard = props => (
  <div className="card small">
    <div className="card-image" style={{maxHeight: "100%"}}>
      <img style={{width: "auto", backgroundSize: "cover",backgroundPosition: "50%",backgroundClip: "content-box"}} alt={props.name} src={props.image} />
    </div>
    <button onClick={(e) => props.cardClickHandler(e,props.id)} className="btn-small remove">
      𝘅
    </button>
  </div>
);

export default StillCard;
