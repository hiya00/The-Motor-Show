import React from "react";
import "./MotorCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCartArrowDown} />;

const MotorCard = (props) => {
  const { brand, email, phone, image, model, rent } = props.motor;
  return (
    <div className="card-full-container">
      <div className="card">
        <img className="card-image" src={image} alt="" />
      </div>
      <div className="card-text">
        <h5>
          <small>Brand Name: {brand}</small>
        </h5>
        <p>
          <small>Model: {model}</small>
        </p>
        <p>
          <small>Phone: {phone}</small>
        </p>
        <p>
          <small>Email: {email}</small>
        </p>
        <p>
          <small>Rent: ${rent}/Day</small>
        </p>
        <br />
        <button
          className="hire-btn"
          onClick={() => props.handleAddCard(props.motor)}
        >
          {" "}
          {element} HIRE NOW{" "}
        </button>
      </div>
    </div>
  );
};

export default MotorCard;
