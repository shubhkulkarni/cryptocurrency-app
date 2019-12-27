import React, { useState } from "react";
import "./currencies.css";
import Dropdown from "../../components/dropdown";
import Mybutton from "../../components/mybutton";

const Currencies = () => {
  const [value, setValue] = useState("");
  const changeHandler = event => {
    setValue(event.target.value);
  };

  const currencyMenu = ["USD", "INR", "GBP", "JPY"];
  const cryptoMenu = ["Bitcoin", "Ethereum"];

  return (
    <div className="currencies">
      <Dropdown
        changeHandler={changeHandler}
        value={value}
        items={currencyMenu}
        label="Select currency"
      />
      <Dropdown
        changeHandler={changeHandler}
        value={value}
        items={cryptoMenu}
        label="Select cryptocurrency"
      />
      <Mybutton name="get rates" />
    </div>
  );
};

export default Currencies;
