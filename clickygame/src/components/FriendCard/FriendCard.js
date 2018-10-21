import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className={props.hidden ? "card small hidden" : "card small"}>
    <div className="card-image" style={{maxHeight: "80%"}}>
      <img style={{width: "100%", backgroundSize: "cover",backgroundPosition: "50%",backgroundClip: "content-box"}} alt={props.name} src={props.image} />
    </div>
    <div className="card-content" style={{maxHeight: "40%"}}>
      <ul style={{textAlign:"center"}}>
        <li>
          <strong>{props.name}</strong>
        </li>
        {/* <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li> */}
      </ul>
    </div>
    <button onClick={(e) => props.cardClickHandler(e,props.id)} className={props.disabled || props.hidden ? "disabled btn-small remove" : "btn-small remove"}>
      𝘅
    </button>
  </div>
);

export default FriendCard;
