import React from "react";
import "./StillCard.css";

// const winner = "./check-mark-1292787_1280.png";

const StillCard = props => (
  <div
    className={
      props.reset
        ? "card z-depth-5 small animated shake"
        : "card z-depth-5 small"
    }
    style={props.hidden? {opacity: 0} : null}
  >
    <button
      style={{
        borderRadius: "10px !important",
        padding: 0,
        backgroundColor: "transparent"
      }}
      onClick={
        props.hidden || props.disableAll
          ? () => null
          : e => props.cardClickHandler(e, props.id)
      }
    >
      <div
        className="card-image"
        style={{ maxHeight: "100%", borderRadius: "10px !important"}}
      >
        <img
          className="stillImg"
          style={{
            borderRadius: "10px !important",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "50%",
            backgroundClip: "content-box",
            height: "210px"
          }}
          alt={props.name}
          src={process.env.PUBLIC_URL + props.image}
        />
      </div>
    </button>
  </div>
);

export default StillCard;
