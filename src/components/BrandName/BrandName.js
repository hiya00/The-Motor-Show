import React from "react";

const SelectName = (props) => {
  const { brand } = props.car;
  return (
    <div>
      <h3>{brand}</h3>
    </div>
  );
};

export default SelectName;
