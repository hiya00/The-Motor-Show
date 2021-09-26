import React from "react";
import SelectName from "../BrandName/BrandName";
import "./Total.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
const moenyIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />;
const carIcon = <FontAwesomeIcon icon={faCar} />;

const Total = (props) => {
  console.log(props.name);
  const { card } = props;
  let total = 0;
  for (const car of card) {
    total = total + car.rent;
    console.log(total);
  }
  return (
    <div className="total-css">
      <h3>
        {" "}
        {carIcon}
        Numbers of Cars: {props.card.length}{" "}
      </h3>{" "}
      <hr />
      <hr />
      <h3>
        {" "}
        {moenyIcon}
        TOTAL COST: $ {total}{" "}
      </h3>{" "}
      <hr />
      <hr />
      <div className="brand-name">
        <th>
          <h2> Brand Name: </h2> <hr />{" "}
          {card.map((car) => (
            <SelectName car={car}> </SelectName>
          ))}{" "}
        </th>{" "}
      </div>{" "}
    </div>
  );
};

export default Total;
