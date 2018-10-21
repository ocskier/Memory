import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card small">
    <div className="card-image" style={{maxHeight: "100%"}}>
      <img style={{width: "100%",maxHeight: "280px",paddingTop: "40px",backgroundSize: "cover",backgroundPosition: "50%",backgroundClip: "content-box"}} alt={props.name} src={props.image} />
      <span className="card-title black-text" style={{top: 0,padding: "12px",width: "100%",textAlign: "center",fontSize:"1rem"}}>{props.name}</span>
    </div>
  </div>
);

export default FriendCard;
