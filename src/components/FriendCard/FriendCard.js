import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div
    className={
      props.matched
        ? "card small animated heartBeat"
        : props.allDisabled
        ? "card small animated flash"
        : "card small animated flipInY"
    }
  >
    <div
      className="card-image"
      style={{ borderRadius: "10px !important", maxHeight: "100%" }}
    >
      <img
        className="friendImg"
        style={{
          width: "100%",
          maxHeight: "280px",
          paddingTop: "40px",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          backgroundClip: "content-box",
          borderRadius: "10px !important"
        }}
        alt={props.name}
        src={process.env.PUBLIC_URL + props.image}
      />
      <span
        className="card-title black-text"
        style={{
          top: 0,
          borderRadius: "10px !important",
          padding: "12px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {props.name}
      </span>
    </div>
  </div>
);

export default FriendCard;
