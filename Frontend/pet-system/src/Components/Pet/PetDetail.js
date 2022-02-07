import React from "react";
import "./PetDetail.css";

const PetDetail = (props) => {
  return (
    <li className="pet-details">
      <div className="detail-name">
        <span>{props.detail}:</span> {props.text}
      </div>
    </li>
  );
};

export default PetDetail;
