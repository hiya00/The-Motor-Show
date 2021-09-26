import React, { useEffect, useState } from "react";
import MotorCard from "../MotorCard/MotorCard";
import Total from "../Totals/Total";
import "./Motors.css";

const Motors = () => {
  const [motors, setMotors] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/f08d13d6-b667-46d3-83d1-60045e0922ad")
      .then((res) => res.json())
      .then((data) => setMotors(data));
  }, []);

  const handleAddCard = (car) => {
    const newCard = [...card, car];
    setCard(newCard);
    console.log(car.brand);
  };
  return (
    <div className="motors-container">
      <div className="card-container">
        {motors.map((motor) => (
          <MotorCard
            motor={motor}
            key={motor.id}
            handleAddCard={handleAddCard}
          ></MotorCard>
        ))}
      </div>
      <div className="total-calculate-container">
        <Total card={card} motor={MotorCard}></Total>
      </div>
    </div>
  );
};

export default Motors;
