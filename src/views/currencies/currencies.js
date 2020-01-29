import React from "react";
import "./currencies.css";
import Dropdown from "../../components/dropdown";

const Currencies = ({ currValue, currHandler, countries }) => {
  return (
    <div className="currencies">
      <Dropdown
        changeHandler={currHandler}
        value={currValue}
        items={countries}
        label="Currency"
      />
    </div>
  );
};

export default Currencies;
