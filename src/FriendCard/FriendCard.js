import React from "react";
import "./FriendCard.css";

const FriendCard = props => (


  <div className="card" value={props.id} onClick={props.handleClick} name={props.name} id={props.id}>
    <div className="img-container">
      <img alt={props.name} name={props.id} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
